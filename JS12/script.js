// const date = new Date();
// console.log(date); //Wed Jan 15 2025 20:13:13 GMT+0200 (Восточная Европа, стандартное время)

// let ms = Date.parse('2025-01-14T13:51:20.423');
// alert(ms);

// const date1 = new Date('January 16, 2025');
// console.log(date1); //Thu Jan 16 2025 00:00:00 GMT+0200 (Восточная Европа, стандартное время)

// const date2 = new Date(2020, 9, 10);
// console.log(date2); //Sat Oct 10 2020 12:15:50 GMT+0300 (Восточная Европа, летнее время)

// const date = new Date(10000000000);
// console.log(date);//Thu Jan 01 1970 05:46:40 GMT+0300

// const date = Date.now();
// console.log(date); //1736966043842

// const date = new Date();
// console.log('Date: ' + date);

// console.log("Date: " + date.getDate()); //Date: 15
// console.log("Date: " + date.getDay()); //3
// console.log("Date: " + date.getMonth()); //0
// console.log("Date: " + date.getFullYear()); //2025
// console.log("Date: " + date.getHours()); //20



// const date = new Date();
// console.log(`Час в мілісекундах від 1 січня 1970 року: ${date.getTime()}`);  //Час в мілісекундах від 1 січня 1970 року: 1736967046329

// let result = 'Date: ';
// result += date.getFullYear() + '-';
// result += (date.getMonth() + 1)+ '-';
// result += date.getDate() + '. ';

// result += 'Time: ' + date.getHours() + ':';
// result += date.getMinutes() + ':';
// result += date.getSeconds() + '.';
// result += date.getMilliseconds() + '.'

// console.log(result); //Date: 2025/0/15. Time: 20:56:21.787.


// const date = new Date(2025, 0, 15, 21, 0, 0, 0);
// console.log(date.getTime()); //1736967600000

// const secondsDate = new Date();
// secondsDate.setFullYear(2026, 2, 14);
// secondsDate.setHours(22, 10, 15, 0);



// let date = new Date();

// const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
// }

// const locateUk = date.toLocaleString('Uk-uk', options);
// console.log(locateUk); //середу, 15 січ. 2025 р., 21:12

// const locateUs = date.toLocaleString('en-US', options);
// console.log(locateUs); //Wednesday, Jan 15, 2025, 09:14 PM





// const now = new Date();
// console.log(now.toString()); //Fri Jan 17 2025 19:22:20 GMT+0200 (Восточная Европа, стандартное время)


// const now = new Date();
// console.log(now.toDateString()); //Fri Jan 17 2025
// console.log(now.toTimeString()); //19:25:01 GMT+0200 (Восточная Европа, стандартное время)


// let date = new Date();
// console.log(+date); //1737134825422


// let start = Date.now();

// for (let i = 0; i < 100000; i++){
//     let doSmth = i * i * i;
// }

// let end = Date.now();
// alert(`${end - start}`)





// Date.now() === new Date().getTime()







// function getLastDayOfMonth(year, month) {
//     const nextMonth = new Date(year, month + 1, 0);
//     return nextMonth.getDate();
// }
// console.log(getLastDayOfMonth(2023, 0))



// function countBusinessDays(startDate, endDate) {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
 
//     if(start > end) {
//         return 0;
//     }
 
//     let businessDaysCount = 0;
     
//     for (let currentDay = new Date(start); currentDay <= end; currentDay.setDate(currentDay.getDate() + 1)) {
//         const dayOfWeek = currentDay.getDay();
     
//         if (dayOfWeek !== 0 && dayOfWeek !== 6) {
//             businessDaysCount++;
//         }
//     }
 
//     return businessDaysCount;
//        }
 
// const startDate = '2025-01-15';
// const endDate = '2025-01-24'
// console.log(countBusinessDays(startDate, endDate));



// Форма реєстрації
const savedUser = JSON.parse(localStorage.getItem('user'));
const form = document.getElementById("registrationForm");
const welcomeDiv = document.getElementById('welcome');

if (savedUser) {
    welcomeDiv.textContent = `Ласкаво просимо, ${savedUser.name}!`;
    form.style.display = 'none';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

     welcomeDiv.textContent = `Ласкаво просимо, ${name}!`;
     form.style.display = "none";
})