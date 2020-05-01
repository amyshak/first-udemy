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

function start() {
    money = +prompt('Ваш бюджет на месяц?', 'Бюджет');
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

    while (isNaN(money) || money === '' || money === null) {
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
    savings: true,
    chooseExp: function () {
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
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет ' + appData.moneyPerDay);
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            alert('Низкий уровень дохода');

        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert('Средний уровень дохода');
        } else if (appData.moneyPerDay > 2000) {
            alert('Высокий уровень дохода');

        } else {
            alert("Error");
        }
    },
    chooseSavings: function () {
        if (appData.savings === true) {
            let c = +prompt('Процент от депозита', ''),
                d = +prompt('Сумма на депозите', '');
            appData.monthIncome = d / 100 / 12 * c;
            alert('Your month income level ' + appData.monthIncome);
        }
        // if (isNaN(c) || c === '' || c === null || isNaN(d) || d === '' || d === null) {

        // }
    },

    detectSavings: function () {
        if (appData.monthIncome < 100) {
            alert('Низкий уровень сбережений');
        } else if (appData.monthIncome > 100 && appData.income < 3000) {
            alert('Not bad!');
        } else if (appData.monthIncome > 3000) {
            alert('Wow! you"re good!');
        } else {
            alert('Bla bla');
        }
    },

    chooseOptExpenses: function () {
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
    },

    chooseIncome: function () {
        let items = prompt('What can bring you additional income? Divide your answers by comma.', '');
        if (typeof (items) != 'string' || typeof (items) === null || items === ''); {
            alert("Something goes wrong");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Something else?', ''));
            appData.income.sort();
        }
    }
   appData.income.forEach(function(yo , y) {
        alert("Способы доп. заработка: " + (y+1)  + '; взято из: ' + yo );}),
    // 
    // Написать проверку, что пользователь может:
    // Ввести в дополнительных доходах (chooseIncome) только строку
    // Не может оставить строку пустой
    // Не может отменить вопрос


};
// 2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)

// ·        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.


       
    



// 3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)
for (let sym in appData){
    console.log("Наша программа включает в себя данные: "+ sym + ' - '+ appData);
}
    