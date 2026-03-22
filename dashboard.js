// ══ DASHBOARD — جامعة جازان · نظام تقييم الأندية ══
let monthlyChart = null, progChart = null, beneChart = null;
let ringCharts = [];
let currentMonth = null;
const SHEET_URL = 'https://script.google.com/macros/s/AKfycby98QOik5H-jjb2f9UCGszxkaYGUZ36M1AtKRmD4Jk-rHY8sdPYsWY2nJKjs0LaTebY/exec';

// ✅ تصحيح التاريخ — يتعامل مع كل الصيغ
function parseDate(v) {
  if (!v) return '';
  const s = String(v).trim();
  // صيغة ISO مع T: 2026-03-22T00:00:00.000Z
  if (s.includes('T')) return s.split('T')[0];
  // صيغة YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  // صيغة DD-MM-YYYY مثل 08-09-2026
  if (/^\d{2}-\d{2}-\d{4}$/.test(s)) {
    const [d, m, y] = s.split('-');
    return `${y}-${m}-${d}`;
  }
  // صيغة MM/DD/YYYY
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(s)) {
    const [m, d, y] = s.split('/');
    return `${y}-${m.padStart(2,'0')}-${d.padStart(2,'0')}`;
  }
  // محاولة أخيرة
  try {
    const d = new Date(v);
    if (!isNaN(d)) return d.toISOString().split('T')[0];
  } catch(e) {}
  return s;
}

function getGrade(s) {
  if (s >= 90) return { label:'ممتاز',    cls:'rg-ex', color:'#1D9E75' };
  if (s >= 75) return { label:'جيد جداً', cls:'rg-vg', color:'#378ADD' };
  if (s >= 60) return { label:'متوسط',    cls:'rg-md', color:'#BA7517' };
  return             { label:'ضعيف',      cls:'rg-lw', color:'#E24B4A' };
}

async function fetchSheetData() {
  try {
    const res = await fetch(SHEET_URL);
    const raw = await res.json();
    if (!Array.isArray(raw) || raw.length < 2) return [];
    const headers = raw[0];
    return raw.slice(1).map((row, idx) => {
      const o = {};
      headers.forEach((h, i) => { o[h] = row[i]; });
      const male = Number(o.male) || 0, female = Number(o.female) || 0;
      return {
        id: idx+1, type: o.club_type||'', club: o.club_name||'',
        name: o.program_name||'', desc: o.program_desc||'',
        progType: o.program_type||'', nature: o.nature||'',
        date: parseDate(o.date),
        duration: o.duration||'', location: o.location||'',
        male, female, total: male+female,
        target: o.target||'', volunteer: o.volunteer_link||'',
        evidence: o.evidence_link||'', author: o.author||'',
        phone: o.phone||'', timestamp: o.timestamp||''
      };
    });
  } catch(e) { console.error('fetch error:', e); return []; }
}

async function updateDashboard() {
  const submissions = await fetchSheetData();

  const totalBene   = submissions.reduce((s,r) => s+r.total, 0);
  const uniqueClubs = new Set(submissions.map(r=>r.club).filter(Boolean)).size;
  const internal    = submissions.filter(r=>r.nature&&r.nature.includes('داخلي')).length;
  const external    = submissions.filter(r=>r.nature&&r.nature.includes('خارجي')).length;
  const totalMale   = submissions.reduce((s,r) => s+r.male, 0);
  const totalFemale = submissions.reduce((s,r) => s+r.female, 0);
  const anomalies   = submissions.filter(r=>r.total>300).length;

  const setText = (id, v) => { const el=document.getElementById(id); if(el) el.textContent=v; };

  setText('kTotal',    submissions.length.toLocaleString('ar-SA'));
  setText('kBene',     totalBene.toLocaleString('ar-SA'));
  setText('kClubs',    uniqueClubs.toLocaleString('ar-SA'));
  setText('kInternal', internal.toLocaleString('ar-SA'));
  setText('kExternal', external.toLocaleString('ar-SA'));
  setText('kc1',  totalBene.toLocaleString('ar-SA'));
  setText('kc1s', 'بحسب البيانات المرفوعة');
  setText('kc2',  submissions.length.toLocaleString('ar-SA'));
  setText('kc2s', 'إجمالي الأنشطة المرفوعة');
  setText('kc3',  submissions.length ? Math.round((internal/submissions.length)*100)+'%' : '0%');
  setText('kc3s', 'نسبة الأنشطة الداخلية');
  setText('kc4',  uniqueClubs.toLocaleString('ar-SA'));
  setText('kc4s', 'عدد الأندية المشاركة');
  setText('kc5',  anomalies.toLocaleString('ar-SA'));
  setText('kc5s', 'سجلات تحتاج مراجعة');
  setText('kc6',  totalMale.toLocaleString('ar-SA'));
  setText('kc6s', 'إجمالي الطلاب');
  setText('kc7',  totalFemale.toLocaleString('ar-SA'));
  setText('kc7s', 'إجمالي الطالبات');

  // الجدول
  const tbody = document.getElementById('subTableBody');
  if (tbody) {
    if (!submissions.length) {
      tbody.innerHTML = `<tr><td colspan="10"><div class="empty-state"><div class="icon">📋</div><p>لا توجد أنشطة مرفوعة بعد</p></div></td></tr>`;
    } else {
      const ordered = submissions.slice().reverse();
      const tCls = {'اجتماعي':'tb-social','ثقافي':'tb-cultural','تدريبي':'tb-training','رياضي':'tb-sports','صحي':'tb-health','ترفيهي':'tb-rec','غير ذلك':'tb-other'};
      tbody.innerHTML = ordered.map((r,i) => `
        <tr class="${i===0?'new-row':''}">
          <td style="font-weight:700;color:var(--text-light)">${ordered.length-i}</td>
          <td style="font-weight:700;font-size:12px">${r.club}</td>
          <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${r.name}">${r.name}</td>
          <td><span class="type-badge ${tCls[r.progType]||'tb-other'}">${r.progType}</span></td>
          <td style="font-size:11px">${r.nature&&r.nature.includes('داخلي')?'🏫 داخلي':'🌍 خارجي'}</td>
          <td style="font-size:11px">${r.date||'—'}</td>
          <td style="font-weight:700;color:var(--teal)">${r.male}</td>
          <td style="font-weight:700;color:var(--gold)">${r.female}</td>
          <td style="font-weight:800;font-size:14px">${r.total}</td>
          <td>${r.evidence?`<a href="${r.evidence}" target="_blank" style="color:var(--teal);font-size:11px;font-weight:700">↗</a>`:'—'}</td>
        </tr>`).join('');
    }
  }

  buildRankList(submissions);
  buildAlerts(submissions);
  buildMonthlyChart(submissions);
  buildProgChart(submissions);
  buildBeneChart(submissions);

  const forRings = currentMonth !== null
    ? submissions.filter(r => {
        if (!r.date) return false;
        const d = new Date(r.date+'T12:00:00');
        return !isNaN(d) && d.getMonth() === currentMonth;
      })
    : submissions;
  buildRingsFromSubmissions(forRings);
}

function buildRankList(submissions) {
  const list = document.getElementById('rankList');
  if (!list) return;
  if (!submissions.length) { list.innerHTML=`<div class="empty-state"><p>لا توجد بيانات بعد</p></div>`; return; }
  const clubStats = {};
  submissions.forEach(r => {
    if (!r.club) return;
    if (!clubStats[r.club]) clubStats[r.club] = { name:r.club, count:0, beneficiaries:0 };
    clubStats[r.club].count++;
    clubStats[r.club].beneficiaries += r.total||0;
  });
  const ranked = Object.values(clubStats)
    .map(c => ({ ...c, score: Math.min(100, Math.round((c.count*20)+(c.beneficiaries/10))) }))
    .sort((a,b) => b.score-a.score).slice(0,7);
  const numCls = ['rn1','rn2','rn3','rnn','rnn','rnn','rnn'];
  list.innerHTML = ranked.map((c,i) => {
    const g = getGrade(c.score);
    return `<div class="rank-item">
      <div class="rank-num ${numCls[i]}">${i+1}</div>
      <div class="rank-name">${c.name.replace('نادي ','')}</div>
      <div class="rank-bar-bg"><div class="rank-bar-fill" style="width:${c.score}%;background:${g.color}"></div></div>
      <div class="rank-pct">${c.score}%</div>
      <span class="rank-grade ${g.cls}">${g.label}</span>
    </div>`;
  }).join('');
}

function buildAlerts(submissions) {
  const list = document.getElementById('alertList');
  if (!list) return;
  const anom = submissions.filter(r=>r.total>300);
  list.innerHTML = anom.length
    ? anom.map(r=>`<div class="alert-item"><div class="alert-dot" style="background:#F09595"></div><div>${r.club} — مستفيدون مرتفعون: ${r.total}</div></div>`).join('')
    : `<div class="alert-item"><div class="alert-dot" style="background:#9FE1CB"></div><div>لا توجد تنبيهات غير اعتيادية</div></div>`;
}

function buildMonthlyChart(submissions) {
  if (monthlyChart) { monthlyChart.destroy(); monthlyChart=null; }
  const ctx = document.getElementById('chartMonthly');
  if (!ctx) return;
  const mn = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  const stats = {};
  submissions.forEach(r => {
    if (!r.date) return;
    const d = new Date(r.date+'T12:00:00');
    if (isNaN(d)) return;
    const lb = mn[d.getMonth()];
    if (!stats[lb]) stats[lb] = { male:0, female:0, count:0 };
    stats[lb].male   += r.male;
    stats[lb].female += r.female;
    stats[lb].count++;
  });
  const labels = Object.keys(stats);
  if (!labels.length) {
    ctx.parentElement.innerHTML=`<div class="no-chart">لا توجد بيانات شهرية بعد</div>`;
    return;
  }
  monthlyChart = new Chart(ctx, {
    type:'bar',
    data:{ labels, datasets:[
      { label:'شطر الطلاب',   data:labels.map(l=>stats[l].male),   backgroundColor:'#325958', borderRadius:4, barPercentage:.55 },
      { label:'شطر الطالبات', data:labels.map(l=>stats[l].female), backgroundColor:'#b79460', borderRadius:4, barPercentage:.55 },
      { label:'عدد الأنشطة',  data:labels.map(l=>stats[l].count),  backgroundColor:'#8aacb2', borderRadius:4, barPercentage:.55 }
    ]},
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ grid:{ display:false }, ticks:{ color:'#5a7a76', font:{ size:10, family:'Cairo' } } },
        y:{ grid:{ color:'#d8e8e6' }, ticks:{ color:'#5a7a76', font:{ size:10 } }, beginAtZero:true }
      }
    }
  });
}

function buildProgChart(submissions) {
  const wrap = document.getElementById('progChartWrap');
  if (!wrap) return;
  const map = {};
  submissions.forEach(r => {
    if (!r.club) return;
    const k = r.club.replace('نادي ','').replace('كلية ','');
    map[k] = (map[k]||0)+1;
  });
  const sorted = Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,8);
  if (!sorted.length) { wrap.innerHTML=`<div class="no-chart">لا توجد بيانات بعد</div>`; return; }
  const labels = sorted.map(e=>e[0]);
  const values = sorted.map(e=>e[1]);
  wrap.innerHTML = `<div style="position:relative;height:${Math.max(220,sorted.length*36+40)}px;"><canvas id="chartProg"></canvas></div>`;
  if (progChart) { progChart.destroy(); progChart=null; }
  progChart = new Chart(document.getElementById('chartProg'), {
    type:'bar',
    data:{ labels, datasets:[{ data:values, backgroundColor:values.map((_,i)=>i<3?'#1b393e':'#325958'), borderRadius:5 }] },
    options:{ indexAxis:'y', responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ beginAtZero:true, ticks:{ color:'#5a7a76', font:{ size:10 } }, grid:{ color:'#d8e8e6' } },
        y:{ ticks:{ color:'#5a7a76', font:{ size:10, family:'Cairo' } }, grid:{ display:false } }
      }
    }
  });
}

function buildBeneChart(submissions) {
  const wrap = document.getElementById('beneChartWrap');
  if (!wrap) return;
  const map = {};
  submissions.forEach(r => {
    if (!r.club) return;
    const k = r.club.replace('نادي ','').replace('كلية ','');
    map[k] = (map[k]||0)+r.total;
  });
  const sorted = Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,7);
  if (!sorted.length) { wrap.innerHTML=`<div class="no-chart">لا توجد بيانات بعد</div>`; return; }
  const labels = sorted.map(e=>e[0]);
  const values = sorted.map(e=>e[1]);
  wrap.innerHTML = `<div style="position:relative;height:220px;"><canvas id="chartBene"></canvas></div>`;
  if (beneChart) { beneChart.destroy(); beneChart=null; }
  beneChart = new Chart(document.getElementById('chartBene'), {
    type:'line',
    data:{ labels, datasets:[{ data:values, borderColor:'#b79460', backgroundColor:'rgba(183,148,96,0.08)', pointBackgroundColor:'#b79460', pointRadius:5, tension:.35, fill:true, borderWidth:2.5 }] },
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ ticks:{ color:'#5a7a76', font:{ size:10, family:'Cairo' } }, grid:{ display:false } },
        y:{ ticks:{ color:'#5a7a76', font:{ size:10 } }, grid:{ color:'#d8e8e6' }, beginAtZero:true }
      }
    }
  });
}

function buildRingsFromSubmissions(submissions) {
  ringCharts.forEach(c=>c.destroy()); ringCharts=[];
  const list = document.getElementById('ringList');
  if (!list) return;
  const stats = {};
  submissions.forEach(r => {
    if (!r.club) return;
    if (!stats[r.club]) stats[r.club] = { name:r.club, boys:0, girls:0, total:0 };
    stats[r.club].boys  += r.male||0;
    stats[r.club].girls += r.female||0;
    stats[r.club].total += r.total||0;
  });
  const items = Object.values(stats)
    .map(x => ({ ...x, pct: Math.min(100, Math.round(x.total/10)) }))
    .sort((a,b)=>b.total-a.total).slice(0,4);
  if (!items.length) {
    list.innerHTML=`<div class="empty-state"><div class="icon">📈</div><p>لا توجد بيانات في هذا الشهر</p></div>`;
    return;
  }
  list.innerHTML = items.map((item,idx) => `
    <div class="ring-item">
      <div class="ring-wrap">
        <canvas id="ring_${idx}" width="60" height="60"></canvas>
        <div class="ring-pct">${item.pct}%</div>
      </div>
      <div class="ring-info">
        <div class="ring-name">${item.name.replace('نادي ','')}</div>
        <div class="ring-sub">
          <span><span class="ring-dot" style="background:#1b393e"></span>طلاب ${item.boys}</span>
          <span><span class="ring-dot" style="background:#b79460"></span>طالبات ${item.girls}</span>
        </div>
      </div>
    </div>`).join('');
  setTimeout(() => {
    items.forEach((item,idx) => {
      const g = getGrade(item.pct);
      const canvas = document.getElementById(`ring_${idx}`);
      if (!canvas) return;
      ringCharts.push(new Chart(canvas.getContext('2d'), {
        type:'doughnut',
        data:{ datasets:[{ data:[item.pct, 100-item.pct], backgroundColor:[g.color,'#d8e8e6'], borderWidth:0 }] },
        options:{ cutout:'74%', plugins:{ legend:{ display:false }, tooltip:{ enabled:false } }, animation:{ duration:700 } }
      }));
    });
  }, 20);
}

function setMonth(period, btn) {
  document.querySelectorAll('.m-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const monthMap = { 'sep':8, 'oct':9, 'nov':10, 'dec':11 };
  currentMonth = (period in monthMap) ? monthMap[period] : null;
  fetchSheetData().then(all => {
    const filtered = currentMonth !== null
      ? all.filter(r => {
          if (!r.date) return false;
          const d = new Date(r.date+'T12:00:00');
          return !isNaN(d) && d.getMonth() === currentMonth;
        })
      : all;
    buildRingsFromSubmissions(filtered);
  });
}

function goPage(pageId, btn) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  btn.classList.add('active');
  if (pageId==='page-dash') updateDashboard();
  window.scrollTo(0,0);
}

function goToDash() {
  document.getElementById('successOverlay').classList.remove('show');
  location.href = 'dashboard.html';
}

// ══ INIT ══
document.addEventListener('DOMContentLoaded', () => {
  updateDashboard();
  setInterval(updateDashboard, 30000);
});
