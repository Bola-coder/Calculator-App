function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(numb){
    document.getElementById("history-value").innerText = numb;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(numb){
    if(numb == ""){
        document.getElementById("output-value").innerText = numb;
    }
    else{
        document.getElementById("output-value").innerText = getFormattedOutput(numb);
    }
}
function getFormattedOutput(num){
    if(num =="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseOutputFormat(num){
     var value = num.replace(/,/g, '');
     return value;
}
var operator = document.getElementsByClassName('operator');
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', operatorClick);
}
var number = document.getElementsByClassName('number');
for(var i = 0; i < number.length; i++){
    number[i].addEventListener("click", numberClick);
}
function numberClick(){
    var output = reverseOutputFormat(getOutput());
    if(output!=NaN){
        output = output + this.id;
        printOutput(output);
    }
}
function operatorClick(){
    if(this.id=="clear"){
        printHistory("");
        printOutput("");
    }
    else if(this.id=="backspace"){
        var output = reverseOutputFormat(getOutput()).toString();
        if(output){
            output = output.substr(0, output.length-1);
            printOutput(output);
        }
    }
    else{
        var output = getOutput();
        var history = getHistory();
        if(output=="" && history!= ""){
            if(isNaN(history[history.length-1])){
                history = history.substr(0, history.length-1);
            }
        }
        if(output!="" || history!=""){
            output = output==""? output:reverseOutputFormat(output);
            history = history + output;
            if(this.id=="="){
                var result = eval(history);
                printOutput(result);
                printHistory("");
            }
            else {
                history = history+ this.id;
                printHistory(history);
                printOutput("");
            }
        }
    }
}
