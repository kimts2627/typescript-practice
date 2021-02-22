// 전역으로 커피 콩을 가지고 있는 변수
// 커피를 만드는 makeCoffee 함수 인자로는 shot: number
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  // public
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  maker.fillCoffeeBeans(32);
  console.log(maker);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if(num < 0) {
        throw new Error('Age can`t be under than 0')
      }
      this.internalAge = num;
    }
    constructor(public firstName: string, public lastName: string) {
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.firstName = 'Taesu';
  console.log(user.fullName);
}