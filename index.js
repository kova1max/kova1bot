// ----------------------------------------------- //
//                      CONSTS                     //
// ----------------------------------------------- //

const TelegramBot = require('node-telegram-bot-api');
const token = '528204586:AAHYdc-qE63y_1DSsdr6NP-xCoRH4Ds2QWI';
const bot = new TelegramBot(token, {polling: true});
var fs = require('fs');
var key = JSON.parse(fs.readFileSync('keys.json', 'utf8'));
var group = "KN41";
var options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'КН-41', callback_data: 'KN41' }],
            [{ text: 'КН-42', callback_data: 'KN42' }],
            [{ text: 'КН-21', callback_data: 'KN21' }]
        ],
        parse_mode: 'Markdown'
    })
};

// ----------------------------------------------- //
//                     POZKLAD                     //
// ----------------------------------------------- //

let KN41 = {
    monday : [ 
        [ 8, 00, "Нейронні мережі та еволюц. алгор.", "Дорош В.І.", 2303 ],
        [ 9, 35, "Нейронні мережі та еволюц. алгор.", "Дорош В.І.", 2305 ],
        [ 11, 10, "Нейронні мережі та еволюційні алгоритми", "Комар М.П.", 2304 ]],
    tuesday : [
        [ 12, 50, "Теорія прийняття рішень", "Лендюк Т.В.", 2304 ],
        [ 14, 25, "Теорія прийняття рішень", "Лендюк Т.В.", 2303 ],
        [ 16, 00, "Програмування мобільних пристроїв", "Заставний О. М.", 2303]],
    wednesday : [
        [ 11, 10, "Проектування ІС", "Васильків Н.М.", 2303 ],
        [ 12, 50, "Інтелектуальні робото-технічні сист.", "Осолінський О.Р.", 2303 ],
        [ 14, 25, "Проектування ІС", "Васильків Н.М." , 2304 ],
        [ 16, 00, "Проектування ІС", "Васильків Н.М." , 2303 ]], // 1/2 тиждень
    thursday : [
        [ 12, 50, "Інтелектуальні робото-технічні сист.", "Коваль В.С.", 1210 ],
        [ 14, 25, "Програмування мобільних пристроїв", "Заставний О.М.", 1210 ],
        [ 16, 00, "Проектування ІС", "Васильків Н.М." , 2304 ]], // 1/2 тиждень
    friday : [ 
        [ 12, 50, "Теорія прийняття рішень", "Лендюк Т.В.", 2304 ],
        [ 14, 25, "Теорія прийняття рішень", "Лендюк Т.В.", 2303 ],
        [ 16, 00, "Програмування мобільних пристроїв", "Заставний О. М.", 2303 ]]
}; //done
let KN42 = {
    monday : [ 
        ["8:00", "Нейронні мережі та еволюц. алгор.", "Дорош В.І.", 2303 ],
        ["9:35", "Нейронні мережі та еволюц. алгор.", "Лендюк Т.В.", 2303 ],
        ["11:10", "Нейронні мережі та еволюційні алгоритми", "Комар М.П.", 2304 ]],
    tuesday : [
        ["12:50", "Теорія прийняття рішень", "Лендюк Т.В.", 2304 ],
        ["14:25", "Теорія прийняття рішень", "Лендюк Т.В.", 2303 ],
        ["16:00", "Програмування мобільних пристроїв", "Заставний О. М.", 2303]],
    wednesday : [
        ["11:10", "Проектування ІС", "Васильків Н.М.", 2303 ],
        ["12:50", "Інтелектуальні робото-технічні сист.", "Осолінський О.Р.", 2303 ],
        ["14:25", "Проектування ІС", "Васильків Н.М." , 2304 ],
        ["16:00", "Проектування ІС", "Васильків Н.М." , 2303 ]], // 1/2 тиждень
    thursday : [
        ["12:50", "Інтелектуальні робото-технічні сист.", "Коваль В.С.", 1210 ],
        ["14:25", "Програмування мобільних пристроїв", "Заставний О.М.", 1210 ],
        ["16:00", "Проектування ІС", "Васильків Н.М." , 2304 ]], // 1/2 тиждень
    friday : [ 
        ["12:50", "Теорія прийняття рішень", "Лендюк Т.В.", 2304 ],
        ["14:25", "Теорія прийняття рішень", "Лендюк Т.В.", 2303 ],
        ["16:00", "Програмування мобільних пристроїв", "Заставний О. М.", 2303]]
};
let KN21 = {
    monday : [ 
        ["9:35", "Алгоритми і структури даних(лекція)", "Коваль В.С.", 6207 ],
        ["11:10", "Бази і сховища даних", "Турченко І.В.", 6104 ],
        ["12:50", "Алгоритми і структури даних", "Ліп'яніна-Гончаренко Х.В.", 6201 ]],
    tuesday : [
        ["9:35", "Сучасні парадигми програмування", "Биковий П.Є.", 2303  ],
        ["11:10", "Сучасні парадигми програмування", "Биковий П.Є.", 2302 ],
        ["12:50", "Бази і сховища даних", "Турченко І.В.", 2303]],
    wednesday : [
        ["8:00", "Математичний аналіз(лекція)", "Боднар Д.І.", 6207 ],
        ["9:35", "Математичний аналіз", "Боднар Д.І.", 6307 ],
        ["11:10", "Іноземна мова", "Штохман Л.М." , 6502 ]],
    thursday : [
        ["8:00", "Сучасні парадигми програмування", "Биковий П.Є.", 2303 ], // 1/2 тиждень
        ["9:35", "Комп. графіка та техн. візуаліз. даних", "Турченко І.В.", 2302 ],
        ["11:10", "Комп. графіка та техн. візуаліз. даних", "Турченко І.В.", 2303 ],
        ["12:50", "Бази і сховища даних", "Турченко І.В.", 2303 ]],
    friday : [ 
        ["9:35", "Сучасні парадигми програмування", "Биковий П.Є.", 2303  ],
        ["11:10", "Сучасні парадигми програмування", "Биковий П.Є.", 2302 ],
        ["12:50", "Бази і сховища даних", "Турченко І.В.", 2303]],
}; //done

// ----------------------------------------------- //
//                    FUNCTIONS                    //
// ----------------------------------------------- //

function noGroup(id) {
    bot.sendMessage(id, "Для того, щоб використовувати дану команду, необхідно обрати групу /start");
}

function numToEn(num){
   var result;
    switch (num) {
        case 1: {
            result = "monday"
            break;
        }
        case 2: {
            result = "tuesday"
            break;
        }
        case 3: {
            result = "wednesday"
            break;
        }
        case 4: {
            result = "thursday"
            break;
        }
        case 5: {
            result = "friday"
            break;
        }
        default: {
            result = "weekend"
            break;
        }
    }
    return result;
}

function numToUkr(num){
    var result;
     switch (num) {
         case 1: {
             result = "Понеділок"
             break;
         }
         case 2: {
             result = "Вівторок"
             break;
         }
         case 3: {
             result = "Середу"
             break;
         }
         case 4: {
             result = "Четвер"
             break;
         }
         case 5: {
             result = "Пятницю"
             break;
         }
         default: {
             result = "Вихідний"
             break;
         }
     }
     return result;
}

function getNextOne(id, group) {
    var a, p, v, d1, d2, day;

    if (group) {
        var now = new Date();
        if ( (now.getDay() == 6) || (now.getDay() == 7) || ( (now.getDay() == 5) && (now.getHours() > eval( group + ".friday[" + eval( group + ".friday.length - 1") + "][0]" )) )) {
            d1 = eval( group + ".monday[0][0]" );
            d2 = eval( group + ".monday[0][1]" );
            p = eval( group + ".monday[0][2]" );
            v = eval( group + ".monday[0][3]" );
            a = eval( group + ".monday[0][4]" );
            day = "Понеділок";
        } else {
            if ( now.getHours() < eval( group + "." + numToEn(now.getDay()) + "[0][0]" ) ) { // Будні до 1 пари
                d1 = eval( group + "." + numToEn(now.getDay()) + "[0][0]" );
                d2 = eval( group + "." + numToEn(now.getDay()) + "[0][1]" );
                p = eval( group + "." + numToEn(now.getDay()) + "[0][2]" );
                v = eval( group + "." + numToEn(now.getDay()) + "[0][3]" );
                a = eval( group + "." + numToEn(now.getDay()) + "[0][4]" );
                day = numToUkr(now.getDay());
            }
            if (now.getHours() > eval( group + "." + numToEn(now.getDay()) + "[" + eval( group + "." + numToEn(now.getDay()) + ".length - 1") + "][0]" )) { // Будні після останньої пари
                d1 = eval( group + "." + numToEn(now.getDay()+1) + "[0][0]" );
                d2 = eval( group + "." + numToEn(now.getDay()+1) + "[0][1]" );
                p = eval( group + "." + numToEn(now.getDay()+1) + "[0][2]" );
                v = eval( group + "." + numToEn(now.getDay()+1) + "[0][3]" );
                a = eval( group + "." + numToEn(now.getDay()+1) + "[0][4]" );
                day = numToUkr((now.getDay()) + 1);

            }
            // if (  ) { // Якщо даний час більше першої пари і менше останньої пари
            //     d1 = eval( group + "." + numToEn(now.getDay()+1) + "[0][0]" );
            //     d2 = eval( group + "." + numToEn(now.getDay()+1) + "[0][1]" );
            //     p = eval( group + "." + numToEn(now.getDay()+1) + "[0][2]" );
            //     v = eval( group + "." + numToEn(now.getDay()+1) + "[0][3]" );
            //     a = eval( group + "." + numToEn(now.getDay()+1) + "[0][4]" );
            //     day = numToUkr(now.getDay());
            // }
        }
        d2 == 0 ? d2 = "00" : d2;
        bot.sendMessage(id, "Ваша наступна пара в *" + day + "*" + "\n📚 *" + p + "*\n🕔 Початок о " + d1 + ":" + d2 + "\n🚪 Аудиторія №" + a + "\n👨‍👦 Викладач: " + v, { parse_mode: "Markdown" } );
    } else {
        noGroup(id);
    }
}

function getNextDay (id, group) {
    var a, p, v, d1, d2, day;

    if (group) {
        var now = new Date();
        if ( (now.getDay() == 6) || (now.getDay() == 7) || ( (now.getDay() == 5) && (now.getHours() > eval( group + ".friday[" + eval( group + ".friday.length - 1") + "][0]" )) )) {
            d1 = eval( group + ".monday[0][0]" );
            d2 = eval( group + ".monday[0][1]" );
            p = eval( group + ".monday[0][2]" );
            v = eval( group + ".monday[0][3]" );
            a = eval( group + ".monday[0][4]" );
            day = "в Понеділок";
        } else {
            if ( now.getHours() < eval( group + "." + numToEn(now.getDay()) + "[0][0]" ) ) { // Будні до 1 пари
                d1 = eval( group + "." + numToEn(now.getDay()) + "[0][0]" );
                d2 = eval( group + "." + numToEn(now.getDay()) + "[0][1]" );
                p = eval( group + "." + numToEn(now.getDay()) + "[0][2]" );
                v = eval( group + "." + numToEn(now.getDay()) + "[0][3]" );
                a = eval( group + "." + numToEn(now.getDay()) + "[0][4]" );
                day = "в " + numToUkr(now.getDay());
            }
            if (now.getHours() > eval( group + "." + numToEn(now.getDay()) + "[" + eval( group + "." + numToEn(now.getDay()) + ".length - 1") + "][0]" )) { // Будні після останньої пари
                d1 = eval( group + "." + numToEn(now.getDay()+1) + "[0][0]" );
                d2 = eval( group + "." + numToEn(now.getDay()+1) + "[0][1]" );
                p = eval( group + "." + numToEn(now.getDay()+1) + "[0][2]" );
                v = eval( group + "." + numToEn(now.getDay()+1) + "[0][3]" );
                a = eval( group + "." + numToEn(now.getDay()+1) + "[0][4]" );
                day = "в " + numToUkr((now.getDay()) + 1);

            }
                // if (1) {
                //     d1 = eval( group + "." + numToEn(now.getDay()+1) + "[0][0]" );
                //     d2 = eval( group + "." + numToEn(now.getDay()+1) + "[0][1]" );
                //     p = eval( group + "." + numToEn(now.getDay()+1) + "[0][2]" );
                //     v = eval( group + "." + numToEn(now.getDay()+1) + "[0][3]" );
                //     a = eval( group + "." + numToEn(now.getDay()+1) + "[0][4]" );
                //     day = numToUkr("Сьогодні");
                // }
        
        }
        d2 == 0 ? d2 = "00" : d2;
        bot.sendMessage(id, "Ваша наступна пара *" + day + "*" + "\n📚 *" + p + "*\n🕔 Початок о " + d1 + ":" + d2 + "\n🚪 Аудиторія №" + a + "\n👨‍👦 Викладач: " + v, { parse_mode: "Markdown" } );
    } else {
        noGroup(id);
    }
}
// ----------------------------------------------- //
//                  USER INTERACTION               //
// ----------------------------------------------- //

bot.on("polling_error", (e) => console.log(e));
bot.onText(/start/, (msg, match) => {
        bot.sendMessage(msg.chat.id, "Оберіть свою групу", options);
        bot.on('callback_query', (q) => {
            group = q.data;
            bot.sendMessage(msg.chat.id, "Ви обрали: *" + q.data + "*", {parse_mode: "Markdown"} )
        });
});

bot.onText(/file/, (msg, match) => {
    if (group) {
        if (group == "KN41") {
            bot.forwardMessage(msg.chat.id, 413671312, 3161);
            } else {
                bot.sendMessage(msg.chat.id, "В базі бота в наявності тільки КН-31, якщо у вас є файл з розкладом для свого курсу, відправте, будь ласка сюди @kova1");
            }
    } else {
        noGroup(msg.chat.id);
    }
    });

bot.onText(/\/f (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    if (resp == "41") {
        bot.forwardMessage(msg.chat.id, 413671312, 3161);
    } else {
        bot.sendMessage(msg.chat.id, "В базі бота в наявності тільки КН-41, якщо у вас є файл з розкладом для свого курсу, відправте, будь ласка сюди @kova1");
    }
    }
);

bot.onText(/\/card (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
        if ( msg.chat.id == -1001486935008 ) {
            if (resp == "Roma") {
                bot.sendMessage(msg.chat.id, "5375414115916933 [monobank]\n5168755903290167 [privat24]");
            } else if (resp == "Max") {
                bot.sendMessage(msg.chat.id, "5168757356951709 [privat24]");            
            } else if (resp == "Stariy") {
                bot.sendMessage(msg.chat.id, "5375414106643975 [monobank]");            
            } else {
                bot.sendMessage(msg.chat.id, "Use <b>/card {Roma/Stariy/Max}</b>", { parse_mode: "HTML" } );
            }
        } else {
            bot.sendMessage(msg.chat.id, "This command is not avaliable here");
        }
    }
);

bot.onText(/next/, (msg, match) => {
    getNextOne(msg.chat.id, group);
});

bot.onText(/next_day/, (msg, match) => {
    getNextDay(msg.chat.id, group);
});

// MY OWN COMMANDS

bot.onText(/admin_eblan/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'Ну, ну, ' + msg.from.first_name + ' .. написав адмін');
});