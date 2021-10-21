import ValidateUserAccount from '../components/user/ValidateUserAccount';
import { authType } from '../lib/authenticateData';

const EmailReauthorization = () => {
  return (
    <ValidateUserAccount authType={authType.emailReauthorization}/>
  )
}

export default EmailReauthorization;