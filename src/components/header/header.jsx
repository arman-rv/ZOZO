import HeroSection from "./hero-section";
import { Items } from "./navbar-items";

const Header = () => {
  return (
    <div>
      <div className="flex gap-10 pt-4 pb-5 px-14 relative select-none p-1 max-[880px]:gap-7 max-[880px]:pr-8 max-[730px]:gap-5 max-[650px]:gap-4 max-[650px]:pr-4 max-[500px]:gap-3 max-[460px]:gap-2">
        <Items title="گالری"  link="gallery"/>
        <div className="custom-text text-xl font-bold max-[1100px]:text-lg max-[650px]:text-base max-[500px]:text-sm"> | </div>
        <Items title="درباره ما"  link="about-us"/>
        <div className="custom-text text-xl font-bold max-[1100px]:text-lg max-[650px]:text-base max-[500px]:text-sm"> | </div>
        <Items title="ارتباط با ما" link="contact-us" />
        <div className="custom-text text-xl font-bold max-[1100px]:text-lg max-[650px]:text-base max-[500px]:text-sm"> | </div>
        <Items title="مکان فروشگاه" link="map" />

        <div className="custom-text font-semibold text-5xl absolute left-8 top-2 font-zozo max-[1100px]:text-4xl max-[960px]:top-3 max-[730px]:text-3xl max-[650px]:text-2xl max-[500px]:text-xl">
          {" "}
          ZOZO{" "}
        </div>
      </div>
      <div className="flex flex-row-reverse pl-1">
        <HeroSection />
      </div>
    </div>
  );
};

export { Header };
