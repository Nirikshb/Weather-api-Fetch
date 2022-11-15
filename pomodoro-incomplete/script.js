// let firstBatch=5;
// let secBatch=7;

// let count = firstBatch + secBatch;

// console.log(count);

// let myAge=25;
// let humanDogRatio=7;
// let myDogAge=myAge*humanDogRatio;

// console.log(myDogAge);

// get element
// let currentColor = 'red'
// const heade = document.getElementById('heading')
// header.style.color = currentColor

// function toggleColor(){
//     if(currentColor == 'red'){
//         currentColor = 'green'
//     } else{
//         currentColor = 'red'
//         }
//         header.style.color
// }


// setInterval() is a function that takes two arguments: a function and a time in milliseconds.
// 1000 milliseconds = 1 second

// 24: 58
// 24: 59
// 25: 00

let minutes = 25;
let seconds = 0;

function start() {
    interval = setInterval(()=> {
        seconds--;

        if (seconds == 0){
            seconds = 59;
            minutes--;
        }

        if (minutes == 0 && seconds == 0) {
            stop();
            alert("Time's up! Take a break!");
        }

        displayTime(minutes, seconds);
    }, 1000);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    stop();
    minutes = 25;
    seconds = 0;
    displayTime(minutes, seconds);
}

function displayTime(minutes, seconds) {
    document.getElementById("timer").innerHTML = `${minutes}:${seconds}`;
}
