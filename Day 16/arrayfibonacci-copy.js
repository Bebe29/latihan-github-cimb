const array = size => {
  let arr = [];
  for (i = 0; i < size; i++) {
    arr[i] = [];
    for (j = 0; j <= i; j++) {
      arr[i].push(j + 1);
    }
  }
  return arr;
};
console.log(array(6));

const ganjil = size => {
  let arr = [];
  let isi = 1;
  for (i = 0; i < size; i++) {
    arr[i] = [];
    for (j = 0; j <= i; j++) {
      arr[i].push(isi);
      isi += 2;
    }
  }
  return arr;
};
console.log(ganjil(5));

const fibonacci = size => {
  let arr = [];
  for (i = 0; i < size; i++) {
    arr[i] = [];
    for (j = 0; j <= i; j++) {
      if (j == 0 && i == 0) {
        arr[i].push(0);
      } else if (j >= 0 && i == 1) {
        arr[i].push(1);
      } else if (j == 0 && i >= 2) {
        arr[i].push(arr[i - 1][i - 2] + arr[i - 1][i - 1]);
      } else if (j == 1 && i >= 2) {
        arr[i].push(arr[i - 1][i - 1] + arr[i][j - 1]);
      } else {
        arr[i].push(arr[i][j - 2] + arr[i][j - 1]);
      }
    }
  }
  return arr;
};
console.log(fibonacci(6));

const pascal = size => {
  let arr = [];
  for (i = 0; i < size; i++) {
    arr[i] = [];
    for (j = 0; j <= i; j++) {
      if ((j == 0 && i >= 0) || (j == i && i >= 0)) {
        arr[i].push(1);
      } else {
          arr[i].push(arr[i-1][j-1] + arr[i-1][j]);
      }
    }
  }
  return arr;
};
console.log(pascal(10));