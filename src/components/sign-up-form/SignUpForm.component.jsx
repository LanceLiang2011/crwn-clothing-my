import { useState } from "react";
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button.component";
import FormInput from "../form-input/FormInput.component";
import "./SignUpForm.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;

  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Your passwords don't match");
      return;
    }
    //
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {
        displayName,
      });
      resetFormFields();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          value={displayName}
          type="text"
          name="displayName"
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          value={email}
          type="email"
          name="email"
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          value={password}
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
        <FormInput
          label="Confirmed Password"
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          required
        />
        <Button
          disabled={password !== confirmPassword || password === ""}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
