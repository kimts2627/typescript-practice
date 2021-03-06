{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offine' | 'down' | 'timeout';
  }
  type SuccessState = {
    result: 'success';
  }
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error('no network!');
    }
  }
  
  class UserService {
    constructor(private client: NetworkClient) {}
  
    login() {
      this.client.tryConnect();
    }
  }
  
  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      }
      catch(error) {
        // 에러 핸들링...
      }
    }
  }
}