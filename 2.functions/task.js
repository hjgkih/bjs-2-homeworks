function getArrayParams(...arr) {
  let min = arr[0]; 
  let max = arr[0]; 
  let summ = 0; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    } 
    summ += arr[i];
  }

  let avg = (summ / arr.length).toFixed(2);
  avg = Number(avg);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let summ = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }

  return summ;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0]; 
  let max = arr[0]; 
  let diff = 0;
  
  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    } 
  }  

  diff = max - min;

  return diff;
}

function differenceEvenOddWorker(...arr) {
  let summEvenElement = 0; 
  let summOddElement = 0; 
  let diff = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      summEvenElement += arr[i];
    } else {
      summOddElement += arr[i];
    }
  }
  
  diff = summEvenElement - summOddElement;

  return diff;
}

function averageEvenElementsWorker(...arr) {
  let summEvenElement = 0;
  let countEvenElement = 0;
  let avg = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      summEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  avg = summEvenElement / countEvenElement;
  
  return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.lenght; i++) {
    let funcArr = arrOfArr[i];

    if (func(...funcArr) > maxWorkerResult) {
      maxWorkerResult = func(...funcArr);
    }
  }

  return maxWorkerResult;
}
