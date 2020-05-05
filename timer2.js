const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

// on any input from stdin (standard input)...
stdin.on('data', (key) => {
  if (Number(key) >= 1 && Number(key) <= 9) { // if it's between 1 and 9, set a timer
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000);
  }
  if (key === 'b') { // if it's b, beep immediately
    process.stdout.write('\x07');
  }
  if (key === '\u0003') { // if it's ctrl + c, exit the program
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
});