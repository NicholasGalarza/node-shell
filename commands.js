var fs = require('fs');

module.exports = {
  pwd: function(args) {
    return this.stringCallback(process.env.PWD);
  },
  date: function(args) {
    return this.stringCallback(new Date());
  },
  echo: function(args) {
    return this.stringCallback(args.join(" "));
  },
  ls: function(args) {
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
  cat: function (args) {

  },
  head: function (arhs) {

  },
  tail : function(args) {

  },
  stringCallback: function(string) {
    process.stdout.write("\nResult: " + string + "\n");
    process.stdout.write("\nprompt > ");
  }
}
