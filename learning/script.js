"use strict";

/* =========================================================
   FAYAD CODE — LEARNING ENGINE
========================================================= */

const PROGRESS_KEY = "fayadCodeLearningProgress";
const LAST_LESSON_KEY = "fayadCodeLastLesson";

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];


/* =========================================================
   LESSON DATA
========================================================= */

const lessons = [

  /* =======================================================
     MODULE 01 — FOUNDATION
  ======================================================= */

  {
    id: "git-introduction",
    module: "01 — الأساسيات",
    course: "Git",
    level: "Beginner",
    duration: "10 دقائق",
    title: "ما هو Git ولماذا نحتاجه؟",
    summary:
      "افهم المشكلة التي جاء Git لحلها، وما معنى Version Control، ولماذا أصبح جزءًا أساسيًا من حياة المطور.",
    objectives: [
      "فهم معنى Version Control",
      "معرفة الفرق بين Git وحفظ الملفات يدويًا",
      "فهم فكرة Commit وHistory",
      "معرفة لماذا يستخدم Git في المشاريع"
    ],
    sections: [
      {
        heading: "ابدأ بالمشكلة وليس بالأمر",
        paragraphs: [
          "تخيل أنك تعمل على مشروع وتقوم كل يوم بحفظ نسخة جديدة مثل project-final وproject-final-2 وproject-final-real وproject-final-last. المشكلة ليست في التخزين نفسه، بل في أنك بدأت تفقد القدرة على معرفة ماذا تغير ومتى ولماذا.",
          "Git يحل هذه المشكلة عن طريق تسجيل نقاط واضحة من تاريخ المشروع تسمى Commits. كل Commit يمثل حالة محفوظة من المشروع ويمكنك الرجوع إليها أو مقارنة التغييرات بينها."
        ]
      },
      {
        heading: "ما معنى Version Control؟",
        paragraphs: [
          "Version Control هو نظام يساعدك على تتبع التغييرات التي تحدث على الملفات عبر الزمن. بدلًا من التعامل مع المشروع كملفات منفصلة، يصبح لديك History يمكن قراءته ومراجعته.",
          "Git هو نظام Distributed Version Control، أي أن نسخة المستودع وتاريخه يمكن أن تكون موجودة محليًا على جهازك، ثم تتعاون مع مستودعات بعيدة مثل GitHub."
        ]
      }
    ],
    commands: [
      {
        command: "git --version",
        explanation: "يتأكد من أن Git مثبت على جهازك ويعرض الإصدار."
      },
      {
        command: "git help",
        explanation: "يعرض المساعدة العامة لأوامر Git."
      }
    ],
    example: {
      title: "مثال واقعي",
      text:
        "بدلًا من إنشاء خمس نسخ من المشروع، أنشئ Commit بعد كل مرحلة مهمة. إذا حدث خطأ لاحقًا، تستطيع معرفة متى بدأ الخطأ ومراجعة التاريخ."
    },
    notes: [
      "Git ليس GitHub. Git هو نظام Version Control، بينما GitHub منصة تستضيف مستودعات Git وتوفر أدوات تعاون."
    ],
    quiz: [
      {
        question: "ما المشكلة الأساسية التي يحلها Git؟",
        options: [
          "زيادة سرعة الإنترنت",
          "تتبع وإدارة تغييرات المشروع",
          "تصميم صفحات HTML",
          "تشغيل الخادم"
        ],
        answer: 1,
        explanation:
          "Git يتتبع تاريخ تغييرات الملفات ويساعدك على الرجوع والمقارنة والتعاون."
      },
      {
        question: "ما الذي يمثل نقطة محفوظة في تاريخ المشروع؟",
        options: [
          "Commit",
          "Folder",
          "Browser",
          "Terminal"
        ],
        answer: 0,
        explanation:
          "الـ Commit يسجل Snapshot من حالة المشروع في لحظة معينة."
      },
      {
        question: "هل Git هو نفسه GitHub؟",
        options: [
          "نعم",
          "لا",
          "GitHub هو اسم جديد لـ Git",
          "فقط على Windows"
        ],
        answer: 1,
        explanation:
          "Git أداة Version Control، وGitHub خدمة ومنصة للتعاون واستضافة مستودعات Git."
      }
    ]
  },

  {
    id: "git-vs-github",
    module: "01 — الأساسيات",
    course: "GitHub",
    level: "Beginner",
    duration: "9 دقائق",
    title: "Git أم GitHub؟",
    summary:
      "الفرق بين Git وGitHub من أهم المفاهيم التي يجب أن تثبت قبل بداية العمل.",
    objectives: [
      "تمييز Git عن GitHub",
      "فهم Local Repository",
      "فهم Remote Repository",
      "معرفة دور GitHub في التعاون"
    ],
    sections: [
      {
        heading: "Git",
        paragraphs: [
          "Git برنامج يعمل على جهازك. تستطيع استخدامه بدون حساب GitHub وبدون إنترنت لإنشاء Repository وعمل Commits وBranches ومراجعة History.",
          "هذا يعني أن الجزء الأكبر من عمليات Git اليومية يمكن أن يحدث محليًا على جهازك."
        ]
      },
      {
        heading: "GitHub",
        paragraphs: [
          "GitHub منصة مبنية حول Git وتوفر Remote Repositories وأدوات للتعاون مثل Pull Requests وIssues وCode Review وActions.",
          "عندما تعمل مع فريق، تستطيع رفع المشروع إلى GitHub ثم مشاركة Branches وفتح Pull Requests لمراجعة التغييرات قبل دمجها."
        ]
      }
    ],
    commands: [
      {
        command: "git init",
        explanation: "ينشئ Repository محليًا."
      },
      {
        command: "git remote -v",
        explanation: "يعرض الـ Remote Repositories المرتبطة بالمشروع."
      }
    ],
    quiz: [
      {
        question: "أين يعمل Git أساسًا؟",
        options: [
          "على جهازك",
          "داخل متصفحك فقط",
          "داخل GitHub فقط",
          "داخل قاعدة بيانات"
        ],
        answer: 0,
        explanation: "Git برنامج Version Control محلي."
      },
      {
        question: "ما دور GitHub الأساسي في هذا السياق؟",
        options: [
          "استضافة وتعاون حول مستودعات Git",
          "استبدال Git",
          "تشغيل HTML",
          "ترجمة JavaScript"
        ],
        answer: 0,
        explanation:
          "GitHub يوفر Remote hosting وأدوات collaboration."
      },
      {
        question: "هل تحتاج الإنترنت لعمل git commit محليًا؟",
        options: [
          "نعم دائمًا",
          "لا",
          "فقط في Linux",
          "فقط في Windows"
        ],
        answer: 1,
        explanation:
          "الـ Commit المحلي لا يحتاج الإنترنت."
      }
    ]
  },

  {
    id: "install-git",
    module: "01 — الأساسيات",
    course: "Git",
    level: "Beginner",
    duration: "8 دقائق",
    title: "تثبيت Git والتحقق منه",
    summary:
      "جهّز بيئة العمل وتأكد أن Git يعمل بشكل صحيح قبل البدء.",
    objectives: [
      "التأكد من وجود Git",
      "فهم Git version",
      "معرفة أين تستخدم Terminal",
      "تجهيز بيئة العمل"
    ],
    sections: [
      {
        heading: "تحقق أولًا",
        paragraphs: [
          "بعد تثبيت Git افتح Terminal أو PowerShell أو Git Bash واكتب الأمر الخاص بالإصدار. إذا ظهر رقم الإصدار فهذا يعني أن Git متاح.",
          "الأوامر نفسها تقريبًا تعمل على Windows وmacOS وLinux، لكن طريقة فتح الطرفية تختلف."
        ]
      },
      {
        heading: "لماذا Terminal؟",
        paragraphs: [
          "Git في الأساس أداة Command Line. وجود واجهات رسومية مثل GitHub Desktop مفيد، لكن فهم الأوامر يجعلك قادرًا على العمل في أي بيئة تقريبًا.",
          "في Fayad Code سنتعلم الأمر أولًا، ثم نفهم ما الذي يحدث خلفه."
        ]
      }
    ],
    commands: [
      {
        command: "git --version",
        explanation: "يعرض إصدار Git."
      },
      {
        command: "git --help",
        explanation: "يعرض المساعدة."
      }
    ],
    quiz: [
      {
        question: "ما الأمر الذي يعرض إصدار Git؟",
        options: [
          "git version",
          "git --version",
          "git install",
          "git start"
        ],
        answer: 1,
        explanation: "git --version هو الأمر الشائع للتحقق من الإصدار."
      },
      {
        question: "هل GUI يغني عن فهم Git؟",
        options: [
          "نعم دائمًا",
          "لا، فهم الأوامر والمفاهيم مهم",
          "فقط للمبتدئين",
          "فقط للمحترفين"
        ],
        answer: 1,
        explanation:
          "الواجهات الرسومية أدوات مساعدة وليست بديلًا لفهم Git."
      }
    ]
  },

  {
    id: "git-config",
    module: "01 — الأساسيات",
    course: "Git",
    level: "Beginner",
    duration: "10 دقائق",
    title: "إعداد Git لأول مرة",
    summary:
      "اضبط اسمك وبريدك الإلكتروني وبعض الإعدادات الأساسية التي تظهر في تاريخ الـ Commits.",
    objectives: [
      "ضبط user.name",
      "ضبط user.email",
      "فهم Global Configuration",
      "قراءة إعدادات Git"
    ],
    sections: [
      {
        heading: "لماذا الاسم والبريد؟",
        paragraphs: [
          "كل Commit يحتوي على معلومات عن صاحبه. لذلك يحتاج Git إلى اسم وبريد إلكتروني يستخدمهما في Author metadata.",
          "يمكنك وضع الإعداد على مستوى الجهاز كله أو على مستوى Repository محدد."
        ]
      },
      {
        heading: "Global أم Local؟",
        paragraphs: [
          "عند استخدام --global يصبح الإعداد افتراضيًا للمستودعات التي تعمل عليها. أما بدون --global فيمكنك تخصيص الإعداد لمشروع واحد.",
          "هذه النقطة مهمة جدًا إذا كنت تعمل بحسابات متعددة أو بمشاريع لها إعدادات مختلفة."
        ]
      }
    ],
    commands: [
      {
        command: 'git config --global user.name "Your Name"',
        explanation: "يضبط الاسم الافتراضي."
      },
      {
        command: 'git config --global user.email "you@example.com"',
        explanation: "يضبط البريد الافتراضي."
      },
      {
        command: "git config --list",
        explanation: "يعرض إعدادات Git."
      }
    ],
    quiz: [
      {
        question: "ماذا يفعل --global؟",
        options: [
          "يحذف Git",
          "يطبق الإعداد على مستوى المستخدم",
          "يرفع المشروع",
          "ينشئ Branch"
        ],
        answer: 1,
        explanation:
          "--global يجعل الإعداد افتراضيًا للمستودعات على الجهاز."
      },
      {
        question: "لماذا يحتاج Commit إلى user.name وuser.email؟",
        options: [
          "لتحديد صاحب الـ Commit",
          "لتشغيل GitHub",
          "لتغيير لون Terminal",
          "لتثبيت Git"
        ],
        answer: 0,
        explanation:
          "هذه البيانات تدخل ضمن Author metadata الخاصة بالـ Commit."
      }
    ]
  },


  /* =======================================================
     MODULE 02 — REPOSITORIES
  ======================================================= */

  {
    id: "repository-concept",
    module: "02 — المستودعات والتغييرات",
    course: "Git",
    level: "Beginner",
    duration: "10 دقائق",
    title: "ما هو Repository؟",
    summary:
      "افهم معنى Git Repository وما الذي يجعل مجلد المشروع يتحول إلى مشروع تتم إدارته بواسطة Git.",
    objectives: [
      "فهم Repository",
      "معرفة مجلد .git",
      "تمييز المشروع عن Repository",
      "فهم تاريخ المشروع"
    ],
    sections: [
      {
        heading: "Repository ليس مجرد Folder",
        paragraphs: [
          "المشروع قد يكون مجرد ملفات HTML وCSS وJavaScript، لكن عندما تستخدم git init يصبح للمجلد Git Repository خاص به.",
          "Git يخزن المعلومات الداخلية داخل مجلد مخفي يسمى .git. هذا المجلد يحتوي على بيانات التاريخ والـ References والـ Objects."
        ]
      },
      {
        heading: "احذر من حذف .git",
        paragraphs: [
          "إذا حذفت مجلد .git فأنت لا تحذف ملفات المشروع نفسها، لكنك تزيل تاريخ Git المحلي وإعداداته الخاصة بالمستودع.",
          "لذلك لا تعبث بمحتويات .git يدويًا إلا إذا كنت تعرف بالضبط ماذا تفعل."
        ]
      }
    ],
    commands: [
      {
        command: "git init",
        explanation: "يحول المجلد الحالي إلى Git Repository."
      },
      {
        command: "ls -la",
        explanation: "على Unix-like systems يعرض الملفات المخفية ومنها .git."
      }
    ],
    quiz: [
      {
        question: "ما الذي ينشئ Repository جديدًا؟",
        options: [
          "git init",
          "git start",
          "git repo",
          "git create"
        ],
        answer: 0,
        explanation: "git init ينشئ Git metadata داخل المجلد."
      },
      {
        question: "أين يخزن Git بيانات المستودع المحلية؟",
        options: [
          ".git",
          ".github.com",
          "index.html",
          "README"
        ],
        answer: 0,
        explanation: "مجلد .git يحتوي بيانات Repository."
      }
    ]
  },

  {
    id: "git-init",
    module: "02 — المستودعات والتغييرات",
    course: "Git",
    level: "Beginner",
    duration: "9 دقائق",
    title: "git init عمليًا",
    summary:
      "أنشئ أول Repository محلي وافهم ماذا يحدث بعد تنفيذ الأمر.",
    objectives: [
      "إنشاء Repository",
      "قراءة نتيجة git init",
      "فهم الفرع الافتراضي",
      "التحقق من الحالة"
    ],
    sections: [
      {
        heading: "ابدأ بمشروع حقيقي",
        paragraphs: [
          "أنشئ مجلدًا جديدًا لمشروع صغير ثم افتح Terminal داخله. تنفيذ git init في هذا المكان يجعل Git يعتبر هذا المجلد Working Repository.",
          "بعدها يمكنك استخدام git status لمعرفة حالة الملفات."
        ]
      }
    ],
    commands: [
      {
        command: "mkdir my-project",
        explanation: "ينشئ مجلد مشروع في البيئات التي تدعم الأمر."
      },
      {
        command: "cd my-project",
        explanation: "يدخل إلى المجلد."
      },
      {
        command: "git init",
        explanation: "ينشئ Repository."
      },
      {
        command: "git status",
        explanation: "يعرض الحالة الحالية."
      }
    ],
    quiz: [
      {
        question: "أين يجب تنفيذ git init؟",
        options: [
          "داخل مجلد المشروع",
          "داخل المتصفح",
          "داخل GitHub فقط",
          "داخل .git"
        ],
        answer: 0,
        explanation: "تنفذه في المجلد الذي تريد إدارته بواسطة Git."
      },
      {
        question: "ماذا تفعل بعد init للتحقق من الحالة؟",
        options: [
          "git status",
          "git check",
          "git verify",
          "git state"
        ],
        answer: 0,
        explanation: "git status يعطيك حالة Working Tree."
      }
    ]
  },

  {
    id: "three-areas",
    module: "02 — المستودعات والتغييرات",
    course: "Git",
    level: "Beginner",
    duration: "13 دقيقة",
    title: "Working Tree وStaging Area وRepository",
    summary:
      "هذا من أهم الدروس في Git: افهم أين توجد تغييراتك قبل أن تفهم add وcommit.",
    objectives: [
      "فهم Working Tree",
      "فهم Staging Area",
      "فهم Repository",
      "فهم انتقال التغيير بين المراحل"
    ],
    sections: [
      {
        heading: "المراحل الثلاث",
        paragraphs: [
          "Working Tree هو الملفات التي تعمل عليها الآن. عندما تعدل ملفًا يظهر التغيير في Working Tree.",
          "Staging Area هي المنطقة التي تختار فيها ما الذي سيدخل في الـ Commit القادم. وبعد تنفيذ commit تنتقل الحالة المسجلة إلى Repository history."
        ]
      },
      {
        heading: "لماذا توجد Staging Area؟",
        paragraphs: [
          "وجود Staging Area يسمح لك بعمل Commit منطقي بدلًا من تسجيل كل شيء دفعة واحدة. يمكن أن يكون لديك خمسة ملفات معدلة لكنك تريد Commit لملفين فقط.",
          "هذا يجعلك تتحكم في معنى كل Commit ويجعل History أسهل للفهم."
        ]
      }
    ],
    commands: [
      {
        command: "git status",
        explanation: "يعرض الفرق بين الحالة الحالية والمحفوظة."
      },
      {
        command: "git add index.html",
        explanation: "ينقل تغييرات ملف إلى Staging Area."
      },
      {
        command: "git add .",
        explanation: "يضيف التغييرات المناسبة من المجلد الحالي إلى Staging."
      },
      {
        command: 'git commit -m "message"',
        explanation: "يسجل staged changes في History."
      }
    ],
    quiz: [
      {
        question: "أين توجد تعديلاتك قبل git add؟",
        options: [
          "Working Tree",
          "Remote",
          "GitHub",
          "Tag"
        ],
        answer: 0,
        explanation: "التعديل يبدأ في Working Tree."
      },
      {
        question: "ما وظيفة git add؟",
        options: [
          "رفع المشروع",
          "إضافة التغييرات إلى Staging",
          "حذف Branch",
          "إنشاء GitHub"
        ],
        answer: 1,
        explanation: "git add يجهز التغييرات للـ Commit."
      },
      {
        question: "ما وظيفة git commit؟",
        options: [
          "حفظ staged snapshot في التاريخ",
          "فتح GitHub",
          "إنشاء ملف",
          "تحميل Node.js"
        ],
        answer: 0,
        explanation: "Commit يسجل الحالة staged في تاريخ المستودع."
      }
    ]
  },

  {
    id: "git-status",
    module: "02 — المستودعات والتغييرات",
    course: "Git",
    level: "Beginner",
    duration: "10 دقائق",
    title: "إتقان git status",
    summary:
      "اجعل git status أول أمر تفكر فيه عندما لا تعرف ماذا يحدث في مشروعك.",
    objectives: [
      "قراءة حالة الملفات",
      "فهم Untracked",
      "فهم Modified",
      "فهم Staged"
    ],
    sections: [
      {
        heading: "لغة Git في status",
        paragraphs: [
          "إذا كان الملف جديدًا ولم يتتبعه Git فسيظهر كـ Untracked. إذا عدلت ملفًا متتبعًا فسيظهر Modified.",
          "بعد git add ينتقل التغيير إلى Staged، ويصبح جاهزًا للدخول في Commit."
        ]
      }
    ],
    commands: [
      {
        command: "git status",
        explanation: "الأمر الأساسي لقراءة حالة المشروع."
      },
      {
        command: "git status --short",
        explanation: "يعرض نسخة مختصرة من الحالة."
      }
    ],
    quiz: [
      {
        question: "ما معنى Untracked؟",
        options: [
          "ملف جديد لا يتتبعه Git بعد",
          "ملف تم رفعه",
          "Branch محذوف",
          "Commit فارغ"
        ],
        answer: 0,
        explanation: "Git يرى الملف لكنه لم يضعه ضمن الملفات المتتبعة."
      },
      {
        question: "ما معنى Staged؟",
        options: [
          "التغيير جاهز للـ Commit",
          "التغيير محذوف",
          "المشروع على GitHub",
          "الفرع مغلق"
        ],
        answer: 0,
        explanation: "Staged يعني أن التغيير موجود في Index/Staging Area."
      }
    ]
  },


  /* =======================================================
     MODULE 03 — COMMITS & HISTORY
  ======================================================= */

  {
    id: "git-add",
    module: "03 — Commits وHistory",
    course: "Git",
    level: "Beginner",
    duration: "10 دقائق",
    title: "git add باحتراف",
    summary:
      "تعلم كيف تختار بالضبط ما يدخل في الـ Commit بدلًا من إضافة كل شيء بشكل أعمى.",
    objectives: [
      "إضافة ملف واحد",
      "إضافة مجموعة ملفات",
      "فهم git add .",
      "التمييز بين Working Tree وIndex"
    ],
    sections: [
      {
        heading: "الإضافة الانتقائية",
        paragraphs: [
          "يمكنك تنفيذ git add على ملف محدد. هذه الطريقة ممتازة عندما يحتوي المشروع على أكثر من تغيير غير مرتبط ببعضه.",
          "استخدام git add . سريع جدًا، لكنه لا يعني أن عليك استخدامه دائمًا. المطور المحترف يهتم بما يدخل كل Commit."
        ]
      }
    ],
    commands: [
      {
        command: "git add app.js",
        explanation: "يضيف ملفًا محددًا."
      },
      {
        command: "git add src/",
        explanation: "يضيف تغييرات داخل مجلد."
      },
      {
        command: "git add .",
        explanation: "يضيف التغييرات ضمن المسار الحالي."
      }
    ],
    quiz: [
      {
        question: "هل git add ينشئ Commit؟",
        options: [
          "نعم",
          "لا",
          "فقط على GitHub",
          "فقط في Windows"
        ],
        answer: 1,
        explanation: "git add يجهز التغيير فقط."
      },
      {
        question: "متى يكون إضافة ملف محدد مفيدة؟",
        options: [
          "عندما تريد Commit مركزًا",
          "عندما تريد حذف Git",
          "عندما تريد إنشاء Remote",
          "عندما تريد تثبيت Git"
        ],
        answer: 0,
        explanation: "الإضافة الانتقائية تساعد على تنظيم History."
      }
    ]
  },

  {
    id: "git-commit",
    module: "03 — Commits وHistory",
    course: "Git",
    level: "Beginner",
    duration: "12 دقيقة",
    title: "كيف تكتب Commit جيدًا؟",
    summary:
      "تعلم ما الذي يجعل Commit مفيدًا وكيف تكتب رسائل واضحة بدلًا من commit أو final أو update.",
    objectives: [
      "فهم Commit",
      "كتابة Commit message",
      "فهم Atomic Commit",
      "تنظيم History"
    ],
    sections: [
      {
        heading: "Commit ليس Save فقط",
        paragraphs: [
          "الـ Commit نقطة منطقية في تاريخ المشروع. الهدف ليس فقط أن تحفظ الملفات، بل أن تسجل تغييرًا له معنى.",
          "Commit مثل Add login form أو Fix navbar overflow أو Update Git lesson أفضل بكثير من messages مثل update أو final."
        ]
      },
      {
        heading: "Atomic Commits",
        paragraphs: [
          "حاول أن يكون كل Commit مرتبطًا بفكرة واضحة. إذا أضفت Login وفي نفس الوقت غيرت ألوان الموقع وأصلحت مشكلة unrelated، قد يكون من الأفضل فصل هذه الأعمال.",
          "هذا يجعل مراجعة الكود وقراءة History وعمليات Revert أسهل."
        ]
      }
    ],
    commands: [
      {
        command: 'git commit -m "feat: add login form"',
        explanation: "ينشئ Commit برسالة واضحة."
      },
      {
        command: "git commit",
        explanation: "يفتح محرر الرسالة حسب إعدادات البيئة."
      }
    ],
    quiz: [
      {
        question: "ما أفضل وصف للـ Commit؟",
        options: [
          "نقطة منطقية في تاريخ المشروع",
          "نسخة من المتصفح",
          "Remote server",
          "ملف CSS"
        ],
        answer: 0,
        explanation: "Commit يسجل Snapshot من التغييرات staged."
      },
      {
        question: "أي رسالة أفضل؟",
        options: [
          "update",
          "final",
          "fix: prevent duplicate form submit",
          "test123"
        ],
        answer: 2,
        explanation: "الرسالة الجيدة تصف التغيير بوضوح."
      },
      {
        question: "ما المقصود بـ Atomic Commit؟",
        options: [
          "Commit ذو معنى واحد واضح",
          "Commit بدون ملفات",
          "Commit على GitHub فقط",
          "Commit يتم حذفه تلقائيًا"
        ],
        answer: 0,
        explanation: "الفكرة هي إبقاء كل Commit مركزًا على تغيير منطقي."
      }
    ]
  },

  {
    id: "git-log",
    module: "03 — Commits وHistory",
    course: "Git",
    level: "Beginner",
    duration: "11 دقيقة",
    title: "قراءة تاريخ المشروع باستخدام git log",
    summary:
      "تعلّم كيف تستكشف History بدلًا من التخمين عندما يحدث خطأ.",
    objectives: [
      "قراءة Commit history",
      "استخدام oneline",
      "فهم hash",
      "قراءة Graph"
    ],
    sections: [
      {
        heading: "History هو مصدر الحقيقة",
        paragraphs: [
          "عندما لا تعرف من أين جاء التغيير، لا تبدأ بتخمين. ابدأ بقراءة History. Git يستطيع عرض الـ Commit messages والـ authors والتواريخ والـ hashes.",
          "الـ Hash يميز Commit معينًا ويمكن استخدامه للإشارة إليه."
        ]
      }
    ],
    commands: [
      {
        command: "git log",
        explanation: "يعرض التاريخ التفصيلي."
      },
      {
        command: "git log --oneline",
        explanation: "يعرض Commits في صورة مختصرة."
      },
      {
        command: "git log --oneline --graph --decorate --all",
        explanation: "يعرض شكل الفروع والتاريخ بصورة بصرية داخل Terminal."
      }
    ],
    quiz: [
      {
        question: "ما فائدة git log؟",
        options: [
          "قراءة تاريخ Commits",
          "إنشاء HTML",
          "رفع الملفات",
          "تثبيت Git"
        ],
        answer: 0,
        explanation: "git log يعرض Commit history."
      },
      {
        question: "ما فائدة --oneline؟",
        options: [
          "عرض مختصر للـ Commits",
          "حذف التاريخ",
          "رفع GitHub",
          "إنشاء Branch"
        ],
        answer: 0,
        explanation: "يعرض كل Commit في سطر مختصر."
      }
    ]
  },

  {
    id: "git-show-diff",
    module: "03 — Commits وHistory",
    course: "Git",
    level: "Beginner",
    duration: "13 دقيقة",
    title: "git diff وفهم التغييرات",
    summary:
      "قارن بين الحالات المختلفة قبل أن تعمل Commit.",
    objectives: [
      "قراءة diff",
      "معرفة التغيير غير staged",
      "معرفة staged diff",
      "مراجعة التغييرات قبل Commit"
    ],
    sections: [
      {
        heading: "لا تعمل Commit وأنت لا تعرف ماذا ستسجل",
        paragraphs: [
          "git diff يعرض التغييرات الموجودة في Working Tree مقارنة بالحالة staged أو الحالية حسب الاستخدام.",
          "قبل Commit مهم جدًا أن تراجع التغييرات، خصوصًا في المشاريع الكبيرة، لأنك قد تكون أضفت ملفًا أو سطرًا بالخطأ."
        ]
      }
    ],
    commands: [
      {
        command: "git diff",
        explanation: "يعرض تغييرات غير staged."
      },
      {
        command: "git diff --staged",
        explanation: "يعرض ما تم وضعه في Staging."
      },
      {
        command: "git show HEAD",
        explanation: "يعرض تفاصيل Commit المشار إليه بـ HEAD."
      }
    ],
    quiz: [
      {
        question: "ما وظيفة git diff؟",
        options: [
          "عرض الفروقات",
          "إنشاء Remote",
          "تثبيت Git",
          "فتح GitHub"
        ],
        answer: 0,
        explanation: "diff أداة أساسية لفهم ما تغير."
      },
      {
        question: "ما الذي يعرضه git diff --staged؟",
        options: [
          "التغييرات الموجودة في Staging",
          "كل GitHub",
          "الفروع المحذوفة",
          "الملفات غير المتتبعة فقط"
        ],
        answer: 0,
        explanation: "يعرض الفرق بين staged state وHEAD."
      }
    ]
  },

  {
    id: "gitignore",
    module: "03 — Commits وHistory",
    course: "Git",
    level: "Beginner",
    duration: "12 دقيقة",
    title: ".gitignore ولماذا لا نرفع كل شيء؟",
    summary:
      "تعلم كيف تمنع ملفات معينة من الدخول في Repository مثل node_modules والملفات السرية والملفات المؤقتة.",
    objectives: [
      "فهم .gitignore",
      "استبعاد الملفات",
      "حماية secrets",
      "تنظيم Repository"
    ],
    sections: [
      {
        heading: "ليست كل الملفات مناسبة لـ Git",
        paragraphs: [
          "بعض الملفات يتم توليدها تلقائيًا أو لا نريد تخزينها في Repository. مثال واضح هو node_modules في مشاريع Node.js.",
          "كذلك ملفات البيئة التي تحتوي على API keys أو كلمات مرور لا يجب أن تدخل Repository."
        ]
      },
      {
        heading: "قاعدة مهمة",
        paragraphs: [
          "وجود اسم ملف في .gitignore لا يعني أنه سيخرج تلقائيًا من Git إذا كان tracked بالفعل. الملفات التي تم تتبعها تحتاج معالجة منفصلة.",
          "لا تضع secrets الحقيقية في Repository ثم تعتمد على .gitignore بعد ذلك."
        ]
      }
    ],
    commands: [
      {
        command: "touch .gitignore",
        explanation: "ينشئ ملف .gitignore في البيئات التي تدعم touch."
      },
      {
        command: "git status --ignored",
        explanation: "يساعد على رؤية الملفات التي يتم تجاهلها."
      }
    ],
    example: {
      title: "مثال",
      text:
        "في مشروع Node.js يمكن أن يحتوي .gitignore على node_modules/ و.env وdist/ حسب طبيعة المشروع."
    },
    quiz: [
      {
        question: "ما وظيفة .gitignore؟",
        options: [
          "منع ملفات محددة من التتبع",
          "حذف Git",
          "إنشاء Branch",
          "رفع المشروع"
        ],
        answer: 0,
        explanation: ".gitignore يحدد أنماط الملفات التي لا يريد Git تتبعها."
      },
      {
        question: "هل .gitignore يحذف secret تم Commit له سابقًا؟",
        options: [
          "نعم تلقائيًا",
          "لا",
          "فقط على GitHub",
          "فقط بعد reboot"
        ],
        answer: 1,
        explanation:
          "إذا دخل secret في History بالفعل فالمشكلة تحتاج معالجة وتنظيف التاريخ وتدوير السر."
      },
      {
        question: "أي ملف غالبًا لا نريد رفعه في Node project؟",
        options: [
          "package.json",
          "src/app.js",
          "node_modules/",
          "README.md"
        ],
        answer: 2,
        explanation: "node_modules يتم توليده من dependencies."
      }
    ]
  },


  /* =======================================================
     MODULE 04 — UNDO
  ======================================================= */

  {
    id: "git-restore",
    module: "04 — التراجع والإصلاح",
    course: "Git",
    level: "Beginner",
    duration: "12 دقيقة",
    title: "التراجع عن تعديل باستخدام git restore",
    summary:
      "تعلم كيف تتراجع عن تعديل غير staged بأمان نسبيًا.",
    objectives: [
      "فهم restore",
      "التراجع عن Working Tree",
      "فهم خطورة حذف التعديل",
      "التمييز بين restore وreset"
    ],
    sections: [
      {
        heading: "قبل Commit",
        paragraphs: [
          "إذا عدلت ملفًا ثم قررت أن التعديل غير مطلوب، يستطيع git restore إعادة الملف إلى الحالة الموجودة في الـ index أو آخر Commit حسب الحالة.",
          "يجب الانتباه لأن هذا قد يؤدي إلى فقدان التعديل المحلي."
        ]
      }
    ],
    commands: [
      {
        command: "git restore file.js",
        explanation: "يعيد الملف إلى الحالة staged/المعروفة حسب السياق."
      },
      {
        command: "git restore --staged file.js",
        explanation: "يزيل الملف من Staging مع إبقاء تعديل Working Tree."
      }
    ],
    quiz: [
      {
        question: "متى يفيد git restore؟",
        options: [
          "التراجع عن تغييرات ملف",
          "إنشاء GitHub",
          "رفع Branch",
          "إنشاء Tag فقط"
        ],
        answer: 0,
        explanation: "restore يستخدم لاستعادة محتوى الملفات أو إزالة staging."
      },
      {
        question: "ماذا يفعل restore --staged؟",
        options: [
          "يفك staging",
          "يحذف Git",
          "يحذف Remote",
          "يرفع الملف"
        ],
        answer: 0,
        explanation: "يعيد الملف من staged إلى working state مع إبقاء التعديل."
      }
    ]
  },

  {
    id: "git-amend",
    module: "04 — التراجع والإصلاح",
    course: "Git",
    level: "Beginner",
    duration: "10 دقائق",
    title: "تصحيح آخر Commit باستخدام amend",
    summary:
      "ماذا تفعل إذا نسيت ملفًا أو كتبت Commit message غير صحيحة؟",
    objectives: [
      "فهم --amend",
      "إضافة ملف للـ Commit السابق",
      "تعديل الرسالة",
      "معرفة خطر تعديل تاريخ منشور"
    ],
    sections: [
      {
        heading: "آخر Commit فقط",
        paragraphs: [
          "git commit --amend يسمح لك بإعادة بناء آخر Commit بدل إنشاء Commit جديد في بعض الحالات.",
          "قد تستخدمه لإضافة ملف نسيته أو تعديل الرسالة قبل مشاركة التاريخ مع الآخرين."
        ]
      },
      {
        heading: "انتبه للتاريخ المنشور",
        paragraphs: [
          "Amend يعيد كتابة آخر Commit. إذا كان الـ Commit قد تم دفعه بالفعل ويعمل عليه أشخاص آخرون، لا تستخدم إعادة كتابة التاريخ بلا فهم للعواقب."
        ]
      }
    ],
    commands: [
      {
        command: "git add forgotten-file.js",
        explanation: "جهز الملف الذي نسيته."
      },
      {
        command: "git commit --amend --no-edit",
        explanation: "أضف التغيير إلى آخر Commit بدون تغيير الرسالة."
      }
    ],
    quiz: [
      {
        question: "ماذا يعالج amend غالبًا؟",
        options: [
          "آخر Commit",
          "كل تاريخ Git",
          "GitHub Account",
          "Remote server"
        ],
        answer: 0,
        explanation: "amend مخصص لتعديل آخر Commit."
      },
      {
        question: "هل إعادة كتابة تاريخ منشور آمنة دائمًا؟",
        options: [
          "نعم",
          "لا",
          "فقط في CSS",
          "فقط على Linux"
        ],
        answer: 1,
        explanation: "تغيير تاريخ مشترك قد يسبب مشاكل للمتعاونين."
      }
    ]
  },

  {
    id: "git-reset",
    module: "04 — التراجع والإصلاح",
    course: "Git",
    level: "Intermediate",
    duration: "15 دقيقة",
    title: "git reset وفهم HEAD وIndex",
    summary:
      "تعلم واحدة من أكثر أدوات Git التي تسبب ارتباكًا للمبتدئين.",
    objectives: [
      "فهم HEAD",
      "فهم reset",
      "الفرق بين soft وmixed وhard",
      "فهم خطورة reset --hard"
    ],
    sections: [
      {
        heading: "ما الذي يحركه reset؟",
        paragraphs: [
          "git reset يستطيع تحريك HEAD وBranch reference وتغيير حالة الـ Index، ومع --hard يستطيع أيضًا جعل Working Tree مطابقًا للحالة الجديدة.",
          "لهذا السبب يجب عدم استخدام reset --hard بشكل عشوائي."
        ]
      },
      {
        heading: "الأنواع الأساسية",
        paragraphs: [
          "soft يحرك HEAD ويترك التغييرات staged. mixed هو الافتراضي ويعيد staging مع إبقاء تعديلات Working Tree. hard يجعل الملفات تتطابق مع الحالة الجديدة وقد يفقد تعديلات محلية.",
          "في المشاريع المشتركة، إعادة كتابة التاريخ تحتاج حذرًا شديدًا."
        ]
      }
    ],
    commands: [
      {
        command: "git reset --soft HEAD~1",
        explanation: "يتراجع عن آخر Commit مع إبقاء التغييرات staged."
      },
      {
        command: "git reset HEAD~1",
        explanation: "mixed افتراضيًا؛ يزيل Commit ويترك تعديلات Working Tree."
      },
      {
        command: "git reset --hard HEAD~1",
        explanation: "يعيد HEAD وIndex وWorking Tree للحالة السابقة؛ خطر على التعديلات المحلية."
      }
    ],
    quiz: [
      {
        question: "أي reset يحافظ على التغييرات staged؟",
        options: [
          "--soft",
          "--hard",
          "--delete",
          "--remote"
        ],
        answer: 0,
        explanation: "soft يحرك HEAD ويترك Index كما هو."
      },
      {
        question: "أي خيار شديد الخطورة على التعديلات المحلية؟",
        options: [
          "--soft",
          "--hard",
          "--info",
          "--safe"
        ],
        answer: 1,
        explanation: "hard يجعل Working Tree يطابق الهدف."
      },
      {
        question: "ما الذي يمثل HEAD غالبًا؟",
        options: [
          "موضع العمل الحالي في تاريخ Git",
          "اسم الكمبيوتر",
          "GitHub password",
          "اسم الملف"
        ],
        answer: 0,
        explanation: "HEAD يشير إلى المرجع/Commit الذي تعمل انطلاقًا منه."
      }
    ]
  },

  {
    id: "git-revert",
    module: "04 — التراجع والإصلاح",
    course: "Git",
    level: "Intermediate",
    duration: "12 دقيقة",
    title: "git revert: التراجع الآمن في التاريخ المشترك",
    summary:
      "افهم لماذا يكون revert غالبًا أنسب من reset عندما يكون الـ Commit منشورًا.",
    objectives: [
      "فهم revert",
      "التراجع بدون حذف التاريخ",
      "الفرق بين reset وrevert",
      "استخدام revert في shared history"
    ],
    sections: [
      {
        heading: "Revert ينشئ Commit جديدًا",
        paragraphs: [
          "بدل تحريك التاريخ إلى الخلف، git revert ينشئ Commit جديدًا يعكس التغييرات التي قام بها Commit سابق.",
          "هذا يحافظ على History الموجود ويجعل عملية التراجع واضحة للمتعاونين."
        ]
      }
    ],
    commands: [
      {
        command: "git revert <commit>",
        explanation: "ينشئ Commit يعكس تغيير Commit محدد."
      }
    ],
    quiz: [
      {
        question: "هل revert يحذف Commit القديم؟",
        options: [
          "نعم",
          "لا",
          "فقط على GitHub",
          "فقط إذا كان merge"
        ],
        answer: 1,
        explanation: "revert يضيف Commit جديدًا يعكس السابق."
      },
      {
        question: "متى يكون revert مناسبًا؟",
        options: [
          "عند التراجع عن تغيير منشور",
          "لتثبيت Git",
          "لإنشاء HTML",
          "لفتح Terminal"
        ],
        answer: 0,
        explanation: "يحافظ على التاريخ ويجعل التراجع جزءًا من History."
      }
    ]
  },


  /* =======================================================
     MODULE 05 — BRANCHING
  ======================================================= */

  {
    id: "git-branches",
    module: "05 — Branching",
    course: "Git",
    level: "Beginner",
    duration: "13 دقيقة",
    title: "ما هو Branch؟",
    summary:
      "افهم Branch كمرجع خفيف يسمح لك بالعمل على Feature بدون العبث بالخط الرئيسي.",
    objectives: [
      "فهم Branch",
      "فهم HEAD",
      "فهم main",
      "معرفة لماذا نستخدم الفروع"
    ],
    sections: [
      {
        heading: "Branch ليس نسخة كاملة من المشروع",
        paragraphs: [
          "في Git الـ Branch هو Reference يشير إلى Commit. إنشاء Branch عملية خفيفة جدًا مقارنة بفكرة نسخ المشروع بالكامل.",
          "لهذا يمكن للمطور إنشاء Branch لكل Feature أو Bugfix والعمل عليه بشكل مستقل."
        ]
      },
      {
        heading: "فكرة العزل",
        paragraphs: [
          "إذا كان main يحتوي على نسخة مستقرة، يمكنك إنشاء feature/login والعمل عليها دون خلطها مباشرة مع main.",
          "بعد انتهاء العمل يمكن مراجعة التغييرات ثم Merge أو Pull Request."
        ]
      }
    ],
    commands: [
      {
        command: "git branch",
        explanation: "يعرض الفروع المحلية."
      },
      {
        command: "git switch -c feature/login",
        explanation: "ينشئ Branch جديدًا وينتقل إليه."
      }
    ],
    quiz: [
      {
        question: "ما الهدف الأساسي من Branch؟",
        options: [
          "عزل مسار تطوير",
          "زيادة حجم المشروع",
          "تثبيت Git",
          "تغيير لغة البرمجة"
        ],
        answer: 0,
        explanation: "Branch يسمح بمسارات تطوير مستقلة."
      },
      {
        question: "هل Branch هو نسخة كاملة منفصلة من كل الملفات؟",
        options: [
          "نعم",
          "لا",
          "فقط في GitHub",
          "فقط في Windows"
        ],
        answer: 1,
        explanation: "Branch هو reference خفيف في نموذج Git."
      }
    ]
  },

  {
    id: "git-switch",
    module: "05 — Branching",
    course: "Git",
    level: "Beginner",
    duration: "10 دقائق",
    title: "git switch وإنشاء الفروع",
    summary:
      "تعلم الطريقة الحديثة نسبيًا للتعامل مع Branches بدل الاعتماد على checkout لكل شيء.",
    objectives: [
      "إنشاء Branch",
      "التبديل بين Branches",
      "فهم switch",
      "معرفة switch -c"
    ],
    sections: [
      {
        heading: "إنشاء فرع",
        paragraphs: [
          "الأمر git switch -c feature/navbar ينشئ Branch جديدًا ثم يجعله هو الفرع الحالي.",
          "أما git switch main فيعيدك إلى main."
        ]
      }
    ],
    commands: [
      {
        command: "git switch main",
        explanation: "ينتقل إلى main."
      },
      {
        command: "git switch -c feature/navbar",
        explanation: "ينشئ feature/navbar وينتقل إليه."
      },
      {
        command: "git switch -",
        explanation: "يعود إلى الفرع السابق."
      }
    ],
    quiz: [
      {
        question: "ما وظيفة switch -c؟",
        options: [
          "إنشاء Branch والتبديل إليه",
          "حذف Branch",
          "رفع Branch",
          "نسخ Repository"
        ],
        answer: 0,
        explanation: "-c تعني create."
      },
      {
        question: "ما فائدة git switch -؟",
        options: [
          "العودة للفرع السابق",
          "حذف الفرع",
          "فتح GitHub",
          "إنشاء Commit"
        ],
        answer: 0,
        explanation: "switch - يعود إلى آخر Branch كنت عليه."
      }
    ]
  },

  {
    id: "branch-management",
    module: "05 — Branching",
    course: "Git",
    level: "Intermediate",
    duration: "12 دقيقة",
    title: "إدارة الفروع وحذفها",
    summary:
      "تعلم كيف تعرف الفروع التي تم دمجها والتي ما زالت تحتوي على عمل.",
    objectives: [
      "قراءة الفروع",
      "حذف Branch",
      "معرفة merged branches",
      "تجنب حذف العمل غير المدمج"
    ],
    sections: [
      {
        heading: "Branch hygiene",
        paragraphs: [
          "مع الوقت قد يصبح Repository مليئًا بالفروع القديمة. تنظيف الفروع بعد دمجها يجعل المشروع أسهل في الإدارة.",
          "لكن لا تحذف Branch يحتوي على عمل لم يتم دمجه إلا إذا كنت متأكدًا أنك لا تحتاجه."
        ]
      }
    ],
    commands: [
      {
        command: "git branch",
        explanation: "يعرض الفروع."
      },
      {
        command: "git branch --merged",
        explanation: "يعرض الفروع المدمجة."
      },
      {
        command: "git branch -d feature/login",
        explanation: "يحذف Branch بعد التحقق من الدمج."
      },
      {
        command: "git branch -D feature/login",
        explanation: "حذف إجباري؛ استخدمه بحذر."
      }
    ],
    quiz: [
      {
        question: "ما وظيفة --merged؟",
        options: [
          "عرض الفروع المدمجة",
          "دمج كل الفروع",
          "رفع الفروع",
          "إنشاء Commit"
        ],
        answer: 0,
        explanation: "يعرض الفروع التي تم دمجها في الفرع الحالي."
      },
      {
        question: "أي حذف أكثر أمانًا؟",
        options: [
          "-d",
          "-D",
          "--destroy",
          "--hard-delete"
        ],
        answer: 0,
        explanation: "-d يتحقق من حالة الدمج."
      }
    ]
  },

  {
    id: "git-merge",
    module: "05 — Branching",
    course: "Git",
    level: "Intermediate",
    duration: "15 دقيقة",
    title: "Merge: دمج فرعين",
    summary:
      "تعلم كيف تجمع عمل Feature Branch داخل الفرع الرئيسي.",
    objectives: [
      "فهم Merge",
      "تنفيذ Fast-forward",
      "فهم Merge Commit",
      "معرفة Merge base"
    ],
    sections: [
      {
        heading: "العملية",
        paragraphs: [
          "عادة تنتقل إلى الفرع الذي تريد إدخال التغييرات إليه ثم تنفذ git merge branch-name.",
          "إذا كان التاريخ يسمح فقد يحدث Fast-forward، وإذا كانت هناك تفرعات حقيقية فقد ينشئ Git Merge Commit."
        ]
      }
    ],
    commands: [
      {
        command: "git switch main",
        explanation: "انتقل إلى الفرع الهدف."
      },
      {
        command: "git merge feature/login",
        explanation: "ادمج feature/login في الفرع الحالي."
      }
    ],
    quiz: [
      {
        question: "قبل git merge، أين يجب أن تكون؟",
        options: [
          "في الفرع الذي سيستقبل التغييرات",
          "في GitHub",
          "في .git",
          "في Branch المحذوف"
        ],
        answer: 0,
        explanation: "merge يدمج Branch المصدر في الفرع الحالي."
      },
      {
        question: "ما Fast-forward؟",
        options: [
          "تحريك المرجع للأمام دون الحاجة إلى merge commit",
          "حذف Branch",
          "رفع الملفات",
          "تنزيل Git"
        ],
        answer: 0,
        explanation: "يحدث عندما لا توجد تفرعات تتطلب دمجًا ثلاثيًا."
      }
    ]
  },

  {
    id: "merge-conflicts",
    module: "05 — Branching",
    course: "Git",
    level: "Intermediate",
    duration: "18 دقيقة",
    title: "Merge Conflicts خطوة بخطوة",
    summary:
      "المشكلة التي يخاف منها المبتدئون: ماذا تفعل عندما يعدل شخصان نفس الجزء من الملف؟",
    objectives: [
      "فهم سبب Conflict",
      "قراءة conflict markers",
      "حل التعارض",
      "إكمال Merge"
    ],
    sections: [
      {
        heading: "لماذا يحدث Conflict؟",
        paragraphs: [
          "إذا حاول Git دمج تغييرات لا يستطيع اختيار نتيجة واحدة لها، يتوقف ويطلب منك تحديد النتيجة الصحيحة.",
          "يضع Git علامات مثل <<<<<<< و======= و>>>>>>> داخل الملف لتوضيح الأجزاء المتعارضة."
        ]
      },
      {
        heading: "خطوات الحل",
        paragraphs: [
          "افتح الملفات المتعارضة، افهم التغييرين، اختر النتيجة المناسبة واحذف علامات التعارض. بعد ذلك استخدم git add ثم أكمل عملية الدمج.",
          "لا تحل Conflict بمجرد الضغط على Accept Current أو Accept Incoming دون قراءة الكود."
        ]
      }
    ],
    commands: [
      {
        command: "git status",
        explanation: "يعرض الملفات المتعارضة."
      },
      {
        command: "git add resolved-file.js",
        explanation: "يخبر Git أن الملف تم حله."
      },
      {
        command: "git commit",
        explanation: "يكمل Merge إذا احتاج الأمر إلى Merge Commit."
      },
      {
        command: "git merge --abort",
        explanation: "يلغي عملية Merge الحالية في الحالات المناسبة."
      }
    ],
    quiz: [
      {
        question: "لماذا يحدث Merge Conflict؟",
        options: [
          "Git لا يستطيع اختيار نتيجة واحدة لتغييرات متعارضة",
          "الإنترنت بطيء",
          "GitHub مغلق",
          "اسم الملف طويل"
        ],
        answer: 0,
        explanation: "Conflict يحتاج قرارًا بشريًا."
      },
      {
        question: "ماذا تفعل بعد حل الملف؟",
        options: [
          "git add",
          "git init",
          "git clone",
          "git push فقط"
        ],
        answer: 0,
        explanation: "git add يحدد أن الملف المتعارض تم حله."
      },
      {
        question: "كيف تلغي Merge جاريًا؟",
        options: [
          "git merge --abort",
          "git merge --delete",
          "git undo merge",
          "git reset github"
        ],
        answer: 0,
        explanation: "merge --abort يعيد الحالة قبل عملية الدمج في الحالات المناسبة."
      }
    ]
  },


  /* =======================================================
     MODULE 06 — REMOTES
  ======================================================= */

  {
    id: "remote-concept",
    module: "06 — Remote وGitHub",
    course: "GitHub",
    level: "Beginner",
    duration: "11 دقيقة",
    title: "ما هو Remote Repository؟",
    summary:
      "انتقل من Git المحلي إلى التعاون مع Repository بعيد.",
    objectives: [
      "فهم Remote",
      "فهم origin",
      "تمييز local عن remote",
      "فهم الاتصال بـ GitHub"
    ],
    sections: [
      {
        heading: "Local vs Remote",
        paragraphs: [
          "Local Repository موجود على جهازك. Remote Repository نسخة أو مستودع بعيد يمكن أن يكون على GitHub.",
          "لا يعني Remote أنه Backup فقط؛ هو أيضًا نقطة تعاون ومشاركة مع الآخرين."
        ]
      }
    ],
    commands: [
      {
        command: "git remote -v",
        explanation: "يعرض روابط الـ remotes."
      },
      {
        command: "git remote",
        explanation: "يعرض أسماء remotes."
      }
    ],
    quiz: [
      {
        question: "ما هو origin غالبًا؟",
        options: [
          "اسم افتراضي لـ remote",
          "اسم Commit",
          "اسم ملف",
          "اسم مستخدم"
        ],
        answer: 0,
        explanation: "origin هو الاسم الشائع للـ remote الأول."
      },
      {
        question: "هل Remote يعني GitHub فقط؟",
        options: [
          "نعم",
          "لا",
          "فقط Windows",
          "فقط SSH"
        ],
        answer: 1,
        explanation: "يمكن أن يكون remote على GitHub أو Git server آخر."
      }
    ]
  },

  {
    id: "git-remote-add",
    module: "06 — Remote وGitHub",
    course: "GitHub",
    level: "Beginner",
    duration: "10 دقائق",
    title: "ربط المشروع بـ GitHub",
    summary:
      "تعلم كيف تربط Repository المحلي بمستودع على GitHub.",
    objectives: [
      "إضافة Remote",
      "فهم remote URL",
      "التحقق من الرابط",
      "فهم origin"
    ],
    sections: [
      {
        heading: "أضف Remote",
        paragraphs: [
          "بعد إنشاء Repository على GitHub، يمكنك إضافة رابطه إلى Repository المحلي. من هذه اللحظة يستطيع Git معرفة مكان إرسال واستقبال البيانات.",
          "اسم origin ليس سحرًا؛ هو مجرد alias للرابط البعيد."
        ]
      }
    ],
    commands: [
      {
        command: "git remote add origin https://github.com/user/project.git",
        explanation: "يربط origin بالرابط."
      },
      {
        command: "git remote -v",
        explanation: "يتحقق من الروابط."
      }
    ],
    quiz: [
      {
        question: "ما وظيفة git remote add؟",
        options: [
          "إضافة Remote",
          "إنشاء Commit",
          "إنشاء Branch",
          "حذف Git"
        ],
        answer: 0,
        explanation: "يضيف اسمًا ورابطًا لمستودع بعيد."
      },
      {
        question: "هل origin إلزامي؟",
        options: [
          "نعم",
          "لا، هو اسم شائع ويمكن تغييره",
          "فقط GitHub",
          "فقط Linux"
        ],
        answer: 1,
        explanation: "origin convention وليس كلمة سحرية."
      }
    ]
  },

  {
    id: "git-push",
    module: "06 — Remote وGitHub",
    course: "GitHub",
    level: "Beginner",
    duration: "12 دقيقة",
    title: "git push: إرسال التغييرات",
    summary:
      "تعلم كيف تنتقل Commits من جهازك إلى Remote.",
    objectives: [
      "فهم push",
      "رفع Branch",
      "فهم upstream",
      "قراءة أخطاء push"
    ],
    sections: [
      {
        heading: "Push لا يرفع Working Tree",
        paragraphs: [
          "git push يرسل Commits موجودة في Local Repository إلى Remote. إذا عدلت ملفًا ولم تعمل Commit فلن يكون هناك Commit جديد لرفعه.",
          "هذه نقطة مهمة: التسلسل المعتاد هو edit ثم add ثم commit ثم push."
        ]
      }
    ],
    commands: [
      {
        command: "git push origin main",
        explanation: "يدفع main إلى origin."
      },
      {
        command: "git push -u origin main",
        explanation: "يرفع الفرع ويربط upstream لتسهيل pushes لاحقة."
      }
    ],
    quiz: [
      {
        question: "ما الذي يدفعه push؟",
        options: [
          "Commits",
          "كل ملفات الجهاز",
          "Browser cache",
          "Git installation"
        ],
        answer: 0,
        explanation: "push ينقل Git objects/refs اللازمة للتاريخ."
      },
      {
        question: "هل تعديل لم يتم Commit له يرفعه push؟",
        options: [
          "نعم",
          "لا",
          "فقط GitHub",
          "فقط مع SSH"
        ],
        answer: 1,
        explanation: "push يتعامل مع تاريخ Git، وليس التعديلات غير الملتزم بها."
      }
    ]
  },

  {
    id: "git-fetch",
    module: "06 — Remote وGitHub",
    course: "GitHub",
    level: "Intermediate",
    duration: "12 دقيقة",
    title: "git fetch: جلب المعلومات بدون دمج",
    summary:
      "افهم fetch قبل أن تعتمد على pull في كل شيء.",
    objectives: [
      "فهم fetch",
      "فهم remote-tracking branches",
      "معرفة origin/main",
      "الفرق بين fetch وpull"
    ],
    sections: [
      {
        heading: "Fetch آمن للاستكشاف",
        paragraphs: [
          "git fetch يجلب التحديثات من Remote ويحدث معلومات Remote-tracking branches دون دمجها تلقائيًا في الفرع الحالي.",
          "هذا يجعله مفيدًا عندما تريد رؤية ما حدث على Remote قبل اتخاذ قرار."
        ]
      }
    ],
    commands: [
      {
        command: "git fetch origin",
        explanation: "يجلب التحديثات من origin."
      },
      {
        command: "git log origin/main --oneline",
        explanation: "يفحص تاريخ Remote-tracking branch."
      }
    ],
    quiz: [
      {
        question: "هل fetch يدمج التغييرات تلقائيًا؟",
        options: [
          "نعم",
          "لا",
          "دائمًا في main",
          "فقط مع SSH"
        ],
        answer: 1,
        explanation: "fetch يجلب المعلومات ولا يقوم بدمجها تلقائيًا."
      },
      {
        question: "ما فائدة origin/main؟",
        options: [
          "مرجع لحالة main على origin كما يعرفها Git",
          "ملف HTML",
          "اسم المستخدم",
          "Commit message"
        ],
        answer: 0,
        explanation: "إنه Remote-tracking reference."
      }
    ]
  },

  {
    id: "git-pull",
    module: "06 — Remote وGitHub",
    course: "GitHub",
    level: "Intermediate",
    duration: "13 دقيقة",
    title: "git pull وفهم ما يحدث خلفه",
    summary:
      "لا تستخدم pull كزر سحري. افهم fetch + integration.",
    objectives: [
      "فهم pull",
      "معرفة علاقته بـ fetch",
      "تقليل مفاجآت الدمج",
      "التعامل مع تحديثات الفريق"
    ],
    sections: [
      {
        heading: "Pull ليس Download فقط",
        paragraphs: [
          "بشكل مفاهيمي، git pull يجلب التحديثات ثم يقوم بعملية دمج أو rebase حسب الإعدادات وطريقة الاستخدام.",
          "لهذا إذا أردت التحكم الكامل، يمكنك تنفيذ fetch أولًا ثم فحص الحالة والتاريخ ثم اتخاذ قرار الدمج."
        ]
      }
    ],
    commands: [
      {
        command: "git pull origin main",
        explanation: "يجلب ويقوم بعملية integration وفق إعدادات Git."
      },
      {
        command: "git fetch origin",
        explanation: "الخيار الأكثر وضوحًا عندما تريد الفحص أولًا."
      }
    ],
    quiz: [
      {
        question: "ما الفكرة العامة وراء pull؟",
        options: [
          "fetch ثم integration",
          "commit ثم init",
          "clone ثم delete",
          "reset ثم push"
        ],
        answer: 0,
        explanation: "pull يجمع عملية الجلب مع دمج/rebase حسب الإعداد."
      },
      {
        question: "لماذا قد تستخدم fetch بدل pull؟",
        options: [
          "لرؤية التحديثات قبل دمجها",
          "لتثبيت Git",
          "لحذف Branch",
          "لإنشاء README"
        ],
        answer: 0,
        explanation: "fetch يعطيك فرصة للفحص قبل integration."
      }
    ]
  },


  /* =======================================================
     MODULE 07 — CLONE / GITHUB
  ======================================================= */

  {
    id: "git-clone",
    module: "07 — العمل مع GitHub",
    course: "GitHub",
    level: "Beginner",
    duration: "12 دقيقة",
    title: "git clone: بداية العمل على مشروع موجود",
    summary:
      "تعلم كيف تحصل على نسخة كاملة من Repository وتبدأ العمل عليها.",
    objectives: [
      "فهم clone",
      "اختيار URL",
      "معرفة ما الذي يتم تنزيله",
      "بدء مشروع موجود"
    ],
    sections: [
      {
        heading: "Clone أكثر من Download",
        paragraphs: [
          "git clone ينشئ نسخة محلية من Repository ويجلب تاريخ Git والمعلومات اللازمة للعمل معه.",
          "بعد clone يصبح لديك Working Tree وLocal Repository وRemote غالبًا باسم origin."
        ]
      }
    ],
    commands: [
      {
        command: "git clone https://github.com/user/project.git",
        explanation: "ينسخ Repository إلى جهازك."
      },
      {
        command: "cd project",
        explanation: "يدخل إلى المشروع."
      }
    ],
    quiz: [
      {
        question: "متى تستخدم clone؟",
        options: [
          "عند بدء العمل على Repository موجود",
          "عند حذف Commit",
          "عند إنشاء CSS",
          "عند تغيير كلمة المرور"
        ],
        answer: 0,
        explanation: "clone ينشئ نسخة محلية من Repository موجود."
      },
      {
        question: "هل clone يجلب التاريخ؟",
        options: [
          "نعم",
          "لا",
          "فقط README",
          "فقط آخر ملف"
        ],
        answer: 0,
        explanation: "clone ينقل Git repository information وليس الملفات فقط."
      }
    ]
  },

  {
    id: "github-repository",
    module: "07 — العمل مع GitHub",
    course: "GitHub",
    level: "Beginner",
    duration: "11 دقيقة",
    title: "إنشاء Repository على GitHub",
    summary:
      "افهم عناصر Repository الجيد على GitHub وكيف تبدأ مشروعًا قابلًا للتعاون.",
    objectives: [
      "فهم Repository settings",
      "اختيار Public أو Private",
      "README",
      "رابط Clone"
    ],
    sections: [
      {
        heading: "Repository احترافي",
        paragraphs: [
          "Repository جيد لا يعني فقط وجود ملفات. الاسم والوصف وREADME وLicense المناسبة وسياسة العمل كلها تساعد الآخرين على فهم المشروع.",
          "قبل جعل مشروع عام، راجع جيدًا عدم وجود secrets أو ملفات حساسة."
        ]
      }
    ],
    quiz: [
      {
        question: "ما الذي يشرح المشروع عادة؟",
        options: [
          "README",
          "node_modules",
          ".git/objects فقط",
          "favicon"
        ],
        answer: 0,
        explanation: "README نقطة البداية لفهم المشروع."
      },
      {
        question: "ماذا يجب ألا ترفع؟",
        options: [
          "Secrets حقيقية",
          "README",
          "Source code",
          "License"
        ],
        answer: 0,
        explanation: "لا تضع مفاتيح سرية أو كلمات مرور في Repository."
      }
    ]
  },

  {
    id: "github-https-ssh",
    module: "07 — العمل مع GitHub",
    course: "GitHub",
    level: "Intermediate",
    duration: "16 دقيقة",
    title: "HTTPS أم SSH؟",
    summary:
      "افهم طريقتي الاتصال الشائعتين مع GitHub ومتى تحتاج إعداد SSH.",
    objectives: [
      "فهم HTTPS",
      "فهم SSH",
      "إنشاء SSH key",
      "فهم public/private key"
    ],
    sections: [
      {
        heading: "الفكرة",
        paragraphs: [
          "HTTPS طريقة شائعة للاتصال بـ GitHub، بينما SSH يوفر طريقة تعتمد على مفاتيح تشفيرية بدل إدخال بيانات الاعتماد بالطريقة التقليدية.",
          "في SSH لديك Private Key يجب أن يبقى سريًا، وPublic Key ترفعه إلى GitHub."
        ]
      },
      {
        heading: "قاعدة أمنية",
        paragraphs: [
          "لا تشارك Private Key ولا تضعه في Git Repository. مشاركة Public Key فقط هي الفكرة."
        ]
      }
    ],
    commands: [
      {
        command: "ssh-keygen -t ed25519 -C \"you@example.com\"",
        explanation: "مثال شائع لإنشاء SSH key."
      },
      {
        command: "ssh -T git@github.com",
        explanation: "يختبر اتصال SSH بـ GitHub."
      }
    ],
    quiz: [
      {
        question: "أي مفتاح يجب أن يبقى سريًا؟",
        options: [
          "Private Key",
          "Public Key",
          "Repository URL",
          "Username"
        ],
        answer: 0,
        explanation: "Private Key يجب ألا يخرج منك."
      },
      {
        question: "ماذا ترفع إلى GitHub في SSH؟",
        options: [
          "Public Key",
          "Private Key",
          "Password file",
          ".git folder"
        ],
        answer: 0,
        explanation: "GitHub يحتاج Public Key للتحقق."
      }
    ]
  },


  /* =======================================================
     MODULE 08 — GITHUB COLLABORATION
  ======================================================= */

  {
    id: "github-branches",
    module: "08 — GitHub Collaboration",
    course: "GitHub",
    level: "Intermediate",
    duration: "12 دقيقة",
    title: "Branches على GitHub",
    summary:
      "انقل مفهوم Branch من جهازك إلى بيئة التعاون على GitHub.",
    objectives: [
      "فهم Remote Branch",
      "Push Branch",
      "Tracking",
      "اختيار Branch مناسب"
    ],
    sections: [
      {
        heading: "Feature Branch Workflow",
        paragraphs: [
          "بدل تعديل main مباشرة، أنشئ Branch مثل feature/dashboard ثم ادفعه إلى GitHub. هذا يسمح بمراجعة التغيير قبل دمجه.",
          "هذه الطريقة تصبح مهمة جدًا عندما تعمل ضمن فريق."
        ]
      }
    ],
    commands: [
      {
        command: "git switch -c feature/dashboard",
        explanation: "إنشاء Branch محلي."
      },
      {
        command: "git push -u origin feature/dashboard",
        explanation: "رفع Branch وربط upstream."
      }
    ],
    quiz: [
      {
        question: "لماذا نستخدم feature branches؟",
        options: [
          "لعزل التغييرات",
          "لتثبيت Git",
          "لزيادة حجم الصور",
          "لحذف main"
        ],
        answer: 0,
        explanation: "عزل العمل يسهل المراجعة والدمج."
      },
      {
        question: "ما الذي يفعله push -u؟",
        options: [
          "يربط upstream",
          "يحذف remote",
          "يعمل reset",
          "ينشئ README"
        ],
        answer: 0,
        explanation: "يسجل tracking relation للفرع."
      }
    ]
  },

  {
    id: "pull-request",
    module: "08 — GitHub Collaboration",
    course: "GitHub",
    level: "Intermediate",
    duration: "17 دقيقة",
    title: "Pull Request من البداية للنهاية",
    summary:
      "افهم Pull Request كعملية مراجعة وتعاون وليس مجرد زر Merge.",
    objectives: [
      "فهم Pull Request",
      "فتح PR",
      "قراءة Diff",
      "طلب Review",
      "Merge"
    ],
    sections: [
      {
        heading: "ما هو Pull Request؟",
        paragraphs: [
          "Pull Request هو اقتراح لدمج تغييرات من Branch إلى Branch آخر. يسمح للفريق بمراجعة الكود ومناقشة التغييرات قبل الدمج.",
          "يمكن أن يحتوي PR على Description وCommits وDiff وComments وReviews."
        ]
      },
      {
        heading: "PR جيد",
        paragraphs: [
          "PR جيد صغير نسبيًا، واضح الهدف، يحتوي وصفًا يشرح ماذا تغير ولماذا، ويشير إلى Issue إن وجدت.",
          "لا تستخدم PR لدمج عشرات التغييرات غير المرتبطة إذا كان يمكن فصلها."
        ]
      }
    ],
    quiz: [
      {
        question: "ما وظيفة Pull Request؟",
        options: [
          "اقتراح ومراجعة دمج تغييرات",
          "تثبيت Git",
          "إنشاء HTML",
          "حذف Repository"
        ],
        answer: 0,
        explanation:
          "PR هو أداة التعاون الأساسية للمراجعة قبل الدمج."
      },
      {
        question: "ما الذي يستطيع Reviewers فحصه؟",
        options: [
          "Diff وCommits",
          "كلمة مرورك",
          "ملفات جهازك كلها",
          "BIOS"
        ],
        answer: 0,
        explanation: "PR يوفر سياق التغيير للمراجعة."
      },
      {
        question: "لماذا يفضل أن يكون PR مركزًا؟",
        options: [
          "ليسهل المراجعة والفهم",
          "ليزيد حجم Git",
          "لمنع GitHub",
          "لإخفاء التغييرات"
        ],
        answer: 0,
        explanation: "التغيير المركز أسهل في المراجعة والدمج."
      }
    ]
  },

  {
    id: "github-code-review",
    module: "08 — GitHub Collaboration",
    course: "GitHub",
    level: "Intermediate",
    duration: "14 دقيقة",
    title: "Code Review باحتراف",
    summary:
      "كيف تراجع كود زميلك بدون أن يتحول الـ Review إلى فوضى.",
    objectives: [
      "فهم Review",
      "كتابة Comments جيدة",
      "تمييز blocker عن suggestion",
      "التعامل مع feedback"
    ],
    sections: [
      {
        heading: "راجع الكود لا الشخص",
        paragraphs: [
          "الـ Code Review هدفه تحسين الكود وتقليل الأخطاء ومشاركة المعرفة، وليس تقييم الشخص.",
          "التعليق الجيد يشرح المشكلة أو سبب الاقتراح ويكون محددًا قدر الإمكان."
        ]
      }
    ],
    quiz: [
      {
        question: "ما الهدف الأساسي من Code Review؟",
        options: [
          "تحسين الجودة ومشاركة المعرفة",
          "إحراج المطور",
          "حذف Branch",
          "زيادة عدد التعليقات"
        ],
        answer: 0,
        explanation: "Review جزء من عملية جودة وتعاون."
      },
      {
        question: "أي Comment أفضل؟",
        options: [
          "الكود سيئ",
          "لماذا فعلت هذا؟",
          "هل يمكن استخدام validation هنا لمنع الإدخال غير الصحيح؟",
          "أنا لا أحب هذا"
        ],
        answer: 2,
        explanation: "التعليق المحدد القابل للنقاش أكثر فائدة."
      }
    ]
  },

  {
    id: "github-issues",
    module: "08 — GitHub Collaboration",
    course: "GitHub",
    level: "Intermediate",
    duration: "13 دقيقة",
    title: "GitHub Issues وإدارة العمل",
    summary:
      "حوّل المشاكل والأفكار إلى Work Items يمكن للفريق متابعتها.",
    objectives: [
      "فهم Issues",
      "كتابة Issue جيدة",
      "Labels",
      "ربط Issue بـ PR"
    ],
    sections: [
      {
        heading: "Issue ليست مجرد مشكلة",
        paragraphs: [
          "يمكن استخدام GitHub Issues لتتبع Bugs وFeatures وTasks وأسئلة العمل. الفكرة هي تحويل العمل إلى عناصر واضحة قابلة للمتابعة.",
          "Issue جيدة تحتوي وصفًا واضحًا، خطوات لإعادة المشكلة عند الحاجة، والنتيجة المتوقعة."
        ]
      }
    ],
    quiz: [
      {
        question: "ما الذي يمكن تتبعه في Issues؟",
        options: [
          "Bugs وFeatures وTasks",
          "Git installation فقط",
          "صور الجهاز",
          "Passwords"
        ],
        answer: 0,
        explanation: "Issues أداة لإدارة وتتبع العمل."
      },
      {
        question: "ما فائدة Labels؟",
        options: [
          "تصنيف وتنظيم Issues",
          "تثبيت Git",
          "إنشاء SSH",
          "حذف Branch"
        ],
        answer: 0,
        explanation: "Labels تساعد على تصنيف العمل."
      }
    ]
  },


  /* =======================================================
     MODULE 09 — ADVANCED HISTORY
  ======================================================= */

  {
    id: "git-stash",
    module: "09 — Git المتقدم",
    course: "Git",
    level: "Intermediate",
    duration: "14 دقيقة",
    title: "git stash: احفظ عملك مؤقتًا",
    summary:
      "ماذا تفعل عندما تكون في منتصف Feature ويطلب منك الانتقال فورًا إلى Bug آخر؟",
    objectives: [
      "فهم stash",
      "حفظ Working changes",
      "استعادة stash",
      "عرض stash list"
    ],
    sections: [
      {
        heading: "سيناريو واقعي",
        paragraphs: [
          "أنت تعمل على Feature ولم تصل إلى Commit مناسب، وفجأة تحتاج الانتقال إلى main لإصلاح Bug. بدل عمل Commit مشوش، يمكنك وضع التعديلات مؤقتًا في stash.",
          "بعد إنهاء المهمة يمكنك استعادة التعديلات."
        ]
      }
    ],
    commands: [
      {
        command: "git stash push -m \"wip: dashboard\"",
        explanation: "يحفظ التعديلات مؤقتًا."
      },
      {
        command: "git stash list",
        explanation: "يعرض Stashes."
      },
      {
        command: "git stash pop",
        explanation: "يستعيد آخر stash ويحذفه من القائمة إذا نجح."
      },
      {
        command: "git stash apply",
        explanation: "يستعيد stash مع إبقائه في القائمة."
      }
    ],
    quiz: [
      {
        question: "متى يكون stash مفيدًا؟",
        options: [
          "عند الحاجة لتبديل المهمة قبل Commit",
          "لتثبيت Git",
          "لإنشاء Repository",
          "لرفع README"
        ],
        answer: 0,
        explanation: "stash يحفظ العمل غير المكتمل مؤقتًا."
      },
      {
        question: "ما الفرق الأساسي بين pop وapply؟",
        options: [
          "pop يزيل stash بعد التطبيق الناجح، apply يبقيه",
          "لا فرق",
          "apply يحذف Git",
          "pop يرفع GitHub"
        ],
        answer: 0,
        explanation: "pop = apply + drop في السيناريو المعتاد."
      }
    ]
  },

  {
    id: "git-rebase",
    module: "09 — Git المتقدم",
    course: "Git",
    level: "Advanced",
    duration: "20 دقيقة",
    title: "Rebase وفهم إعادة كتابة التاريخ",
    summary:
      "تعلم لماذا يستخدم rebase لبناء تاريخ أكثر خطية، ومتى يجب أن تتوقف عن استخدامه.",
    objectives: [
      "فهم rebase",
      "فهم linear history",
      "تمييز rebase عن merge",
      "فهم خطر rewriting history"
    ],
    sections: [
      {
        heading: "ما الذي يفعله Rebase؟",
        paragraphs: [
          "Rebase يأخذ commits من فرع ويعيد تطبيقها فوق قاعدة جديدة، مما قد ينتج History أكثر خطية.",
          "هذا مفيد في بعض workflows، لكنه يغير Commit identities، لذلك يجب فهم أثره قبل استخدامه على تاريخ مشترك."
        ]
      },
      {
        heading: "قاعدة ذهبية",
        paragraphs: [
          "تجنب إعادة كتابة تاريخ منشور يعمل عليه أشخاص آخرون إلا إذا كان الفريق متفقًا على الطريقة المناسبة.",
          "إذا كنت تعيد ترتيب commits محليًا قبل Push، يكون السيناريو أكثر أمانًا."
        ]
      }
    ],
    commands: [
      {
        command: "git switch feature/login",
        explanation: "انتقل إلى Branch الخاص بالميزة."
      },
      {
        command: "git rebase main",
        explanation: "يعيد تطبيق commits الخاصة بالفرع فوق main."
      }
    ],
    quiz: [
      {
        question: "ما الفكرة الأساسية في rebase؟",
        options: [
          "إعادة تطبيق commits فوق قاعدة جديدة",
          "حذف Repository",
          "رفع الملفات",
          "إنشاء GitHub"
        ],
        answer: 0,
        explanation: "Rebase يعيد بناء تسلسل commits."
      },
      {
        question: "لماذا rebase حساس على shared history؟",
        options: [
          "لأنه يعيد كتابة Commit history",
          "لأنه يحذف الإنترنت",
          "لأنه يغير CSS",
          "لأنه يمنع Git"
        ],
        answer: 0,
        explanation: "Rebase قد يغير commit IDs ويجعل التاريخ مختلفًا عن تاريخ الآخرين."
      },
      {
        question: "متى يكون rebase أكثر أمانًا؟",
        options: [
          "على commits محلية لم تُشارك",
          "على main المشترك دائمًا",
          "بعد حذف Git",
          "على Repository مغلق"
        ],
        answer: 0,
        explanation: "إعادة كتابة تاريخ غير منشور أسهل في التعامل."
      }
    ]
  },

  {
    id: "interactive-rebase",
    module: "09 — Git المتقدم",
    course: "Git",
    level: "Advanced",
    duration: "20 دقيقة",
    title: "Interactive Rebase وتنظيف الـ History",
    summary:
      "تعلم كيف تعيد ترتيب أو تدمج أو تعدل Commits محلية قبل مشاركة Branch.",
    objectives: [
      "فهم interactive rebase",
      "pick",
      "squash",
      "reword",
      "تنظيف History"
    ],
    sections: [
      {
        heading: "لماذا ننظف التاريخ؟",
        paragraphs: [
          "قد تنتهي من Feature بخمسة Commits مثل fix typo وfix again وfinal fix. قبل مشاركة Branch قد تريد دمج هذه commits في History أكثر وضوحًا.",
          "Interactive rebase يسمح لك بالتعامل مع عدة Commits بطريقة منظمة."
        ]
      }
    ],
    commands: [
      {
        command: "git rebase -i HEAD~4",
        explanation: "يفتح آخر أربعة Commits للتعامل معها."
      }
    ],
    quiz: [
      {
        question: "ما فائدة squash؟",
        options: [
          "دمج Commit مع السابق",
          "حذف Git",
          "رفع Remote",
          "إنشاء Branch"
        ],
        answer: 0,
        explanation: "squash يستخدم لدمج commits أثناء interactive rebase."
      },
      {
        question: "متى يفضل استخدام interactive rebase؟",
        options: [
          "قبل مشاركة History المحلي",
          "دائمًا على main المشترك",
          "لإنشاء Repository",
          "لرفع ملفات الصور"
        ],
        answer: 0,
        explanation: "لأن العملية تعيد كتابة التاريخ."
      }
    ]
  },

  {
    id: "git-cherry-pick",
    module: "09 — Git المتقدم",
    course: "Git",
    level: "Advanced",
    duration: "15 دقيقة",
    title: "Cherry-pick: خذ Commit محدد",
    summary:
      "أحيانًا تحتاج تغييرًا واحدًا من Branch آخر بدون دمج Branch كامل.",
    objectives: [
      "فهم cherry-pick",
      "اختيار Commit",
      "التعامل مع Conflict",
      "معرفة الحالات المناسبة"
    ],
    sections: [
      {
        heading: "سيناريو عملي",
        paragraphs: [
          "لديك Branch يحتوي على عدة Features، لكن يوجد Bug fix واحد تحتاجه في main. بدل Merge كل Branch، يمكنك استخدام cherry-pick لتطبيق التغيير الذي يمثله Commit محدد.",
          "Git يعيد تطبيق التغيير وينشئ Commit جديدًا في الفرع الحالي."
        ]
      }
    ],
    commands: [
      {
        command: "git cherry-pick abc1234",
        explanation: "يطبق التغيير الموجود في Commit محدد."
      }
    ],
    quiz: [
      {
        question: "متى يكون cherry-pick مناسبًا؟",
        options: [
          "عندما تحتاج Commit محددًا",
          "عندما تريد تثبيت Git",
          "عندما تريد Clone",
          "عندما تريد حذف Repository"
        ],
        answer: 0,
        explanation: "يسمح بنقل تغيير Commit محدد."
      },
      {
        question: "هل cherry-pick ينقل نفس Commit identity؟",
        options: [
          "لا، ينتج Commit جديدًا",
          "نعم دائمًا",
          "فقط على GitHub",
          "فقط في Windows"
        ],
        answer: 0,
        explanation: "التغيير يعاد تطبيقه وينشأ Commit جديد."
      }
    ]
  },

  {
    id: "git-tags",
    module: "09 — Git المتقدم",
    course: "Git",
    level: "Intermediate",
    duration: "12 دقيقة",
    title: "Tags والإصدارات",
    summary:
      "تعلم كيف تحدد نقاطًا مهمة في History مثل v1.0.0 وv2.0.0.",
    objectives: [
      "فهم Tag",
      "Lightweight tags",
      "Annotated tags",
      "ربط GitHub Releases"
    ],
    sections: [
      {
        heading: "لماذا Tags؟",
        paragraphs: [
          "Branch يتحرك مع التقدم، أما Tag فيستخدم عادة للإشارة إلى نقطة ثابتة ومهمة مثل Release.",
          "يمكن استخدام tags مع إصدارات المشروع ليسهل الرجوع إلى النسخ المعروفة."
        ]
      }
    ],
    commands: [
      {
        command: "git tag v1.0.0",
        explanation: "ينشئ Lightweight Tag."
      },
      {
        command: 'git tag -a v1.0.0 -m "Release 1.0.0"',
        explanation: "ينشئ Annotated Tag."
      },
      {
        command: "git push origin v1.0.0",
        explanation: "يرفع Tag إلى Remote."
      }
    ],
    quiz: [
      {
        question: "لماذا تستخدم Tags؟",
        options: [
          "تحديد نقاط مهمة في التاريخ",
          "حذف Branches",
          "تثبيت Git",
          "تشغيل Terminal"
        ],
        answer: 0,
        explanation: "Tags مفيدة لتسمية releases أو نقاط ثابتة."
      },
      {
        question: "ما الذي يميز Tag عن Branch غالبًا؟",
        options: [
          "Tag عادة يشير لنقطة ثابتة",
          "Tag يغير نفسه بعد كل Commit",
          "Branch لا يتحرك",
          "لا يوجد فرق"
        ],
        answer: 0,
        explanation: "Branch reference يتحرك مع commits الجديدة، بينما Tag عادة ثابت."
      }
    ]
  },


  /* =======================================================
     MODULE 10 — DEBUGGING / RECOVERY
  ======================================================= */

  {
    id: "git-clean",
    module: "10 — Debugging وRecovery",
    course: "Git",
    level: "Intermediate",
    duration: "13 دقيقة",
    title: "git clean والملفات غير المتتبعة",
    summary:
      "تعرف على الملفات غير المتتبعة وكيف تنظفها بحذر.",
    objectives: [
      "فهم untracked files",
      "dry run",
      "clean",
      "تجنب حذف ملفات مهمة"
    ],
    sections: [
      {
        heading: "كن حذرًا",
        paragraphs: [
          "git clean يمكن أن يحذف ملفات untracked، لذلك لا تستخدمه مباشرة دون معرفة ما سيحدث.",
          "استخدم dry-run أولًا لرؤية ما سيتم حذفه."
        ]
      }
    ],
    commands: [
      {
        command: "git clean -n",
        explanation: "يعرض ما قد يتم حذفه بدون حذف فعلي."
      },
      {
        command: "git clean -f",
        explanation: "يحذف ملفات untracked وفق الخيارات."
      }
    ],
    quiz: [
      {
        question: "ما فائدة -n في clean؟",
        options: [
          "معاينة قبل الحذف",
          "حذف مباشر",
          "رفع الملفات",
          "إنشاء Branch"
        ],
        answer: 0,
        explanation: "dry run يساعدك على فحص النتيجة."
      },
      {
        question: "لماذا clean خطير؟",
        options: [
          "قد يحذف ملفات untracked",
          "يحذف GitHub account",
          "يغير كلمة المرور",
          "يثبت Git"
        ],
        answer: 0,
        explanation: "الملفات غير المتتبعة قد لا تكون قابلة للاستعادة عبر Git."
      }
    ]
  },

  {
    id: "git-reflog",
    module: "10 — Debugging وRecovery",
    course: "Git",
    level: "Advanced",
    duration: "18 دقيقة",
    title: "Reflog: عندما تظن أن Commit اختفى",
    summary:
      "واحدة من أهم أدوات الإنقاذ في Git: تتبع تحركات HEAD والـ references.",
    objectives: [
      "فهم reflog",
      "استرجاع Commit",
      "فهم HEAD movements",
      "التعامل مع reset"
    ],
    sections: [
      {
        heading: "هل Commit اختفى فعلًا؟",
        paragraphs: [
          "بعد reset أو rebase قد لا يظهر Commit في git log الحالي، لكن هذا لا يعني بالضرورة أن Git فقد كل أثر له.",
          "reflog يسجل تحركات References المحلية، ويمكن أن يساعدك في العثور على Commit سابق."
        ]
      }
    ],
    commands: [
      {
        command: "git reflog",
        explanation: "يعرض تحركات HEAD والـ references محليًا."
      },
      {
        command: "git show HEAD@{2}",
        explanation: "يفحص حالة سابقة مشار إليها في reflog."
      }
    ],
    quiz: [
      {
        question: "ما وظيفة reflog؟",
        options: [
          "تتبع تحركات references المحلية",
          "رفع GitHub",
          "إنشاء HTML",
          "حذف Remote"
        ],
        answer: 0,
        explanation: "reflog أداة قوية للعثور على حالات سابقة محليًا."
      },
      {
        question: "هل reflog هو نفسه git log؟",
        options: [
          "لا",
          "نعم",
          "فقط على GitHub",
          "فقط في Windows"
        ],
        answer: 0,
        explanation: "log يعرض reachable history، بينما reflog يتتبع تحركات references محليًا."
      }
    ]
  },

  {
    id: "git-bisect",
    module: "10 — Debugging وRecovery",
    course: "Git",
    level: "Advanced",
    duration: "18 دقيقة",
    title: "git bisect للعثور على Commit المسبب للمشكلة",
    summary:
      "استخدم البحث الثنائي داخل History بدل فحص عشرات Commits يدويًا.",
    objectives: [
      "فهم bisect",
      "bad وgood",
      "تقليل مساحة البحث",
      "استخدام الاختبارات"
    ],
    sections: [
      {
        heading: "الفكرة",
        paragraphs: [
          "إذا كنت تعرف أن المشروع كان يعمل في Commit قديم وأصبح مكسورًا في Commit أحدث، يمكن لـ bisect استخدام Binary Search لتحديد Commit المسبب.",
          "كل خطوة تختبر النسخة الحالية وتخبر Git هل هي good أم bad."
        ]
      }
    ],
    commands: [
      {
        command: "git bisect start",
        explanation: "يبدأ عملية البحث."
      },
      {
        command: "git bisect bad",
        explanation: "يحدد الحالة الحالية كـ bad."
      },
      {
        command: "git bisect good <commit>",
        explanation: "يحدد Commit معروفًا أنه يعمل."
      },
      {
        command: "git bisect reset",
        explanation: "ينهي عملية bisect."
      }
    ],
    quiz: [
      {
        question: "ما الفكرة وراء bisect؟",
        options: [
          "Binary search في History",
          "حذف Branch",
          "رفع GitHub",
          "إنشاء Tag"
        ],
        answer: 0,
        explanation: "يقسم مساحة البحث لتحديد Commit المسبب."
      },
      {
        question: "ماذا تعني bad؟",
        options: [
          "الحالة الحالية تحتوي المشكلة",
          "احذف Git",
          "Branch ناجح",
          "Remote جديد"
        ],
        answer: 0,
        explanation: "تحدد أن الحالة الحالية لا تعمل كما ينبغي."
      }
    ]
  },


  /* =======================================================
     MODULE 11 — GITHUB PROJECT PRACTICES
  ======================================================= */

  {
    id: "readme",
    module: "11 — GitHub الاحترافي",
    course: "GitHub",
    level: "Intermediate",
    duration: "12 دقيقة",
    title: "كتابة README احترافي",
    summary:
      "اجعل Repository مفهومًا لشخص يفتحه لأول مرة.",
    objectives: [
      "هيكلة README",
      "شرح المشروع",
      "Installation",
      "Usage"
    ],
    sections: [
      {
        heading: "README هو واجهة Repository",
        paragraphs: [
          "الشخص الذي يدخل مشروعك لأول مرة يحتاج معرفة ما المشروع، لماذا موجود، كيف يشغله، وكيف يستخدمه.",
          "README جيد يقلل الأسئلة المتكررة ويساعد المساهمين الجدد."
        ]
      }
    ],
    quiz: [
      {
        question: "ما أهم وظيفة README؟",
        options: [
          "شرح المشروع وطريقة استخدامه",
          "تخزين passwords",
          "تشغيل Git",
          "حذف Branch"
        ],
        answer: 0,
        explanation: "README نقطة الدخول الأساسية للمشروع."
      },
      {
        question: "ماذا يمكن أن يتضمن؟",
        options: [
          "Installation وUsage",
          "Private keys",
          "Passwords",
          "BIOS settings"
        ],
        answer: 0,
        explanation: "هذه معلومات مفيدة وآمنة نسبيًا للمستخدم."
      }
    ]
  },

  {
    id: "github-fork",
    module: "11 — GitHub الاحترافي",
    course: "GitHub",
    level: "Intermediate",
    duration: "13 دقيقة",
    title: "Fork والعمل على مشروع لا تملك صلاحية الكتابة عليه",
    summary:
      "افهم نموذج Fork → Clone → Branch → Pull Request.",
    objectives: [
      "فهم Fork",
      "Clone fork",
      "Upstream",
      "Pull Request"
    ],
    sections: [
      {
        heading: "لماذا Fork؟",
        paragraphs: [
          "عندما لا تملك صلاحية الكتابة إلى Repository، يمكنك إنشاء Fork في حسابك ثم العمل على نسختك وفتح Pull Request إلى المشروع الأصلي.",
          "هذا النموذج شائع جدًا في Open Source."
        ]
      }
    ],
    commands: [
      {
        command: "git remote add upstream https://github.com/original/project.git",
        explanation: "يضيف Repository الأصلي كـ upstream."
      },
      {
        command: "git fetch upstream",
        explanation: "يجلب تحديثات المشروع الأصلي."
      }
    ],
    quiz: [
      {
        question: "متى تحتاج Fork؟",
        options: [
          "عندما تعمل على Repository لا تملك صلاحية الكتابة إليه",
          "دائمًا في مشاريعك الخاصة",
          "لتثبيت Git",
          "لحذف Commit"
        ],
        answer: 0,
        explanation: "Fork يعطيك نسخة على حسابك تستطيع التطوير عليها."
      },
      {
        question: "ما فائدة upstream؟",
        options: [
          "الإشارة إلى Repository الأصلي",
          "الإشارة إلى node_modules",
          "حذف origin",
          "تغيير branch"
        ],
        answer: 0,
        explanation: "upstream convention شائع للـ original repository."
      }
    ]
  },

  {
    id: "github-permissions",
    module: "11 — GitHub الاحترافي",
    course: "GitHub",
    level: "Intermediate",
    duration: "14 دقيقة",
    title: "Collaborators والصلاحيات",
    summary:
      "كيف يعمل الفريق على Repository واحد بدون إعطاء صلاحيات عشوائية.",
    objectives: [
      "فهم permissions",
      "Collaborators",
      "Branch protection",
      "Least privilege"
    ],
    sections: [
      {
        heading: "أعطِ الصلاحية المناسبة",
        paragraphs: [
          "في المشاريع الحقيقية لا يحتاج كل شخص إلى نفس مستوى الوصول. استخدم الصلاحيات المناسبة حسب الدور.",
          "Branch protection يمكن أن تساعد في منع الدمج غير المراجع أو فرض checks حسب إعدادات المشروع."
        ]
      }
    ],
    quiz: [
      {
        question: "ما مبدأ Least Privilege؟",
        options: [
          "إعطاء أقل صلاحية لازمة لإنجاز المهمة",
          "إعطاء الجميع Admin",
          "منع كل المستخدمين",
          "حذف Git"
        ],
        answer: 0,
        explanation: "تقليل الصلاحيات يقلل المخاطر."
      },
      {
        question: "لماذا Branch protection مفيدة؟",
        options: [
          "لإضافة قواعد قبل الدمج",
          "لتثبيت Git",
          "لتغيير HTML",
          "لحذف History"
        ],
        answer: 0,
        explanation: "يمكنها فرض Reviews وChecks وغيرها حسب إعدادات GitHub."
      }
    ]
  },


  /* =======================================================
     MODULE 12 — RELEASES / AUTOMATION
  ======================================================= */

  {
    id: "github-releases",
    module: "12 — Releases وAutomation",
    course: "GitHub",
    level: "Intermediate",
    duration: "13 دقيقة",
    title: "Releases وVersioning",
    summary:
      "اربط Tags بإصدارات مفهومة للمستخدمين.",
    objectives: [
      "فهم Release",
      "SemVer",
      "Tags",
      "Release notes"
    ],
    sections: [
      {
        heading: "من Tag إلى Release",
        paragraphs: [
          "Tag يحدد نقطة في Git history، بينما GitHub Release يضيف طبقة مفيدة للمستخدمين حول هذه النقطة مثل عنوان الإصدار والملاحظات والملفات.",
          "استخدام Semantic Versioning مثل 1.2.0 يساعد على فهم طبيعة التغيير."
        ]
      }
    ],
    quiz: [
      {
        question: "ما العلاقة الشائعة بين Release وTag؟",
        options: [
          "Release يمكن أن يعتمد على Tag لنقطة إصدار",
          "لا علاقة",
          "Tag هو README",
          "Release يحذف Tag"
        ],
        answer: 0,
        explanation: "Tags تحدد commit للإصدار، وGitHub Release يضيف معلومات الإصدار."
      },
      {
        question: "ماذا يعني 1.2.0 عادة في SemVer؟",
        options: [
          "إصدار minor جديد",
          "حذف المشروع",
          "Branch جديد",
          "Git version"
        ],
        answer: 0,
        explanation: "في SemVer التقليدي 1.2.0 يمثل زيادة minor من 1.1.x."
      }
    ]
  },

  {
    id: "github-pages",
    module: "12 — Releases وAutomation",
    course: "GitHub",
    level: "Intermediate",
    duration: "14 دقيقة",
    title: "GitHub Pages ونشر المواقع",
    summary:
      "فهم فكرة نشر موقع static من Repository.",
    objectives: [
      "فهم Static Hosting",
      "GitHub Pages",
      "Build output",
      "Deployment"
    ],
    sections: [
      {
        heading: "من Git إلى موقع",
        paragraphs: [
          "GitHub Pages يسمح بنشر مواقع static من مستودعات GitHub وفق إعدادات GitHub المتاحة للمشروع.",
          "الفكرة المهمة هنا أن Git ليس فقط لتخزين الكود؛ يمكن أن يكون جزءًا من مسار نشر الموقع."
        ]
      }
    ],
    quiz: [
      {
        question: "ما نوع المواقع المناسب لـ GitHub Pages؟",
        options: [
          "Static websites",
          "كل أنواع قواعد البيانات",
          "أي backend server تلقائيًا",
          "BIOS"
        ],
        answer: 0,
        explanation: "Pages مناسب أساسًا لاستضافة static content وفق إعداداته."
      },
      {
        question: "لماذا Git مهم في deployment؟",
        options: [
          "لأنه مصدر الكود والتاريخ الذي يمكن بناء ونشر المشروع منه",
          "لأنه يستبدل HTML",
          "لأنه يشغل الإنترنت",
          "لأنه قاعدة بيانات"
        ],
        answer: 0,
        explanation: "Git جزء شائع من CI/CD وdeployment workflows."
      }
    ]
  },

  {
    id: "github-actions-intro",
    module: "12 — Releases وAutomation",
    course: "GitHub",
    level: "Advanced",
    duration: "18 دقيقة",
    title: "مقدمة إلى GitHub Actions",
    summary:
      "ابدأ فهم CI/CD من خلال Workflows وEvents وJobs وSteps.",
    objectives: [
      "فهم CI/CD",
      "فهم Workflow",
      "Events",
      "Jobs",
      "Steps"
    ],
    sections: [
      {
        heading: "ما هي GitHub Actions؟",
        paragraphs: [
          "GitHub Actions منصة لأتمتة Workflows داخل Repository. يمكن استخدامها لتشغيل Tests أو Build أو Deploy استجابة لأحداث مثل Push وPull Request.",
          "Workflow عادة يكون ملف YAML داخل .github/workflows."
        ]
      },
      {
        heading: "المكونات",
        paragraphs: [
          "Workflow يحتوي Jobs، وكل Job يحتوي Steps. ويمكن تشغيل Jobs على runners توفرها GitHub أو بيئات أخرى حسب الإعداد.",
          "الفكرة الأساسية: اجعل الكمبيوتر يكرر الأعمال التي لا تحتاج قرارًا بشريًا."
        ]
      }
    ],
    commands: [
      {
        command: "mkdir -p .github/workflows",
        explanation: "ينشئ مجلد Workflows في البيئات التي تدعم الأمر."
      }
    ],
    quiz: [
      {
        question: "ما GitHub Actions؟",
        options: [
          "منصة لأتمتة Workflows",
          "بديل لـ Git",
          "لغة برمجة",
          "قاعدة بيانات"
        ],
        answer: 0,
        explanation: "Actions تستخدم للأتمتة وCI/CD وغيرها."
      },
      {
        question: "أين توضع Workflow files عادة؟",
        options: [
          ".github/workflows",
          "src/workflows فقط",
          "node_modules",
          "public/git"
        ],
        answer: 0,
        explanation: "هذا هو المسار القياسي للـ workflows."
      },
      {
        question: "ما الفرق بين Job وStep؟",
        options: [
          "Job مجموعة خطوات، وStep مهمة داخل Job",
          "لا فرق",
          "Step أكبر من Job",
          "Job ملف CSS"
        ],
        answer: 0,
        explanation: "Workflow يحتوي Jobs، والـ Jobs تحتوي Steps."
      }
    ]
  },


  /* =======================================================
     MODULE 13 — PROFESSIONAL WORKFLOW
  ======================================================= */

  {
    id: "git-workflow",
    module: "13 — Workflow احترافي",
    course: "Git",
    level: "Advanced",
    duration: "18 دقيقة",
    title: "Git Workflow للمشاريع الحقيقية",
    summary:
      "كوّن طريقة عمل متماسكة من Issue إلى Branch إلى Commit إلى PR.",
    objectives: [
      "Issue-driven development",
      "Feature branches",
      "Commits",
      "Pull Requests",
      "Review"
    ],
    sections: [
      {
        heading: "دورة العمل",
        paragraphs: [
          "ابدأ بمهمة واضحة، أنشئ Branch مناسبًا، نفذ التغيير، اكتب Commits منطقية، ادفع Branch إلى Remote، ثم افتح Pull Request.",
          "بعد Review وChecks، يتم دمج التغيير وفق سياسة المشروع."
        ]
      }
    ],
    quiz: [
      {
        question: "ما الترتيب المنطقي؟",
        options: [
          "Task → Branch → Commit → Push → PR",
          "PR → Git install → Task",
          "Delete → Commit → Clone",
          "Push → init → code"
        ],
        answer: 0,
        explanation: "هذا نموذج شائع للعمل على Feature."
      },
      {
        question: "ما أهمية Issue؟",
        options: [
          "توضيح العمل المطلوب وتتبع حالته",
          "تثبيت Git",
          "تغيير Branch تلقائيًا",
          "حذف Repository"
        ],
        answer: 0,
        explanation: "Issue تساعد الفريق على إدارة العمل."
      }
    ]
  },

  {
    id: "commit-conventions",
    module: "13 — Workflow احترافي",
    course: "Git",
    level: "Intermediate",
    duration: "12 دقيقة",
    title: "Commit Conventions",
    summary:
      "اكتب History يستطيع فريقك قراءته بعد أشهر.",
    objectives: [
      "Commit clarity",
      "Conventional Commits",
      "Atomic changes",
      "History readability"
    ],
    sections: [
      {
        heading: "لغة مشتركة",
        paragraphs: [
          "يمكن للفريق الاتفاق على نمط رسائل موحد مثل feat وfix وdocs وrefactor وtest. ليس هذا شرطًا من Git نفسه، لكنه convention مفيد.",
          "الأهم من حفظ الكلمات هو أن تصف الرسالة التغيير بوضوح."
        ]
      }
    ],
    commands: [
      {
        command: 'git commit -m "feat: add lesson search"',
        explanation: "مثال على نمط Conventional Commit."
      },
      {
        command: 'git commit -m "fix: handle empty search results"',
        explanation: "Commit يوضح إصلاح مشكلة."
      }
    ],
    quiz: [
      {
        question: "هل Conventional Commits جزء إجباري من Git؟",
        options: [
          "لا، هو convention",
          "نعم",
          "فقط GitHub",
          "فقط Windows"
        ],
        answer: 0,
        explanation: "هو اتفاقية شائعة وليس شرطًا تقنيًا في Git."
      },
      {
        question: "أي type يناسب إضافة Feature؟",
        options: [
          "feat",
          "fix",
          "delete",
          "remote"
        ],
        answer: 0,
        explanation: "feat شائع لوصف Feature جديدة."
      }
    ]
  },

  {
    id: "git-aliases",
    module: "13 — Workflow احترافي",
    course: "Git",
    level: "Intermediate",
    duration: "10 دقائق",
    title: "Git Aliases وزيادة السرعة",
    summary:
      "اختصر الأوامر المتكررة بدون التضحية بفهم Git.",
    objectives: [
      "فهم aliases",
      "إنشاء alias",
      "تجنب aliases المربكة",
      "تخصيص Git"
    ],
    commands: [
      {
        command: 'git config --global alias.st status',
        explanation: "يجعل git st اختصارًا لـ git status."
      },
      {
        command: 'git config --global alias.lg "log --oneline --graph --decorate"',
        explanation: "ينشئ alias لعرض History بشكل واضح."
      }
    ],
    quiz: [
      {
        question: "ما فائدة alias؟",
        options: [
          "اختصار أو تسمية أمر متكرر",
          "حذف Repository",
          "رفع GitHub",
          "إنشاء Branch"
        ],
        answer: 0,
        explanation: "Aliases تساعد على السرعة والتخصيص."
      },
      {
        question: "هل alias يضيف وظيفة جديدة إلى Git؟",
        options: [
          "لا، غالبًا هو اختصار لأمر موجود",
          "نعم دائمًا",
          "فقط في GitHub",
          "فقط في macOS"
        ],
        answer: 0,
        explanation: "هو convenience layer حول أوامر Git."
      }
    ]
  },

  {
    id: "git-hooks",
    module: "13 — Workflow احترافي",
    course: "Git",
    level: "Advanced",
    duration: "17 دقيقة",
    title: "Git Hooks والأتمتة المحلية",
    summary:
      "افهم كيف يمكن تشغيل scripts عند أحداث معينة في Git.",
    objectives: [
      "فهم Hooks",
      "pre-commit",
      "commit-msg",
      "الأتمتة"
    ],
    sections: [
      {
        heading: "ما هو Hook؟",
        paragraphs: [
          "Git Hooks هي نقاط يمكن عندها تشغيل scripts تلقائيًا أثناء عمليات Git معينة.",
          "مثلًا يمكن استخدام pre-commit لتشغيل lint أو tests قبل السماح بالـ Commit حسب طريقة الإعداد."
        ]
      }
    ],
    quiz: [
      {
        question: "متى يمكن استخدام pre-commit؟",
        options: [
          "قبل إنشاء Commit",
          "بعد إغلاق الكمبيوتر",
          "بعد حذف Repository",
          "عند تثبيت Git فقط"
        ],
        answer: 0,
        explanation: "اسم Hook يوضح توقيته."
      },
      {
        question: "ما فائدة Hooks؟",
        options: [
          "أتمتة checks أو scripts حول عمليات Git",
          "استضافة GitHub",
          "تصميم CSS",
          "تخزين الصور"
        ],
        answer: 0,
        explanation: "Hooks توفر نقاط تشغيل تلقائية."
      }
    ]
  },


  /* =======================================================
     MODULE 14 — INTERNALS
  ======================================================= */

  {
    id: "git-snapshot-model",
    module: "14 — فهم Git من الداخل",
    course: "Git",
    level: "Advanced",
    duration: "18 دقيقة",
    title: "كيف يخزن Git تاريخ المشروع؟",
    summary:
      "انتقل من استخدام Git إلى فهم النموذج الذي يجعله يعمل.",
    objectives: [
      "Snapshot model",
      "Commit objects",
      "Parent commits",
      "History graph"
    ],
    sections: [
      {
        heading: "Git يفكر في Snapshots",
        paragraphs: [
          "من المفيد أن تتخيل Commit كإشارة إلى Snapshot لحالة المشروع، مع معلومات عن الوالد Parent والكاتب والرسالة.",
          "بهذا النموذج يصبح فهم Branches وMerge وHistory graph أسهل بكثير."
        ]
      }
    ],
    quiz: [
      {
        question: "ما الذي يساعدك على فهم Branching؟",
        options: [
          "فهم Commit graph وreferences",
          "حفظ أسماء الملفات",
          "تغيير CSS",
          "حذف .git"
        ],
        answer: 0,
        explanation: "النموذج الداخلي يجعل branching منطقيًا."
      },
      {
        question: "هل Commit يحتوي على parent information؟",
        options: [
          "نعم",
          "لا",
          "فقط GitHub",
          "فقط Windows"
        ],
        answer: 0,
        explanation: "Commits العادية تشير إلى parent، والـ merge commit قد يكون له أكثر من parent."
      }
    ]
  },

  {
    id: "git-head",
    module: "14 — فهم Git من الداخل",
    course: "Git",
    level: "Advanced",
    duration: "15 دقيقة",
    title: "HEAD وReferences",
    summary:
      "افهم لماذا يتحرك HEAD ولماذا يتحرك Branch pointer.",
    objectives: [
      "فهم HEAD",
      "References",
      "Branch pointers",
      "Detached HEAD"
    ],
    sections: [
      {
        heading: "HEAD",
        paragraphs: [
          "HEAD هو المرجع الذي يحدد النقطة التي تعمل منها حاليًا. غالبًا يشير إلى Branch name، وهذا Branch يشير إلى Commit.",
          "عندما تعمل switch إلى Branch آخر، يتحرك HEAD ليشير إلى ذلك Branch."
        ]
      },
      {
        heading: "Detached HEAD",
        paragraphs: [
          "إذا أشرت مباشرة إلى Commit بدل Branch، تدخل في Detached HEAD state. يمكنك الاستكشاف، لكن إذا أردت الاحتفاظ بعمل جديد فمن الأفضل إنشاء Branch."
        ]
      }
    ],
    commands: [
      {
        command: "git status",
        explanation: "يساعدك على معرفة Branch وHEAD state."
      },
      {
        command: "git switch --detach <commit>",
        explanation: "ينتقل إلى Commit مباشرة."
      }
    ],
    quiz: [
      {
        question: "ماذا يعني Detached HEAD؟",
        options: [
          "HEAD لا يتتبع Branch عاديًا",
          "Git محذوف",
          "GitHub مغلق",
          "Branch تم رفعه"
        ],
        answer: 0,
        explanation: "HEAD يشير مباشرة إلى Commit بدل اسم Branch."
      },
      {
        question: "كيف تحفظ عملًا جديدًا في detached state؟",
        options: [
          "إنشاء Branch مناسب",
          "حذف HEAD",
          "إغلاق Terminal",
          "git clean"
        ],
        answer: 0,
        explanation: "Branch يجعل العمل قابلًا للوصول بسهولة."
      }
    ]
  },

  {
    id: "git-objects",
    module: "14 — فهم Git من الداخل",
    course: "Git",
    level: "Advanced",
    duration: "20 دقيقة",
    title: "Git Objects: Blob وTree وCommit",
    summary:
      "نظرة أعمق على Objects التي يعتمد عليها Git.",
    objectives: [
      "Blob",
      "Tree",
      "Commit",
      "Object database"
    ],
    sections: [
      {
        heading: "الأنواع الأساسية",
        paragraphs: [
          "Git يستخدم Objects مثل Blob لتخزين محتوى الملفات، وTree لتمثيل بنية الملفات والمجلدات، وCommit الذي يربط هذه المعلومات بتاريخ المشروع.",
          "لا تحتاج هذه التفاصيل لعمل commit يومي، لكنها مهمة لفهم لماذا Git قوي في تتبع التاريخ."
        ]
      }
    ],
    commands: [
      {
        command: "git cat-file -t <hash>",
        explanation: "يمكنه معرفة نوع Git object."
      },
      {
        command: "git cat-file -p <hash>",
        explanation: "يعرض محتوى Object بطريقة مناسبة حسب نوعه."
      }
    ],
    quiz: [
      {
        question: "ما Blob؟",
        options: [
          "Object يمثل محتوى ملف",
          "Branch",
          "Remote",
          "Tag فقط"
        ],
        answer: 0,
        explanation: "Blob stores file content."
      },
      {
        question: "ما Tree؟",
        options: [
          "يمثل بنية الملفات والمجلدات",
          "Password",
          "GitHub account",
          "Commit message"
        ],
        answer: 0,
        explanation: "Tree يربط أسماء الملفات والـ blobs والبنى الفرعية."
      }
    ]
  },


  /* =======================================================
     MODULE 15 — PROFESSIONAL PROBLEMS
  ======================================================= */

  {
    id: "wrong-branch",
    module: "15 — حل المشاكل الواقعية",
    course: "Git",
    level: "Intermediate",
    duration: "14 دقيقة",
    title: "عملت Commit على Branch خطأ",
    summary:
      "سيناريو حقيقي جدًا: اكتشفت أن التغيير تم على branch غير صحيح.",
    objectives: [
      "تحليل الحالة",
      "فهم branch pointer",
      "نقل العمل",
      "تجنب الحلول العشوائية"
    ],
    sections: [
      {
        heading: "لا تبدأ بالأوامر",
        paragraphs: [
          "أولًا اسأل: هل Commit تم بالفعل؟ وهل تم Push؟ وهل Branch الخطأ مشترك مع الفريق؟ الإجابة تغير الحل.",
          "إذا كان Commit محليًا فقط، قد يكون من الممكن إعادة تنظيم التاريخ باستخدام Branch مناسب وreset وفق الحالة."
        ]
      }
    ],
    quiz: [
      {
        question: "ما أول شيء تفعله عند مشكلة Git؟",
        options: [
          "تفهم الحالة الحالية",
          "reset --hard فورًا",
          "حذف .git",
          "إغلاق المشروع"
        ],
        answer: 0,
        explanation: "التشخيص قبل التعديل يقلل فقدان البيانات."
      },
      {
        question: "لماذا لا تستخدم reset --hard عشوائيًا؟",
        options: [
          "قد تفقد تغييرات محلية",
          "لا يعمل أبدًا",
          "يحذف GitHub account",
          "يغير الإنترنت"
        ],
        answer: 0,
        explanation: "hard قد يزيل Working Tree changes."
      }
    ]
  },

  {
    id: "undo-pushed-commit",
    module: "15 — حل المشاكل الواقعية",
    course: "Git",
    level: "Intermediate",
    duration: "15 دقيقة",
    title: "كيف تتعامل مع Commit تم Push له بالخطأ؟",
    summary:
      "فرق كبير بين إصلاح تاريخ محلي وإصلاح تاريخ مشترك.",
    objectives: [
      "تشخيص Pushed history",
      "فهم revert",
      "فهم force push",
      "حماية الفريق"
    ],
    sections: [
      {
        heading: "إذا كان التاريخ مشتركًا",
        paragraphs: [
          "إذا كان Commit الخاطئ موجودًا على Remote ويستخدمه الفريق، فغالبًا يكون revert أكثر أمانًا لأنه يضيف Commit جديدًا يعكس التغيير بدل تغيير التاريخ المشترك.",
          "Force push يحتاج سياسة واضحة وفهمًا كاملًا للعواقب."
        ]
      }
    ],
    quiz: [
      {
        question: "ما الخيار المحافظ للتراجع عن Commit منشور؟",
        options: [
          "revert",
          "delete .git",
          "reset --hard دائمًا",
          "git clean"
        ],
        answer: 0,
        explanation: "revert يحافظ على التاريخ المشترك."
      },
      {
        question: "لماذا force push حساس؟",
        options: [
          "قد يعيد كتابة تاريخ يملكه آخرون",
          "لأنه بطيء",
          "لأنه يحذف Git",
          "لأنه يغير CSS"
        ],
        answer: 0,
        explanation: "إعادة كتابة shared history قد تربك المتعاونين."
      }
    ]
  },

  {
    id: "large-files",
    module: "15 — حل المشاكل الواقعية",
    course: "Git",
    level: "Advanced",
    duration: "15 دقيقة",
    title: "الملفات الكبيرة ومشكلة Repository Size",
    summary:
      "افهم لماذا لا يجب أن تحول Git إلى مخزن ملفات ضخمة.",
    objectives: [
      "Repository size",
      "Binary files",
      "Git LFS concept",
      "تنظيم assets"
    ],
    sections: [
      {
        heading: "Git ليس Cloud Storage",
        paragraphs: [
          "Git مصمم لإدارة تاريخ source code والملفات المناسبة لذلك. إدخال ملفات ضخمة ومتغيرة باستمرار قد يؤدي إلى تضخم Repository.",
          "عند الحاجة لملفات كبيرة، يمكن التفكير في أدوات مثل Git LFS أو تخزين خارجي حسب طبيعة المشروع."
        ]
      }
    ],
    quiz: [
      {
        question: "لماذا الملفات الكبيرة مشكلة؟",
        options: [
          "قد تزيد حجم التاريخ Repository بشكل كبير",
          "تغير لون Terminal",
          "تحذف GitHub",
          "تمنع HTML"
        ],
        answer: 0,
        explanation: "Git يحتفظ بتاريخ التغييرات، وهذا قد يجعل الملفات الكبيرة مكلفة."
      },
      {
        question: "ما Git LFS؟",
        options: [
          "نظام لإدارة ملفات كبيرة مع Git",
          "لغة برمجة",
          "Branch",
          "GitHub password"
        ],
        answer: 0,
        explanation: "LFS مخصص للتعامل مع large files بطريقة مختلفة."
      }
    ]
  },


  /* =======================================================
     MODULE 16 — CAPSTONE
  ======================================================= */

  {
    id: "project-start",
    module: "16 — مشروع تطبيقي",
    course: "Git",
    level: "Beginner",
    duration: "15 دقيقة",
    title: "مشروعنا الأول: تجهيز Repository",
    summary:
      "ابدأ مشروعًا حقيقيًا من الصفر واستخدم ما تعلمته بدل القراءة فقط.",
    objectives: [
      "إنشاء مشروع",
      "git init",
      ".gitignore",
      "أول Commit"
    ],
    sections: [
      {
        heading: "المهمة",
        paragraphs: [
          "أنشئ مشروع Web بسيط يحتوي index.html وstyle.css وscript.js. بعد ذلك أنشئ Repository محليًا واضبط Git.",
          "أضف .gitignore مناسبًا، ثم نفذ أول Commit برسالة واضحة."
        ]
      }
    ],
    commands: [
      {
        command: "git init",
        explanation: "ابدأ Repository."
      },
      {
        command: "git status",
        explanation: "راجع الحالة."
      },
      {
        command: "git add .",
        explanation: "جهز الملفات."
      },
      {
        command: 'git commit -m "feat: initialize project"',
        explanation: "أنشئ أول Commit."
      }
    ],
    quiz: [
      {
        question: "ما أول خطوة Git؟",
        options: [
          "git init",
          "git push",
          "git merge",
          "git revert"
        ],
        answer: 0,
        explanation: "ابدأ Repository محليًا."
      },
      {
        question: "ماذا تفعل قبل Commit؟",
        options: [
          "راجع status ثم stage التغييرات",
          "احذف .git",
          "اعمل force push",
          "احذف الملفات"
        ],
        answer: 0,
        explanation: "المراجعة قبل Commit عادة جيدة."
      }
    ]
  },

  {
    id: "project-branches",
    module: "16 — مشروع تطبيقي",
    course: "Git",
    level: "Intermediate",
    duration: "17 دقيقة",
    title: "مشروعنا: Feature Branch",
    summary:
      "أضف Feature حقيقية باستخدام Branch منفصل.",
    objectives: [
      "Feature Branch",
      "Commits",
      "Merge",
      "Branch cleanup"
    ],
    sections: [
      {
        heading: "التحدي",
        paragraphs: [
          "أنشئ feature/about-page ثم أضف صفحة About في المشروع. اعمل Commit واضحًا ثم عد إلى main وادمج التغيير.",
          "بعد التأكد من نجاح الدمج، نظف Branch إذا لم تعد تحتاجه."
        ]
      }
    ],
    commands: [
      {
        command: "git switch -c feature/about-page",
        explanation: "ابدأ Feature Branch."
      },
      {
        command: 'git commit -m "feat: add about page"',
        explanation: "سجل Feature."
      },
      {
        command: "git switch main",
        explanation: "عد إلى main."
      },
      {
        command: "git merge feature/about-page",
        explanation: "ادمج Feature."
      }
    ],
    quiz: [
      {
        question: "لماذا Feature Branch؟",
        options: [
          "لعزل التغيير",
          "لحذف main",
          "لمنع Commit",
          "لتثبيت Git"
        ],
        answer: 0,
        explanation: "العزل يجعل التطوير والمراجعة أسهل."
      },
      {
        question: "من أين تنفذ merge عادة؟",
        options: [
          "من الفرع الذي يستقبل التغيير",
          "من .git",
          "من GitHub فقط",
          "من Branch المحذوف"
        ],
        answer: 0,
        explanation: "merge source into current branch."
      }
    ]
  },

  {
    id: "project-github",
    module: "16 — مشروع تطبيقي",
    course: "GitHub",
    level: "Intermediate",
    duration: "18 دقيقة",
    title: "مشروعنا: رفع المشروع إلى GitHub",
    summary:
      "اربط المشروع المحلي بـ GitHub وارفع التاريخ بطريقة منظمة.",
    objectives: [
      "Create Repository",
      "Remote",
      "Push",
      "README"
    ],
    sections: [
      {
        heading: "من Local إلى Remote",
        paragraphs: [
          "أنشئ Repository على GitHub ثم أضف remote origin للمشروع المحلي. تأكد أن لديك Commit صالح قبل Push.",
          "بعد رفع main، افتح Repository وتأكد من ظهور الملفات وREADME والتاريخ."
        ]
      }
    ],
    commands: [
      {
        command: "git remote add origin https://github.com/user/project.git",
        explanation: "اربط المشروع."
      },
      {
        command: "git branch -M main",
        explanation: "يعيد تسمية الفرع الحالي إلى main."
      },
      {
        command: "git push -u origin main",
        explanation: "ارفع main واربط upstream."
      }
    ],
    quiz: [
      {
        question: "ما الذي يربط local بـ GitHub؟",
        options: [
          "git remote add",
          "git status",
          "git diff",
          "git clean"
        ],
        answer: 0,
        explanation: "remote يحدد الوجهة البعيدة."
      },
      {
        question: "ما الذي يرفع Commits؟",
        options: [
          "git push",
          "git add",
          "git init",
          "git restore"
        ],
        answer: 0,
        explanation: "push ينقل التاريخ إلى Remote."
      }
    ]
  },

  {
    id: "project-pr",
    module: "16 — مشروع تطبيقي",
    course: "GitHub",
    level: "Advanced",
    duration: "20 دقيقة",
    title: "المشروع: Pull Request كامل",
    summary:
      "نفذ دورة العمل الأقرب لما ستستخدمه داخل فريق حقيقي.",
    objectives: [
      "Issue",
      "Feature Branch",
      "Push",
      "Pull Request",
      "Review"
    ],
    sections: [
      {
        heading: "المهمة النهائية",
        paragraphs: [
          "أنشئ Issue لميزة جديدة، أنشئ Branch مرتبطًا بالمهمة، نفذ التغيير في Commits منطقية، ثم Push وافتح Pull Request.",
          "اكتب Description يشرح ما تم وما الذي يجب على Reviewer اختباره. بعد المراجعة عالج Feedback ثم نفذ Merge."
        ]
      }
    ],
    quiz: [
      {
        question: "ما الذي يأتي عادة قبل Pull Request؟",
        options: [
          "Branch وCommits وPush",
          "حذف Repository",
          "git clean",
          "حذف main"
        ],
        answer: 0,
        explanation: "PR يحتاج تغييرات منشورة على Branch."
      },
      {
        question: "ما الهدف من Review؟",
        options: [
          "تحسين الجودة ومراجعة التغيير",
          "إخفاء الكود",
          "تثبيت Git",
          "حذف Issue"
        ],
        answer: 0,
        explanation: "Review جزء أساسي من التعاون."
      },
      {
        question: "ماذا تفعل عند وجود Feedback؟",
        options: [
          "تراجع التعليق وتعدل Branch ثم تحدث PR",
          "تحذف Git",
          "تغلق الجهاز",
          "تعمل force push دائمًا"
        ],
        answer: 0,
        explanation: "تحديث Branch ينعكس على Pull Request."
      }
    ]
  },


  /* =======================================================
     FINAL PROFESSIONAL LESSONS
  ======================================================= */

  {
    id: "professional-debugging",
    module: "17 — المستوى الاحترافي",
    course: "Git",
    level: "Advanced",
    duration: "20 دقيقة",
    title: "طريقة التفكير عند حدوث مشكلة في Git",
    summary:
      "المحترف ليس من يحفظ 200 أمر، بل من يعرف كيف يشخص المشكلة.",
    objectives: [
      "التشخيص",
      "قراءة status",
      "قراءة log",
      "استخدام reflog",
      "تجنب الحلول المدمرة"
    ],
    sections: [
      {
        heading: "قاعدة التشخيص",
        paragraphs: [
          "عندما يحدث شيء غير متوقع، لا تبدأ بأمر عشوائي. ابدأ بـ git status ثم اقرأ Branch الحالي وWorking Tree. بعد ذلك افحص log وdiff حسب المشكلة.",
          "إذا كانت المشكلة مرتبطة بتاريخ تحرك أو reset أو rebase، قد يكون reflog مفيدًا."
        ]
      }
    ],
    commands: [
      {
        command: "git status",
        explanation: "ابدأ منه في معظم الحالات."
      },
      {
        command: "git log --oneline --graph --decorate --all",
        explanation: "افهم شكل التاريخ."
      },
      {
        command: "git reflog",
        explanation: "ابحث عن تحركات سابقة."
      }
    ],
    quiz: [
      {
        question: "ما أفضل عقلية عند مشكلة Git؟",
        options: [
          "شخّص أولًا",
          "reset --hard فورًا",
          "احذف .git",
          "أعد تثبيت Windows"
        ],
        answer: 0,
        explanation: "التشخيص يقلل احتمالات فقدان العمل."
      },
      {
        question: "أي أمر يساعدك في رؤية شكل الفروع؟",
        options: [
          "git log --graph",
          "git install",
          "git delete",
          "git browser"
        ],
        answer: 0,
        explanation: "graph يعرض العلاقات في التاريخ."
      }
    ]
  },

  {
    id: "security-secrets",
    module: "17 — المستوى الاحترافي",
    course: "GitHub",
    level: "Advanced",
    duration: "17 دقيقة",
    title: "Secrets والأمان في Git",
    summary:
      "أخطر خطأ: رفع API key أو password ثم محاولة حذف الملف فقط.",
    objectives: [
      "فهم Secrets",
      "Environment variables",
      "History",
      "Secret rotation"
    ],
    sections: [
      {
        heading: "لا يكفي حذف الملف",
        paragraphs: [
          "إذا وضعت API key في Commit ثم حذفت الملف في Commit لاحق، يبقى المفتاح في History القديم. لذلك يجب التعامل معه كسر تم كشفه.",
          "الإجراء الصحيح يبدأ غالبًا بإبطال السر أو تدويره ثم تنظيف التاريخ إذا كان ذلك مطلوبًا."
        ]
      }
    ],
    quiz: [
      {
        question: "ماذا تفعل إذا تم كشف API key؟",
        options: [
          "تدويره/إبطاله فورًا",
          "تغيير اسم الملف فقط",
          "عمل refresh",
          "إغلاق Terminal"
        ],
        answer: 0,
        explanation: "السر المكشوف يجب اعتباره compromised."
      },
      {
        question: "هل حذف secret في Commit جديد يكفي؟",
        options: [
          "لا",
          "نعم دائمًا",
          "فقط GitHub",
          "فقط SSH"
        ],
        answer: 0,
        explanation: "يبقى في التاريخ السابق."
      }
    ]
  },

  {
    id: "open-source",
    module: "17 — المستوى الاحترافي",
    course: "GitHub",
    level: "Advanced",
    duration: "20 دقيقة",
    title: "المساهمة في Open Source",
    summary:
      "كيف تنتقل من مشروعك الشخصي إلى المساهمة في مشاريع حقيقية.",
    objectives: [
      "قراءة المشروع",
      "Fork",
      "Issue",
      "Pull Request",
      "Contribution etiquette"
    ],
    sections: [
      {
        heading: "ابدأ صغيرًا",
        paragraphs: [
          "ليس مطلوبًا أن تبدأ بإصلاح أكبر مشكلة. يمكنك البدء بتوثيق، اختبار، إصلاح typo، أو Bug صغير.",
          "اقرأ CONTRIBUTING وREADME وCode of Conduct قبل إرسال مساهمة."
        ]
      }
    ],
    quiz: [
      {
        question: "ما أول شيء تقرأه قبل المساهمة؟",
        options: [
          "README وCONTRIBUTING عند وجودهما",
          "package-lock فقط",
          "ملفات Git الداخلية",
          "password file"
        ],
        answer: 0,
        explanation: "المشروع قد يحدد Workflow خاصًا بالمساهمات."
      },
      {
        question: "ما أفضل بداية للمبتدئ؟",
        options: [
          "مساهمة صغيرة واضحة",
          "إعادة كتابة المشروع كله",
          "حذف main",
          "Force push"
        ],
        answer: 0,
        explanation: "المساهمات الصغيرة تعلمك workflow الحقيقي."
      }
    ]
  },

  {
    id: "final-workflow",
    module: "17 — المستوى الاحترافي",
    course: "GitHub",
    level: "Advanced",
    duration: "25 دقيقة",
    title: "المسار الكامل: من Issue إلى Production",
    summary:
      "آخر درس يجمع كل ما تعلمته في Workflow واحد يشبه بيئة العمل الحقيقية.",
    objectives: [
      "Issue",
      "Branch",
      "Commits",
      "Push",
      "Pull Request",
      "Review",
      "CI",
      "Release"
    ],
    sections: [
      {
        heading: "الصورة الكاملة",
        paragraphs: [
          "ابدأ من Issue واضحة. أنشئ Feature Branch. اكتب كودًا واختبارات مناسبة. نفذ Commits صغيرة وواضحة. Push للفرع ثم افتح Pull Request.",
          "بعد ذلك تتم Code Review وتشغل CI checks، ثم تعالج feedback، وبعد الموافقة يتم Merge. عند جاهزية الإصدار يمكنك إنشاء Tag وRelease، وربما تشغيل Deployment عبر CI/CD."
        ]
      },
      {
        heading: "أصبحت تعرف لماذا وليس فقط كيف",
        paragraphs: [
          "الهدف من Fayad Code ليس أن تحفظ مجموعة أوامر. الهدف أن تستطيع النظر إلى مشكلة حقيقية واختيار الأداة المناسبة: Branch للعزل، Commit للتاريخ، Merge أو Rebase حسب الـ workflow، Revert للتراجع الآمن، Stash للعمل المؤقت، Reflog للاسترداد، وPull Request للتعاون.",
          "إذا فهمت هذه الصورة، فأنت لم تعد تتعامل مع Git كأوامر منفصلة؛ أصبحت تفهم Workflow كامل."
        ]
      }
    ],
    commands: [
      {
        command: "git switch -c feature/new-feature",
        explanation: "ابدأ Feature."
      },
      {
        command: "git add .",
        explanation: "جهز التغييرات."
      },
      {
        command: 'git commit -m "feat: implement new feature"',
        explanation: "سجل التغيير."
      },
      {
        command: "git push -u origin feature/new-feature",
        explanation: "ارفع Branch."
      }
    ],
    quiz: [
      {
        question: "ما أول عنصر يوضح العمل المطلوب عادة؟",
        options: [
          "Issue",
          "Force push",
          "Reset",
          "Reflog"
        ],
        answer: 0,
        explanation: "Issue يمكن أن تمثل المهمة أو المشكلة."
      },
      {
        question: "ماذا يحدث عادة قبل Merge في workflow احترافي؟",
        options: [
          "Review وChecks",
          "حذف Branch مباشرة",
          "حذف .git",
          "reset --hard"
        ],
        answer: 0,
        explanation: "المراجعة والـ automated checks تساعد على الجودة."
      },
      {
        question: "أي أداة تستخدم غالبًا للتراجع عن تغيير منشور دون إعادة كتابة التاريخ؟",
        options: [
          "git revert",
          "git clean",
          "git init",
          "git clone"
        ],
        answer: 0,
        explanation: "revert ينشئ Commit جديدًا يعكس التغيير."
      },
      {
        question: "ما الهدف النهائي من تعلم Git؟",
        options: [
          "فهم وإدارة تاريخ وتعاون المشروع",
          "حفظ الأوامر فقط",
          "استخدام Terminal فقط",
          "زيادة عدد Commits"
        ],
        answer: 0,
        explanation:
          "القيمة الحقيقية هي إدارة التغيير والتعاون بثقة."
      }
    ]
  }

];


/* =========================================================
   NOTE
   =========================================================
   The curriculum above contains the full structured course.
   We intentionally build the UI from data so adding lessons
   later does not require changing the HTML.
========================================================= */


/* =========================================================
   STATE
========================================================= */

const lessonMap = new Map(
  lessons.map((lesson) => [lesson.id, lesson])
);

const state = {
  currentLessonId: lessons[0]?.id || "",
  activeCourse: "all",
  activeLevel: "all",
  search: "",
  completed: new Set(),
  quizAnswers: {},
  quizChecked: false
};


/* =========================================================
   DOM
========================================================= */

const lessonList = $("#lessonList");
const lessonContent = $("#lessonContent");
const quizCard = $("#quizCard");
const quizContent = $("#quizContent");

const sidebar = $("#sidebar");
const sidebarOverlay = $("#sidebarOverlay");
const sidebarClose = $("#sidebarClose");

const openLessonsButton = $("#openLessonsButton");
const mobileLessonsButton = $("#mobileLessonsButton");

const lessonSearch = $("#lessonSearch");

const previousLesson = $("#previousLesson");
const nextLesson = $("#nextLesson");
const completeLesson = $("#completeLesson");

const totalLessons = $("#totalLessons");
const completedLessons = $("#completedLessons");
const progressPercent = $("#progressPercent");

const sidebarProgress = $("#sidebarProgress");
const progressFill = $("#progressFill");
const completedSidebarText = $("#completedSidebarText");

const lessonCount = $("#lessonCount");
const breadcrumbLesson = $("#breadcrumbLesson");
const lessonPosition = $("#lessonPosition");

const startLearningButton = $("#startLearningButton");
const continueLearningButton = $("#continueLearningButton");

const currentYear = $("#currentYear");

const practiceForm = $("#practiceForm");
const practiceInput = $("#practiceInput");
const practiceOutput = $("#practiceOutput");
const clearTerminal = $("#clearTerminal");


/* =========================================================
   LOCAL STORAGE
========================================================= */

function loadProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);

    if (!raw) return;

    const ids = JSON.parse(raw);

    if (Array.isArray(ids)) {
      state.completed = new Set(
        ids.filter((id) => lessonMap.has(id))
      );
    }
  } catch {
    state.completed = new Set();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify([...state.completed])
    );
  } catch {
    // Storage may be unavailable.
  }
}

function saveLastLesson(id) {
  try {
    localStorage.setItem(
      LAST_LESSON_KEY,
      id
    );
  } catch {
    // Ignore storage errors.
  }
}

function getLastLesson() {
  try {
    return localStorage.getItem(
      LAST_LESSON_KEY
    );
  } catch {
    return null;
  }
}


/* =========================================================
   SECURITY / HTML HELPERS
========================================================= */

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeCode(value) {
  return escapeHTML(value);
}


/* =========================================================
   TEXT NORMALIZATION
========================================================= */

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ـ/g, "")
    .replace(/\s+/g, " ")
    .trim();
}


/* =========================================================
   FILTERING
========================================================= */

function getFilteredLessons() {
  const query = normalizeText(state.search);

  return lessons.filter((lesson) => {

    if (
      state.activeCourse !== "all" &&
      lesson.course !== state.activeCourse
    ) {
      return false;
    }

    if (
      state.activeLevel !== "all" &&
      lesson.level !== state.activeLevel
    ) {
      return false;
    }

    if (!query) {
      return true;
    }

    const searchable = normalizeText(
      [
        lesson.title,
        lesson.summary,
        lesson.module,
        lesson.course,
        lesson.level,
        ...lesson.objectives,
        ...lesson.sections.flatMap((section) => [
          section.heading,
          ...section.paragraphs
        ])
      ].join(" ")
    );

    return searchable.includes(query);
  });
}


/* =========================================================
   SIDEBAR
========================================================= */

function openSidebar() {
  sidebar.classList.add("is-open");
  sidebarOverlay.classList.add("is-visible");

  document.body.classList.add("menu-open");

  openLessonsButton?.setAttribute(
    "aria-expanded",
    "true"
  );

  mobileLessonsButton?.setAttribute(
    "aria-expanded",
    "true"
  );

  setTimeout(() => {
    lessonSearch?.focus();
  }, 180);
}

function closeSidebar() {
  sidebar.classList.remove("is-open");
  sidebarOverlay.classList.remove("is-visible");

  document.body.classList.remove("menu-open");

  openLessonsButton?.setAttribute(
    "aria-expanded",
    "false"
  );

  mobileLessonsButton?.setAttribute(
    "aria-expanded",
    "false"
  );
}

function toggleSidebar() {
  if (sidebar.classList.contains("is-open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
}


/* =========================================================
   MODULE GROUPING
========================================================= */

function groupLessons(filteredLessons) {
  const groups = new Map();

  filteredLessons.forEach((lesson) => {

    if (!groups.has(lesson.module)) {
      groups.set(lesson.module, []);
    }

    groups.get(lesson.module).push(lesson);
  });

  return groups;
}


/* =========================================================
   RENDER LESSON LIST
========================================================= */

function renderLessonList() {

  const filtered = getFilteredLessons();

  lessonCount.textContent = filtered.length;

  if (!filtered.length) {

    lessonList.innerHTML = `
      <div class="lesson-empty">
        <strong>لا توجد نتائج</strong>
        جرّب كلمة بحث مختلفة أو غيّر الفلاتر.
      </div>
    `;

    return;
  }

  const groups = groupLessons(filtered);

  let html = "";

  groups.forEach((moduleLessons, moduleName) => {

    html += `
      <section class="lesson-module">

        <div class="module-heading">
          ${escapeHTML(moduleName)}
        </div>
    `;

    moduleLessons.forEach((lesson) => {

      const index =
        lessons.findIndex(
          (item) => item.id === lesson.id
        ) + 1;

      const isActive =
        lesson.id === state.currentLessonId;

      const isCompleted =
        state.completed.has(lesson.id);

      html += `
        <button
          type="button"
          class="
            lesson-item
            ${isActive ? "active" : ""}
            ${isCompleted ? "completed" : ""}
          "
          data-lesson-id="${escapeHTML(lesson.id)}"
          aria-current="${isActive ? "true" : "false"}"
        >

          <span class="lesson-item-number">
            ${String(index).padStart(2, "0")}
          </span>

          <span class="lesson-item-copy">

            <span class="lesson-item-title">
              ${escapeHTML(lesson.title)}
            </span>

            <span class="lesson-item-meta">
              <span>${escapeHTML(lesson.level)}</span>
              <span>•</span>
              <span>${escapeHTML(lesson.duration)}</span>
            </span>

          </span>

          <span class="lesson-item-check">
            ✓
          </span>

        </button>
      `;
    });

    html += `
      </section>
    `;
  });

  lessonList.innerHTML = html;
}


/* =========================================================
   LESSON CONTENT
========================================================= */

function renderLesson(lesson) {

  if (!lesson) {
    return;
  }

  breadcrumbLesson.textContent =
    lesson.title;

  const currentIndex =
    lessons.findIndex(
      (item) => item.id === lesson.id
    ) + 1;

  lessonPosition.textContent =
    `${currentIndex} / ${lessons.length}`;

  const objectiveHTML =
    lesson.objectives
      .map(
        (item) =>
          `<li>${escapeHTML(item)}</li>`
      )
      .join("");

  const sectionsHTML =
    lesson.sections
      .map((section) => {

        const paragraphs =
          section.paragraphs
            .map(
              (paragraph) =>
                `<p>${escapeHTML(paragraph)}</p>`
            )
            .join("");

        return `
          <section class="lesson-section">

            <h2>
              ${escapeHTML(section.heading)}
            </h2>

            ${paragraphs}

          </section>
        `;
      })
      .join("");

  const commandsHTML =
    lesson.commands?.length
      ? `
        <section class="lesson-section">

          <h2>
            الأوامر المهمة
          </h2>

          <p>
            لا تحفظ هذه الأوامر فقط. جرّبها في Terminal
            وافهم النتيجة التي تظهر لك.
          </p>

          ${lesson.commands
            .map(
              (item) => `
                <div class="command-block">

                  <div class="command-head">
                    <span>Terminal</span>
                    <span>Git</span>
                  </div>

                  <pre class="command-code"><span class="command">${escapeCode(
                    item.command
                  )}</span></pre>

                  <div
                    style="
                      padding: 0 16px 15px;
                      color: #777;
                      font-size: 11px;
                    "
                  >
                    ${escapeHTML(item.explanation)}
                  </div>

                </div>
              `
            )
            .join("")}
        </section>
      `
      : "";

  const exampleHTML =
    lesson.example
      ? `
        <div class="example-box">

          <h3>
            ${escapeHTML(lesson.example.title)}
          </h3>

          <p>
            ${escapeHTML(lesson.example.text)}
          </p>

        </div>
      `
      : "";

  const notesHTML =
    lesson.notes?.length
      ? lesson.notes
          .map(
            (note) => `
              <div class="lesson-note">

                <strong>
                  ملاحظة
                </strong>

                ${escapeHTML(note)}

              </div>
            `
          )
          .join("")
      : "";

  lessonContent.innerHTML = `

    <header class="lesson-header">

      <div class="lesson-category">
        ${escapeHTML(lesson.course)}
        / ${escapeHTML(lesson.level)}
      </div>

      <h1 class="lesson-title">
        ${escapeHTML(lesson.title)}
      </h1>

      <p class="lesson-summary">
        ${escapeHTML(lesson.summary)}
      </p>

      <div class="lesson-meta-row">

        <span class="lesson-meta-pill accent">
          ${escapeHTML(lesson.module)}
        </span>

        <span class="lesson-meta-pill">
          ${escapeHTML(lesson.duration)}
        </span>

        <span class="lesson-meta-pill">
          ${lesson.quiz.length} أسئلة
        </span>

      </div>

    </header>


    <section class="objectives">

      <h2 class="objectives-title">
        ماذا ستفهم بعد هذا الدرس؟
      </h2>

      <ul class="objectives-list">
        ${objectiveHTML}
      </ul>

    </section>


    ${sectionsHTML}

    ${commandsHTML}

    ${exampleHTML}

    ${notesHTML}

  `;

  updateCompletionButton();

  renderQuiz(lesson);

  renderLessonList();

  updateNavigation();

  resetPracticeTerminal();
}


/* =========================================================
   QUIZ
========================================================= */

function renderQuiz(lesson) {

  const questions = lesson.quiz || [];

  if (!questions.length) {
    quizCard.style.display = "none";
    return;
  }

  quizCard.style.display = "";

  state.quizAnswers = {};
  state.quizChecked = false;

  let questionsHTML = "";

  questions.forEach((question, index) => {

    const letters = ["A", "B", "C", "D", "E"];

    const optionsHTML =
      question.options
        .map(
          (option, optionIndex) => `
            <button
              type="button"
              class="quiz-option"
              data-question="${index}"
              data-option="${optionIndex}"
            >

              <span class="option-letter">
                ${letters[optionIndex]}
              </span>

              <span>
                ${escapeHTML(option)}
              </span>

            </button>
          `
        )
        .join("");

    questionsHTML += `
      <div
        class="quiz-question"
        data-question-block="${index}"
      >

        <span class="question-number">
          QUESTION ${String(index + 1).padStart(2, "0")}
        </span>

        <p class="question-text">
          ${escapeHTML(question.question)}
        </p>

        <div class="quiz-options">
          ${optionsHTML}
        </div>

        <div class="question-explanation">
          ${escapeHTML(question.explanation)}
        </div>

      </div>
    `;
  });

  quizContent.innerHTML = `
    ${questionsHTML}

    <div class="quiz-controls">

      <div class="quiz-score">
        أجب عن الأسئلة ثم اضغط
        <strong>تحقق من الإجابات</strong>
      </div>

      <div class="quiz-actions">

        <button
          type="button"
          class="quiz-reset"
          id="quizReset"
        >
          إعادة المحاولة
        </button>

        <button
          type="button"
          class="quiz-check"
          id="quizCheck"
        >
          تحقق من الإجابات
        </button>

      </div>

    </div>

    <div
      id="quizResult"
      class="quiz-result"
      hidden
    ></div>
  `;

  $$(".quiz-option", quizContent)
    .forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          if (state.quizChecked) {
            return;
          }

          const questionIndex =
            Number(
              button.dataset.question
            );

          const optionIndex =
            Number(
              button.dataset.option
            );

          state.quizAnswers[questionIndex] =
            optionIndex;

          $$(
            `.quiz-option[data-question="${questionIndex}"]`,
            quizContent
          ).forEach((option) => {
            option.classList.remove(
              "selected"
            );
          });

          button.classList.add("selected");
        }
      );
    });

  $("#quizCheck")?.addEventListener(
    "click",
    () => checkQuiz(lesson)
  );

  $("#quizReset")?.addEventListener(
    "click",
    () => renderQuiz(lesson)
  );
}

function checkQuiz(lesson) {

  if (state.quizChecked) {
    return;
  }

  const questions = lesson.quiz;

  let score = 0;
  let answered = 0;

  questions.forEach(
    (question, questionIndex) => {

      const selected =
        state.quizAnswers[questionIndex];

      const block =
        $(
          `[data-question-block="${questionIndex}"]`,
          quizContent
        );

      block.classList.add("checked");

      if (
        selected !== undefined
      ) {
        answered++;
      }

      const options =
        $$(
          `.quiz-option[data-question="${questionIndex}"]`,
          quizContent
        );

      options.forEach(
        (option) => {

          const optionIndex =
            Number(option.dataset.option);

          option.disabled = true;

          if (
            optionIndex === question.answer
          ) {
            option.classList.add("correct");
          }

          if (
            selected === optionIndex &&
            selected !== question.answer
          ) {
            option.classList.add("wrong");
          }
        }
      );

      if (
        selected === question.answer
      ) {
        score++;
      }
    }
  );

  state.quizChecked = true;

  const percentage =
    Math.round(
      (score / questions.length) * 100
    );

  const result = $("#quizResult");

  result.hidden = false;

  result.className =
    `quiz-result ${
      percentage >= 70
        ? "success"
        : "warning"
    }`;

  result.textContent =
    `نتيجتك: ${score} من ${questions.length} (${percentage}%). ` +
    `أجبت عن ${answered} من ${questions.length} أسئلة.`;

  const scoreElement =
    $(".quiz-score", quizContent);

  if (scoreElement) {
    scoreElement.innerHTML = `
      النتيجة:
      <strong>
        ${score} / ${questions.length}
      </strong>
    `;
  }
}


/* =========================================================
   COMPLETION
========================================================= */

function updateCompletionButton() {

  const completed =
    state.completed.has(
      state.currentLessonId
    );

  completeLesson.classList.toggle(
    "completed",
    completed
  );

  $("#completeText").textContent =
    completed
      ? "تم إكمال الدرس"
      : "تحديد الدرس كمكتمل";

  $("#completeIcon").textContent =
    completed
      ? "✓"
      : "○";
}

function toggleCurrentCompletion() {

  const id =
    state.currentLessonId;

  if (state.completed.has(id)) {
    state.completed.delete(id);
  } else {
    state.completed.add(id);
  }

  saveProgress();

  updateProgressUI();

  renderLessonList();

  updateCompletionButton();
}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgressUI() {

  const total =
    lessons.length;

  const completed =
    state.completed.size;

  const percentage =
    total
      ? Math.round(
          (completed / total) * 100
        )
      : 0;

  totalLessons.textContent =
    total;

  completedLessons.textContent =
    completed;

  progressPercent.textContent =
    `${percentage}%`;

  sidebarProgress.textContent =
    `${percentage}%`;

  progressFill.style.width =
    `${percentage}%`;

  completedSidebarText.textContent =
    `${completed} من ${total} درس`;
}

/* =========================================================
   NAVIGATION
========================================================= */

function updateNavigation() {
  const filtered = getFilteredLessons();

  const currentIndex = filtered.findIndex(
    (lesson) => lesson.id === state.currentLessonId
  );

  previousLesson.disabled = currentIndex <= 0;

  nextLesson.disabled =
    currentIndex === -1 ||
    currentIndex >= filtered.length - 1;
}

function selectLesson(id, updateHash = true) {
  const lesson = lessonMap.get(id);

  if (!lesson) {
    return;
  }

  state.currentLessonId = lesson.id;

  saveLastLesson(lesson.id);

  if (updateHash) {
    const newHash =
      `lesson=${encodeURIComponent(lesson.id)}`;

    history.replaceState(
      null,
      "",
      `#${newHash}`
    );
  }

  renderLesson(lesson);

  /*
   * Close the sidebar only on mobile.
   * On desktop the sidebar stays visible and
   * can continue to be used for navigation.
   */
  if (window.innerWidth <= 900) {
    closeSidebar();
  }

  /*
   * Scroll the main document to the top.
   * This does NOT control the sidebar scroll.
   */
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goPrevious() {
  const filtered = getFilteredLessons();

  const index = filtered.findIndex(
    (lesson) =>
      lesson.id === state.currentLessonId
  );

  if (index > 0) {
    selectLesson(
      filtered[index - 1].id
    );
  }
}

function goNext() {
  const filtered = getFilteredLessons();

  const index = filtered.findIndex(
    (lesson) =>
      lesson.id === state.currentLessonId
  );

  if (
    index !== -1 &&
    index < filtered.length - 1
  ) {
    selectLesson(
      filtered[index + 1].id
    );
  }
}


/* =========================================================
   HASH
========================================================= */

function getLessonFromHash() {
  const hash = window.location.hash;

  if (!hash.startsWith("#lesson=")) {
    return null;
  }

  const id = decodeURIComponent(
    hash.replace("#lesson=", "")
  );

  return lessonMap.has(id)
    ? id
    : null;
}


/* =========================================================
   FILTER EVENTS
========================================================= */

function setupFilters() {
  $$("#courseFilters .filter-chip").forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {
          $$("#courseFilters .filter-chip").forEach(
            (item) =>
              item.classList.remove("active")
          );

          button.classList.add("active");

          state.activeCourse =
            button.dataset.course;

          renderLessonList();

          updateNavigation();
        }
      );
    }
  );

  $$("#levelFilters .filter-chip").forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {
          $$("#levelFilters .filter-chip").forEach(
            (item) =>
              item.classList.remove("active")
          );

          button.classList.add("active");

          state.activeLevel =
            button.dataset.level;

          renderLessonList();

          updateNavigation();
        }
      );
    }
  );
}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {
  lessonSearch.addEventListener(
    "input",
    () => {
      state.search = lessonSearch.value;

      renderLessonList();

      updateNavigation();
    }
  );
}


/* =========================================================
   TERMINAL SIMULATOR
========================================================= */

function resetPracticeTerminal() {
  practiceOutput.innerHTML = `
    <div class="sim-line">
      <span class="sim-prompt">$</span>

      <span>
        اكتب أمرًا مثل:
        <code>git status</code>
      </span>
    </div>
  `;
}

function addTerminalCommand(
  command,
  result,
  type = ""
) {
  const line =
    document.createElement("div");

  line.className = "sim-line";

  line.innerHTML = `
    <span class="sim-prompt">$</span>

    <span class="sim-command">
      ${escapeHTML(command)}
    </span>
  `;

  practiceOutput.appendChild(line);

  const output =
    document.createElement("div");

  output.className =
    `sim-result ${type}`;

  output.innerHTML =
    escapeHTML(result)
      .replaceAll("\n", "<br>");

  practiceOutput.appendChild(output);

  practiceOutput.scrollTop =
    practiceOutput.scrollHeight;
}

function simulateGitCommand(command) {
  const normalized =
    command
      .trim()
      .replace(/\s+/g, " ");

  if (!normalized) {
    return {
      type: "error",
      result: "اكتب أمرًا أولًا."
    };
  }

  const known = {
    "git status": {
      type: "",
      result:
        "On branch main\n" +
        "Your branch is up to date with 'origin/main'.\n" +
        "nothing to commit, working tree clean"
    },

    "git branch": {
      type: "",
      result:
        "* main\n" +
        "  feature/login\n" +
        "  feature/dashboard"
    },

    "git log --oneline": {
      type: "",
      result:
        "a82f91c feat: add dashboard\n" +
        "73bd120 fix: mobile navigation\n" +
        "29ad001 docs: update README"
    },

    "git diff": {
      type: "",
      result:
        "diff --git a/app.js b/app.js\n" +
        "+ const isReady = true;\n" +
        "- const isReady = false;"
    },

    "git remote -v": {
      type: "",
      result:
        "origin  https://github.com/user/project.git (fetch)\n" +
        "origin  https://github.com/user/project.git (push)"
    },

    "git fetch": {
      type: "success",
      result:
        "remote: Enumerating objects...\n" +
        "remote: Total 4 (delta 2)\n" +
        "From github.com:user/project\n" +
        "   7aa1b2c..9f2c8a1  main -> origin/main"
    },

    "git pull": {
      type: "success",
      result:
        "Already up to date."
    },

    "git push": {
      type: "success",
      result:
        "Enumerating objects: 5, done.\n" +
        "Writing objects: 100%\n" +
        "Everything up-to-date"
    },

    "git init": {
      type: "success",
      result:
        "Initialized empty Git repository."
    },

    "git add .": {
      type: "success",
      result:
        "Changes added to the staging area."
    },

    "git commit": {
      type: "success",
      result:
        "[main a82f91c] update project\n" +
        "2 files changed, 18 insertions(+), 4 deletions(-)"
    }
  };

  if (known[normalized]) {
    return known[normalized];
  }

  if (
    normalized.startsWith("git add ")
  ) {
    return {
      type: "success",
      result:
        `Changes from ${normalized
          .replace("git add ", "")} staged successfully.`
    };
  }

  if (
    normalized.startsWith("git switch ")
  ) {
    return {
      type: "success",
      result:
        `Switched to branch '${normalized
          .replace("git switch ", "")}'.`
    };
  }

  if (
    normalized.startsWith("git checkout ")
  ) {
    return {
      type: "success",
      result:
        `Switched to '${normalized
          .replace("git checkout ", "")}'.`
    };
  }

  if (
    normalized.startsWith("git merge ")
  ) {
    return {
      type: "success",
      result:
        "Merge made successfully.\n" +
        "All conflicts resolved."
    };
  }

  if (
    normalized.startsWith("git clone ")
  ) {
    return {
      type: "success",
      result:
        "Cloning into 'project'...\n" +
        "remote: Enumerating objects...\n" +
        "Receiving objects: 100%"
    };
  }

  if (
    normalized.startsWith("git revert ")
  ) {
    return {
      type: "success",
      result:
        "Revert commit created successfully."
    };
  }

  if (
    normalized.startsWith("git stash")
  ) {
    return {
      type: "success",
      result:
        "Saved working directory and index state."
    };
  }

  if (
    normalized === "git --version"
  ) {
    return {
      type: "success",
      result:
        "git version 2.x.x"
    };
  }

  if (
    normalized === "clear"
  ) {
    return {
      type: "clear",
      result: ""
    };
  }

  return {
    type: "error",
    result:
      "هذا الأمر غير موجود في المحاكاة الحالية.\n" +
      "جرّب: git status أو git log --oneline أو git branch أو git diff أو git remote -v"
  };
}

practiceForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    const command =
      practiceInput.value.trim();

    if (!command) {
      return;
    }

    const response =
      simulateGitCommand(command);

    if (response.type === "clear") {
      resetPracticeTerminal();

      practiceInput.value = "";

      return;
    }

    addTerminalCommand(
      command,
      response.result,
      response.type
    );

    practiceInput.value = "";

    practiceInput.focus();
  }
);

clearTerminal.addEventListener(
  "click",
  () => {
    resetPracticeTerminal();

    practiceInput.focus();
  }
);


/* =========================================================
   EVENT DELEGATION
========================================================= */

lessonList.addEventListener(
  "click",
  (event) => {
    const button =
      event.target.closest(
        "[data-lesson-id]"
      );

    if (!button) {
      return;
    }

    selectLesson(
      button.dataset.lessonId
    );
  }
);


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {
    /*
     * Press "/" anywhere outside an input
     * to open the lesson sidebar/search.
     */
    if (
      event.key === "/" &&
      document.activeElement !== lessonSearch &&
      document.activeElement !== practiceInput &&
      !["INPUT", "TEXTAREA"].includes(
        document.activeElement?.tagName
      )
    ) {
      event.preventDefault();

      openSidebar();

      lessonSearch.focus();

      return;
    }

    /*
     * Escape only closes the mobile drawer.
     * Desktop sidebar is always available.
     */
    if (
      event.key === "Escape" &&
      window.innerWidth <= 900
    ) {
      closeSidebar();
    }
  }
);


/* =========================================================
   EVENTS
========================================================= */

openLessonsButton?.addEventListener(
  "click",
  toggleSidebar
);

mobileLessonsButton?.addEventListener(
  "click",
  toggleSidebar
);

sidebarClose?.addEventListener(
  "click",
  closeSidebar
);

sidebarOverlay?.addEventListener(
  "click",
  closeSidebar
);

previousLesson?.addEventListener(
  "click",
  goPrevious
);

nextLesson?.addEventListener(
  "click",
  goNext
);

completeLesson?.addEventListener(
  "click",
  toggleCurrentCompletion
);

startLearningButton?.addEventListener(
  "click",
  () => {
    const first = lessons[0];

    if (first) {
      selectLesson(first.id);
    }
  }
);

continueLearningButton?.addEventListener(
  "click",
  () => {
    const last = getLastLesson();

    if (
      last &&
      lessonMap.has(last)
    ) {
      selectLesson(last);
      return;
    }

    if (lessons[0]) {
      selectLesson(
        lessons[0].id
      );
    }
  }
);


/* =========================================================
   HASH CHANGE
========================================================= */

window.addEventListener(
  "hashchange",
  () => {
    const id =
      getLessonFromHash();

    if (
      id &&
      id !== state.currentLessonId
    ) {
      selectLesson(
        id,
        false
      );
    }
  }
);


/* =========================================================
   RESPONSIVE SIDEBAR
========================================================= */

/*
 * IMPORTANT:
 *
 * Desktop:
 *   - Sidebar stays visible.
 *   - Sidebar itself is the scroll container.
 *   - Lesson list does NOT have its own scroll.
 *
 * Mobile:
 *   - Sidebar becomes a drawer.
 *   - Drawer opens/closes normally.
 *   - Drawer itself owns the scroll.
 */
window.addEventListener(
  "resize",
  () => {
    const isMobile =
      window.innerWidth <= 900;

    if (!sidebar) {
      return;
    }

    if (!isMobile) {
      /*
       * Desktop:
       * Always keep the sidebar visible.
       */
      sidebar.classList.remove(
        "is-open",
        "is-hidden"
      );

      sidebarOverlay?.classList.remove(
        "is-visible"
      );

      document.body.classList.remove(
        "menu-open",
        "sidebar-open",
        "sidebar-collapsed"
      );

      document.body.style.overflow = "";
    }
  }
);


/* =========================================================
   SIDEBAR SCROLL ARCHITECTURE
========================================================= */

function setupSidebarScroll() {
  if (!sidebar) {
    return;
  }

  /*
   * The SIDEBAR itself owns the vertical scroll.
   */
  sidebar.style.overflowY = "auto";
  sidebar.style.overflowX = "hidden";
  sidebar.style.overscrollBehavior = "contain";
  sidebar.style.webkitOverflowScrolling = "touch";

  /*
   * The lesson list must NOT create a second
   * independent scroll area.
   */
  if (lessonList) {
    lessonList.style.overflowY = "visible";
    lessonList.style.overflowX = "visible";
    lessonList.style.maxHeight = "none";
    lessonList.style.minHeight = "auto";
    lessonList.style.overscrollBehavior = "auto";
  }

  /*
   * Also remove accidental scrolling from common
   * sidebar wrappers if they exist.
   */
  const sidebarWrappers = $$( 
    ".sidebar-body, .sidebar-content, .sidebar-inner"
  );

  sidebarWrappers.forEach(
    (wrapper) => {
      wrapper.style.overflowY = "visible";
      wrapper.style.overflowX = "visible";
      wrapper.style.maxHeight = "none";
      wrapper.style.minHeight = "auto";
    }
  );
}


/* =========================================================
   INIT
========================================================= */

function initialize() {
  /*
   * Configure sidebar scroll behavior before
   * rendering the lesson list.
   */
  setupSidebarScroll();

  loadProgress();

  setupFilters();

  setupSearch();

  currentYear.textContent =
    new Date().getFullYear();

  totalLessons.textContent =
    lessons.length;

  const hashLesson =
    getLessonFromHash();

  const savedLesson =
    getLastLesson();

  const initialLesson =
    hashLesson ||
    (
      savedLesson &&
      lessonMap.has(savedLesson)
        ? savedLesson
        : lessons[0]?.id
    );

  if (initialLesson) {
    state.currentLessonId =
      initialLesson;

    renderLesson(
      lessonMap.get(initialLesson)
    );
  }

  updateProgressUI();

  renderLessonList();

  updateNavigation();

  /*
   * Desktop sidebar must always be visible.
   */
  if (window.innerWidth > 900) {
    sidebar?.classList.remove(
      "is-hidden",
      "is-open"
    );

    sidebarOverlay?.classList.remove(
      "is-visible"
    );

    document.body.classList.remove(
      "menu-open",
      "sidebar-open",
      "sidebar-collapsed"
    );

    document.body.style.overflow = "";
  }

  /*
   * Mobile starts with the drawer closed.
   */
  if (window.innerWidth <= 900) {
    sidebar?.classList.remove("is-open");

    sidebarOverlay?.classList.remove(
      "is-visible"
    );

    document.body.classList.remove(
      "menu-open",
      "sidebar-open"
    );
  }

  if (
    window.location.hash === ""
  ) {
    history.replaceState(
      null,
      "",
      `#lesson=${encodeURIComponent(
        state.currentLessonId
      )}`
    );
  }
}

initialize();


/* =========================================================
   OPTIONAL DEBUG API
========================================================= */

window.FayadCodeLearning = {
  lessons,
  state,

  selectLesson,
  getFilteredLessons,

  resetProgress() {
    state.completed.clear();

    saveProgress();

    updateProgressUI();

    renderLessonList();

    updateCompletionButton();
  }
};
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("../sw.js")
            .then((registration) => {
                console.log(
                    "Fayad Code Service Worker registered:",
                    registration.scope
                );
            })
            .catch((error) => {
                console.error(
                    "Service Worker registration failed:",
                    error
                );
            });
    });
}