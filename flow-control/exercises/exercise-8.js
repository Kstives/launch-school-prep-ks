// function numberRange(number) {
//   switch (number) {
//     case ((number >= 0) && (number <= 50)):
//       console.log(`${number} is between 0 and 50`);
//       break;
//     case (number >= 51) && (number <= 100):
//       console.log(`${number} is between 51 and 100`);
//       break;
//     case number > 100:
//       console.log(`${number} is greater than 100`);
//       break;
//     case number < 0:
//       console.log(`${number} is less than 0`);
//       break;
//   }
// }

// numberRange(25);
// numberRange(75);
// numberRange(125);
// numberRange(-25);

function numberRange(number) {
  if (number >= 0 && number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number >= 51 && number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else if (number > 100) {
    console.log(`${number} is greater than 100`);
  } else {
    console.log(`${number} is less than 0`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
