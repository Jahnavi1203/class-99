var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event){
    console.log(event);

    var content  = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;

    speak();
}

function speak(){
    var syn = window.speechSynthesis;
     
    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    syn.speak(utterThis);

    Webcam.attach(camera);
}



Webcam.set({
    width: 320,
    height: 240,
    image_format: "png",
    png_quality: 90,
});

camera = document.getElementById("camera");

