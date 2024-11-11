/*for 1 task*/
let TimeandDate;

function TimeDate() {
    now = new Date;
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    date = now.getDate();
    month = now.getMonth() + 1;
    year = now.getFullYear();

    TimeandDate = "" + hours;
    TimeandDate += "/" + ((minutes < 10) ? "0" : "") + minutes;
    TimeandDate += "/" + ((seconds < 10) ? "0" : "") + seconds;
    TimeandDate += "+" + year;
    TimeandDate += "*" + ((month < 10) ? "0" : "") + month;
    TimeandDate += "*" + ((date < 10) ? "0" : "") + date;
    document.TimeDate.timeanddate.value = TimeandDate;
    Timer = setTimeout("TimeDate()", 1000);
}

/*for 2 task*/
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Помилка";
    }
}

/*for task 3*/
let str, stb;

function build_matrix() {
    str = parseInt(main_form.t_str.value);
    stb = parseInt(main_form.t_stb.value);
    let res_str = "<table>\n";
    for (let i = 1; i <= str; i++) {
        res_str += "<tr>\n";
        for (let j = 1; j <= stb; j++) {
            res_str += "<td>";
            res_str += "<input type = \"text\" id = \"_" + i + "_" + j + "\" value = \"" + (1 / (2 + j)).toFixed(2) + "\">";
            res_str += "<\/td>\n";
        }
        res_str += "<\/tr>\n";
    }
    res_str += "<\/table>";
    main_div.innerHTML = res_str;
}

function calculate_matrix() {
    let res_str = "";
    let str_report = "";
    let sum = 0.0;
    for (let i = 1; i <= str; i++) {
        if (i === 2) {
            for (let j = 1; j <= stb; j++) {
                res_str = "sum += parseFloat(main_form._" + i + "_" + j + ".value);";
                eval(res_str);
            }
        } else {
            continue;
        }
        str_report += "Сума значень рядка " + 2 + " = " + sum.toFixed(2) + "\n";

    }
    alert(str_report);
}

/*for task 4*/
function calculate4(){
    /*Вивід остачі від ділення одного числа на інше*/
    let firstNumber = parseFloat(document.getElementById("first_number").value);
    let secondNumber = parseFloat(document.getElementById("second_number").value);
    let result = firstNumber % secondNumber;
    console.log("Остача від ділення " + firstNumber + " на " + secondNumber + " = " + result);
    /*Вивід логічного значення (true/false) перевірки рівності нулю остачі від ділення одного числа на інше*/
    let isZero = (result === 0);
    console.log("Остача дорівнює нулю: " + isZero);
}
function outputInConsole4(){
    /* комбінований вивід тексту і значень деякого наперед заданого масиву, використовуючи керуючі послідовності*/
    var array = new Array(13,9,12,15,17);
    console.log("Вивід елементів масиву " + array + " у заданому порядку: 2. %d 1. %d 3. %d 4. %d 5. %d", array[1], array[0], array[2], array[3], array[4]);

}
/*for task 5*/
function consoleTask5(){
    console.info("Console.info test message");
    console.warn("Console.warn test message");
    console.error("Console.error test message");
    console.info("Console.dir usage example:")
    console.dir(console,);
    console.dirxml(document.head, "Console.dirxml usage example")
    console.profile("Console.profile example usage")
    console.time("Console.time,.timeend usage example:");
    /*код для перевірки time*/
    for(i=0; i<=999; i++){
        var x;
        x = x*i;
    }
    console.timeEnd("Console.time,.timeend usage example:");
    console.profileEnd("Console.profile example usage")
    console.assert(false, 'Console.assert test message');
}