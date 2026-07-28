/*
==========================================
RahYab v1.0
File : app.js
==========================================
*/

// وضعیت آزمون
let currentQuestion = 0;
let answers = [];

// عناصر صفحه
const welcomePage = document.getElementById("welcomePage");
const studentForm = document.getElementById("studentForm");
const examPage = document.getElementById("examPage");
const resultPage = document.getElementById("resultPage");

const startButton = document.getElementById("startButton");
const form = document.getElementById("frmStudent");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const progressBar = document.getElementById("progressBar");

const nextQuestion = document.getElementById("nextQuestion");
const prevQuestion = document.getElementById("prevQuestion");

// شروع آزمون
startButton.addEventListener("click", () => {

    welcomePage.style.display = "none";

    studentForm.style.display = "block";

});

// ثبت فرم
form.addEventListener("submit", function (e) {

    e.preventDefault();

    studentForm.style.display = "none";

    examPage.style.display = "block";

    showQuestion();

});// نمایش سؤال
function showQuestion() {

    const q = questionBank[currentQuestion];

    questionNumber.textContent =
        `سؤال ${currentQuestion + 1} از ${questionBank.length}`;

    questionText.textContent = q.text;

    progressBar.style.width =
        `${((currentQuestion + 1) / questionBank.length) * 100}%`;

    answerButtons.innerHTML = "";
answerScale.forEach((title, index) => {

    const btn = document.createElement("button");

    btn.className = "answer-btn";

    btn.textContent = title;

    // اگر قبلاً انتخاب شده باشد
    if (
        answers[currentQuestion] &&
        answers[currentQuestion].score === index + 1
    ) {
        btn.classList.add("selected");
    }

    btn.onclick = function () {

        // حذف انتخاب قبلی
        document.querySelectorAll(".answer-btn").forEach(b => {
            b.classList.remove("selected");
        });

        // انتخاب جدید
        btn.classList.add("selected");

        // ذخیره پاسخ
        answers[currentQuestion] = {

            id: q.id,

            section: q.section,

            dimension: q.dimension,

            score: index + 1

        };

        nextQuestion.disabled = false;

    };

    answerButtons.appendChild(btn);

});

    nextQuestion.disabled =
        answers[currentQuestion] ? false : true;

}

// سؤال بعد
nextQuestion.addEventListener("click", () => {

    if (!answers[currentQuestion]) {

        alert("ابتدا یکی از گزینه‌ها را انتخاب کنید.");

        return;

    }

    currentQuestion++;

    if (currentQuestion < questionBank.length) {

        showQuestion();

    } else {

        finishExam();

    }

});// سؤال قبل
prevQuestion.addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

});

// پایان آزمون
function finishExam() {

    examPage.style.display = "none";

    resultPage.style.display = "block";

    if (typeof analyzeAnswers === "function") {

        analyzeAnswers(answers);

    } else {

        document.getElementById("analysisResult").innerHTML =
            "<h3>آزمون با موفقیت پایان یافت.</h3><p>موتور تحلیل هنوز متصل نشده است.</p>";

    }

}