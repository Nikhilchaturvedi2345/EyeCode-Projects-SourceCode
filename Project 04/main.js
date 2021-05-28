let Stars = document.getElementsByClassName("Stars");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {

    let h1 = 62;
    let h2 = 47;
    let h3 = 47;
    let delay = 0.1;
    let left = 41.5;
    for (let i = 0; i < 17; i++) {
        Stars[i].style.cssText = `top: ${h1}vh; left: 41.5vw; box-shadow: 0 0 45px 10px #ffffffc5; transition-delay: ${delay}s`
        h1 -= 1;
        delay += 0.1;
    }
    for (let i = 16; i < 34; i++) {
        Stars[i].style.cssText = `top: ${h3}vh; left: ${left}vw; box-shadow: 0 0 45px 10px #ffffffc5; transition-delay: ${delay}s`
        h3 += 0.92;
        delay += 0.1;
        left += 0.5;
    }
    for (let i = 34; i < 50; i++) {
        Stars[i].style.cssText = `top: ${h2}vh; left: 50vw; box-shadow: 0 0 45px 10px #ffffffc5; transition-delay: ${delay}s`
        h2 += 1;
        delay += 0.1;
    }


})