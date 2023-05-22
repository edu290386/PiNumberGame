const pi = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
const inputDecimals = document.getElementById("inputDecimals");
const result = document.getElementById("result");
const score = document.getElementById("score");
const fail = document.getElementById("fail");
const restart= document.getElementById("restart");
const opportunity = document.getElementById("opportunity");
const gain = document.getElementById("gain");
const statistics = document.getElementById("statistics");
const maximun = document.getElementById("maximun");

let totalscore = 0;
let position = 0;
let fails = 0;
let opportunities = "";
const icons = {0:"🍔", 1:"🍺",2:"🍬", 3:"🍆"}

function renderStars(){
    opportunities ="";
    for (let i = 3 - fails; i > 0 ; i--) {    
        opportunities += icons[3-i];
    }  
    opportunity.innerText = opportunities;  
}
renderStars();

function renderPoints(){
    gain.innerText = `+ ${100} points`;
}    

function renderNumber(){
    if (fails == 3){
    gain.innerText = `Next number: ${pi[position]}`;
    }
}

inputDecimals.addEventListener("keyup", event =>{
    event.target.value = "";
    if(event.key == "Enter") return;
    if(isNaN(event.key)) return;
    let text = event.key;
    renderStars();
    if(text == pi[position]){
        result.style.color =  "#3D685F";
        result.innerText += text;
        position ++;
        totalscore ++;
        score.innerText = `Your score is: ${totalscore * 100} points`;
        renderPoints();
    } else {
        result.style.color =  "#e83d4b";
        fails ++;
        renderStars();
        gain.innerText = `Failed Level: ${position + 1}`;
        if(fails===3) {
            inputDecimals.disabled = true;
            restart.style.display = "block";
            opportunity.innerText = icons[3];
            renderNumber();
            renderStatistics();
            
        }
    }
})

function restartGame(){
    restart.style.display = "none";
    inputDecimals.disabled = false;
    opportunities = 0;
    fails=0
    result.innerText = "π : 3.";
    renderStars();
    score.innerText = "Your Score: 0";
    gain.innerText = "";
    position = 0;
    totalscore = 0;
    statistics.style.display = "none";
}
function renderStatistics(){
    statistics.style.display = "flex";
    maximun.innerText = `Max Level: ${position}`
}