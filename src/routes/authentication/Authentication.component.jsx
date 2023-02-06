import SignUpForm from "../../components/sign-up-form/SignUpForm.component";
import SignInform from "../../components/sign-in-form/SignInForm.component";
import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInform />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
