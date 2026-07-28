/*
==========================================
RahYab v1.0
File : analyzer.js
==========================================
*/

function analyzeAnswers(answers){

    const result = {};

    answers.forEach(item=>{

        if(!result[item.dimension]){

            result[item.dimension]=0;

        }

        result[item.dimension]+=item.score;

    });

    showResult(result);

}function showResult(result){

    const summary =
        document.getElementById("studentSummary");

    const analysis =
        document.getElementById("analysisResult");

    const recommendation =
        document.getElementById("recommendation");

    summary.innerHTML = `
        <h3>خلاصه آزمون</h3>
        <p>تعداد پاسخ‌ها: ${answers.length}</p>
    `;

    let html = "<h3>امتیاز ابعاد</h3><ul>";

    Object.keys(result).forEach(key=>{

        html += `<li>${key} : ${result[key]}</li>`;

    });

    html += "</ul>";

    analysis.innerHTML = html;

    let bestDimension = "";

    let bestScore = -1;

    Object.keys(result).forEach(key=>{

        if(result[key] > bestScore){

            bestScore = result[key];

            bestDimension = key;

        }

    });

    recommendation.innerHTML = `
        <h3>پیشنهاد اولیه</h3>
        <p>
            برجسته‌ترین بعد شما:
            <strong>${bestDimension}</strong>
        </p>
        <p>
            این نسخه اولیه موتور تحلیل است.
            در نسخه‌های بعدی پیشنهاد رشته‌ها، نمودارها،
            تفسیر روان‌شناختی و گزارش PDF به آن اضافه خواهد شد.
        </p>
    `;

}