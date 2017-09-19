'use strict'
const chalk = require('chalk');
const commands = require('./index');


// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {

  const tokens = data.toString().trim().split(' ');
  const cmd = tokens[0];
  const args = tokens.slice(1).join(' '); // hello $DEFAULT_USER

  if (commands[cmd]) commands[cmd](args);
  else process.stderr.write(chalk.red('command not found: ') + cmd);
});
