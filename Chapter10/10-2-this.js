console.log(this) //....Window

function simpleFunc() {
  console.log(this);
}

window.simpleFunc();

class Counter {
  count = 0;
  increase = () => {
    console.log(this); // ... arrow func >> this 고정 / function 선언식 >> this 변경됨
  }
}

const counter = new Counter();
counter.increase(); //...Counter
const caller = counter.increase();
caller(); // ...undefined
const caller = counter.increase.bind(counter);

class Bob {};
const bob = new Bob();
bob.run = counter.increase();
bob.run();