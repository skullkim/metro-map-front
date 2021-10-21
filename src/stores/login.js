import {observable} from 'mobx';

const Login = observable({
  userId: '',

  setUserId(userId) {
    this.userId = userId;
  }
});

export default Login;