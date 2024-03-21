import { Map } from "./map";
import { Items } from "./items";

import marker from "../../assets/images/icons/marker.png";
import phone from "../../assets/images/icons/phone.png";
import user from "../../assets/images/icons/user.png";
import clock from "../../assets/images/icons/clock.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="flex pb-7">
      <div className="w-3/5 flex items-center pr-10 py-14 h-[600px]">
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
        className="w-2/5 flex flex-col pr-24 pt-36 gap-9"
        data-aos="zoom-in-right"
        data-aos-offset="220"
        data-aos-duration="1200"
      >
        <Items img={marker} desc="ساری،فرهنگ،جنب پاساژ تقوی" title="آدرس : " />
        <Items img={phone} desc="09110000000" title="تلفن : " />
        <Items img={clock} desc="9 صبح تا 11 شب" title="ساعت کاری : " />
        <Items img={user} desc="خانوم ایکس" title="مدیریت : " />
      </div>
    </div>
  );
};

export { Footer };