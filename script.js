const orderDate = document.querySelector(`#dinamyc_date`);


let data = new Date();
let day = data.getDay();
let month = data.getMonth()+1;
let year = data.getFullYear();
console.log(`${day}.${month}.${year}`);

orderDate.innerHTML = `${day}.${month}.${year}`;




// function startTimer(duration, display) {
//     var start = Date.now(),
//         diff,
//         minutes,
//         seconds;
//     function timer() {
//         // get the number of seconds that have elapsed since 
//         // startTimer() was called
//         diff = duration - (((Date.now() - start) / 1000) | 0);

//         // does the same job as parseInt truncates the float
//         minutes = (diff / 60) | 0;
//         seconds = (diff % 60) | 0;

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds; 

//         if (diff <= 0) {
//             // add one second so that the count down starts at the full duration
//             // example 05:00 not 04:59
//             start = Date.now() + 1000;
//         }
//     };
//     // we don't want to wait a full second before the timer starts
//     timer();
//     setInterval(timer, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60 * 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };