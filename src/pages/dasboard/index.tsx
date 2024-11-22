import SEO from "../../components/global/seo";
import Welcome from "./components/welcome";

const Dashboard = () => {
  return (
    <>
      <SEO title="Dashboard" />
      <div className="min-h-[100dvh] mx-auto flex flex-col items-center justify-center text-black text-[40px]">
        Dashboard
      </div>
      <Welcome />
    </>
  );
};

export default Dashboard;
