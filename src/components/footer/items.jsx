import { Link } from "react-router-dom";

const Items = ({ img, title, desc, link }) => {
  return (
    <div className="flex w-full items-center gap-4 text-primary">
      <div className="w-[68px]">
        <img src={img} className="w-full h-ull" />
      </div>
      <div className="text-xl flex flex-col gap-2">
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
