
const dat= document.querySelector("#data")

dat.innerHTML=localStorage.getItem("inputDato") /*poner solo nombre de key= inputDato, 
                                                 el valor está guardado en la variable text dentro del localstorage*/ 
console.log(localStorage)

