// إعدادات وبيانات المواد للمراحل الدراسية المختلفة
const SUBJECTS_BASIC = [
    { id: "math", name: "رياضيات", icon: "book-open" },
    { id: "english", name: "لغة إنجليزية", icon: "book-open" },
    { id: "arabic", name: "لغة عربية", icon: "feather" },
    { id: "islamic", name: "تربية إسلامية", icon: "mosque" },
    { id: "digital", name: "مهارات رقمية", icon: "laptop" },
    { id: "social", name: "اجتماعيات", icon: "globe" },
    { id: "science", name: "علوم", icon: "flask" },
    { id: "financial", name: "ثقافة مالية", icon: "coins" },
    { id: "vocational", name: "تربية مهنية", icon: "tools" }
];

const SUBJECTS_HIGH = [
    { id: "math", name: "رياضيات", icon: "book-open" },
    { id: "english", name: "لغة إنجليزية", icon: "book-open" },
    { id: "arabic", name: "لغة عربية", icon: "feather" },
    { id: "islamic", name: "تربية إسلامية", icon: "mosque" },
    { id: "digital", name: "مهارات رقمية", icon: "laptop" },
    { id: "history", name: "تاريخ", icon: "hourglass-half" },
    { id: "geography", name: "جغرافيا", icon: "map-marked" },
    { id: "national", name: "وطنية", icon: "landmark" },
    { id: "physics", name: "فيزياء", icon: "atom" },
    { id: "chemistry", name: "كيمياء", icon: "vials" },
    { id: "biology", name: "أحياء", icon: "dna" },
    { id: "earth-science", name: "علوم أرض", icon: "mountain" },
    { id: "financial", name: "ثقافة مالية", icon: "coins" },
    { id: "vocational", name: "تربية مهنية", icon: "tools" }
];

// أيقونات SVG للمواد المختلفة لتظهر بشكل جذاب
const SVG_ICONS = {
    "book-open": `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    "feather": `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 2.01 20.99 0 0 18.99 2.01 21zM16 8.41V6h-2.41L16 8.41zM13 14H9v-4h4v4z"/></svg>`,
    "mosque": `<svg viewBox="0 0 24 24"><path d="M12 2L2 9h3v13h6v-6h2v6h6V9h3L12 2zm0 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
    "laptop": `<svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>`,
    "globe": `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
    "flask": `<svg viewBox="0 0 24 24"><path d="M6 22h12a2 2 0 0 0 2-2c0-.5-.17-.96-.47-1.33L15 11.45V5h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1v6.45L3.47 18.67A1.972 1.972 0 0 0 3 20a2 2 0 0 0 2 2h1zM13.5 19a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-3-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`,
    "coins": `<svg viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
    "tools": `<svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.3C.5 6.7.9 9.8 2.9 11.8c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.1z"/></svg>`,
    "hourglass-half": `<svg viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6v6h12v-6h-.01L18 15.99 14 12l4-3.99L17.99 8H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/></svg>`,
    "map-marked": `<svg viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>`,
    "landmark": `<svg viewBox="0 0 24 24"><path d="M12 2L1 7v2h22V7L12 2zm1 10h3v7h-3v-7zm-6 0h3v7H7v-7zm12 9H5v2h14v-2zm-1-9h3v7h-3v-7z"/></svg>`,
    "atom": `<svg viewBox="0 0 24 24"><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17.93c3.95.49 7 3.85 7 7.93h-7V4.07zm-2 0V12H4.07c.49-3.95 3.85-7 7.93-7zm0 9.93V20c-4.08-.49-7.44-3.85-7.93-7.93H10zm2 0h7.93c-.49 4.08-3.85 7.44-7.93 7.93v-7.93z"/></svg>`,
    "vials": `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm0-4H7v-2h4v2zm0-4H7V7h4v2zm6 12h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z"/></svg>`,
    "dna": `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/></svg>`,
    "mountain": `<svg viewBox="0 0 24 24"><path d="M14 6l-3.75 5 2.85 3.8c-.9.23-1.6.8-2 1.6l-2.1-2.8L3 20h18L14 6z"/></svg>`,
    "file-alt": `<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`,
    "play-circle": `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>`
};

// حالة التطبيق الحالية (Application State)
const state = {
    currentStep: 1,
    selectedClass: null,
    selectedSubject: null,
    selectedSemester: null,
    selectedService: null,
    data: {
        className: "",
        subjectName: "",
        semesterName: "",
        serviceName: ""
    }
};

// خريطة أسماء الخطوات للواجهات
const stepScreens = {
    1: "screen-welcome",
    2: "screen-class",
    3: "screen-subject",
    4: "screen-semester",
    5: "screen-service",
    6: "screen-results"
};

// تهيئة المستمعات الأساسية مباشرة أو عند تحميل الصفحة
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

function initApp() {
    const themeToggleBtn = document.getElementById("btn-theme-toggle");
    if (themeToggleBtn) {
        const savedTheme = localStorage.getItem("theme") || "light";
        if (savedTheme === "dark") {
            document.body.classList.add("dark-theme");
            updateThemeIcon(true);
        }

        themeToggleBtn.addEventListener("click", () => {
            const isDark = document.body.classList.toggle("dark-theme");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            updateThemeIcon(isDark);
        });
    }

    const welcomeNext = document.getElementById("welcome-next");
    if (welcomeNext) {
        welcomeNext.addEventListener("click", () => {
            goToStep(2);
        });
    }

    const btnHome = document.getElementById("btn-home");
    if (btnHome) btnHome.addEventListener("click", resetToStart);
    
    const btnRestart = document.getElementById("btn-restart");
    if (btnRestart) btnRestart.addEventListener("click", resetToStart);

    document.querySelectorAll(".screen").forEach(screen => {
        const backBtn = screen.querySelector(".back-btn");
        const nextBtn = screen.querySelector(".next-btn");

        if (backBtn) {
            backBtn.addEventListener("click", () => {
                goToStep(state.currentStep - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                goToStep(state.currentStep + 1);
            });
        }
    });

    const classCards = document.querySelectorAll("#screen-class .selection-card");
    classCards.forEach(card => {
        card.addEventListener("click", () => {
            classCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            state.selectedClass = card.getAttribute("data-class");
            state.data.className = card.querySelector(".card-title").textContent;

            const nextBtn = document.querySelector("#screen-class .next-btn");
            if (nextBtn) nextBtn.removeAttribute("disabled");
        });
    });

    const semesterCards = document.querySelectorAll("#screen-semester .selection-card");
    semesterCards.forEach(card => {
        card.addEventListener("click", () => {
            semesterCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            state.selectedSemester = card.getAttribute("data-semester");
            state.data.semesterName = card.querySelector(".card-title").textContent;

            const nextBtn = document.querySelector("#screen-semester .next-btn");
            if (nextBtn) nextBtn.removeAttribute("disabled");
        });
    });

    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("click", () => {
            serviceCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            state.selectedService = card.getAttribute("data-service");
            state.data.serviceName = card.querySelector(".service-details h3").textContent;

            const nextBtn = document.querySelector("#screen-service .next-btn");
            if (nextBtn) nextBtn.removeAttribute("disabled");
        });
    });
}

function goToStep(stepNum) {
    if (stepNum < 1 || stepNum > 6) return;

    if (stepNum === 3) {
        buildSubjectGrid();
    } else if (stepNum === 4) {
        const nextBtn = document.querySelector("#screen-semester .next-btn");
        if (state.selectedSemester) {
            const savedCard = document.querySelector(`#screen-semester [data-semester="${state.selectedSemester}"]`);
            if (savedCard) savedCard.classList.add("selected");
            if (nextBtn) nextBtn.removeAttribute("disabled");
        } else {
            if (nextBtn) nextBtn.setAttribute("disabled", "true");
        }
    } else if (stepNum === 5) {
        const nextBtn = document.querySelector("#screen-service .next-btn");
        if (state.selectedService) {
            const savedCard = document.querySelector(`.service-card[data-service="${state.selectedService}"]`);
            if (savedCard) savedCard.classList.add("selected");
            if (nextBtn) nextBtn.removeAttribute("disabled");
        } else {
            if (nextBtn) nextBtn.setAttribute("disabled", "true");
        }
    } else if (stepNum === 6) {
        generateFinalLinks();
    }

    const currentScreenId = stepScreens[state.currentStep];
    const targetScreenId = stepScreens[stepNum];

    document.getElementById(currentScreenId).classList.remove("active");
    const targetScreen = document.getElementById(targetScreenId);
    targetScreen.classList.add("active");

    state.currentStep = stepNum;
    updateProgressBar();
}

function updateProgressBar() {
    const progressSteps = document.querySelectorAll(".progress-step");
    progressSteps.forEach(step => {
        const stepIndex = parseInt(step.getAttribute("data-step"));
        step.classList.remove("active", "completed");

        if (stepIndex === state.currentStep) {
            step.classList.add("active");
        } else if (stepIndex < state.currentStep) {
            step.classList.add("completed");
        }
    });
}

function resetToStart() {
    state.selectedClass = null;
    state.selectedSubject = null;
    state.selectedSemester = null;
    state.selectedService = null;
    
    document.querySelectorAll(".selection-card, .service-card").forEach(card => {
        card.classList.remove("selected");
    });

    document.querySelectorAll(".next-btn").forEach(btn => {
        btn.setAttribute("disabled", "true");
    });

    goToStep(1);
}

function buildSubjectGrid() {
    const grid = document.getElementById("subject-grid");
    grid.innerHTML = "";
    
    const nextBtn = document.querySelector("#screen-subject .next-btn");
    if (nextBtn) nextBtn.setAttribute("disabled", "true");

    const classNum = parseInt(state.selectedClass);
    const subjectsList = (classNum === 7 || classNum === 8) ? SUBJECTS_BASIC : SUBJECTS_HIGH;

    subjectsList.forEach(subj => {
        const card = document.createElement("div");
        card.className = "selection-card";
        card.setAttribute("data-subject", subj.id);
        
        const svgContent = SVG_ICONS[subj.icon] || SVG_ICONS["book-open"];

        card.innerHTML = `
            <div class="card-icon">
                ${svgContent}
            </div>
            <span class="card-title">${subj.name}</span>
        `;

        card.addEventListener("click", () => {
            grid.querySelectorAll(".selection-card").forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            state.selectedSubject = subj.id;
            state.data.subjectName = subj.name;

            if (nextBtn) nextBtn.removeAttribute("disabled");
        });

        grid.appendChild(card);
    });

    if (state.selectedSubject) {
        const savedCard = grid.querySelector(`[data-subject="${state.selectedSubject}"]`);
        if (savedCard) {
            savedCard.click();
        }
    }
}

function generateFinalLinks() {
    const badge = document.getElementById("results-badge");
    const container = document.getElementById("links-container");
    
    badge.innerHTML = `
        <strong>${state.data.className}</strong>
        <span>&bull;</span>
        <strong>${state.data.subjectName}</strong>
        <span>&bull;</span>
        <strong>${state.data.semesterName}</strong>
        <span>&bull;</span>
        <strong>${state.data.serviceName}</strong>
    `;

    container.innerHTML = "";

    const links = getLinksDatabase(
        state.selectedClass, 
        state.selectedSubject, 
        state.selectedSemester, 
        state.selectedService
    );

    if (links.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <p>عذراً، لا تتوفر روابط حالياً لهذا الاختيار المحدد. سيتم إضافتها قريباً من قبل إدارة المدرسة.</p>
            </div>
        `;
        return;
    }

    links.forEach(link => {
        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.target = "_blank";
        linkElement.className = "link-item";

        const iconSvg = state.selectedService === "exams" ? SVG_ICONS["file-alt"] : SVG_ICONS["play-circle"];
        const actionText = state.selectedService === "exams" ? "ابدئي الاختبار" : "شاهدي الآن";

        linkElement.innerHTML = `
            <div class="link-content">
                <div class="link-icon-container">
                    ${iconSvg}
                </div>
                <div class="link-info">
                    <h4>${link.title}</h4>
                    <p>${link.description}</p>
                </div>
            </div>
            <div class="link-action">
                <span>${actionText}</span>
                <svg viewBox="0 0 24 24" width="18" height="18">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
            </div>
        `;

        container.appendChild(linkElement);
    });
}

/**
 * =========================================================================
 * 🔗 جدول الروابط الخاصة بمدرسة أم معبد (سهل التعديل والإضافة)
 * =========================================================================
 */
const SCHOOL_CUSTOM_LINKS = {
    "10-physics-1-lessons": [
        {
            title: "الكميات القياسية والكميات المتجهة 1",
            description: "شروحات تفاعلية ومرئية متميزة لمادة الفيزياء للصف العاشر - الجزء الأول.",
            url: "https://youtu.be/mtMYVd9iOCc?si=lDzrQrT0ktUpAgZ4"
        },
        {
            title: "الكميات القياسية والكميات المتجهة 2",
            description: "شروحات تفاعلية ومرئية متميزة لمادة الفيزياء للصف العاشر - الجزء الثاني.",
            url: "https://youtu.be/6z-VXZ42kpQ?si=FEDluNQKg1XT23Vv"
        }
    ],
    "11-math-1-lessons": [
        {
            title: "المعلمة باسمة أحمد متباينات القيمة المطلقة",
            description: "شرح مرئي لمادة الرياضيات للصف الأول ثانوي - درس متباينات القيمة المطلقة.",
            url: "https://youtu.be/G9YR4RtP8OI"
        }
    ],
    "8-science-1-exams": [
        {
            title: "اختبار تشخيصي لطالبات الصف الثامن",
            description: "اختبار تفاعلي محوسب يغطي مقرر مادة العلوم للصف الثامن - الفصل الدراسي الأول مع تصحيح فوري.",
            url: "https://forms.gle/rNteWEtzmTjuejdT7"
        }
    ],
    "7-science-1-exams": [
        {
            title: "اختبار تشخيصي لطالبات الصف السابع",
            description: "اختبار تفاعلي محوسب يغطي مقرر مادة العلوم للصف السابع - الفصل الدراسي الأول مع تصحيح فوري.",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfPjwTI4-fqp53helI9MEz1OC92Yc6h66fyUB3OIZN6bkVIsQ/viewform"
        }
    ]
};

function getLinksDatabase(classId, subjectId, semesterId, serviceId) {
    const customKey = `${classId}-${subjectId}-${semesterId}-${serviceId}`;
    if (SCHOOL_CUSTOM_LINKS[customKey] && SCHOOL_CUSTOM_LINKS[customKey].length > 0) {
        return SCHOOL_CUSTOM_LINKS[customKey];
    }

    const isExam = serviceId === "exams";
    const semName = semesterId === "1" ? "الفصل الأول" : "الفصل الثاني";
    const classNameMap = {
        "7": "الصف السابع",
        "8": "الصف الثامن",
        "9": "الصف التاسع",
        "10": "الصف العاشر",
        "11": "الأول ثانوي"
    };
    const cName = classNameMap[classId] || "";
    
    const subjNameMap = {
        "math": "الرياضيات",
        "english": "اللغة الإنجليزية",
        "arabic": "اللغة العربية",
        "islamic": "التربية الإسلامية",
        "digital": "المهارات الرقمية",
        "social": "الاجتماعيات",
        "science": "العلوم",
        "financial": "الثقافة المالية",
        "vocational": "التربية المهنية",
        "history": "التاريخ",
        "geography": "الجغرافيا",
        "national": "التربية الوطنية",
        "physics": "الفيزياء",
        "chemistry": "الكيمياء",
        "biology": "الأحياء",
        "earth-science": "علوم الأرض"
    };
    const sName = subjNameMap[subjectId] || "المادة";

    if (isExam) {
        return [
            {
                title: `الاختبار المحوسب الأول - مادة ${sName} - ${cName}`,
                description: `اختبار تفاعلي يغطي الوحدات الأولى من مقرر ${semName}. قياس فوري للمستوى الدراسي مع تقديم الإرشادات.`,
                url: "#"
            },
            {
                title: `الاختبار المحوسب الثاني (المنتصف) - مادة ${sName} - ${cName}`,
                description: `اختبار تجريبي شامل ومحاكي للامتحانات الشهرية لـ ${sName} - ${semName}.`,
                url: "#"
            },
            {
                title: `الاختبار النهائي الشامل - مادة ${sName} - ${cName}`,
                description: `بنك الأسئلة والمراجعة النهائية المحوسبة لكامل مقرر المادة لـ ${semName}.`,
                url: "#"
            }
        ];
    } else {
        return [
            {
                title: `شرح الوحدة الأولى (مفاهيم أساسية) - مادة ${sName} - ${cName}`,
                description: `فيديو مصور لشرح الأساسيات والمصطلحات الرئيسية لـ ${sName} لـ ${semName}.`,
                url: "#"
            },
            {
                title: `حل أنشطة وأسئلة الكتاب المقررة - مادة ${sName}`,
                description: `تسجيل تفصيلي لحل التمارين الصعبة وشرح المسائل التطبيقية في مقرر ${semName}.`,
                url: "#"
            },
            {
                title: `مراجعة مرئية مكثفة ليلة الامتحان - مادة ${sName}`,
                description: `ملخص شامل وتفاعلي لأهم النقاط المتوقعة والمهارات الأساسية المطلوبة لـ ${semName}.`,
                url: "#"
            }
        ];
    }
}

function updateThemeIcon(isDark) {
    const themeIcon = document.getElementById("theme-icon");
    if (themeIcon) {
        if (isDark) {
            themeIcon.innerHTML = `<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>`;
        } else {
            themeIcon.innerHTML = `<path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/>`;
        }
    }
}
