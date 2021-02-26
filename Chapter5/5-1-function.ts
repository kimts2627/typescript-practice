{
  function checkNotNull(arg: number | null): number {
    if(arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  } // ........bad

  function checkNotNull2(arg: any | null): any {
    if(arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  } // ........bad

  function checkNotNull3<T>(arg: T | null): T {
    if(arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  } // ........good

  const number = checkNotNull3(123);
  const boal: boolean = checkNotNull3(true);
}