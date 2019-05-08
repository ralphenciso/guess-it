// select unique number of indexes
function randindex(number, range = number) {
  let arr = shuffle(Array(range).fill().map((v, i) => i));
  return arr.slice(0, number);
}

//array shuffle
function shuffle(array) {
  let ci = array.length, temp, randindex;
  while (ci !== 0) {
    randindex = Math.floor(Math.random() * ci)
    ci -= 1;
    temp = array[ci];
    array[ci] = array[randindex];
    array[randindex] = temp;
  }
  return array;
}

