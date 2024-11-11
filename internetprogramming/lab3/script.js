/*for task 1*/
function t1function() {
    let a = parseFloat(document.getElementById("t1a").value);
    let b = parseFloat(document.getElementById("t1b").value);
    let c = parseFloat(document.getElementById("t1c").value);
    let d = parseFloat(document.getElementById("t1d").value);
    let p = (a + b + c + d) / 2;
    let t1s = ((a + b) / Math.abs(a - b)) * Math.sqrt((p - a) * (p - b) * (p - a - c) * (p - a - d));
    document.getElementById("t1area").value = t1s.toFixed(2);
}

/*for task 2*/

function createKeyboard() {
    let letters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', 'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж',
        'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'];

    let keys = "";
    letters.map((key, index) => {
        if (index % 11 === 0) {
            keys += "<br>";
        }
        keys += `<button onclick="addSymbol2('${key}')">${key}</button>`;
    });
    document.getElementById('t2screenKeyboard').innerHTML = keys;
}

function clean2() {
    document.getElementById('t2display').value = "";
}

function addSymbol2(key) {
    document.getElementById('t2display').value += key;
}

let isEnglish = true;

/*for task 3*/
function createKeyboardEn() {
    let lettersUa = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', 'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж',
        'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'];
    let lettersEn = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let letters = isEnglish ? lettersEn : lettersUa;
    let keys = "";
    letters.map((key, index) => {
        if (index % 11 === 0) {
            keys += "<br>";
        }
        keys += `<button onclick="addSymbol3('${key}')">${key}</button>`;
    });
    document.getElementById('t3screenKeyboard').innerHTML = keys;
}

function toggleLanguage() {
    isEnglish = !isEnglish;
    createKeyboardEn();
}

function clean3() {
    document.getElementById('t3display').value = "";
}

function addSymbol3(key) {
    document.getElementById('t3display').value += key;
}

/*for task 4*/
let images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg"];
let currentIndex = 0;

function showImage() {
    document.getElementById("t4img").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}
/*for task 5*/
let currentQuestion = 0;
let correctAnswers = 0;
let totalQuestions = 5;
let correctResult = 0;
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    switch (operation) {
        case '+':
            correctResult = num1 + num2;
            break;
        case '-':
            correctResult = num1 - num2;
            break;
        case '*':
            correctResult = num1 * num2;
            break;
        case '/':
            correctResult = (num1 / num2).toFixed(2);
            break;
    }

    document.getElementById('t5question').textContent = `Питання ${currentQuestion + 1}: Скільки буде ${num1} ${operation} ${num2}?`;
}
function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('t5answer').value);
    const resultText = document.getElementById('t5result');
    const scoreText = document.getElementById('t5score');

    if (userAnswer === correctResult) {
        correctAnswers++;
        resultText.textContent = "Правильно!";
    } else {
        resultText.textContent = `Помилка, правильна відповідь: ${correctResult}`;
    }
    scoreText.textContent = `Рахунок: ${correctAnswers} із ${currentQuestion + 1}`;
}
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        document.getElementById('t5answer').value = '';
        generateQuestion();
    } else {
        document.getElementById('t5question').textContent = `Тест завершено! Ваш підсумковий рахунок: ${correctAnswers} із ${totalQuestions}`;
        document.getElementById('t5checkBtn').disabled = true;
        document.getElementById('t5nextBtn').disabled = true;
    }
}
/*for task 6*/
let toggleSubMenuFruits = false;
let toggleSubMenuVeggies = false;
function menu() {
    let str = "";
    str += "<a href='javascript:toggleFruits()'>Fruits</a><br>";
    str += "<div id='subMainFruits'></div>";
    str += "<a href='javascript:toggleVeggies()'>Vegetables</a><br>";
    str += "<div id='subMainVeggies'></div>";
    document.getElementById("t6container").innerHTML = str;
}

function toggleFruits() {
    let str = "";
    if (!toggleSubMenuFruits) {
        str += "Apple<br>";
        str += "Pineapple<br>";
        str += "Apricot<br>";
        str += "Pear<br>";
        str += "Lemon";
    }
    toggleSubMenuFruits = !toggleSubMenuFruits;
    document.getElementById("subMainFruits").innerHTML = str;
}

function toggleVeggies() {
    let str = "";
    if (!toggleSubMenuVeggies) {
        str += "Potatoes<br>";
        str += "Beetroot<br>";
        str += "Carrots<br>";
        str += "Cucumber<br>";
        str += "Pear";
    }
    toggleSubMenuVeggies = !toggleSubMenuVeggies;
    document.getElementById("subMainVeggies").innerHTML = str;
}

