var fs = require('fs');

module.exports = {
  pwd: function() {
    return process.env.PWD;
  },
  date: function() {
    return new Date();
  },
  ls: function() {
    let dirs = '';
    // let stringBuilder = (string) => {
    //   dirs = dirs.concat(string);
    // }
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        // process.stdout.write(file.toString() + "\n");
        // stringBuilder(file.toString() + "\n");
        dirs += file.toString() + "\n";
      })
      // process.stdout.write("\nprompt > ");
    });
    return this.stringCallback(dirs);
  },
  stringCallback: function(string) {
    process.stdout.write("Result: " + string + "\n");
    process.stdout.write("\nprompt > ");
  }
}
