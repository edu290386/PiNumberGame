const pi = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
const icons = {0:"🍔", 1:"🍺",2:"🍬", 3:"X"}

const opportunity = document.getElementById("opportunity");
const inputDecimals = document.getElementById("inputDecimals");
const result = document.getElementById("result");
const score = document.getElementById("score");
const gain = document.getElementById("gain");
const restart= document.getElementById("restart");

let position = 0;
let totalscore = 0;
let fails = 0;

function renderOpportunities(){
    let opportunities ="";
    for (let i = 3 - fails; i > 0 ; i--) {
        opportunities += icons[3-i];
    }  
    opportunity.innerText = opportunities;  
}

renderOpportunities();

const statistics = document.getElementById("statistics");
const maximun = document.getElementById("maximun");

inputDecimals.addEventListener("keyup", event => {
    event.target.value = "";
    
    let text = event.key;
    if(text == "Enter") return;
    if(isNaN(text)) return;
    if (text == "") return;
    if (text == " ") return;
    
    renderOpportunities();
    
    if(text == pi[position]){
        result.innerText += text;
        position += 1;
        totalscore += 100;
        score.innerText = `Your score is: ${totalscore} points`;
        gain.innerText = `+ ${100} points`;
    } else {
        result.style.color = "#e83d4b";
        fails += 1;
        renderOpportunities();
        gain.innerText = `Failed Level: ${position + 1}`;
        if(fails===3) {
            inputDecimals.disabled = true;
            restart.style.display = "block";
            opportunity.innerText = icons[3];
            gain.innerText = `Next number: ${pi[position]}`;
            renderStatistics();
            
        }
    }
})

function restartGame(){
    fails=0;
    position = 0;
    totalscore = 0;restart.style.display = "none";
    renderOpportunities();
    inputDecimals.disabled = false;
    result.innerText = "π : 3.";
    result.style.color = "#3D685F";
    score.innerText = "Your Score: 0";
    gain.innerText = "";
    statistics.style.display = "none";
}

function renderStatistics(){
    statistics.style.display = "flex";
    maximun.innerText = `Max Level: ${position}`
}
