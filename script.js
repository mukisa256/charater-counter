const textareaE1 = document.getElementById("textarea")
const totalcounterE1 = document.getElementById
("total-counter")
const RemainingcounterE1 = document.getElementById("Remaining-counter")
textareaE1.addEventListener("keyup",()=>{
    updateCounter();

});

updateCounter();

function updateCounter(){
    totalcounterE1.innerText = textareaE1.value.length
    RemainingcounterE1.innerText = textareaE1.getAttribute("maxlength")-textareaE1.value.length
}