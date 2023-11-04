const translateBtn = document.querySelector("#translate-btn");
const textTranslateBox = document.querySelector("#textTranslateBox");
const showOutputMessage = document.querySelector("#ouput");

const serverApi = "	https://api.funtranslations.com/translate/shakespeare.json";
const translateServerApi = (text) => {
  return serverApi + "?" + "text=" + text;
};

function errorHandler(error) {
  console.log("error occured " + error);
  alert("something wrong with server try again after some time");
}

translateBtn.addEventListener("click", () => {
  /* taking input via translate box */ 
  const textInputQuerry = textTranslateBox.value;

  /* processing input that took */
  fetch(translateServerApi(textInputQuerry))
    .then((res) => res.json())
    .then((json) => {
      let translate = json.contents.translated;
      showOutputMessage.innerText = translate;
    })
    .catch(errorHandler);
});
