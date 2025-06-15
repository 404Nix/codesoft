const display = document.getElementById('display');

function AppendToDisplay(input){
    display.value += input;
}

function cleardis(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

function delast(){
    let curr_val = display.value;
    display.value = curr_val.slice(0,-1);
}