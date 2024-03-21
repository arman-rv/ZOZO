import { Header } from "../components/header/header";
import { Holder } from "../components/holder-content-footer";

const Landing = () => {
  return (
    <div className="top-gradient w-[clamp(100px,100%,1500px)] flex flex-col gap-20">
      <Header />

      {/* content and footer holder (for bg gradient) */}
      <Holder />
    </div>
  );
};

export default Landing;
