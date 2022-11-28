"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    let result = -b / (2 * a);
    arr.push(result);
  } else if (d > 0) {
    let resultFirst = (-b + Math.sqrt(d)) / (2 * a);
    let resultSecond = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(resultFirst, resultSecond);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return false;
  } else if (isNaN(contribution)) {
    return false;
  } else if (isNaN(amount)) {
    return false;
  }
  
  percent = (percent / 100) / 12;
  let creditBody = amount - contribution;
  let mountlyPayment = creditBody * (percent + (percent / (Math.pow((1 + percent), countMonths) - 1)));
  let totalPayment = (mountlyPayment * countMonths).toFixed(2);
  totalPayment = Number(totalPayment);

  return totalPayment;
}