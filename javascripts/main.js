var arr = [];
var i = 0;
var error = []
var myplanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

const countries = {
   "am-ET": "Amharic",
   "ar-SA": "Arabic",
   "be-BY": "Bielarus",
   "bem-ZM": "Bemba",
   "bi-VU": "Bislama",
   "bjs-BB": "Bajan",
   "bn-IN": "Bengali",
   "bo-CN": "Tibetan",
   "br-FR": "Breton",
   "bs-BA": "Bosnian",
   "ca-ES": "Catalan",
   "cop-EG": "Coptic",
   "cs-CZ": "Czech",
   "cy-GB": "Welsh",
   "da-DK": "Danish",
   "dz-BT": "Dzongkha",
   "de-DE": "German",
   "dv-MV": "Maldivian",
   "el-GR": "Greek",
   "en-GB": "English",
   "es-ES": "Spanish",
   "et-EE": "Estonian",
   "eu-ES": "Basque",
   "fa-IR": "Persian",
   "fi-FI": "Finnish",
   "fn-FNG": "Fanagalo",
   "fo-FO": "Faroese",
   "fr-FR": "French",
   "gl-ES": "Galician",
   "gu-IN": "Gujarati",
   "ha-NE": "Hausa",
   "he-IL": "Hebrew",
   "hi-IN": "Hindi",
   "hr-HR": "Croatian",
   "hu-HU": "Hungarian",
   "id-ID": "Indonesian",
   "is-IS": "Icelandic",
   "it-IT": "Italian",
   "ja-JP": "Japanese",
   "kk-KZ": "Kazakh",
   "km-KM": "Khmer",
   "kn-IN": "Kannada",
   "ko-KR": "Korean",
   "ku-TR": "Kurdish",
   "ky-KG": "Kyrgyz",
   "la-VA": "Latin",
   "lo-LA": "Lao",
   "lv-LV": "Latvian",
   "men-SL": "Mende",
   "mg-MG": "Malagasy",
   "mi-NZ": "Maori",
   "ms-MY": "Malay",
   "mt-MT": "Maltese",
   "my-MM": "Burmese",
   "ne-NP": "Nepali",
   "niu-NU": "Niuean",
   "nl-NL": "Dutch",
   "no-NO": "Norwegian",
   "ny-MW": "Nyanja",
   "ur-PK": "Pakistani",
   "pau-PW": "Palauan",
   "pa-IN": "Panjabi",
   "ps-PK": "Pashto",
   "pis-SB": "Pijin",
   "pl-PL": "Polish",
   "pt-PT": "Portuguese",
   "rn-BI": "Kirundi",
   "ro-RO": "Romanian",
   "ru-RU": "Russian",
   "sg-CF": "Sango",
   "si-LK": "Sinhala",
   "sk-SK": "Slovak",
   "sm-WS": "Samoan",
   "sn-ZW": "Shona",
   "so-SO": "Somali",
   "sq-AL": "Albanian",
   "sr-RS": "Serbian",
   "sv-SE": "Swedish",
   "sw-SZ": "Swahili",
   "ta-LK": "Tamil",
   "te-IN": "Telugu",
   "tet-TL": "Tetum",
   "tg-TJ": "Tajik",
   "th-TH": "Thai",
   "ti-TI": "Tigrinya",
   "tk-TM": "Turkmen",
   "tl-PH": "Tagalog",
   "tn-BW": "Tswana",
   "to-TO": "Tongan",
   "tr-TR": "Turkish",
   "uk-UA": "Ukrainian",
   "uz-UZ": "Uzbek",
   "vi-VN": "Vietnamese",
   "wo-SN": "Wolof",
   "xh-ZA": "Xhosa",
   "yi-YD": "Yiddish",
   "zu-ZA": "Zulu"
}

// const formText=document.querySelector("#instruct");
// const toText=document.querySelector(".to-text");
// selectTag=document.querySelector("select");
// translatorBtn=document.querySelector(".translate");
// var translateFrom="en";
// var translateTo=selectTag.value;

// function translateLang(){
//    const toText=document.querySelector(".to-text");

//    let text=document.getElementById("instruct").innerText
//    if(!text)return;
//    console.log(text)
//    // toText.setAttribute("placeholder","Translating..");

//    // text = OKbutton();

//    let api_url="https://api.mymemory.translated.net/get?q="+text+"&langpair="+translateFrom+"|"+translateTo;
//    console.log(api_url)
//    fetch(api_url).then(res=>res.json()).then(data=>{
//    // console.log(data);
//    // document.getElementById("instruct").innerText=data.responseData.translatedText;
//    translatedText = data.responseData.translatedText;
//    toText.setAttribute("placeholder","Translation");
//    dexter_voice(translateTo, translatedText)
//    });
// }

while(arr.length < 8){
   var r = Math.floor(Math.random() * 8) + 1;
   if(arr.indexOf(r) === -1) arr.push(r);
}

var currPlanet=arr[0];
var nextPlanet=arr[0];
document.getElementById("button").value = arr[0]

draggableElements.forEach(elem => {
   elem.addEventListener("dragstart", dragStart);
})

droppableElements.forEach(elem => {
   elem.addEventListener("dragenter", dragEnter);
   elem.addEventListener("dragover", dragOver);
   elem.addEventListener("dragleave", dragLeave);
   elem.addEventListener("drop", drop);
})

    if ('speechSynthesis' in window) {
      let rate = 1, pitch = 1.5, volume = 1;
      let text = document.getElementById("instruct").innerText;
    
      speak(text, voices[5], rate, pitch, volume);
    
    }else{
      console.log(' Speech Synthesis Not Supported 😞'); 
    }

function dragStart(event) {
   document.getElementById("button").style.display = 'none';
   wrong_pos = "Going wrong somewhere...Have closer look"
   img_src = '' 
   switch(nextPlanet){
      case 1:
         if (event.target.id === "mercury") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "It is Mercury. It is closest to the sun!";
         }
         else {
            img_src = '<img src="closeup-images/Mercury.jpg"></img>'
            Pos = wrong_pos 
         }
         break
      case 2:
         if (event.target.id === "venus") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "This is Venus which is the hottest planet but comes after Mercury (not the sun)";
         }
         else {
            if(event.target.id === "jupiter"){
               wrong_pos = "Going wrong somewhere? The correct planet is smaller in size than this. Have a closer look."
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Venus.jpg"></img>'
            }
            if(event.target.id === "saturn"){
               wrong_pos = "Going wrong somewhere? The correct planet does not have rings. Have a closer look."
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Venus.jpg"></img>'
            }
            else {
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Venus.jpg"></img>'
            }
         }
         break
      case 3:
         if (event.target.id === "earth") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "The planets before the Milky way are Terrestrial Planets. Earth is the second-last Terrestrial planet.";
         }
         else {
            if(event.target.id === "neptune"){
               wrong_pos = "Going wrong somewhere? The correct planet also has green spots which represents the land. Have a closer look.";
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Earth.jpg"></img>'
            }
            if(event.target.id === "uranus"){
               wrong_pos = "Going wrong somewhere? The correct planet does not have rings. Have a closer look.";
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Earth.jpg"></img>';
            }
            else {
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Earth.jpg"></img>'
            }
         }
         break
      case 4:
         if (event.target.id === "mars") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "Yes, Mars!! It comes right before the milky way.";
         }
         else {
            if(event.target.id === "jupiter"){
               wrong_pos = "Going wrong somewhere? The correct planet is smaller in size than this. Have a closer look."
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Mars.jpg"></img>'
            }
            else {
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Mars.jpg"></img>'
            }
         }
         break
      case 5:
         if (event.target.id === "jupiter") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "That's right. Jupiter! It comes right after the milky way."
         }
         else {
            if(event.target.id === "venus"){
               wrong_pos = "Going wrong somewhere? The correct planet is larger in size than this. Have a closer look."
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Jupiter.jpg"></img>'
            }
            if(event.target.id === "mars"){
               wrong_pos = "Going wrong somewhere? The correct planet is not completely red. Have a closer look."
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Jupiter.jpg"></img>'
            }
            if(event.target.id === "saturn"){
               wrong_pos = "Going wrong somewhere? The correct planet does not have rings. Have a closer look.";
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Jupiter.jpg"></img>';
            }
            else {
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Jupiter.jpg"></img>'
            }
         }
         break
      case 6:
         if (event.target.id === "saturn") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "You are right, Saturn. The planets after the Milky way are Jovian Planets. It is the second Jovian planet.";
         }
         else {
            if(event.target.id === "uranus"){
               wrong_pos = "Going wrong somewhere? The correct planet is yellowish in color with rings around it. Have a closer look.";
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Saturn.jpg"></img>';
            }
            else {
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Saturn.jpg"></img>'
            }
         }
         break
      case 7:
         if (event.target.id === "uranus") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "That's correct, Uranus! It is the second-last planet in the solar system and is a neighbour of Saturn!";
         }
         else {
            if(event.target.id === "saturn"){
               wrong_pos = "Going wrong somewhere? The correct planet is blue in color with rings around it. Have a closer look.";
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Uranus.jpg"></img>';
            }
            if(event.target.id === "neptune"){
               wrong_pos = "Going wrong somewhere? The correct planet has rings around it. Have a closer look.";
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Uranus.jpg"></img>';
            }
            else {
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Uranus.jpg"></img>'
            }
         }
         break
      case 8:
         if (event.target.id === "neptune") {
            event.dataTransfer.setData("text", event.target.id);
            Pos = "It is Neptune. It is the last planet in the solar system.";
         }
         else {
            if(event.target.id === "mercury"){
               wrong_pos = "Going wrong somewhere? The correct planet is blue in color. Have a closer look.";
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Neptune.jpg"></img>';
            }
            if(event.target.id === "uranus"){
               wrong_pos = "Going wrong somewhere? The correct planet does not have rings around it. Have a closer look.";
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Neptune.jpg"></img>';
            }
            else {
               Pos = wrong_pos 
               img_src = '<img src="closeup-images/Neptune.jpg"></img>'
            }
         }
         break     
   }
   document.getElementById("instruct").value = Pos;
   currPlanet=nextPlanet;
   //dexter_voice();
   translateLang();
   document.getElementById('close-up-image').style.display = 'flex'
   document.getElementById('close-up-image').innerHTML = img_src;
}

function removeDuplicates(arr) {
   return arr.filter((item,
       index) => arr.indexOf(item) === index);
}

function dragEnter(event) {
   if (!event.target.classList.contains("dropped")) {
      event.target.classList.add("droppable-hover");
      
   }
   document.getElementById("close-up-image").style.display = 'none';
}

function dragOver(event) {
   event.preventDefault();
   document.getElementById("close-up-image").style.display = 'none';
}

function dragLeave(event) {
   event.target.classList.remove("droppable-hover");
}

function insertionSort(arr, n)
{
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;		
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

function drop(event) {
   event.target.classList.remove("droppable-hover");
   event.preventDefault();
   document.getElementById("close-up-image").style.display = 'none';
   const draggableElementData = event.dataTransfer.getData("text");
   const droppableElementData = event.target.getAttribute("data-draggable-id")
   // document.getElementById("button").innerHTML = "NEXT";
   if (draggableElementData === droppableElementData) {
      currPlanet=arr[i]
      document.getElementById("button").style.display = 'flex';
      if(currPlanet===1){
         document.getElementById("mercury1").className = "mercury-revolve";
      }
      if(currPlanet===2){
         document.getElementById("venus1").className = "venus-revolve";
      }
      if(currPlanet===3){
         document.getElementById("earth1").className = "earth-revolve";
      }
      if(currPlanet===4){
         document.getElementById("mars1").className = "mars-revolve";
      }
      if(currPlanet===5){
         document.getElementById("jupiter1").className = "jupiter-revolve";
      }
      if(currPlanet===6){
         document.getElementById("saturn1").className = "saturn-revolve";
      }
      if(currPlanet===7){
         document.getElementById("uranus1").className = "uranus-revolve";
      }    
      if(currPlanet===8){
         document.getElementById("neptune1").className = "neptune-revolve";
      }
      event.target.classList.add("dropped");
      const draggableElement = document.getElementById(draggableElementData);
      draggableElement.classList.add("dragged");
      draggableElement.setAttribute("draggable", "false");
      event.target.appendChild(document.getElementById(draggableElementData));
      error.push(arr[i]);
      i=i+1; 
      document.getElementById("button").value = nextPlanet = arr[i];
      if(i===8){
         document.getElementById("draggable-elements").className = "complete-ss";
         document.getElementById("instruct").className = "complete-ss";
         document.getElementById("button").innerHTML = "NEXT GAME";
         document.getElementById("button").onclick = function () {
            location.href = "../EXPLORE_CDAC/index.html";
        };
      }
   }
   else if(myplanets[currPlanet-1].toLowerCase() == draggableElementData){
      error.push(arr[i]);
      error = removeDuplicates(error);
      insertionSort(error, error.length);
      index = error.indexOf(arr[i]);

      p= myplanets[error[index]-1];
      
      p1=myplanets[error[index-1]-1];
      p2=myplanets[error[index+1]-1];

      if(error[index-1]==undefined && error[index+1]!=undefined){
         if (error[index]<=4){
            document.getElementById("instruct").value= p+" lies between sun and "+ p2;
         }
         else{
            document.getElementById("instruct").value= p+ " lies between milkyway and "+p2;
         }
      }

      else if(error[index-1]!=undefined && error[index+1]==undefined){
         if (error[index]<=4){
            document.getElementById("instruct").value= p+" lies between " + p1 +" and milkyway";
         }
         else{
            document.getElementById("instruct").value= p+" lies after "+p1;
         }
      }

      else if(error[index+1]==undefined && error[index-1]==undefined){
         if (error[index]<=4){
            document.getElementById("instruct").value= p+" lies between sun and milkyway";
         }
         else{
            document.getElementById("instruct").value= p+" lies after milkyway";
         }
      }

      else{
         document.getElementById("instruct").value= p+" lies between " + p1 +" and " + p2;
      }
      
      //dexter_voice();
      translateLang();
   }
   displayFacts();
   
   
}

function displayFacts(){
   var display_fact;
   display_fact = (Math.random())
   if( display_fact < 0.33){
      nasaRequest();
   }
}
