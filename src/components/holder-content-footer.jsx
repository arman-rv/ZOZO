import { Footer } from "./footer/footer";
import { Content } from "./content/content";

const Holder = () => {
  return (
    <div className="bottom-gradient p-1">
      <Content />
      <Footer />
    </div>
  );
};

export { Holder };
