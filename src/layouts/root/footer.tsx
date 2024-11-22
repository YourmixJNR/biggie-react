import { H1 , H2} from "../../components/typography";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-between">
        <div>
          <H1>biggie react</H1>
        </div>
        <div>
          <H2>template</H2>
          <nav>
            <ul>
              <li>live site</li>
              <li>repo</li>
            </ul>
          </nav>
        </div>
        <div>
          <H2>useful links</H2>
          <nav>
            <ul>
              <li>author</li>
              <li>disclaimer</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
