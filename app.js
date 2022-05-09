const touchRight = document.querySelector('#increaseRight');
const touchLeft = document.querySelector('#increaseLeft');
let checkWin = setInterval(gameWin, 10);
const rightScore = document.querySelector('#secondNum');
const leftScore = document.querySelector('#firstNum');
const reset = document.querySelector('#reset');



let maxScoreInput = document.querySelector('#maxscore');
let maxScore = 1;
let rightNum = 0;
let leftNum = 0;

function updateScore(){
    maxScore = maxScoreInput.value;
}

touchRight.addEventListener('click',function(e){
    rightNum += 1;
    rightScore.innerText = rightNum;
    console.log(maxScore);
    
}
)

touchLeft.addEventListener('click',function(e){
    leftNum += 1;
    leftScore.innerText = leftNum;
}
)
reset.addEventListener('click',function(e){
    rightNum = 0;
    leftNum = 0;
    rightScore.innerText = rightNum;
    leftScore.innerText = leftNum;
    touchRight.disabled = false;
    touchLeft.disabled = false;
    rightScore.style.color = 'black';
    leftScore.style.color = 'black';
})
function gameWin(){ 
    if (maxScore > 0){
        if (rightNum == maxScore){
            rightScore.style.color = 'green';
            leftScore.style.color = 'red';
            touchRight.disabled = true;
            touchLeft.disabled = true;
        }
        if (leftNum == maxScore){
            rightScore.style.color = 'red';
            leftScore.style.color = 'green';
            touchRight.disabled = true;
            touchLeft.disabled = true;
        }

    }
}
