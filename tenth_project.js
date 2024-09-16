let userScore =0;
let compScore =0;



let choices = document.querySelectorAll(".choice")
let stone = document.querySelectorAll("#stone")
let paper = document.querySelectorAll("#paper")
let scissors = document.querySelectorAll("#sicssor")
let msg = document.querySelector("#msg")
const userScorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

 

//genetate computer choice
const genCompChoice = () => {
  const options = ["stone","paper","scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  //math.floor help to remove values after point
  //math.random choose any random no. between 0.0 to 0.9
  //and we multiply it with 3 to get the number between 0 to 2 (index value)
  return options[randIdx];

};




//user choice
const playGame =(userChoice)=>{
    console.log("user choice=",userChoice);
    //computer choice
    const compChoice = genCompChoice();
    console.log("computer choice= ",compChoice);
    

     if(userChoice===compChoice){
       msg.innerText = "GAME DRAW 'computer and you have the same choice'";
    }
     else {
      if(userChoice==="stone"&& compChoice==="paper"){
       // console.log("YOU LOST")
        msg.innerText="YOU LOST 'computer`s choice is Paper'";
        compScore++;
        compscorepara.innerText = compScore;
      }
      else if(userChoice==="paper"&&compChoice==="scissors"){
        //console.log("YOU LOST")
        msg.innerText="YOU LOSt 'computer`s choice is Scissor'";
        compScore++;
        compscorepara.innerText=compScore;
      }
      else if(userChoice==="scissors"&&compChoice==="stone"){
        //console.log("YOU LOST")
        msg.innerText="YOU LOST 'computer`s choice is Stone'";
        compScore++;
        compscorepara.innerText = compScore;
    }
    else{
      //console.log("YOU WON")
      msg.innerText="YOU WON";
      userScore++;
      userScorepara.innerText=userScore;
    }
  }   
};
choices.forEach((choice)=>{
    
      choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice) 
      });
});
