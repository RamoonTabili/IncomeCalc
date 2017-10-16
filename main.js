document.addEventListener("DOMContentLoaded", init); 

//const wage = 11.75;
const taxShit = 0.824;

function init() {
    console.log('Initiated!');
    let income = document.getElementById("income");
    document.getElementById("calculate").addEventListener("click", function () {
        var wage = document.getElementById("wage").value;
        var hours = document.getElementById("hours").value;
//        console.log(hours);
        console.log(calc(hours, wage));
         
        income.textContent = "Estimated income: $" + calc(hours, wage);
    });
}

function calc(hours, wage) {
    let sum = (hours * wage) * taxShit;
    let total = parseInt(sum);
    return total;
//    console.log(hours);
}