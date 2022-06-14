function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь

  let d = (b ** 2) - 4 * a * c;
  if(d < 0)
    arr = [];
  if(d == 0){
    let x = -b / (2 * a);
    arr.push(x);
    return arr;
  }
  if(d > 0){
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    let x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1, x2);
  }

  return arr; // array
}
