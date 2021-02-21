console.log('Hello world');

// type SuccessState = {
//   response: {
//     body: string;
//   };
// };
// type FailState = {
//   reason: string;
// };
// type LoginState = SuccessState | FailState;

// function pprintLoginState(state: LoginState): void {

//   if('response' in state) {
//     console.log(state.response.body);
//   }
//   else {
//     console.log(state.reason);
//   }
// }

// Discriminated Union Case **************************************

type SuccessState = {
  result: 'success',
  response: {
    body: string
  }
}
type FailState = {
  result: 'fail',
  reason: string
}
type LoginState = SuccessState | FailState;

function pprintLoginState(state: LoginState): void {

  if(state.result === 'success') {
    console.log(state.response.body);
  }
  else {
    console.log(state.reason);
  }
}