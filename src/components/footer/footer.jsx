import { Map } from "./map";
import { Items } from "./items";

import marker from "../../assets/images/icons/marker.png";
import phone from "../../assets/images/icons/phone.png";
import user from "../../assets/images/icons/user.png";
import clock from "../../assets/images/icons/clock.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex pb-16 gap-12 max-[1350px]:pb-10 max-[1350px]:gap-8 max-[960px]:pb-7 max-[730px]:flex-col-reverse max-[730px]:pb-5 max-[730px]:gap-7 overflow-hidden">
      <p
        className="hidden text-lg text-primary max-[730px]:block text-center max-[500px]:text-base"
        data-aos="fade-up"
        data-aos-offset="25"
        data-aos-duration="1200"
      >
        <span className="font-bold pr-1">ZOZO / </span>build with love by
        <Link className="underline pl-2" to="tel:09117828923">
          arman rezvani
        </Link>
      </p>

      <div
        id="map"
        className="w-7/12 flex items-center pr-10 h-[465px] pt-5 max-[1200px]:h-[400px] max-[1200px]:pr-5 max-[960px]:h-[350px] max-[880px]:h-[320px] max-[800px]:h-[280px] max-[730px]:w-full max-[730px]:px-10 max-[630px]:h-[250px] max-[500px]:px-5 max-[500px]:h-[220px]"
      >
        <div
          className="w-full h-full rounded-2xl overflow-hidden shadow-[7px_10px_15px_0_#2b2b2b47]"
          data-aos="zoom-in-left"
          data-aos-offset="170"
          data-aos-duration="1200"
        >
          <Map />
        </div>
      </div>
      <div
        id="contact-us"
        className="custom-text placeholder:w-5/12 flex flex-col "
        data-aos="zoom-in-right"
        data-aos-offset="220"
        data-aos-duration="1200"
      >
        <h4
          style={{ direction: "ltr" }}
          className="font-zozo mix text-9xl pl-14 font-bold w-full
          max-[1500px]:pl-10 max-[1350px]:pl-7 max-[1350px]:text-[120px] max-[1200px]:text-[110px] max-[1100px]:text-8xl max-[960px]:text-[86x] max-[960px]:pt-2 max-[880px]:text-[80px] max-[800px]:text-7xl max-[730px]:text-8xl max-[730px]:text-center max-[730px]:pl-0 max-[500px]:text-[77px]"
        >
          FASHION
        </h4>

        <div
          className="flex justify-between pl-14 pt-14 w-full pr-6 
        max-[1500px]:pr-14 max-[1500px]:pl-8 max-[1500px]:pt-16 max-[1200px]:pt-10 max-[1200px]:pr-16 max-[1100px]:pr-10 max-[880px]:pr-8 max-[800px]:pt-9 max-[800px]:pr-4 max-[730px]:justify-center max-[730px]:px-0 max-[730px]:gap-28 max-[730px]:pt-12 max-[730px]:pb-4 max-[630px]:gap-16 max-[500px]:gap-9"
        >
          <div className="flex flex-col gap-10 max-[1200px]:gap-12 max-[960px]:gap-10 max-[800px]:gap-8 max-[730px]:gap-10">
            <Items
              img={marker}
              desc="فرهنگ،جنب پاساژ تقوی"
              title="آدرس : "
              link="https://maps.app.goo.gl/GSwUFL5QFAwMoWoj8"
            />
            <Items img={user} desc="خانوم زابلی" title="مدیریت : " />
          </div>
          <div className="flex flex-col gap-10 max-[1200px]:gap-12 max-[960px]:gap-10 max-[800px]:gap-8 max-[730px]:gap-10">
            <Items img={clock} desc="9 صبح تا 11 شب" title="ساعت کاری : " />
            <Items
              img={phone}
              desc="09120194650"
              title="تلفن : "
              link="tel:09120194650"
            />
          </div>
        </div>

        <p className="text-2xl pr-[85px] text-primary pt-16 max-[1500px]:pt-14 max-[1500px]:pr-[105px] max-[1350px]:pr-28 max-[1350px]:text-xl max-[1200px]:pr-24 max-[1100px]:text-lg max-[1100px]:pr-20 max-[960px]:pt-8 max-[880px]:text-base max-[880px]:pr-12 max-[800px]:text-sm max-[800px]:pr-10 max-[800px]:pt-7 max-[730px]:hidden">
          <span className="font-bold pr-1">ZOZO / </span>build with
          <span className="text-2xl"> &hearts; </span>
          by
          <Link className="underline pl-2" to="tel:09117828923">
            arman rezvani
          </Link>
        </p>
      </div>
    </div>
  );
};

export { Footer };
