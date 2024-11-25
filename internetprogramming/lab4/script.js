function calculateResult() {
    let totalScore = 0;
    let results = [];
    let processedQuestions = new Set();

    function addResult(question, answer, score) {
        if (!processedQuestions.has(question)) {
            results.push({ question, answer, score });
            totalScore += score;
            processedQuestions.add(question);
        }
    }

    //обробка radio
    document.querySelectorAll('.question input[type="radio"]:checked').forEach(radio => {
        const question = radio.closest('.question').querySelector('.qTitle').textContent;
        const answer = radio.nextSibling.textContent.trim();
        const score = parseInt(radio.value);
        addResult(question, answer, score);
    });

    //обробка checkboxes
    document.querySelectorAll('.question input[type="checkbox"]').forEach(checkbox => {
        const question = checkbox.closest('.question').querySelector('.qTitle').textContent;
        if (!processedQuestions.has(question)) {
            const checkedBoxes = Array.from(document.querySelectorAll(`input[name="${checkbox.name}"]:checked`));
            const selectedAnswers = checkedBoxes.map(cb => cb.nextSibling.textContent.trim());
            let score = 0;

            if (checkedBoxes.length === 2) {
                score = checkedBoxes.reduce((sum, cb) => sum + parseInt(cb.value), 0);
            }
            if (checkedBoxes.length > 2 || score < 0) score = 0;
            addResult(question, selectedAnswers.join(', '), score);
        }
    });

    //обробка single select
    document.querySelectorAll('.question select:not([multiple])').forEach(select => {
        const question = select.closest('.question').querySelector('.qTitle').textContent;
        const selectedOption = select.options[select.selectedIndex];
        const answer = selectedOption.textContent;
        const score = parseInt(selectedOption.value);
        addResult(question, answer, score);
    });

    //обробка multi select
    document.querySelectorAll('.question select[multiple]').forEach(select => {
        const question = select.closest('.question').querySelector('.qTitle').textContent;
        if (!processedQuestions.has(question)) {
            const selectedOptions = Array.from(select.selectedOptions);
            const answers = selectedOptions.map(option => option.textContent);
            let score = selectedOptions.reduce((sum, option) => sum + parseInt(option.value), 0);

            if (selectedOptions.length > 2 || score < 0) score = 0;
            addResult(question, answers.join(', '), score);
        }
    });

    //обробка тексту
    document.querySelectorAll('.question input[type="text"]').forEach(input => {
        const question = input.closest('.question').querySelector('.qTitle').textContent;
        const answer = input.value.trim();
        const correctAnswer = "помилка";
        const score = (answer.toLowerCase() === correctAnswer) ? 1 : 0;
        addResult(question, answer, score);
    });

    displayResults(results, totalScore);
}

function displayResults(results, totalScore) {
    const resultsTable = document.querySelector('#resultsTable tbody');
    resultsTable.innerHTML = '';

    results.forEach(result => {
        const row = `
            <tr>
                <td>${result.question}</td>
                <td>${result.answer}</td>
                <td>${result.score}</td>
            </tr>
        `;
        resultsTable.innerHTML += row;
    });

    const totalRow = `
        <tr>
            <td colspan="2"><strong>Загальний бал</strong></td>
            <td><strong>${totalScore}</strong></td>
        </tr>
    `;
    resultsTable.innerHTML += totalRow;
}
