
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = []
  if (matrix && matrix.length > 0) {
    matrix.forEach((element, i) => {
      if ((i+1) % 2 != 0) {
        newArr.push(...element)
      } else {
        newArr.push(...(element.sort((a, b) => b-a)))
      }      
    });
  }
  return newArr;
}
