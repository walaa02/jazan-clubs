
// ══════════════════════ CLUBS DATA ══════════════════════
const clubsData = {
    sharia:{ name:'نادي كلية الشريعة والقانون', type:'college', icon:'⚖️', count:'~32', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'📖',items:['السلامة المرورية','مسابقة الترافع','ورشة القانون الرقمي','مبادرة مسار','التوعية بالأمن السيبراني','التوعية بخطر المخدرات','محاضرة المواطنة والتسامح']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['ورشة القانون التجاري','دورة القواعد الفقهية والنزاعات','زيارة النيابة العامة ومحكمة الاستئناف']},
      {n:'النشاط الرياضي',cls:'sports',icon:'⚽',items:['مسابقات رياضية داخلية','أنشطة بدنية ترويحية','بطولة تنس الطاولة','بطولة الألعاب الإلكترونية','دوري كرة القدم والطائرة والسلة']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['المحاكاة القضائية','القوانين السعودية المعاصرة','تنمية المهارات القانونية','فقه المعاملات المعاصرة']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','يوم العلم','حفل التخرج','أسبوع تهيئة المستجدين','مكافحة الفساد','يوم المهنة']}
    ]},
    medicine:{ name:'نادي كلية الطب', type:'college', icon:'🏥', count:'~36', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🏥',items:['مفاهيم طبية في دقيقة','مناظرات طبية','مسابقة طبيب وأديب','أطباء غيّروا العالم','بودكاست طبي','التوعية بالأمن السيبراني']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'❤️',items:['اليوم العالمي للصحة النفسية','اليوم العالمي لمكافحة التدخين','التوعية بسرطان الثدي','حملة أمل وردي']},
      {n:'النشاط الرياضي',cls:'sports',icon:'⚽',items:['مسابقات رياضية داخلية','اللقاءات التبادلية','بطولة تنس الطاولة','دوري كرة القدم والطائرة والسلة']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['صناعة السيرة الذاتية','ورشة البحث العلمي','ورشة تخطيط القلب','ورشة الخياطة']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','يوم العلم','حفل التخرج','مكافحة الفساد']}
    ]},
    dental:{ name:'نادي طب الأسنان', type:'college', icon:'🦷', count:'~35', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🦷',items:['Postgrad-Skill it','Gold Hands','Dentists Got Talent','بودكاست ابتسامة','مسابقة من عيادتك','سفراء طب الأسنان','مؤتمر طب الأسنان السعودي']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'😁',items:['اليوم العالمي لصحة الفم والأسنان']},
      {n:'النشاط الرياضي',cls:'sports',icon:'⚽',items:['مسابقات رياضية داخلية','بطولة تنس الطاولة','دوري كرة القدم والطائرة والسلة']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['تطورات طب الأسنان في السعودية','التعامل مع الخوف من العيادة','دورة أول يوم في العيادة']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    nursing:{ name:'نادي التمريض والعلوم الصحية', type:'college', icon:'💊', count:'~40', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'💊',items:['برنامج الفن الصحي','حقيبة الإسعافات والطوارئ','لقاء الصحة العامة','العيادات الصحية المتنقلة','برنامج سلامة المرضى','نبض العينة']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['أولمبياد التخصصات الصحية','يوم المهنة للتخصصات الصحية']},
      {n:'النشاط الرياضي',cls:'sports',icon:'⚽',items:['مسابقات رياضية داخلية','اللقاءات التبادلية','دوري كرة القدم والطائرة والسلة']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['دورة العلاج التنفسي','ورشة الأبحاث','ورشة تحليل البيانات','ورشة مكافحة العدوى','ورشة الاكسل','ندوة التشخيص الإشعاعي']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    pharmacy:{ name:'نادي كلية الصيدلة', type:'college', icon:'🧪', count:'~32', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🧪',items:['صيدلي مبتكر','الصيدلي الصغير','جرعة عدالة','صيدلي فنان','صيدلية المستقبل','اسأل صيدلي','نزرع أثر','الدواء بين النجوم']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['يوم الصيدلة العالمي','برنامج رحلة دواء']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['الأدوية بين الاستخدام وسوء الاستخدام','القراءة السريعة للروشتات','الصحة الدوائية والذكاء الاصطناعي']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    engineering:{ name:'نادي الهندسة وعلوم الحاسب', type:'college', icon:'💻', count:'~38', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'💻',items:['ورشة Arduino×Sensors','أساسيات التصميم الهندسي','ملتقى اختيار التخصصات','معسكر هندسي تقني','مسابقة الروبوتات','ورشة الهاكثونات','تحدي كيف نبرمج']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['التوعية بالأمن السيبراني','التوعية بخطر المخدرات']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['برمجة بايثون من الصفر','مقدمة الذكاء الاصطناعي','ورشة IoT','أساسيات الطاقة المتجددة','Git & GitHub']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    business:{ name:'نادي الأعمال', type:'college', icon:'📊', count:'~38', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'📊',items:['سلسلة مهارات الأعمال مستوى 1','مبادرة الوعي المالي','مفاهيم اقتصادية','هاكثون الأعمال','TEDx نادي الأعمال','تحدي دراسة الحالة','معرض الشهادات المهنية']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['التوعية بالسلامة المرورية','التوعية بالأمن السيبراني']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['كيف تبدأ مشروعك من الصفر','ريادة الأعمال: الفرص والتحديات','مهارات رجل الأعمال الناجح','الاقتصاد السلوكي']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    science:{ name:'نادي العلوم', type:'college', icon:'🔬', count:'~32', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🔬',items:['مهارات سوق العمل لخريجي العلوم','مسابقة ابتكر فكرة','حملة جامعتي خضراء','عالم الكيمياء الخضراء','العلوم في حياتنا']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['يوم مفتوح لكلية العلوم','اليوم العالمي للقهوة']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['دورة الاستدامة والعلوم البيئية','الذكاء الاصطناعي في العلوم','مقدمة في علم الفلك','الفيزياء الضوئية','العلوم الجنائية']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    applied:{ name:'نادي الكلية التطبيقية', type:'college', icon:'🎓', count:'~30', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🎓',items:['هاكاثون الذكاء الاصطناعي للاستدامة','الرياضة وصحة الفرد','التوعية بالأمن السيبراني','محاضرة المواطنة']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['اليوم العالمي للمحاسبة','اليوم العالمي للسكري','اليوم العالمي للسياحة']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['استراتيجيات التجهيز لسوق العمل','الإسعافات الأولية والإنعاش','المهارات الناعمة','التصميم الجرافيكي','تصميم صفحات الويب']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    industrial:{ name:'نادي التطبيقات الصناعية ببيش', type:'college', icon:'🏭', count:'~26', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🏭',items:['مسابقات التطبيقات الصناعية','مشاريع التخرج','لقاء مفتوح','محاضرة المواطنة']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['اليوم العالمي للتطوع','التوعية بالأمن السيبراني']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['ملتقى التطبيقات الصناعية','مستعد لسوق العمل','فني ماهر','مهارات الثورة الصناعية']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    // CENTRAL
    cyber:{ name:'نادي الأمن السيبراني', type:'central', icon:'🔐', count:'~28', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🔐',items:['أساسيات الأمن السيبراني','التهديدات السيبرانية الحديثة','الجرائم المعلوماتية والأنظمة السعودية','ورشة تحليل البرمجيات الخبيثة','هاكاثون CTF','دورة الاختراق الأخلاقي','أمن تطبيقات الويب']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['اليوم العالمي للتطوع']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['أساسيات الأمن السيبراني للمبتدئين','احمِ جوالك بنفسك','تصفح بأمان']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    research:{ name:'نادي البحث العلمي والابتكار', type:'central', icon:'🔭', count:'~30', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🔭',items:['ورشة كيف تولد 100 فكرة','ورشة ابتكر باستخدام TRIZ','نموذج الابتكار الاستباقية','ملكية فكرية']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['لقاء الإرشاد الطلابي','فعالية Xperiment','مخترع في 3 أيام']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['العصف الذهني','التعريف بجوجل سكولر','ورشة تصميم بوستر بحثي','الفرق بين الابتكار والبحث العلمي']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم العلم','حفل التخرج']}
    ]},
    media:{ name:'نادي العلاقات العامة والإعلام', type:'central', icon:'📡', count:'~26', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'📡',items:['لقاء JEDx','فن التقديم والإلقاء','مسابقة المحتوى الإعلامي الهادف','ورشة الإعلام الصامت','بروتوكولات العلاقات']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['كتابة المحتوى الإعلامي','فن الإلقاء الصوتي','صناعة محتوى مؤثر','العلاقات العامة بين المظهر والمضمون']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    arts:{ name:'نادي الفنون التشكيلية', type:'central', icon:'🎨', count:'~26', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🎨',items:['ورشة المانداال','أساسيات رسم البورتريه','الخط الكوفي','العلاج بالفن']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['دورة ألوان زيتية','نظريات الألوان','Adobe Illustrator','ورشة فخار']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['الرسم بالألوان الزينية','جدارية تعاونية','فن من أشياء بسيطة','لوحة وقصة']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    cooking:{ name:'نادي فنون الطهي', type:'central', icon:'👨‍🍳', count:'~24', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'👨‍🍳',items:['تراثنا يُطهى','أساسيات الطهي','ورشة تزيين الكيك','ابتكار الأطباق الحديثة','الطبخ العالمي']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['إدارة الولائم','تقديم الأغذية والمشروبات','تحدي صندوق المفاجآت']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['أساسيات الطبخ للمبتدئين','حلويات بثلاث مكونات','الطبخ الصحي للطالب']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    design:{ name:'نادي التصميم والمونتاج', type:'central', icon:'🎬', count:'~25', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🎬',items:['أساسيات التصوير والمونتاج','Adobe Illustrator','دورة VN','مسابقة من دقيقة إلى حكاية']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['ورشة معالجة صور البورتريه','معرض صور ومواد إعلامية']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['أساسيات Canva','مونتاج الفيديو بالجوال','اصنع إعلانك من الفكرة للمونتاج','هويتي البصرية']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    theater:{ name:'نادي المسرح', type:'central', icon:'🎭', count:'~22', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🎭',items:['مدخل إلى التمثيل المسرحي','كتابة مشهد مسرحي','الموسيقى التصويرية','مسرح الدمى للأطفال']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['مهرجان المسرح الجامعي السعودي','محاضرة تأثير الجامعات في العمل المسرحي']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['مسرحي من الداخل','من النص إلى الخشبة','كسر الخوف على خشبة المسرح']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    scouts:{ name:'نادي الجوالة', type:'central', icon:'⛺', count:'~26', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'⛺',items:['لقاء الخميس الكشفي','أطلق العنان','اليوم العالمي لصديق الجوالة']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['معسكر كشفي جزيرة فرسان','معسكرات العمرة','معسكرات الحج']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['مبادئ الجوالة والعمل الكشفي','العقد والربطات الكشفية','الإسعافات الأولية للكشافة']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    environment:{ name:'نادي أصدقاء البيئة', type:'central', icon:'🌿', count:'~22', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🌿',items:['لقاء المجتمع البيئي','دورة البيئة من حولك','تحدي اصنع من النفاية فكرة']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['ازرع نبتتك','يومنا أخضر','التثقيف البيئي']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['اصنع نبتتك','فن التدوير','دقائق بيئية']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    fashion:{ name:'نادي الأزياء', type:'central', icon:'👗', count:'~22', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'👗',items:['برامج التصميم ثنائية الأبعاد','برنامج Idromax Illustrator','تعليم أنظمة الباترون']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['أهمية الكمبيوتر في الأزياء','ندوة تصميم أزياء معاصرة','إعداد باترون الملابس']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['أساسيات تصميم الأزياء','الخياطة البسيطة وتعديل الملابس']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    safety:{ name:'نادي السلامة المهنية', type:'central', icon:'🦺', count:'~28', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🦺',items:['حملة وعيك يقيك','مبادئ السلامة والصحة المهنية','إدارة الأزمات والكوارث','سلامتك قرارك','حملة وقف صح']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['اليوم العالمي للسلامة والصحة المهنية','اليوم العالمي للمرور']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['مبادئ السلامة المهنية للطالب','الإسعافات الأولية','التعرف على المواد الخطرة']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    english:{ name:'نادي اللغة الإنجليزية', type:'central', icon:'🇬🇧', count:'~26', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🇬🇧',items:['IELTS Camp','ورشة Creative Writing','ورشة Translation & AI','مسابقة Trivia ثقافية','معسكر تطوير اللغة']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['اليوم العالمي للغة الإنجليزية','Club Orientation Day']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['English Conversation Club','Write It Right','English Café']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    music:{ name:'نادي الموسيقى والفنون الصوتية', type:'central', icon:'🎵', count:'~24', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🎵',items:['أمسية تراثية موسيقية','أمسية فن الصوت الخليجي','أساسيات العزف على العود','ورشة الهندسة الصوتية']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['اليوم المفتوح للموسيقى','ألحان رمضانية','موسيقى لذوي الإعاقة','حملة الفن للسلام']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['اسمع وتكلّم','إيقاع بدون آلة','غنّيها صح']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    skills:{ name:'نادي مهارات المستقبل', type:'central', icon:'🚀', count:'~30', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🚀',items:['تحديد المسار المهني','كرفان المهارات','معسكر صناعة القادة','دورة التسويق الشخصي','معرض مهارات القرن 21']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['معسكر بادر للتطوع','اليوم العالمي لمهارات الشباب']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['التعريف بالمهارات','معسكر صناعة القادة','كيف تحدد هدفك','جاهزية سوق العمل']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    entrepreneur:{ name:'نادي ريادة الأعمال', type:'central', icon:'💡', count:'~28', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'💡',items:['لقاء استضافة ريادي','أدوات الابتكار وريادة الأعمال','ملتقى الرياديين','لقاء الخريجين','ورشة الابتكار في ريادة الأعمال']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['الأسبوع الريادي العالمي','يوم التطوع العالمي']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['فكرتي الريادية في 60 دقيقة','نموذج BMC Mini','تحدث عن مشروعك']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    awareness:{ name:'نادي التوعية الفكرية', type:'central', icon:'🧠', count:'~26', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🧠',items:['الاعتزاز بالهوية الوطنية','الأمن الفكري','الوعي الرقمي','مبادئ الحوار الحضاري','ملتقى معتدل','ملتقى هوية']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['التوعية بالسلامة المرورية','التوعية بأضرار المخدرات','التوعية بالأمن السيبراني']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['فكر قبل أن تشارك','بناء الهوية الفكرية','كن سفير الوعي']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    culture:{ name:'نادي الثقافة', type:'central', icon:'📚', count:'~28', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'📚',items:['الصالون الثقافي','مبادرة ثقافيون','قرأت لكم','أمسية شعرية','سوق الكتاب الطلابي','مسابقة الإلقاء Toastmasters']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['اليوم العالمي للغة العربية','اللقاء التعريفي']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['فنون الحوار والمناقشة','اقرأ وتحدّث','تقديم فقرة ثقافية أمام الجمهور']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    equestrian:{ name:'نادي رسن الفروسية', type:'central', icon:'🐎', count:'~22', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🐎',items:['محاضرة مع فارس محترف','دورات للمبتدئين','محاضرة طبيب بيطري','القيم الأخلاقية للفارس']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['البطولات المحلية والدولية','دورات أساسيات ركوب الخيل']},
      {n:'النشاط الرياضي',cls:'sports',icon:'🏇',items:['بطولات قفز الحواجز','دوري قفز الحواجز','الألعاب المختلفة']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['مقدمة في الفروسية','كيفية العناية بالخيل','خطوتي الأولى في الركوب']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    photo:{ name:'نادي التصوير الضوئي', type:'central', icon:'📷', count:'~24', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'📷',items:['حقوق الصورة والتسويق','دورة الإخراج السينمائي','ورشة تصوير','مسابقة العدسة الأنيقة','معرض بصمة ابداع']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['تصوير حياة الشارع','معالجة صور البورتريه','التصوير بالهواتف الذكية']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['أساسيات التصوير بالجوال والكاميرا','تعديل الصور من جوالك','عيون المصور']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]},
    nzaha:{ name:'نادي نزاهة', type:'central', icon:'🏛️', count:'~28', sections:[
      {n:'النشاط الثقافي',cls:'cultural',icon:'🏛️',items:['نزاهة في 5 محطات','بودكاست النزاهة ومكافحة الفساد','Escape Room كشف الفساد','اليوم الدولي لمكافحة الفساد']},
      {n:'النشاط الاجتماعي',cls:'social',icon:'🤝',items:['ندوة القضاء على الفساد','دورة جرائم الفساد']},
      {n:'البرامج التدريبية',cls:'training',icon:'🎓',items:['أثر الفساد على مستقبل الأوطان','النزاهة في اتخاذ القرار','الشفافية في العمل المؤسسي','نزاهة في حياتك']},
      {n:'البرامج العامة',cls:'general',icon:'🏛️',items:['اليوم الوطني 95','يوم التأسيس','حفل التخرج']}
    ]}
  };
  
  // ══════════════════════ BUILD CLUBS PAGE ══════════════════════
  function buildClubsPage() {
    const colGrid = document.getElementById('collegeGrid');
    const cenGrid = document.getElementById('centralGrid');
    Object.entries(clubsData).forEach(([key, club]) => {
      const isCollege = club.type === 'college';
      const tags = club.sections.slice(0,2).flatMap(s => s.items.slice(0,2));
      const html = `
      <div class="club-card" data-type="${club.type}" data-name="${club.name}" onclick="openModal('${key}')">
        <div class="card-header">
          <div class="card-icon">${club.icon}</div>
          <div class="card-type-badge">${isCollege ? 'نادي كلية' : 'نادي مركزي'}</div>
          <div class="card-title-name">${club.name}</div>
        </div>
        <div class="card-body">
          <div class="activities-count">الأنشطة المخططة: <strong>${club.count} نشاطاً</strong></div>
          <div class="activity-types">
            ${club.sections.map(s => `<span class="type-chip ${s.cls}">${s.n.replace('النشاط ','').replace('البرامج ','')}</span>`).join('')}
          </div>
          <div class="activities-preview">
            <div class="preview-label">أبرز الأنشطة</div>
            <div class="activity-tags">${tags.map(t=>`<span class="activity-tag">${t}</span>`).join('')}</div>
          </div>
        </div>
        <div class="card-footer">
          <button class="expand-btn">عرض الخطة كاملة</button>
          <span class="card-meta">جامعة جازان</span>
        </div>
      </div>`;
      (isCollege ? colGrid : cenGrid).insertAdjacentHTML('beforeend', html);
    });
  }
  
  function openModal(key) {
    const club = clubsData[key];
    if(!club) return;
    document.getElementById('mType').textContent = club.type==='college'?'نادي كلية':'نادي مركزي';
    document.getElementById('mTitle').textContent = club.name;
    let html = '';
    club.sections.forEach(s => {
      html += `<div class="activities-section">
        <div class="activities-section-title">
          <div class="section-icon ${s.cls}">${s.icon}</div>
          <h3>${s.n} <span style="font-size:11px;font-weight:400;color:var(--text-light);margin-right:5px">(${s.items.length} نشاط)</span></h3>
        </div>
        <div class="activities-list">${s.items.map(i=>`<div class="activity-item">${i}</div>`).join('')}</div>
      </div>`;
    });
    document.getElementById('mBody').innerHTML = html;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });
  
  let currentFilter = 'all';
  function setFilter(type, btn) {
    currentFilter = type;
    document.querySelectorAll('.filter-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    filterClubs();
  }
  function filterClubs() {
    const q = document.getElementById('searchInput').value.trim().toLowerCase();
    document.querySelectorAll('.club-card').forEach(card => {
      const t = card.dataset.type;
      const typeOk = currentFilter==='all' || currentFilter===t;
      const textOk = !q || card.textContent.toLowerCase().includes(q);
      card.classList.toggle('hidden', !(typeOk && textOk));
    });
  }
  
  // ══════════════════════ FORM LOGIC ══════════════════════
  function selectRadio(hiddenId, value, el) {
    const parent = el.parentElement;
    parent.querySelectorAll('.choice-item').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    document.getElementById(hiddenId).value = value;
  }
  
  async function submitActivity() {
      const club = document.getElementById('f_club').value;
      const type = document.getElementById('f_type').value;
      const name = document.getElementById('f_name').value.trim();
      const desc = document.getElementById('f_desc').value.trim();
      const progType = document.getElementById('f_prog_type').value;
      const nature = document.getElementById('f_nature').value;
      const date = document.getElementById('f_date').value;
      const duration = document.getElementById('f_duration').value.trim();
      const location = document.getElementById('f_location').value.trim();
      const male = parseInt(document.getElementById('f_male').value) || 0;
      const female = parseInt(document.getElementById('f_female').value) || 0;
      const target = document.getElementById('f_target').value;
      const volunteer = document.getElementById('f_volunteer').value.trim();
      const evidence = document.getElementById('f_evidence').value.trim();
      const author = document.getElementById('f_author').value.trim();
      const phone = document.getElementById('f_phone').value.trim();
    
      const missing = [];
      if (!type) missing.push('نوع النادي');
      if (!club) missing.push('اسم النادي');
      if (!name) missing.push('اسم البرنامج');
      if (!desc) missing.push('ملخص البرنامج');
      if (!progType) missing.push('نوع البرنامج');
      if (!nature) missing.push('طبيعة البرنامج');
      if (!date) missing.push('تاريخ التنفيذ');
      if (!duration) missing.push('مدة التنفيذ');
      if (!location) missing.push('مقر التنفيذ');
      if (!male && !female) missing.push('عدد المستفيدين');
      if (!target) missing.push('الفئة المستهدفة');
      if (!evidence) missing.push('رابط الشواهد');
      if (!author) missing.push('اسم معد التقرير');
      if (!phone) missing.push('رقم التواصل');
    
      if (missing.length) {
        alert('يرجى تعبئة الحقول المطلوبة:\n• ' + missing.join('\n• '));
        return;
      }
    
      const payload = {
        club_type: type,
        club_name: club,
        program_name: name,
        program_desc: desc,
        program_type: progType,
        nature: nature,
        date: date,
        duration: duration,
        location: location,
        male: male,
        female: female,
        target: target,
        volunteer_link: volunteer,
        evidence_link: evidence,
        author: author,
        phone: phone
      };
    
      const submitBtn = document.querySelector('.submit-btn');
    
      try {
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.style.opacity = '0.7';
          submitBtn.style.pointerEvents = 'none';
        }
    
        const response = await fetch('https://script.google.com/macros/s/AKfycby98QOik5H-jjb2f9UCGszxkaYGUZ36M1AtKRmD4Jk-rHY8sdPYsWY2nJKjs0LaTebY/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        });
    
        const result = await response.json();
    
        if (result.success) {
          document.getElementById('sClubName').textContent = club;
          document.getElementById('sDetails').textContent =
            `البرنامج: ${name}\nالنوع: ${progType} · ${nature}\nإجمالي المستفيدين: ${male + female} (${male} طلاب + ${female} طالبات)\nمعد التقرير: ${author}`;
          document.getElementById('successOverlay').classList.add('show');
          const localRecord = {
              id: Date.now(),
              type,
              club,
              name,
              desc,
              progType,
              nature,
              date,
              duration,
              location,
              male,
              female,
              total: male + female,
              target,
              volunteer,
              evidence,
              author,
              phone,
              timestamp: new Date().toLocaleString('ar-SA')
            };
            
            const existing = JSON.parse(localStorage.getItem('jaz_activities') || '[]');
            existing.unshift(localRecord);
            localStorage.setItem('jaz_activities', JSON.stringify(existing));
          resetForm();
        } else {
          alert('حدث خطأ أثناء الإرسال: ' + (result.error || 'Unknown error'));
        }
      } catch (error) {
        console.error(error);
        alert('تعذر الاتصال بـ Google Sheets');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          submitBtn.style.pointerEvents = 'auto';
        }
      }
    }
  
  function resetForm() {
    ['f_club','f_name','f_desc','f_date','f_duration','f_location',
     'f_male','f_female','f_volunteer','f_evidence','f_author','f_phone'].forEach(id => {
      const el = document.getElementById(id);
      if(el) el.value = '';
    });
    ['f_type','f_prog_type','f_nature','f_target'].forEach(id => {
      document.getElementById(id).value = '';
    });
    document.querySelectorAll('.choice-item').forEach(c => c.classList.remove('selected'));
  }
  
  function goToDash() {
    document.getElementById('successOverlay').classList.remove('show');
    location.href = 'dashboard.html';
  }
  
  // ══════════════════════ DASHBOARD ══════════════════════
  // ══════════════════════ DASHBOARD ══════════════════════
  let monthlyChart = null, progChart = null, beneChart = null;
  let ringCharts = [];
  
  function getGrade(s) {
    if (s >= 90) return { label: 'ممتاز', cls: 'rg-ex', color: '#1D9E75' };
    if (s >= 75) return { label: 'جيد جداً', cls: 'rg-vg', color: '#378ADD' };
    if (s >= 60) return { label: 'متوسط', cls: 'rg-md', color: '#BA7517' };
    return { label: 'ضعيف', cls: 'rg-lw', color: '#E24B4A' };
  }
  
  function getLocalSubmissions() {
    try {
      return JSON.parse(localStorage.getItem('jaz_activities') || '[]');
    } catch {
      return [];
    }
  }
  
  async function fetchSheetData() {
    const url = 'https://script.google.com/macros/s/AKfycby98QOik5H-jjb2f9UCGszxkaYGUZ36M1AtKRmD4Jk-rHY8sdPYsWY2nJKjs0LaTebY/exec';
  
    try {
      const res = await fetch(url);
      const raw = await res.json();
  
      if (!Array.isArray(raw) || raw.length < 2) return [];
  
      const headers = raw[0];
      const rows = raw.slice(1);
  
      return rows.map((row, index) => {
        const obj = {};
        headers.forEach((h, i) => {
          obj[h] = row[i];
        });
  
        return {
          id: index + 1,
          type: obj.club_type || '',
          club: obj.club_name || '',
          name: obj.program_name || '',
          desc: obj.program_desc || '',
          progType: obj.program_type || '',
          nature: obj.nature || '',
          date: obj.date || '',
          duration: obj.duration || '',
          location: obj.location || '',
          male: Number(obj.male) || 0,
          female: Number(obj.female) || 0,
          total: (Number(obj.male) || 0) + (Number(obj.female) || 0),
          target: obj.target || '',
          volunteer: obj.volunteer_link || '',
          evidence: obj.evidence_link || '',
          author: obj.author || '',
          phone: obj.phone || '',
          timestamp: obj.timestamp || ''
        };
      });
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  }
  
  function mergeSubmissions(localData, sheetData) {
    const all = [...localData, ...sheetData];
    const seen = new Set();
  
    return all.filter((item) => {
      const key = [
        item.club || '',
        item.name || '',
        item.date || '',
        item.author || '',
        item.phone || ''
      ].join('|');
  
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  
  async function updateDashboard() {
    const localSubs = getLocalSubmissions();
    const sheetSubs = await fetchSheetData();
    const submissions = mergeSubmissions(localSubs, sheetSubs);
  
    const totalBene = submissions.reduce((s, r) => s + (r.total || 0), 0);
    const uniqueClubs = new Set(submissions.map(r => r.club).filter(Boolean)).size;
    const internal = submissions.filter(r => r.nature && r.nature.includes('داخلي')).length;
    const external = submissions.filter(r => r.nature && r.nature.includes('خارجي')).length;
    const totalMale = submissions.reduce((s, r) => s + (r.male || 0), 0);
    const totalFemale = submissions.reduce((s, r) => s + (r.female || 0), 0);
    const anomalies = submissions.filter(r => (r.total || 0) > 300).length;
  
    // KPIs العلوية
    document.getElementById('kTotal').textContent = submissions.length ? submissions.length.toLocaleString('ar-SA') : '0';
    document.getElementById('kBene').textContent = totalBene ? totalBene.toLocaleString('ar-SA') : '0';
    document.getElementById('kClubs').textContent = uniqueClubs ? uniqueClubs.toLocaleString('ar-SA') : '0';
    document.getElementById('kInternal').textContent = internal ? internal.toLocaleString('ar-SA') : '0';
    document.getElementById('kExternal').textContent = external ? external.toLocaleString('ar-SA') : '0';
  
    // بطاقات الإحصاءات
    document.getElementById('kc1').textContent = totalBene ? totalBene.toLocaleString('ar-SA') : '0';
    document.getElementById('kc1s').textContent = 'بحسب البيانات المرفوعة';
  
    document.getElementById('kc2').textContent = submissions.length ? submissions.length.toLocaleString('ar-SA') : '0';
    document.getElementById('kc2s').textContent = 'إجمالي الأنشطة المرفوعة';
  
    document.getElementById('kc3').textContent = submissions.length ? Math.round((internal / submissions.length) * 100) + '%' : '0%';
    document.getElementById('kc3s').textContent = 'نسبة الأنشطة الداخلية';
  
    document.getElementById('kc4').textContent = uniqueClubs ? uniqueClubs.toLocaleString('ar-SA') : '0';
    document.getElementById('kc4s').textContent = 'عدد الأندية المشاركة';
  
    document.getElementById('kc5').textContent = anomalies ? anomalies.toLocaleString('ar-SA') : '0';
    document.getElementById('kc5s').textContent = 'سجلات تحتاج مراجعة';
  
    document.getElementById('kc6').textContent = totalMale ? totalMale.toLocaleString('ar-SA') : '0';
    document.getElementById('kc6s').textContent = 'إجمالي الطلاب';
  
    document.getElementById('kc7').textContent = totalFemale ? totalFemale.toLocaleString('ar-SA') : '0';
    document.getElementById('kc7s').textContent = 'إجمالي الطالبات';
  
    // الجدول
    const tbody = document.getElementById('subTableBody');
    if (!tbody) return;
  
    if (!submissions.length) {
      tbody.innerHTML = `
        <tr>
          <td colspan="10">
            <div class="empty-state">
              <div class="icon">📋</div>
              <p>لا توجد أنشطة مرفوعة بعد<br>ارفع أول نشاط من تبويب "رفع نشاط"</p>
            </div>
          </td>
        </tr>`;
    } else {
      const ordered = submissions.slice().reverse();
      tbody.innerHTML = ordered.map((r, i) => {
        const typeCls = {
          'اجتماعي': 'tb-social',
          'ثقافي': 'tb-cultural',
          'تدريبي': 'tb-training',
          'رياضي': 'tb-sports',
          'صحي': 'tb-health',
          'ترفيهي': 'tb-rec',
          'غير ذلك': 'tb-other'
        }[r.progType] || 'tb-other';
  
        return `
          <tr class="${i === 0 ? 'new-row' : ''}">
            <td style="font-weight:700;color:var(--text-light)">${ordered.length - i}</td>
            <td style="font-weight:700;font-size:12px">${r.club}</td>
            <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${r.name}">${r.name}</td>
            <td><span class="type-badge ${typeCls}">${r.progType}</span></td>
            <td style="font-size:11px">${r.nature && r.nature.includes('داخلي') ? '🏫 داخلي' : '🌍 خارجي'}</td>
            <td style="font-size:11px">${r.date || '—'}</td>
            <td style="font-weight:700;color:var(--teal)">${r.male}</td>
            <td style="font-weight:700;color:#c9a227">${r.female}</td>
            <td style="font-weight:800;font-size:14px">${r.total}</td>
            <td>${r.evidence ? `<a href="${r.evidence}" target="_blank" style="color:var(--teal);font-size:11px;font-weight:700">↗</a>` : '—'}</td>
          </tr>`;
      }).join('');
    }
  
    buildRankList(submissions);
    buildAlerts(submissions);
    buildMonthlyChart(submissions);
    buildProgChart(submissions);
    buildBeneChart(submissions);
    buildRingsFromSubmissions(submissions);
  }
  
  function buildRankList(submissions) {
    const list = document.getElementById('rankList');
    if (!list) return;
  
    if (!submissions.length) {
      list.innerHTML = `
        <div class="empty-state">
          <div class="icon">📊</div>
          <p>لا توجد بيانات كافية للترتيب بعد</p>
        </div>`;
      return;
    }
  
    const clubStats = {};
    submissions.forEach((r) => {
      if (!r.club) return;
      if (!clubStats[r.club]) {
        clubStats[r.club] = {
          name: r.club,
          count: 0,
          beneficiaries: 0
        };
      }
      clubStats[r.club].count += 1;
      clubStats[r.club].beneficiaries += r.total || 0;
    });
  
    const ranked = Object.values(clubStats)
      .map((club) => {
        const score = Math.min(100, Math.round((club.count * 20) + (club.beneficiaries / 10)));
        return { ...club, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 7);
  
    list.innerHTML = ranked.map((c, i) => {
      const g = getGrade(c.score);
      const numCls = i === 0 ? 'rn1' : i === 1 ? 'rn2' : i === 2 ? 'rn3' : 'rnn';
  
      return `
        <div class="rank-item">
          <div class="rank-num ${numCls}">${i + 1}</div>
          <div class="rank-name">${c.name.replace('نادي ','')}</div>
          <div class="rank-bar-bg"><div class="rank-bar-fill" style="width:${c.score}%;background:${g.color};"></div></div>
          <div class="rank-pct">${c.score}%</div>
          <span class="rank-grade ${g.cls}">${g.label}</span>
        </div>`;
    }).join('');
  }
  
  function buildAlerts(submissions) {
    const list = document.getElementById('alertList');
    if (!list) return;
  
    if (!submissions.length) {
      list.innerHTML = `<div class="alert-item"><div class="alert-dot" style="background:#9FE1CB"></div><div>لا توجد تنبيهات حالياً</div></div>`;
      return;
    }
  
    const anomalies = submissions.filter(r => r.total > 300);
    let html = '';
  
    if (anomalies.length) {
      anomalies.forEach(r => {
        html += `<div class="alert-item"><div class="alert-dot" style="background:#F09595"></div><div>${r.club} — مستفيدون مرتفعون: ${r.total}</div></div>`;
      });
    }
  
    if (!html) {
      html = `<div class="alert-item"><div class="alert-dot" style="background:#9FE1CB"></div><div>لا توجد تنبيهات غير اعتيادية في البيانات المرفوعة</div></div>`;
    }
  
    list.innerHTML = html;
  }
  
  function buildMonthlyChart(submissions) {
    if (monthlyChart) monthlyChart.destroy();
    const ctx = document.getElementById('chartMonthly');
    if (!ctx) return;
  
    const monthNames = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
    const stats = {};
  
    submissions.forEach((r) => {
      if (!r.date) return;
      const d = new Date(r.date);
      if (isNaN(d)) return;
      const label = monthNames[d.getMonth()];
  
      if (!stats[label]) stats[label] = { male: 0, female: 0, total: 0 };
      stats[label].male += r.male || 0;
      stats[label].female += r.female || 0;
      stats[label].total += 1;
    });
  
    const labels = Object.keys(stats);
    const maleData = labels.map(l => stats[l].male);
    const femaleData = labels.map(l => stats[l].female);
    const totalData = labels.map(l => stats[l].total);
  
    if (!labels.length) {
      ctx.parentElement.innerHTML = `<div class="empty-state"><div class="icon">📊</div><p>لا توجد بيانات شهرية بعد</p></div>`;
      return;
    }
  
    monthlyChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'شطر الطلاب', data: maleData, backgroundColor: '#0e6b7a', borderRadius: 4, barPercentage: .5 },
          { label: 'شطر الطالبات', data: femaleData, backgroundColor: '#c9a227', borderRadius: 4, barPercentage: .5 },
          { label: 'عدد الأنشطة', data: totalData, backgroundColor: '#8aacb2', borderRadius: 4, barPercentage: .5 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#5a8a96', font: { size: 10, family: 'Cairo' } } },
          y: { grid: { color: '#e8f2f4' }, ticks: { color: '#5a8a96', font: { size: 10 } }, beginAtZero: true }
        }
      }
    });
  }
  
  function buildProgChart(submissions) {
    const wrap = document.getElementById('progChartWrap');
    if (!wrap) return;
  
    const clubCountMap = {};
    submissions.forEach(r => {
      if (!r.club) return;
      const key = r.club.replace('نادي ','').replace('كلية ','');
      clubCountMap[key] = (clubCountMap[key] || 0) + 1;
    });
  
    const sorted = Object.entries(clubCountMap).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const labels = sorted.map(e => e[0]);
    const values = sorted.map(e => e[1]);
    const colors = values.map((v, i) => i < 3 ? '#1D9E75' : '#0e6b7a');
  
    if (!labels.length) {
      wrap.innerHTML = `<div class="empty-state"><div class="icon">📊</div><p>لا توجد بيانات كافية للرسم</p></div>`;
      return;
    }
  
    wrap.innerHTML = `<div style="position:relative;height:${Math.max(220, sorted.length * 36 + 40)}px;"><canvas id="chartProg"></canvas></div>`;
    if (progChart) progChart.destroy();
  
    progChart = new Chart(document.getElementById('chartProg'), {
      type: 'bar',
      data: { labels, datasets: [{ data: values, backgroundColor: colors, borderRadius: 5 }] },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true, ticks: { color: '#5a8a96', font: { size: 10 } }, grid: { color: '#e8f2f4' } },
          y: { ticks: { color: '#5a8a96', font: { size: 10, family: 'Cairo' } }, grid: { display: false } }
        }
      }
    });
  }
  
  function buildBeneChart(submissions) {
    const wrap = document.getElementById('beneChartWrap');
    if (!wrap) return;
  
    const beneMap = {};
    submissions.forEach(r => {
      if (!r.club) return;
      const k = r.club.replace('نادي ','').replace('كلية ','');
      beneMap[k] = (beneMap[k] || 0) + r.total;
    });
  
    const sorted = Object.entries(beneMap).sort((a, b) => b[1] - a[1]).slice(0, 7);
    const labels = sorted.map(e => e[0]);
    const values = sorted.map(e => e[1]);
  
    if (!labels.length) {
      wrap.innerHTML = `<div class="empty-state"><div class="icon">📈</div><p>لا توجد بيانات كافية للرسم</p></div>`;
      return;
    }
  
    wrap.innerHTML = `<div style="position:relative;height:220px;"><canvas id="chartBene"></canvas></div>`;
    if (beneChart) beneChart.destroy();
  
    beneChart = new Chart(document.getElementById('chartBene'), {
      type: 'line',
      data: {
        labels,
        datasets: [{
          data: values,
          borderColor: '#c9a227',
          backgroundColor: 'rgba(201,162,39,0.08)',
          pointBackgroundColor: '#c9a227',
          pointRadius: 5,
          tension: .35,
          fill: true,
          borderWidth: 2.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#5a8a96', font: { size: 10, family: 'Cairo' } }, grid: { display: false } },
          y: { ticks: { color: '#5a8a96', font: { size: 10 } }, grid: { color: '#e8f2f4' }, beginAtZero: true }
        }
      }
    });
  }
  
  function buildRingsFromSubmissions(submissions) {
    ringCharts.forEach(c => c.destroy());
    ringCharts = [];
  
    const list = document.getElementById('ringList');
    if (!list) return;
  
    const stats = {};
    submissions.forEach((r) => {
      if (!r.club) return;
      if (!stats[r.club]) {
        stats[r.club] = { name: r.club, boys: 0, girls: 0, total: 0, pct: 0 };
      }
      stats[r.club].boys += r.male || 0;
      stats[r.club].girls += r.female || 0;
      stats[r.club].total += r.total || 0;
    });
  
    const items = Object.values(stats)
      .map((x) => ({
        ...x,
        pct: x.total ? Math.min(100, Math.round((x.total / 10))) : 0
      }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 4);
  
    if (!items.length) {
      list.innerHTML = `<div class="empty-state"><div class="icon">📈</div><p>لا توجد بيانات مرفوعة بعد</p></div>`;
      return;
    }
  
    list.innerHTML = '';
    items.forEach((item, idx) => {
      const id = `ring_${idx}`;
      list.innerHTML += `
        <div class="ring-item">
          <div class="ring-wrap">
            <canvas id="${id}" width="60" height="60"></canvas>
            <div class="ring-pct">${item.pct}%</div>
          </div>
          <div class="ring-info">
            <div class="ring-name">${item.name.replace('نادي ','')}</div>
            <div class="ring-sub">
              <span><span class="ring-dot" style="background:#094d58"></span>شطر الطلاب ${item.boys}</span>
              <span><span class="ring-dot" style="background:#c9a227"></span>شطر الطالبات ${item.girls}</span>
            </div>
          </div>
        </div>`;
    });
  
    setTimeout(() => {
      items.forEach((item, idx) => {
        const g = getGrade(item.pct);
        const canvas = document.getElementById(`ring_${idx}`);
        if (!canvas) return;
  
        const ch = new Chart(canvas.getContext('2d'), {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [item.pct, 100 - item.pct],
              backgroundColor: [g.color, '#e8f2f4'],
              borderWidth: 0
            }]
          },
          options: {
            cutout: '74%',
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            animation: { duration: 700 }
          }
        });
        ringCharts.push(ch);
      });
    }, 20);
  }
  
  function setMonth(period, btn) {
    document.querySelectorAll('.m-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateDashboard();
  }
  
  // ══════════════════════ PAGE NAVIGATION ══════════════════════
  function goPage(pageId, btn) {
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    btn.classList.add('active');
    if(pageId === 'page-dash') updateDashboard();
    window.scrollTo(0,0);
  }
  
  // ══════════════════════ INIT ══════════════════════
  if (document.getElementById('page-dash')) {
    updateDashboard();
  }
  document.addEventListener('DOMContentLoaded', updateDashboard);
  