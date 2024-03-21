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
    <div className="flex pb-16 gap-12">
      <div id="map" className="w-7/12 flex items-center pr-10 h-[465px] pt-5">
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
        className="custom-text placeholder:w-5/12 flex flex-col"
        data-aos="zoom-in-right"
        data-aos-offset="220"
        data-aos-duration="1200"
      >
        <h4
          style={{ direction: "ltr" }}
          className="font-zozo mix text-9xl pl-14 font-bold w-full"
        >
          FASHION
        </h4>

        <div className="flex justify-between pl-14 pt-14 w-full pr-6">
          <div className="flex flex-col gap-10">
            <Items
              img={marker}
              desc="فرهنگ،جنب پاساژ تقوی"
              title="آدرس : "
              link="https://maps.app.goo.gl/GSwUFL5QFAwMoWoj8"
            />
            <Items img={user} desc="خانوم ایکس" title="مدیریت : " />
          </div>
          <div className="flex flex-col gap-10">
            <Items img={clock} desc="9 صبح تا 11 شب" title="ساعت کاری : " />
            <Items
              img={phone}
              desc="09110000000"
              title="تلفن : "
              link="tel:09110000000"
            />
          </div>
        </div>

        <p className="text-2xl pr-[85px] text-primary pt-16">
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
