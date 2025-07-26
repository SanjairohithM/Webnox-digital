const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question('prompt: ', (userInput) => {
    if (userInput.toLowerCase() === 'stop') {
      console.log('Exiting interactive task loop...');
      rl.close();
      process.exit(0);
    } else {
      console.log(`Processing: ${userInput}`);
      // Here you would perform the actual task based on user input
      console.log(`Task completed: ${userInput}`);
      promptUser(); // Continue the loop
    }
  });
}

console.log('Interactive Task Loop Started');
console.log('Enter "stop" to exit');
promptUser(); 