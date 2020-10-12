
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
  if (matrix !== [] && matrix !== undefined) {
    for (let i=0; i < matrix.length; i++) {
let arr = matrix[i];
if (i % 2 !== 0) {
  arr = arr.reverse();
}
    for (let j=0; j < arr.length; j++) {
    res.push(arr[j]);
    }
  }
}
return res;
}
