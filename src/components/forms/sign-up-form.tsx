import { Button, Input } from "../ui";
import { useState } from "react";
import { storage } from "../../utils";
import { useNavigate } from "react-router-dom";
import { APP_CONSTANTS } from "../../config";

const SignUpForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const submitEmail = (): void => {
    try {
      storage.setAuthToken(email);
      navigate(APP_CONSTANTS.ROUTES.DASHBOARD);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Input type="text" value={name} onChange={handleNameChange} />
      <Input type="email" value={email} onChange={handleEmailChange} />
      <Input type="password" value={password} onChange={handlePasswordChange} />
      <Button type="button" className="text-2xl" onClick={submitEmail}>
        Login here
      </Button>
    </div>
  );
};

export default SignUpForm;
