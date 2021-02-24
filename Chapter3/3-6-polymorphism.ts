{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleanning the machine...');
    }

    private grindBeans(shots: number): void {
      console.log(`grinding beans for ${shots}`);
      if(this.coffeeBeans < 0) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`)
      return {
        shots,
        hasMilk: false
      }
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
      // if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
      //   throw new Error('Not enough coffee beans!');
      // }
      // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      // return {
      //   shots,
      //   hasMilk: false
      // };
    }
  }

  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans)
    }
    private steamMilk(): void {
      console.log('Steaming Milk...');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    private addSugar(): void {
      console.log('Adding sugar...');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return {
        ...coffee,
        hasSugar: true
      }
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, 'sd'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, 'sd'),
    new SweetCoffeeMaker(16)
  ];
  machines.forEach(machine => {
    console.log('-----------------')
    machine.makeCoffee(1);
  })
}