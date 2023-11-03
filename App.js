const translateBtn = document.querySelector("#translate-btn");
const textTranslateBox = document.querySelector("#textTranslateBox");
const showOutputMessage = document.querySelector("#ouput");
showOutputMessage.innerText = "hey, what's up"

translateBtn.addEventListener("click",()=>{
    // alert("Ok clicked!")
    // console.log(textTranslateBox.value)
    showOutputMessage.innerText = "Absolutely Great!"
})

const userInput = prompt("What's you'r nick name")
alert("Hey, My nickname is " + userInput);