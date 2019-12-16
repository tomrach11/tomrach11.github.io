var start = 4;
var end = 20;
var step = 3;
var arr = [];
var i = start;

for (i; i <= end; i += step) {
  if (i % 2 == 0) {
    arr[-1] = i;
    console.log(i);
  }
}

console.log(arr);
