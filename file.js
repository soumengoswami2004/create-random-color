let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    
let h1=document.querySelector("h1");
let randomcolor=getrandom();
 h1.innerText=randomcolor;

console.log("color updated");

let div=document.querySelector("div")
div.style.backgroundColor=randomcolor;


});


function getrandom(){
let red=   Math.floor(Math.random()*255);
let green =  Math.floor(Math.random()*255);
let blue =   Math.floor(Math.random()*255);
let color=`rgb(${red},${green},${blue})`
return color;
}