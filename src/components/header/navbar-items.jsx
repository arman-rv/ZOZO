import { Link as Scroll } from "react-scroll";

const Items = ({ title ,link  }) => {
  return (
    <Scroll to={link} smooth duration={1000} className="text-primary-600 text-2xl cursor-pointer font-bold max-[1100px]:text-xl max-[880px]:text-lg max-[730px]:text-base max-[650px]:text-sm max-[500px]:text-xs">
      {title}
    </Scroll>
  );
};

export { Items };
