import { LoginForm } from "../../../components/forms";
import { SEO } from "../../../components/global";

const SignIn = () => {
  return (
    <div className="bg-gray-500">
      <SEO title="Sign In" />
      <div className="min-h-[100dvh] mx-auto flex flex-col items-center justify-center text-black text-[40px]">
        Sign In
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
