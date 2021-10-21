import ValidateUserAccount from '../components/user/ValidateUserAccount';
import { authType } from '../lib/authenticateData';

const SignIn = () => {
  return <ValidateUserAccount authType={authType.signIn}/>
};

export default SignIn;
