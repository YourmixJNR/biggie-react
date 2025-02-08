import { Link } from "react-router-dom";
import { H1 } from "../../components/typography";
import { APP_CONSTANTS } from "../../config";

const Header = () => {
  return (
    <header>
      <H1>biggie react admin</H1>
      <nav>
        <ul>
          <Link to={APP_CONSTANTS.ROUTES.HOME}>
            <li>react-js</li>
          </Link>
          <Link to={APP_CONSTANTS.ROUTES.FUND_ME}>
            <li>boilerplate</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
