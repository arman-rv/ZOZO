import GalleryItems from "./galleryItems";

import gal1 from "../../assets/images/gal1.jpg";
import gal3 from "../../assets/images/gal8.jpg";
import gal2 from "../../assets/images/gal14.jpg";
import gal4 from "../../assets/images/gal11.jpg";
import gal5 from "../../assets/images/gal13.jpg";

import gif from "../../assets/images/zozo.gif";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Content = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-full px-5 -mt-[70px] mb-20">
      {/* gallery */}
      <div className="absolute -top-[92px]"></div>
      <div
        className="w-full flex flex-col rounded-2xl bg-primary shadow-[16px_16px_22px_4px_#2b2b2b16] overflow-hidden
         p-5 "
        data-aos="fade-up"
        data-aos-offset="170"
        data-aos-duration="1200"
      >
        <div className="flex gap-5 w-full">
          <GalleryItems img={gal1} />
          <GalleryItems img={gal2} />
          <GalleryItems img={gal3} />
          <GalleryItems img={gal4} />
          <GalleryItems img={gal5} />
        </div>
        <h1 className="text-4xl font-semibold text-center pt-5 text-secondary bg-primary">
          zozo | create your own style
        </h1>
      </div>

      <div className="flex mt-28 gap-8 pl-14 flex-row-reverse">
        <div
          className="w-1/3 px-10 flex flex-col gap-4 pt-6"
          data-aos="fade-right"
          data-aos-offset="170"
          data-aos-duration="1200"
        >
          <h3 className="font-zozo text-5xl font-bold text-secondary">ZOZO</h3>
          <p className="text-2xl text-secondary ">
            {" "}
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و تکنولوژی مورد نیاز و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد. حال و آینده شناخت فراوان
            جامعه و متخصصان را می طلبد ...{" "}
          </p>
          <a className="cursor-pointer text-primary text-[22px] pb-2 pt-1 rounded-full bg-secondary-550 w-5/12 text-center mt-3">
            {" "}
            مشاهده بیشتر
          </a>
        </div>
        <div
          className="overflow-hidden flex flex-row-reverse gap-5 rounded-2xl bg-primary w-2/3  h-[450px] shadow-[13px_13px_24px_4px_#2b2b2b20]"
          data-aos="fade-left"
          data-aos-offset="170"
          data-aos-duration="1200"
        >
          <div className="w-1/2 h-full overflow-hidden">
            {" "}
            <img src={gif} className="w-full h-full object-cover" />
          </div>
          <p
            style={{ direction: "ltr" }}
            className=" w-1/2 text-7xl font-semibold text-secondary-550 flex items-center pl-9"
          >
            LIFE ISN'T PERFECT BUT YOUR OUTFIT CAN BE.
          </p>
        </div>
      </div>
    </div>
  );
};

export { Content };
