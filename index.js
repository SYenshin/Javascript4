// 1.------------------------------------
let points;
do {
  points = Number(prompt('Type your points for test'));
  if (points < 0 || points > 100) {
    alert('invalid');
  }
} while (points < 0 || points > 100);
points >= 60 ? console.log('passed') : console.log('failed');
// 2.---------------------------------------------------------------------------
// const choice = Number(prompt('Choose your drink from 1 to 4'));
// switch (choice) {
//   case 1:
//     confirm('Coffee');
//     break;
//   case 2:
//     confirm('Tea');
//     break;
//   case 3:
//     confirm('Juice');
//     break;
//   case 4:
//     confirm('Water');
//     break;
//   default:
//     alert('Unknown drink');
// }
// 3.---------------------------------------------------------------------------
// const a = Number(prompt('Wright first number'));
// const b = Number(prompt('Wright second number'));
// const c = Number(prompt('Wright third number'));
// if (a >= b && a >= c) {
//   confirm(`MaxNumber ${a}`);
// } else if (b >= a && b >= c) {
//   confirm(`MaxNumber ${b}`);
// } else {
//   confirm(`MaxNumber ${c}`);
// }
// 4.---------------------------------------------------------------------------
// let sum = 0;
// for (let i = 1; i <= 100; i += 1) {
//   sum += i;
// }
// console.log(sum);

// 5.---------------------------------------------------------------------------
// const number = Number(prompt('Type a number'));
// for (let i = 1; i <= 10; i += 1) {
//   console.log(`${number} * ${i} = ${number * i}`);
// }
// 6.---------------------------------------------------------------------------
// const word = prompt('type a word');
// const letter = prompt('type a letter');
// let times = 0;
// for (let i = 0; i < word.length; i += 1) {
//   if (word[i] === letter) {
//     times += 1;
//   }
// }
// console.log(`${times} times`);
// 7.---------------------------------------------------------------------------
// function calculatePrice(quantity, price) {
//   console.log(quantity * price);
// }
// calculatePrice(2, 15);
// calculatePrice(15, 2000);
// calculatePrice(12, 127);
// ---------------------------------------------------------------------------
