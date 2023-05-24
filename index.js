const pi = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
const icons = {0:"🍔", 1:"🍺",2:"🍬", 3:"X"}

const opportunity = document.getElementById("opportunity");
const inputDecimals = document.getElementById("inputDecimals");
const result = document.getElementById("result");
const score = document.getElementById("score");
const gain = document.getElementById("gain");
const restart= document.getElementById("restart");
const errorList = document.getElementById("errorList");
const tableContainer = document.getElementById("tableContainer");

let position = 0;
let totalscore = 0;
let fails = 0;
wrongDecimals = [];

function renderOpportunities(){
    let opportunities ="";
    for (let i = 3 - fails; i > 0 ; i--) {
        opportunities = opportunities + "✔ "
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
        result.style.color = "#1ABC9C"
        position += 1;
        totalscore += 100;
        score.innerText = `Your score: ${totalscore} points`;
        gain.innerText = `+ ${100} points`;
        
    } else {
        result.style.color = "#CA3755";
        fails += 1;
        renderOpportunities();
        gain.innerText = `Failed Level: ${position + 1}`;
        
        let wrongNumber = {level:position+1, wrong:text, correct: pi[position]};
        wrongDecimals.push(wrongNumber);    

        if(fails===3) {
            inputDecimals.disabled = true;
            restart.style.display = "block";
            statistics.style.display = "block";
            opportunity.innerText = "✘";
            gain.innerText = `Next number: ${pi[position]}`;
            renderStatistics(wrongDecimals);
            
        }
    }
})

function restartGame(){
    fails=0;
    position = 0;
    totalscore = 0;
    wrongDecimals = [];
    renderOpportunities();
    restart.style.display = "none";
    inputDecimals.disabled = false;
    result.innerText = "π : 3.";
    result.style.color = "#1ABC9C";
    score.innerText = "Your Score: 0";
    gain.innerText = "";
    statistics.style.display = "none";
   
}

function renderStatistics(data){
    console.log(data);
    tableContainer.innerHTML += 
    `<div id="tableContent">
        <div class="header1" id="column1">Digit</div>
        <div class="header1" id="column2">Wrong Digit</div>
        <div class="header1" id="column3">Right Digit</div>
    </div>`;
    

    data.forEach( (test) => {
    tableContainer.innerHTML += 
    `<div id="tableContent1">
        <div class="header1" id="column1">Digit</div>
        <div class="header1" id="column2">Wrong Digit</div>
        <div class="header1" id="column3">Right Digit</div>
    </div>`
});
tableContainer.removeChild(tableContent);
}

