// This is my javascript file fro the Rock Paper Scissors project


// set a question to get the person's turn
// set a console log to say if the person wins or loses
// set a tracker to keep score

let PlayerScore = 0;
let ComputerScore = 0;
let play = "Y";

let rules = prompt("Rules: Type rock for rock. Type paper for paper. Type scissors for scissors. Please type 'okay' if you understand.");
while (rules != "okay"){
    rules = prompt("Please come back when you understand.")
};

while(play == "Y"){
    while(PlayerScore < 5 && ComputerScore < 5){
        alert(`Current score is human: ${PlayerScore} to computer ${ComputerScore}`);
        let question = prompt("What's your move?");

        let answer = Math.floor(Math.random() * 3 - 1 + 1) + 1;
        if(answer >= 0 && answer < 1.1){
            answer = "rock"
            console.log(answer)
        }
        if(answer > 1 && answer < 2.1){
            answer = "paper"
            console.log(answer)
        }
        if(answer > 2 && answer < 3.1){
            answer = "scissors"
            console.log(answer)
        }

        if(question == "rock"){
            if(answer == "rock"){
                console.log("you tied")
                alert("you tied")
            } else if(answer == "paper") {
                console.log("you lose. paper beats rock");
                alert("you lose. paper beats rock")
                ComputerScore += 1;
            } else if(answer == "scissors"){
                console.log("you win. rock beats scissors");
                alert("you win. rock beats scissors")
                PlayerScore += 1;
            }
        }
        if(question == "paper"){
            if(answer == "rock"){
                console.log("you win. paper beats rock");
                alert("you win. paper beats rock")
                PlayerScore += 1;
            } else if(answer == "paper") {
                console.log("you tied")
                alert("you tied")
            } else if(answer == "scissors"){
                console.log("you lose. scissors beats paper");
                alert("you lose. scissors beats paper")
                ComputerScore += 1;
            }
        }
        if(question == "scissors"){
            if(answer == "rock"){
                console.log(" you lose. rock beats scissors");
                alert(" you lose. rock beats scissors")
                ComputerScore += 1;
            } else if(answer == "paper") {
                console.log("you win. scissors beats paper");
                alert("you win. scissors beats paper")
                PlayerScore += 1;
            } else if(answer == "scissors"){
                console.log("you tied")
                alert("you tied")
            }
        }
    }

    if(ComputerScore == 5){
        console.log("Computer wins!")
        alert("Computer wins!")
    }
    if(PlayerScore == 5){
        console.log("Human wins!")
        alert("Human wins!")
    }

play = prompt("play again?  Y/N");
PlayerScore = 0;
ComputerScore = 0;
}