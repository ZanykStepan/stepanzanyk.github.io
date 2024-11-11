function calculateResult() {
    let result = 0;
    let questionResults = []; // масив для збереження даних кожного питання

    // Функція для обробки кожного питання
    function processQuestion(questionText, answers, points) {
        questionResults.push({
            question: questionText,
            selectedAnswer: answers.join(', '),
            score: points
        });
        result += points;
    }

    // Обробка радіокнопок (radio)
    const radios = document.querySelectorAll('input[type="radio"]:checked');
    radios.forEach((radio) => {
        const questionText = radio.closest('.question').querySelector('.qTitle').textContent;
        processQuestion(questionText, [radio.nextElementSibling.textContent], parseFloat(radio.value));
    });

    // Обробка чекбоксів (checkbox) для питань з множинним вибором (3, 4)
    const checkboxQuestions = ['q3', 'q4'];
    checkboxQuestions.forEach((questionName) => {
        const checkboxes = document.querySelectorAll(`input[name="${questionName}"]:checked`);
        const questionText = checkboxes[0]?.closest('.question').querySelector('.qTitle').textContent || '';
        if (checkboxes.length >= 3) {
            processQuestion(questionText, Array.from(checkboxes).map(cb => cb.nextSibling.textContent), 0);
        } else {
            const points = Array.from(checkboxes).reduce((acc, cb) => acc + parseFloat(cb.value), 0);
            processQuestion(questionText, Array.from(checkboxes).map(cb => cb.nextSibling.textContent), points);
        }
    });

    // Обробка селекту (select) для 5 питання
    const selectQ5 = document.getElementById('selectionQ5');
    const selectQ5Text = selectQ5.closest('.question').querySelector('.qTitle').textContent;
    processQuestion(selectQ5Text, [selectQ5.selectedOptions[0].textContent], parseFloat(selectQ5.value));

    // Обробка селекту з множинним вибором для 6 питання
    const selectQ6 = document.querySelectorAll('#selectionQ6 option:checked');
    const selectQ6Text = document.querySelector('#selectionQ6').closest('.question').querySelector('.qTitle').textContent;
    if (selectQ6.length >= 3) {
        processQuestion(selectQ6Text, Array.from(selectQ6).map(option => option.textContent), 0);
    } else {
        const points = Array.from(selectQ6).reduce((acc, option) => acc + parseFloat(option.value), 0);
        processQuestion(selectQ6Text, Array.from(selectQ6).map(option => option.textContent), points);
    }

    // Обробка текстового поля для 7 питання
    const q7Answer = document.querySelector('.texte').value.trim().toLowerCase();
    const correctAnswer = "помилка";
    const q7Text = document.querySelector('.texte').closest('.question').querySelector('.qTitle').textContent;
    processQuestion(q7Text, [q7Answer], (q7Answer === correctAnswer) ? 1 : 0);

    // Виведення загального результату
    document.getElementById('result').textContent = result;

    // Виведення таблиці з відповідями та балами
    displayResultsTable(questionResults, result);
}

function displayResultsTable(questionResults, totalScore) {
    let tableHtml = '<table border="1"><tr><th>Запитання</th><th>Обрані варіанти відповіді</th><th>Бал</th></tr>';
    questionResults.forEach(result => {
        tableHtml += `<tr><td>${result.question}</td><td>${result.selectedAnswer}</td><td>${result.score}</td></tr>`;
    });
    tableHtml += `<tr><td colspan="2"><strong>Загальний бал</strong></td><td><strong>${totalScore}</strong></td></tr>`;
    tableHtml += '</table>';
    document.getElementById('resultsTable').innerHTML = tableHtml;
}