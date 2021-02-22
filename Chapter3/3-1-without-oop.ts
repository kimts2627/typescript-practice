// 전역으로 커피 콩을 가지고 있는 변수
// 커피를 만드는 makeCoffee 함수 인자로는 shot: number
{
  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }
  const makeCoffee = (shots: number): CoffeeCup => {
    if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false
    };
  }
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(3);
  console.log(coffee);
}
