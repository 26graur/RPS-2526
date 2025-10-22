// This is my javascript file fro the Rock Paper Scissors project


// set a question to get the person's turn
// set a console log to say if the person wins or loses
// set a tracker to keep score

let rules = prompt("Rules: Type rock for rock. Type paper for paper. Type scissors for scissors. Please type 'okay' if you understand.");
while (rules != "okay"){
    rules = prompt("Please come back when you understand.")
};
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
    } else if(answer == "paper") {
        console.log("you lose. paper beats rock")
    } else if(answer == "scissors"){
        console.log("you win. rock beats scissors")
    }
}
if(question == "paper"){
    if(answer == "rock"){
        console.log("you win. paper beats rock")
    } else if(answer == "paper") {
        console.log("you tied")
    } else if(answer == "scissors"){
        console.log("you lose. scissors beats paper")
    }
}
if(question == "scissors"){
    if(answer == "rock"){
        console.log(" you lose. rock beats scissors")
    } else if(answer == "paper") {
        console.log("you win. scissors beats paper")
    } else if(answer == "scissors"){
        console.log("you tied")
    }
}