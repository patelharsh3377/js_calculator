function display(inputnum){
    document.getElementById("result").value += inputnum
    return
}
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
function clearscreen(){
    document.getElementById('result').value = ""
    return
}