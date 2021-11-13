const userInput = process.argv.slice(2);

for (let num of userInput) {
  if (Number(num) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000);
  }
}