// const choices = ["rock", "paper", "scissor"]
var firstPersonScore =0
var secondPersonScore =0
var winner =""

var buttonChoices = document.querySelectorAll("button")

function generatedChoice(){
    const randomnumber = Math.round((Math.random() * 2) ) 
    return buttonChoices[randomnumber].id
}

    
    for(let i =0; i<buttonChoices.length; i++){
    buttonChoices[i].addEventListener("click", ()=>{
       userChoice = buttonChoices[i].id 
       computerChoice = generatedChoice()
       

    //    comparing choices
     if(computerChoice ==="rock" && userChoice ==="scissor" ||
                computerChoice ==="scissor" && userChoice==="paper"||
                computerChoice ==="paper" && userChoice ==="rock"
                ){

                    // scores for different persons

                    if(i%2==0){
                        firstPersonScore +=5
                        result ="win"
                    }
                    else{
                        secondPersonScore +=5
                        result ="win"
                    }
                    
                }
     else{
                if(i%2==0){
                    firstPersonScore +=0
                    result ="lose"
                }
                else{
                    secondPersonScore +=0
                    result ="lose" 
        }

        if(firstPersonScore > secondPersonScore &&firstPersonScore ===10){
            winner ="first person wins"
            firstPersonScore =0
            secondPersonScore=0
        }
        else if( secondPersonScore> firstPersonScore && secondPersonScore ===10){
            winner ="first person wins"
            firstPersonScore =0
            secondPersonScore=0
        }
    
     }

     console.log(winner) 
     document.getElementById("score").innerHTML = result
     document.getElementById("firstpersoncore").innerHTML = firstPersonScore 
     document.getElementById("secondpersontotalscore").innerHTML = secondPersonScore
     document.getElementById("winner").innerHTML = winner
    })
    
    }
