var arr=new Array(36);
var fl=0;
let numberLine=document.querySelector(".numberLine");

for (var j = 1; j < 7; j++) {
    for (var i = 1; i<7; i++){
        if (i==1){
            mi='-';
        }
        if (j==1){
            mj='-';
        }
        if (i==2){
            mi='+';
        }
        if (j==2){
            mj='+';
        }
        if (i==3){
            mi='/';
        }
        if (j==3){
            mj='/';
        }
        if (i==4){
            mi='*';
        }
        if (j==4){
            mj='*';
        }
        if (i==5){
            mi='%';
        }
        if (j==5){
            mj='%';
        }
        if (i==6){
            mi='.';
        }
        if (j==6){
            mj='.';
        }
        arr[fl]=mj+mi;
        fl++;
    }
}

function forclear() {
    document.getElementById("output").innerHTML = "";
}

function forDisplay(myvalue) {
    document.getElementById("output").innerHTML+=myvalue;
    var pred=document.getElementById("output").innerHTML;
    var strpred=pred.toString();
    var last2 = strpred.slice(-2);
    var result = String(strpred.slice(0, 6));
    var result2 = String(strpred.slice(6, 7));
    var resultgg = String(strpred.slice(0, 1));
    var resultepta = String(strpred.slice(7, 8));
    function error() {
        document.getElementById("output").innerHTML=pred.substring(0, pred.length - 1);            
        numberLine.style.backgroundColor = "red";
        setTimeout(`numberLine.style.backgroundColor = "rgba(150, 156, 145, 0)";`, 200);
    }
    function errorkonc(){
        error();
        document.getElementById("output").innerHTML=pred.substring(0, pred.length - 2);
    }
    if (resultepta=='+'){
        errorkonc();
    } else{
        if (resultepta=='*'){
            errorkonc();
        }
    else{
        if (resultepta=='/'){
            errorkonc();
        }
    else{
        if (resultepta=='-'){
            errorkonc();
        }
    }
    } 
    }
    if (resultgg=='+'){
        error();
    } else{
        if (resultgg=='*'){
            error();
        }
    else{
        if (resultgg=='/'){
            error();
        }
        else{
            if (resultgg=='.'){
                error();
            }
        } 
    } 
    
}

    if (strpred.length>6) {
        document.getElementById('output').innerHTML = result;
        if (result2=='+') document.getElementById('output').innerHTML = result+'+'+resultepta;
        if (result2=='*') document.getElementById('output').innerHTML = result+'*'+resultepta;
        if (result2=='-') document.getElementById('output').innerHTML = result+'-'+resultepta;
        if (result2=='/') document.getElementById('output').innerHTML = result+'/'+resultepta;
    }
        
    for (i = 0; i < 36; i++){
        if (arr[i]==last2){
            error();
        }
    }
}

function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

function solve(solved,otvet) {
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    var strsolved=solved.toString();
    otvet=strsolved.length;
    const result = Number(strsolved.slice(0, 8));
    if (otvet>8) console.log(result);
    document.getElementById('output').innerHTML = result;
}