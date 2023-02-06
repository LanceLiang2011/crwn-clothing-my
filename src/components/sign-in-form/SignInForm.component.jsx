import FormInput from "../../components/form-input/FormInput.component";
import { useState } from "react";
import {
  sighInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmail,
} from "../../utils/firebase/firebase.utils";
import Button from "../../components/button/Button.component";
import "./SignUpForm.styles.scss";

const defaultFormat = { email: "", password: "" };

const SignInform = () => {
  const logGoogleUser = async () => {
    const { user } = await sighInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const [format, setFormat] = useState(defaultFormat);
  const { email, password } = format;

  const resetFormat = () => {
    setFormat(defaultFormat);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormat({ ...format, [name]: value });
  };
  const handleSignIn = async (event) => {
    event.preventDefault();
    if (!email || !password) return;
    try {
      await signInUserWithEmail(email, password);
      resetFormat();
    } catch (error) {
      console.error(error);
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user account found");
          break;
        default:
          alert(error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignIn}>
        <FormInput
          onChange={handleChange}
          value={email}
          name="email"
          label="email"
          type="email"
        />
        <FormInput
          onChange={handleChange}
          value={password}
          name="password"
          label="password"
          type="password"
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInform;
