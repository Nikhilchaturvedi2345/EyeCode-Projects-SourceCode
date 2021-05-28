let ButtonBox = document.getElementById("ButtonBox");
let ResultValue = document.getElementById("ResultValue");
let screen = '';
ButtonBox.addEventListener("click",function (e) {
    if(e.target.className){
        let Clickedbtn = e.target.innerText;
        if (Clickedbtn == "CE") {
            screen= '';
            ResultValue.value = screen;
        }
        else if (Clickedbtn == "=") {
            let Equal = ResultValue.value = eval(screen);
            screen = Equal;
        }
        else{
            screen += Clickedbtn;
            ResultValue.value = screen;
        }
    }
})