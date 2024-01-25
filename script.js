
let score=JSON.parse(localStorage.getItem('score'));
if(!score){
    score={
        lose:0,
        win:0,
        draw:0
    };
}

changeScore();





function computerDecision(){
    let decision='';
    let randomNumber=Math.random();
    if(randomNumber>=0 && randomNumber<(1/3)){
        decision='Rock';
    }
    else if(randomNumber>=(1/3) && randomNumber<(2/3) ){
        decision='Paper';
    }
    else{
        decision='Scissors';
    }
    return decision;
}

function palyTheGame(choice){
    let result='';
    const computerChoise=computerDecision();
    if(choice=== 'Rock'){
        if(computerChoise==='Rock'){
            result='Draw';
            score.draw++;
        }
        else if(computerChoise==='Paper'){
            result='You Lose';
            score.lose++;
        }
        else{
            result='You Win';
            score.win++;
        }
        
    }
    else if(choice=== 'Paper'){
        if(computerChoise==='Rock'){
            result='You Win';
            score.win++;
        }
        else if(computerChoise==='Paper'){
            result='Draw';
            score.draw++;
        }
        else{
            result='You Lose';
            score.lose++;
        }
        
    }
    else if(choice=== 'Scissors'){
        if(computerChoise==='Rock'){
            result='You Lose';
            score.lose++;
        }
        else if(computerChoise==='Paper'){
            result='You Win';
            score.win++;
        }
        else{
            result='Draw';
            score.draw++;
        }
        
    }

    localStorage.setItem('score',JSON.stringify(score));
    let currrentResult=document.querySelector('.result');
    currrentResult.innerHTML=`${result}\n
                              You choose: ${choice}
                              computer choice : ${computerChoise}`;
    
                              

    
}


function changeScore(){
    const finalScore=document.querySelector('.score');
    finalScore.innerHTML=`Your score is : Win:${score.win}  Draw: ${score.draw} Lose: ${score.lose} `;
   
}


function changeBackgroundOfButton(id){
    let button=document.getElementById(id);
    button.onmousedown=function(){
        button.style.backgroundColor='red';
    }
    button.onmouseup=function(){
        button.style.backgroundColor='black';
    }


    
}
















