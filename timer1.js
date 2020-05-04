const times = process.argv.slice(2);

for (const time of times) {
  if (Number(time) > 0 && !isNaN(Number(time))) {
    setTimeout(() => process.stdout.write('\x07'), Number(time) * 1000);
  }
}