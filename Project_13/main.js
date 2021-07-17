// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

let BrushSize = document.getElementById("Size");
let Bgcolor = document.getElementById("Bgcolor");
let Bcolor = document.getElementById("Bcolor");

// class Circle{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//         this.size = BrushSize.value;
//         ctx.arc(this.x,this.y,this.size,0,360);
//     }
// }
// canvas.addEventListener("click",paint);
// function paint() {
//     canvas.addEventListener("mousemove",Brush);
// }
// function Brush(event) {
//     let a = event.x;
//     let b = event.y;
//     ctx.beginPath();
//     // new Circle(a,b);
//     // ctx.stroke("red");
//     // ctx.lineTo(e.clientX,e.clientY)
//     ctx.closePath();
//     ctx.fill();
//     ctx.fillStyle = Bcolor.value;
//     document.body.style.backgroundColor = Bgcolor.value;
//     requestAnimationFrame(Brush);
// }
// window.addEventListener("keydown",function () {
//     canvas.removeEventListener("mousemove",Brush);
// })



// window.addEventListener("load", function () {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
// })
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let painting = false;

function startPosition(e) {
    painting = true;
    draw(e);
}
function finisedPosition() {
    painting = false;
    ctx.beginPath();

}

function draw(e) {
    if(!painting) return;
    ctx.lineCap = "round";
    ctx.strokeStyle = Bcolor.value;

    ctx.lineTo(e.clientX,e.clientY-40);
    ctx.stroke();
    ctx.beginPath()
    ctx.moveTo(e.clientX,e.clientY-40)

}
function background() {
    ctx.lineWidth = BrushSize.value;

    document.body.style.backgroundColor = Bgcolor.value;
    requestAnimationFrame(background);
}
background();

canvas.addEventListener("mousedown",startPosition);
canvas.addEventListener("mouseup",finisedPosition);
canvas.addEventListener("mousemove",draw);