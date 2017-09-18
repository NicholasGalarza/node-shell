var fs = require('fs');

module.exports = {
  pwd: function() {
    return this.stringCallback(process.env.PWD);
  },
  date: function() {
    return this.stringCallback(new Date());
  },
  ls: function() {
    let dirs = '';
    let callBack = this.stringCallback;
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
      return callBack(dirs);
    });
    
  },
  stringCallback: function(string) {
    process.stdout.write("\nResult: " + string + "\n");
    process.stdout.write("\nprompt > ");
  }
}
