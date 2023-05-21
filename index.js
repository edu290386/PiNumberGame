const inputDecimals = document.getElementById("inputDecimals");
const result = document.getElementById("result");
const score = document.getElementById("score");
const fail = document.getElementById("fail");
const pi = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
let totalscore = 0;
let position = 0;
let opportunities = 0;
inputDecimals.addEventListener("keyup", event =>{
    event.target.value = "";
    if(event.key == "Enter") return;
    if(isNaN(event.key)) return;
    let text = event.key;
    if(text == pi[position]){
        result.innerText += text;
        result.style.color =  "#3D685F";
        position ++;
        totalscore ++;
        score.innerText = `Your Score is: ${totalscore} puntos`;
    } else {
        result.style.color =  "#e83d4b";
        opportunities ++;
        fail.innerText = `Fails: ${opportunities}`;
        if(opportunities==5) 
            inputDecimals.disabled = true;
    }
})


