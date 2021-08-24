let counterVal = 0;

document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById("plus").addEventListener("click", function (){
        counterVal += +inputNum.value;
        // I hate floating point errors, this prevents them
        counterVal = round(counterVal);
        counter.innerText = counterVal;
        negative();
    })

    document.getElementById("minus").addEventListener("click", function (){
        counterVal -= +inputNum.value;
        // I hate floating point errors, this prevents them 
        counterVal = round(counterVal);
        counter.innerText = counterVal;
        negative();
    })
})

function negative(){
    if (counterVal < 0) {
        counter.style.color = 'red';
    } else {
        counter.style.color = 'black'
    }
}

function round(num){
    return Math.round(num * 100000000)/100000000;
}

