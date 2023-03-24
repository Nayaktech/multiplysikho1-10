const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
let change1 = document.getElementById("question");
const formEl = document.getElementById("form");
const answerEl = document.getElementById("answer");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if (!score){
    score = 0;
}

scoreEl.innerText = `Score:${score}`
change1.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit",() => {
    const userAns = +answerEl.value;
    if(userAns===correctAns){
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()

    }

});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}