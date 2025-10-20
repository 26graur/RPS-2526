// This is my javascript file fro the Rock Paper Scissors project


// set a question to get the person's turn
// set a console log to say if the person wins or loses
// set a tracker to keep score

let rules = prompt("Rules: Type rock for rock. Type paper for paper. Type scissors for scissors. Please type 'okay' if you understand.");
while (rules != "okay"){
    rules = prompt("Please come back when you understand.")
};
let question = prompt("What's your move?");

Math.random