
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if (arguments.length === 0) {
    return result;
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      let columnIndex = i % 2 === 0 ? j : (matrix[i].length - j - 1);

      result.push(matrix[i][columnIndex]);
    }
  } 

  return result;
}
