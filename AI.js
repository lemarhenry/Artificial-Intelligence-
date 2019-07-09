const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const greetings=[
    'Good Morning Boss whats up',
    'Good AfterNoon Boss Whats up',
    'Good Evening Boss Whats up',
    

]
const weather =[
    'Today is extremely windy  Boss make sure to take your jacket',
    'Today is extremely hot  Boss make sure to wear sleeveless',
    'Its is raining  Boss make sure to take your umbrella',
    

]
const Friends =[
    'yow Jason wah gwaan bro',
    'yow Tim wah gwaan bro',
    'yow Leron wah gwaan bro',
    'yow Rico wah gwaan bro',
    'yow Abbi wah gwaan bae',

];



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.onstart = function(){

    console.log('Started');
};
recognition.onresult = function(event) {

const current = event.resultIndex;
const transcript = event.results[current][0].transcript;

content.textContent = transcript;
    readOutLoud(transcript)
};

btn.addEventListener('click',()=> {
    recognition.start();
});

function readOutLoud(message){

    const speech =new SpeechSynthesisUtterance();


    speech.text ="i wasn't written with you in mind";

    if(message.includes('good morning')){
        const finalText =greetings[0];
        speech.text = finalText;
    }
    if(message.includes('good afternoon')){
        const finalText =greetings[1];
        speech.text = finalText;
    }
    if(message.includes('weather')){
        const finalText =weather[Math.floor(Math.random()*weather.length)];
        speech.text = finalText;
    }
    if(message.includes('Jason')){
        const finalText =Friends[0];
        speech.text = finalText;
       
    }
    if(message.includes('Timothy')){
        const finalText =Friends[1];
        speech.text = finalText;
    }
    if(message.includes('Leron')){
        const finalText =Friends[2];
        speech.text = finalText;
    }
    if(message.includes('Rico')){
        const finalText =Friends[3];
        speech.text = finalText;
    }
    if(message.includes('Abbi')){
        const finalText =Friends[4];
        speech.text = finalText;
    }
        
        speech.volume =1;
        speech .rate = 1;
        speech .pitch= 1;

        window.speechSynthesis.speak(speech);
}