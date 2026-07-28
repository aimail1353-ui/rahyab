/*
==========================================
RahYab v1.0
File : questions.js
==========================================
*/

const questionBank = [

/*=========================================
  بخش اول : رغبت شغلی (RIASEC)
=========================================*/

{
    id:1,
    section:"interest",
    dimension:"R",
    text:"از تعمیر وسایل و کار با ابزار لذت می‌برم."
},

{
    id:2,
    section:"interest",
    dimension:"I",
    text:"از حل مسائل علمی و فکری لذت می‌برم."
},

{
    id:3,
    section:"interest",
    dimension:"A",
    text:"به نقاشی، موسیقی یا طراحی علاقه دارم."
},

{
    id:4,
    section:"interest",
    dimension:"S",
    text:"از آموزش و کمک به دیگران لذت می‌برم."
},

{
    id:5,
    section:"interest",
    dimension:"E",
    text:"دوست دارم مسئولیت هدایت یک گروه را بر عهده بگیرم."
},

{
    id:6,
    section:"interest",
    dimension:"C",
    text:"از نظم، برنامه‌ریزی و ثبت اطلاعات لذت می‌برم."
},/*=========================================
  بخش دوم : شخصیت
=========================================*/

{
    id:7,
    section:"personality",
    dimension:"EXT",
    text:"به‌راحتی با افراد جدید ارتباط برقرار می‌کنم."
},

{
    id:8,
    section:"personality",
    dimension:"CON",
    text:"کارهای خود را با نظم و برنامه انجام می‌دهم."
},

{
    id:9,
    section:"personality",
    dimension:"EMO",
    text:"در شرایط سخت آرامش خود را حفظ می‌کنم."
},

{
    id:10,
    section:"personality",
    dimension:"AGR",
    text:"در کارهای گروهی با دیگران همکاری خوبی دارم."
},

{
    id:11,
    section:"personality",
    dimension:"OPN",
    text:"از یادگیری ایده‌ها و تجربه‌های جدید استقبال می‌کنم."
},

/*=========================================
  بخش سوم : توانایی
=========================================*/

{
    id:12,
    section:"ability",
    dimension:"MATH",
    text:"در درس ریاضی عملکرد خوبی دارم."
},

{
    id:13,
    section:"ability",
    dimension:"SCIENCE",
    text:"در درس علوم و آزمایش‌ها موفق هستم."
},

{
    id:14,
    section:"ability",
    dimension:"LANGUAGE",
    text:"در نوشتن، خواندن و درک مطالب مهارت دارم."
},

{
    id:15,
    section:"ability",
    dimension:"ART",
    text:"در فعالیت‌های هنری توانایی خوبی دارم."
},

{
    id:16,
    section:"ability",
    dimension:"TECH",
    text:"کار با رایانه و فناوری را سریع یاد می‌گیرم."
},/*=========================================
  بخش چهارم : ارزش‌ها
=========================================*/

{
    id:17,
    section:"values",
    dimension:"SERVICE",
    text:"کمک به دیگران برای من از درآمد مهم‌تر است."
},

{
    id:18,
    section:"values",
    dimension:"INCOME",
    text:"داشتن شغل با درآمد بالا برایم اهمیت زیادی دارد."
},

{
    id:19,
    section:"values",
    dimension:"CREATIVITY",
    text:"دوست دارم در کارم ایده‌های جدید ارائه کنم."
},

{
    id:20,
    section:"values",
    dimension:"SECURITY",
    text:"داشتن شغل پایدار و مطمئن برایم مهم است."
},

/*=========================================
  بخش پنجم : عملکرد تحصیلی
=========================================*/

{
    id:21,
    section:"academic",
    dimension:"MATH",
    text:"معدل درس ریاضی من بالاست."
},

{
    id:22,
    section:"academic",
    dimension:"SCIENCE",
    text:"معدل درس علوم من بالاست."
},

{
    id:23,
    section:"academic",
    dimension:"LITERATURE",
    text:"در درس فارسی عملکرد خوبی دارم."
},

{
    id:24,
    section:"academic",
    dimension:"SOCIAL",
    text:"در درس مطالعات اجتماعی عملکرد خوبی دارم."
}

];

/*=========================================
  تنظیمات آزمون
=========================================*/

const answerScale = [
    "کاملاً مخالفم",
    "مخالفم",
    "نظری ندارم",
    "موافقم",
    "کاملاً موافقم"
];

const maxScore = 5;

const minScore = 1;