let nombre=document.getElementById("nombre")
let email=document.getElementById("exampleFormControlInput1")
let texarea=document.getElementById("exampleFormControlTextarea1")


document.getElementById("btn").addEventListener("click",()=>{
   setTimeout(()=>{
    nombre.value=""
    texarea.value=""
    email.value=""
   },5000)
})