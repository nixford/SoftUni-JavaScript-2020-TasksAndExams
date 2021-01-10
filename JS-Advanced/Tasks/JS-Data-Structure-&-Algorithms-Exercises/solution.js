function countPermutations(input) {

  let arr = input[0].split(' ');
  let n = input[1];

  let result = [];

  let indexes = [];

  for (let i = 0; i < n; i++) {
    indexes.push(i);
  }

  let i = 0;
  while (i < arr.length) {
    let items = [0];
    items.pop();

    for (let j = 0; j < indexes.length; j++) {
      let index = indexes[j];
      items.push(arr[index]);
    }

    let idx = indexes.length - 1;
    let lastIndex = indexes[idx];
    while (lastIndex == arr.length - 1 && idx > 0) {
      idx--;
      lastIndex = indexes[idx];
    }

    if (indexes[idx] < arr.length - 1) {
      indexes[idx]++;

      for (let k = idx + 1; k < indexes.length; k++) {
        indexes[k] = 0;
      }

      i = 0;
    }

    let skip = false;
    for (let k = 0; k < items.length - 1; k++) {
      for (let l = k + 1; l < items.length; l++) {
        if (items[k] === items[l]) {
          skip = true;
          break;
        }
      }
    }

    if (n == 1) {
      for (let k = 0; k < result.length; k++) {
        if (result[k][0] === items[0]) {
          skip == true;
          break;
        }
      }
    }

    if (!skip) {
      result.push(items);
    }

    i++;
  }

  console.log(result.length);
}


countPermutations([
  '234 232 230',
  '2'
]);

countPermutations([
  '109 113 234 232',
  '3'
]);