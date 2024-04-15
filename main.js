function insert(num) {
    document.getElementById('textview').value = document.getElementById('textview').value+num;
}
function clean(){
    document.getElementById('textview').value = "";
}
function back(){
    var value = document.getElementById('textview').value;
    document.getElementById('textview').value = value.substring(0, value.length-1);
}
function equal(){
    var value = document.getElementById('textview').value;
    if(value){
        document.getElementById('textview').value = eval(value);
    }
}