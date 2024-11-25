import { Button, Input } from "../ui";
import { useState } from "react";
import { storage } from "../../utils";
import { useNavigate } from "react-router-dom";
import { APP_CONSTANTS } from "../../config";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

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
      <Input type="email" value={email} onChange={handleEmailChange} />
      <Button type="button" className="text-2xl" onClick={submitEmail}>
        Login here
      </Button>
    </div>
  );
};

export default LoginForm;
