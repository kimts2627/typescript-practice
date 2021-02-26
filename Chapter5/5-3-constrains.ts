
interface Employee {
  pay: () => void;
}

class FullTimeEmployee implements Employee {
  pay = () => {
    console.log('Full Time');
  }
  workFullTime = () => {};
}

class PartTimeEmployee implements Employee {
  pay = () => {
    console.log('Part Time');
  }
  workPartTime = () => {};
}

function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

let kim = new FullTimeEmployee();
let taesu = new PartTimeEmployee();

const kimAfterPay = pay(kim);
const taesuAfterPay = pay(taesu);

const obj = {
  name: 'taesu',
  age: 200
}

const obj2 = {
  animal: 'dog'
}

function getValue<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key]
}

console.log(getValue(obj, 'name')); // taesu
console.log(getValue(obj, 'age')); // 200
console.log(getValue(obj2, 'animal')); // dog