

function getnum(number){
    var result = document.getElementById('input-value');
    result.value += number;
}

function clearresult(){
    var result = document.getElementById('input-value');
    result.value = " ";
}

function backspace(){
    var result = document.getElementById('input-value');
    result.value = result.value.slice(0,-1);

}
function getresult(){
    var result = document.getElementById('input-value');
    result.value = eval(result.value);
}