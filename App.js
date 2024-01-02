// 1. Define the API endpoint URL for the translation service
const serverApi = "https://api.funtranslations.com/translate/shakespeare.json";

// get refference of html element by using id 
const translateBtn = document.querySelector("#translate-btn");
const textTranslateBox = document.querySelector("#textTranslateBox");
const showOutputMessage = document.querySelector("#ouput");

// construct and generate URL
const translateServerApi = (text) => {
  return serverApi + "?" + "text=" + text;
};

// error handling 
function errorHandler(error) {
  console.log("error occured " + error);
  alert("something wrong with server try again after some time");
}

translateBtn.addEventListener("click", () => {
//get the user input form the user 
const textInputQuerry = textTranslateBox.value;
// perform fetch request 
fetch(translateServerApi(textInputQuerry))
// parse a response as json 
  .then((response) => response.json())
  .then((json) => {
   if(!json.contents || !json.contents.translated) {
      throw new Error("Invalid response format from the server");
   }
   let translate = json.contents.translated;
   showOutputMessage.innerText = translate;
    })
  .catch(errorHandler);
});
