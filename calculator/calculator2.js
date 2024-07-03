const display = document.getElementById("display");

function addtodisplay(input){
    display.value += input;
   
    

}

function cleardisplay(){
    display.value = "";

}

function calculate(){
    try{
    display.value = eval(display.value);
     }
    catch(error){
        display.value = "Error";
    }
    if (display.value == undefined ){
        display.value = "Error";
    }

}
function backspace(){
    display.value = display.value.slice(0, -1);
    
}
function curioussoul(){
    display.value = "Curious Soul";
}