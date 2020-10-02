
exports.min = function min (array) {
  if(array === undefined){return 0};
  if(array.length == 0){return 0};
  let x = array;
  x.sort((a, b) => a-b);
  return x[0];
}

exports.max = function max (array) {
  if(array === undefined){return 0};
  if(array.length == 0){return 0};
  let x = array;
  x.sort((a, b) => a-b);  
  return x[x.length-1];
}

exports.avg = function avg (array) {
  if(array === undefined){return 0};
  if(array.length == 0){return 0};
  let x = array;
  const reduser = (item, count) => item + count;
  let y = (x.reduce(reduser))/x.length;
  console.log(y)
  return y;
}
