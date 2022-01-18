
let lines = "|/-\\|/-\\";
let time = 0;
for (const segment of lines) {
  setTimeout(() => {
    process.stdout.write(`\r${segment}    `);
  }, time);
  time += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
},
time
);