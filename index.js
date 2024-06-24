const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearToDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}