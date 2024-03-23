import { Link } from "react-router-dom";

const Items = ({ img, title, desc, link }) => {
  return (
    <div className="flex w-full items-center gap-4 text-primary max-[1350px]:gap-3 max-[880px]:gap-2 max-[800px]:gap-[6px] max-[730px]:gap-4 max-[630px]:gap-3">
      <div className="w-[68px] max-[1350px]:w-[60px] max-[1200px]:w-[55px] max-[1100px]:w-[48px] max-[880px]:w-[40px] max-[800px]:w-[35px] max-[730px]:w-[55px] max-[630px]:w-[50px] max-[500px]:w-[46px]">
        <img src={img} className="w-full h-ull" />
      </div>
      <div className="text-xl flex flex-col gap-2 max-[1350px]:text-lg max-[1350px]:gap-1 max-[1200px]:text-base max-[1100px]:text-sm max-[880px]:text-xs max-[730px]:text-base max-[630px]:text-sm max-[500px]:text-xs">
        <span className="font-bold">{title}</span>
        <p className="">
          {link ? (
            <Link target="blank" className="underline cursor-pointer" to={link}>
              {desc}
            </Link>
          ) : (
            desc
          )}
        </p>
      </div>
    </div>
  );
};

export { Items };
