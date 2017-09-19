const readline = require('readline');
const fs = require('fs');
const chalk = require('chalk');
const prompt = chalk.green("\nprompt > ");

process.stdout.write(prompt);

function pwd(args) {
  process.stdout.write(process.cwd());
  process.stdout.write(prompt);
}

function date(args) {
  process.stdout.write(Date());
  process.stdout.write(prompt);
}

function ls(args) {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    process.stdout.write(files.join('\n'));
    process.stdout.write(prompt);
  });
}

function echo(args) {
  const output = args
    .split(' ')
    .map(arg => (arg[0] === '$') ? process.env[arg.slice(1)] : arg)
    .join(' ');

  process.stdout.write(output);
  process.stdout.write(prompt);
}


module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo
};
