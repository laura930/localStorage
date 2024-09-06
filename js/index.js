
const input = document.querySelector("#inputText");
const btn = document.querySelector("#buttonText");


btn.addEventListener("click",function(){
let text= input.value
localStorage.setItem("inputDato", text)

console.log(localStorage)
});



