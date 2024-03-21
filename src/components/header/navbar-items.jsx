import { Link as Scroll } from "react-scroll";

const Items = ({ title ,link  }) => {
  return (
    <Scroll to={link} smooth duration={1000} className="text-primary-600 text-2xl cursor-pointer font-bold">
      {title}
    </Scroll>
  );
};

export { Items };
