import { Button, Input } from "../ui";
import { useState } from "react";
// import { storage } from "../../utils";
import { signIn } from "../../store/auth/reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { APP_CONSTANTS } from "../../config";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const submitEmail = (): void => {
    const loginCre = {email, password}
    try {
      //   storage.setAuthToken(email);
      dispatch(signIn(loginCre) as any)
      navigate(APP_CONSTANTS.ROUTES.DASHBOARD);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Input type="email" value={email} onChange={handleEmailChange} />
      <Input type="password" value={password} onChange={handlePasswordChange} />
      <Button type="button" className="text-2xl" onClick={submitEmail}>
        Login here
      </Button>
    </div>
  );
};

export default LoginForm;
