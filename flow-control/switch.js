let a = 5;

switch (a) {
  case 5:
    console.log("a is 5");
    break;
  case 6:
    console.log("a is 6");
    break;
  default:
    console.log("a is neither 5, nor 6");
    break;
}

// acceptable fall-through code

let b = 5;

switch (b) {
  case 5:
  case 6:
  case 7:
    console.log("a is either 5, 6, or 7");
    break;
  case 8:
  case 9:
    console.log("a is 8 or 9");
    break;
    default:
      console.log("a is not 5, 6, 7, 8, or 9");
      break;
}

