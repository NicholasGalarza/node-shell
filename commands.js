const readline = require('readline');
const fs = require('fs');

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
    let data = '';
    let callBack = this.stringCallback;
    // process.stdout.write(Array.from(args));
    args = Array.from(args); 
    // let fileArr = args.split(" ");
    let fileArr = args; 
    // process.stdout.write("\n =====");
    // process.stdout.write(fileArr);
    // process.stdout.write("\n =====");
    for(let i = 0; i <= fileArr.length; i++) {
      let fileName = fileArr[i];
      let readStream = fs.createReadStream( fileName, 'utf8');
      let lineNum = 0;
      readStream.on('data', function(chunk) {  
          data += chunk;
          lineNum++;
      }).on('end', function() {
        if(i === fileArr.length-1) {
          return callBack(data);
        }
      });
    }
    
  },
  head: function (args) {
    let data = '';
    let callBack = this.stringCallback;
    let readStream = fs.createReadStream(args[0], 'utf8');
    readStream.on('data', function(chunk) {  
        data += chunk;
    }).on('end', function() {
      data = data.split("\n");
      return callBack(data.slice(0,5).join("\n"));
    });
  },
  tail : function(args) {
    let data = '';
    let callBack = this.stringCallback;
    let readStream = fs.createReadStream(args[0], 'utf8');
    readStream.on('data', function(chunk) {  
        data += chunk;
    }).on('end', function() {
      data = data.split("\n");
      return callBack(data.slice(-6).join("\n"));
    });
  },
  stringCallback: function(string) {
    process.stdout.write("\nResult: " + string + "\n");
    process.stdout.write("\nprompt > ");
  }
}
