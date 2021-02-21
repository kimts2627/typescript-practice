/**
 * Let's make a calculator 🧮
 */

 type CalculateFunc = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

const calculate = (func: CalculateFunc, firstNum: number, secondNum: number): number => {
  if(func === 'add') {
    return firstNum + secondNum;
  }
  else if(func === 'substract') {
    return firstNum - secondNum;
  }
  else if(func === 'multiply') {
    return firstNum * secondNum;
  }
  else if(func === 'divide') {
    return firstNum / secondNum;
  }
  else if(func === 'remainder') {
    return firstNum % secondNum;
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
