//INSPECT PROCESS THE GLOBAL VARIABLE
//console.log(process, Object.keys(process))

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write(process.cwd);
  process.stdout.write('\nprompt > ');

});

//PWD
function pwd (stdin, args, done) {
  done(process.cwd());
}
