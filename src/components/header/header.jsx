import HeroSection from "./hero-section";
import { Items } from "./navbar-items";

const Header = () => {
  return (
    <div>
      <div className="flex gap-10 pt-4 pb-5 px-6 relative select-none">
        <Items title="گالری" link="" />
        <div className="custom-text text-xl font-bold"> | </div>
        <Items title="درباره ما" link="" />
        <div className="custom-text text-xl font-bold"> | </div>
        <Items title="ارتباط با ما" link="" />
        <div className="custom-text text-xl font-bold"> | </div>
        <Items title="مکان فروشگاه" link="" />

        <div className="custom-text font-semibold text-5xl absolute left-4 top-2 font-zozo">
          {" "}
          ZOZO{" "}
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <HeroSection />
      </div>
    </div>
  );
};

export { Header };
