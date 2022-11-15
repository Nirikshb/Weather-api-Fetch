// cause with this i can change inner element
let countEL = document.getElementById("count-el")

//consolo to check
console.log(countEL)

//establashing my count as 0
let count = 0

//adding function to onclick argument in html
function increment () {
    count = count + 1;

     countEL.innerText = count; 
}
 

