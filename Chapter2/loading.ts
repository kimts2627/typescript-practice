{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (states: ResourceLoadState): string => {
    switch(states.state) {
      case 'loading':
        return '👀 loading...'
      case 'success':
        return '😃 loaded'
      case 'fail':
        return '😱 no network'
      default:
        throw new Error('bad input');
    }
  }

  console.log(printLoginState({ state: 'loading' })); // 👀 loading...
  console.log(printLoginState({ state: 'success', response: { body: 'loaded' } })); // 😃 loaded
  console.log(printLoginState({ state: 'fail', reason: 'no network' })); // 😱 no network
}
