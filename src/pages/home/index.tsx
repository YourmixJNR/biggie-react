import { SEO } from "../../components/global";
import { H3 } from "../../components/typography";
import { Link } from "react-router-dom";
import { APP_CONSTANTS } from "../../config";

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <div className="min-h-[100dvh] mx-auto flex flex-col items-center justify-center text-black text-[40px]">
        <H3>Home</H3>
        <ul>
          <li>
            <Link to={APP_CONSTANTS.ROUTES.AUTH.LOGIN}>i'm login</Link>{" "}
            <Link to={APP_CONSTANTS.ROUTES.AUTH.SIGNUP}>i'm register</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
