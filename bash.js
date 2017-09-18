'use strict'

var commands = require('./commands');
// console.log("Process Alone", process);
// console.log("\nObjects Keys", Object.keys(process));

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim(); // remove the newline
  //let result = (commands.hasOwnProperty(cmd)) ? commands[cmd]() : null;

  process.stdout.write('\nYou typed: ' + cmd);
  commands[cmd]()
  // process.stdout.write('\nResult: ' + commands[cmd]());
  // process.stdout.write('\n\nprompt > ');

});
