import { Items } from "./navbar-items";

const Header = () => {
  return (
    <div className="border-b-[5px] border-secondary flex gap-10 pt-4 pb-6 px-6 relative select-none rounded-xl">
      <Items title="گالری" link="" />
      <div className="text-secondary text-xl font-bold"> | </div>
      <Items title="درباره ما" link="" />
      <div className="text-secondary text-xl font-bold"> | </div>
      <Items title="ارتباط با ما" link="" />
      <div className="text-secondary text-xl font-bold"> | </div>
      <Items title="مکان فروشگاه" link="" />
      <div className="font-semibold text-6xl text-secondary absolute left-4 top-[2px] font-zozo"> ZOZO </div>
    </div>
  );
};

export { Header };
