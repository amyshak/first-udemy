// 1) Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)

// 2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)


// 3) Создать функцию для определения необязательных расходов (chooseOptExpenses):

// Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”

// Записать ответы в объект optionalExpenses в формате Номер - Ответ.

//     optionalExpenses: {
//     1 : “ответ на вопрос”
//     }

// Вызывать функции не обязательно.
let money, time;

function start () {
    money = +prompt('Ваш бюджет на месяц?', 'Бюджет');
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

    while (isNaN(money) || money === '' || money ===null) {
        money = +prompt('Ваш бюджет на месяц?', 'Бюджет');  
    }

}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true

};


//  DO ...WHILE
function chooseExp () {

let i = 0;
do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        console.log('something wrong');
        i--;
    }
    i++;
} while (i < 2);
}
chooseExp ();

function detectDayBudget () {
    appData.moneyPerDay= (appData.budget / 30).toFixed();
alert('Ежедневный бюджет ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    alert('Низкий уровень дохода');

} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    alert('Средний уровень дохода');
} else if (appData.moneyPerDay > 2000) {
    alert('Высокий уровень дохода');

} else {alert ("Error")
}
}
detectDayBudget ();

function detectLevel() {
    if (appData.savings === true) {
        let c = +prompt('Процент от депозита', ''),
            d = +prompt('Сумма на депозите', '');
        appData.income = d/100/12 * c;
        alert('Your month income level ' + appData.income);
    }
    // if (isNaN(c) || c === '' || c === null || isNaN(d) || d === '' || d === null) {

    // }
}
detectLevel ();

function chooseOptExpenses() {
    let i = 0;
    while (i < 3) {
        let expens = prompt('Статья необязательных расходов?', ''),
            num = i + 1;
        if (typeof (expens) === 'string' && typeof (expens) != null && typeof (expens) != null &&
            expens != '') {
            appData.optionalExpenses[num] = expens;
        } else {
            console.log('something wrong');
            i--;
        }
        i++;
    }
}
chooseOptExpenses();
console.log (appData);