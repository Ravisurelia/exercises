const chalk = require("chalk");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//console.log("my rl: ", rl);

const conversation = {
  q: "Who is the best footballer on the planet ?",
  answer: {
    Ronaldo: "Correct! he is",
    messi: "NO! he comes after Ronaldo!",
  },
};

const sportsQuiz = {
  q: "Welcome to The Football world! Would you like to play?",
  answers: {
    yes: {
      q: "Who is the best footballer on the planet???",
      answers: {
        ronaldo: {
          q: "Currently Ranaldo is representing which football club? ",
          answers: {
            juventus: {
              q: "What is his T-shirt number",
              answers: {
                "7":
                  "Congratulations!!! You are a true Ronaldo Fan!!  Ssssssssssiiiiiiiiiiiiii",
              },
              "10": "Wrong!! Better luck next time!",
            },
            Manchester: "false!That was his 1st club!!",
          },
        },
        messi: "This was not the right choice. Goodbye!",
      },
    },
    no: "Alright then. Enjoy your day!",
  },
};
function askQuestion(convObj) {
  //console.log("convObj", convObj);
  rl.question(chalk.redBright(convObj.q), (userAnswer) => {
    //console.log("user answer: ", userAnswer);
    if (convObj.answers[userAnswer]) {
      if (typeof convObj.answers[userAnswer] === "object") {
        askQuestion(convObj.answers[userAnswer]);
      } else {
        console.log("convObj.answer: ", convObj.answers[userAnswer]);
        rl.close();
      }
    } else {
      console.log("No an option! Only yes or no!");
      askQuestion(convObj);
    }
  });
}

askQuestion(sportsQuiz);

/* function askQuestion() {
  rl.question(`what is 2+2?`, (answer) => {
    console.log("answer", answer);
    if (answer == 4) {
      console.log("Correct! Damn you are good at it!!");
      rl.close();
    } else {
      console.log("Flase!!! try even harder!");
      askQuestion();
    }
  });
}

askQuestion(); */
