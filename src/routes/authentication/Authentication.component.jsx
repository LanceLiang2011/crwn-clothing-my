import SignUpForm from '../../components/sign-up-form/SignUpForm.component';
import SignInform from '../../components/sign-in-form/SignInForm.component';
import './Authentication.styles';
import { AuthenticationContainer } from './Authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInform />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
