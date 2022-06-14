function compareArrays(arr1, arr2) {
  let result;

  let l_arr1 = arr1.length;
  let l_arr2 = arr2.length;
  if(l_arr1 === l_arr2){
    for (let i = 0; i < l_arr1; i++) {
      if (arr1[i] !== arr2[i]){
        result = false;
        break;
      }else
        result = true;
    }
  }else {
    result = false;
  }
  return result;
}

function advancedFilter(arr) {
  let resultArr;

  function filterarr(item){
    let item2 = item * 10
    if(item2 >= 0 && item2 % 3 === 0)
      return item2
  }

  let arr2 = arr.map(item => item * 10)
  resultArr = arr2.filter(filterarr);

  return resultArr; // array
}
