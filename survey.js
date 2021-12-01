const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestions = () => {
  const answers = [];
  const replyMessage = `Thank you for your valuable feedback: `;

  rl.question('What\'s your name? Nicknames are also acceptable: ', (answer) => {
    answers.push(answer);
    console.log(`${replyMessage}${answer}`);
    
    rl.question('What\'s an activity you like doing? ', (answer) => {
      answers.push(answer);
      console.log(`${replyMessage}${answer}`);
      
      rl.question('What do you listen to while doing that? ', (answer) => {
        answers.push(answer);
        console.log(`${replyMessage}${answer}`);
        
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
          answers.push(answer);
          console.log(`${replyMessage}${answer}`);
          
          rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
            answers.push(answer);
            console.log(`${replyMessage}${answer}`);
            
            rl.question('Which sport is your absolute favourite? ', (answer) => {
              answers.push(answer);
              console.log(`${replyMessage}${answer}`);
              
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                answers.push(answer);
                console.log(`${replyMessage}${answer}`);
                
                const results = createUserProfile(answers)
                console.log(results);
                rl.close();
              })
            })
          })
        })
      })
    })
  });
}

const createUserProfile = (answers) => {
  return `${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, 
  prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`
}
askQuestions(); 