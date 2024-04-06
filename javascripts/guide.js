if ('speechSynthesis' in window) {
    let rate = 1, pitch = 1.5, volume = 1;
    let text = document.getElementById("instruct").innerText;
    speak(text, voices[5], rate, pitch, volume);
  }else{
    console.log(' Speech Synthesis Not Supported 😞'); 
  }

function OKbutton(){
    document.getElementById("button").style.display = 'none'; 
    document.getElementById("close-up-image").style.display = 'none'; 
    var Text;
    if(document.getElementById("button").value==='1'){
      Text = "Drag the dark grey planet that has wrinkles on it!";
    }   
    if(document.getElementById("button").value==='2'){
      Text = "Drag the yellowish-white planet with few brownish-red spots. These spots signify the volcanic rocks!";
    } 
    if(document.getElementById("button").value==='3'){
      Text = "Drag our home! A combination of water and land! It is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons and plains.";
    } 
    if(document.getElementById("button").value==='4'){
      Text = "Drag the red planet! It got the colour red because of the rusty iron on its surface.";
    } 
    if(document.getElementById("button").value==='5'){
      Text = "Drag the largest planet in the solar system! It is a gas giant and its colour changes with storms and wind in the planet's atmosphere.";           
    } 
    if(document.getElementById("button").value==='6'){
      Text = "Drag the planet with rings! It has a set of 7 main rings with spaces between them.";
    } 
    if(document.getElementById("button").value==='7'){
      Text = "Drag the planet which is blue in colour and has faint rings.";
    } 
    if(document.getElementById("button").value==='8'){
      Text = "Drag the dark, cold and windy planet! It's colour is dark blue.";
    } 
    document.getElementById("instruct").value = Text
    translateLang();
    // return Text
 }
