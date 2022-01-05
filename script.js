const orderDate = document.querySelector(`#dinamyc_date`);


let data = new Date();
let day = data.getDay();
let month = data.getMonth()+1;
let year = data.getFullYear();
console.log(`${day}.${month}.${year}`);
// console.log(data);

// orderDate.innerHTML = `${day}.${month}.${year}`;

// const oneHour = 3600000;

// // let countDay = new Date().getTime() + 10000;

// let countDay = new Date().getTime() + oneHour*2;


// let x = setInterval(function() {

    
//     let now = new Date().getTime();
    
//     let distance = countDay - now;
    
//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     	minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//     	seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//     document.getElementById("timer_data").innerHTML = hours + "h "
//     + minutes + "m " + seconds + "s ";

    
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("timer_data").innerHTML = 'special offer is finished';
//         document.getElementById("price_old").innerHTML = '';
//         document.getElementById("price_new").innerHTML = '120 uah';
//     }
// }, 1000);

