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
import { Slider } from "./slider";
import { Link } from "react-router-dom";

const Content = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const gal = [gal1, gal2, gal3, gal4, gal5];

  return (
    <div className="relative w-full px-5 -mt-[100px] mb-20 max-[1100px]:-mt-[110px] max-[880px]:-mt-[120px] max-[880px]:mb-16">
      {/* gallery */}
      <div id="gallery" className="absolute -top-[92px]"></div>
      <div
        className="w-full flex flex-col rounded-2xl bg-primary shadow-[16px_16px_22px_4px_#2b2b2b16] overflow-hidden
         p-5  max-[1350px]:p-4 max-[1100px]:p-3 max-[730px]:p-4"
        data-aos="fade-up"
        data-aos-offset="170"
        data-aos-duration="1200"
      >
        <div className="flex gap-5 w-full max-[1350px]:gap-4 max-[1100px]:gap-3 max-[650px]:hidden">
          {gal.map((image, index) => {
            return <GalleryItems key={index} img={image} />;
          })}
        </div>
        {/* slider after max-700px */}
        <div className="hidden max-[650px]:block">
          <Slider
            sliderItems={gal.map((image, index) => {
              return (
                <div
                  key={index}
                  className="h-[180px] w-full max-[560px]:h-[150px] max-[500px]:h-[130px] max-[460px]:h-[180px]"
                >
                  <img src={image} className="w-full h-full rounded-xl" />
                </div>
              );
            })}
            slidesPerView={2}
            delay={1500}
            spaceBetween={20}
            speed={2000}
            reverseDirection
            className="mx-auto h-full w-full overflow-visible"
          />
        </div>

        <h1
          id="about-us"
          className="text-4xl font-semibold text-center pt-5 text-secondary bg-primary max-[1350px]:text-3xl max-[1100px]:text-2xl max-[500px]:text-xl max-[560px]:pt-3"
        >
          zozo | create your own style
        </h1>
      </div>

      <div
        className="flex mt-28 gap-14 pl-10 flex-row-reverse 
      max-[1500px]:gap-10 max-[650px]:pl-1 max-[650px]:gap-6 max-[500px]:flex-col max-[880px]:mt-20 max-[650px]:mt-16 max-[500px]:mt-12"
      >
        <div
          className="w-1/3 flex flex-col gap-6 pt-4 pl-4
          max-[1350px]:gap-3 max-[1350px]:pt-1 max-[1200px]:pt-0 max-[1100px]:pl-14 max-[960px]:pl-4 max-[800px]:pl-0 max-[800px]:gap-1 max-[500px]:w-full max-[500px]:gap-3 max-[500px]:items-center max-[500px]:text-center"
          data-aos="fade-right"
          data-aos-offset="170"
          data-aos-duration="1200"
        >
          <h3 className="font-zozo text-6xl font-bold text-secondary max-[1200px]:text-5xl max-[960px]:text-4xl max-[800px]:text-3xl max-[500px]:text-[39px] max-[500px]:pb-1">
            ZOZO
          </h3>
          <p className="text-2xl text-secondary max-[1200px]:text-xl max-[1100px]:text-base max-[960px]:text-sm max-[730px]:text-xs max-[650px]:text-[10px] max-[500px]:text-sm">
            {" "}
            شما همیشه میتوانید برای شیک بودن بهترین ها را انتخاب کنید. با زوزو
            وارد دنیایی از رنگ ها و طرح های متنوع شوید،از لباس های روزمره تا
            لباس های شیک برای مجالس همگی در دنیای زوز. با ما همراه باشید تا لذت
            خریدی آسان و سریع را تجربه کنید. برای مشاهده محصولات وارد پیج ما
            شوید.
          </p>
          <Link
            to="https://www.instagram.com/zozo_collection__"
            target="blank"
            className="cursor-pointer text-primary text-2xl pb-3 pt-2 rounded-full bg-secondary-550 w-fit text-center mt-3 px-7
          max-[1200px]:text-xl max-[1100px]:text-base max-[1100px]:py-2 max-[1100px]:pt-1 max-[960px]:text-sm max-[960px]:px-5 max-[730px]:text-xs max-[650px]:text-[10px] max-[650px]:py-[3px] max-[650px]:px-3 max-[650px]:mt-2 max-[500px]:text-sm max-[500px]:py-1 max-[500px]:px-6 max-[500px]:pb-2 max-[500px]:mb-4"
          >
            {" "}
            مشاهده بیشتر
          </Link>
        </div>
        <div
          className="overflow-hidden flex flex-row-reverse gap-5 rounded-2xl bg-primary w-2/3  h-[450px] shadow-[13px_13px_24px_4px_#2b2b2b20]
          max-[1200px]:h-[360px] max-[1100px]:h-[320px] max-[960px]:h-[270px] max-[730px]:h-[230px] max-[650px]:h-[200px] max-[500px]:w-full"
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
            className=" w-1/2 text-7xl font-semibold text-secondary flex items-center pl-9 max-[1500px]:pl-6
            max-[1350px]:text-6xl max-[1350px]:px-10 max-[1200px]:text-[57px] max-[1200px]:px-3 max-[1200px]:pl-5 max-[1100px]:text-5xl max-[960px]:text-[40px] max-[960px]:pl-2 max-[800px]:text-4xl max-[800px]:pl-0 max-[730px]:text-3xl max-[730px]:pl-1 max-[650px]:text-2xl max-[650px]:pl-0 max-[500px]:text-[30px] max-[400px]:text-[29px]"
          >
            LIFE ISN'T PERFECT BUT YOUR OUTFIT CAN BE.
          </p>
        </div>
      </div>
    </div>
  );
};

export { Content };
