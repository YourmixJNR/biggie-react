import { H1 } from "../../components/typography";
import { Link } from "react-router-dom";
import { APP_CONSTANTS } from "../../config";

const Header = () => {
  return (
    <header>
      <Link to={APP_CONSTANTS.ROUTES.HOME}>
        <H1>biggie react</H1>
      </Link>
      <nav>
        <ul>
          <Link to={APP_CONSTANTS.ROUTES.ABOUT}>
            <li>react-js</li>
          </Link>
          <Link to={APP_CONSTANTS.ROUTES.DASHBOARD}>
            <li>boilerplate</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
