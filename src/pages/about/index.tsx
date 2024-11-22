import { SEO } from "../../components/global";
import Intro from "./components/intro";

const About = () => {
  return (
    <>
      <SEO title="About" />
      <div className="min-h-[100dvh] mx-auto flex flex-col items-center justify-center text-black text-[40px]">
        About
      </div>
      <Intro />
    </>
  );
};

export default About;
