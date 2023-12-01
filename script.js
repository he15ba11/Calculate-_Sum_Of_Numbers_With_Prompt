var n , sum=0;

do {
  n = prompt("Enter Number:");
  if (isFinite(n)) {
    sum += Number(n);
  } else {
    n = 0;
  }
} while( (sum <= 100 && n != 0 )||(n === null || n === "")); 

alert("Sum is: " + sum);