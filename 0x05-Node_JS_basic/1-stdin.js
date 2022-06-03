console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  let answer = process.stdin.read();
  if (answer !== null) {
    process.stdout.write(`Your name is: ${answer}`);
}
  answer = process.argv[1];
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
