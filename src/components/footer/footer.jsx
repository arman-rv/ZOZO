import { Map } from "./map";
import marker from "../../assets/images/icons/marker.png";
import phone from "../../assets/images/icons/phone.png";
import user from "../../assets/images/icons/user.png";
import clock from "../../assets/images/icons/clock.png";
import { Items } from "./items";

const Footer = () => {
  return (
    <div className="flex pb-7">
      <div id="map" className="w-3/5 flex items-center pr-10 py-14 h-[600px]">
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-[7px_10px_15px_0_#2b2b2b47]">
          <Map />
        </div>
      </div>
      <div id="contact-us" className="w-2/5 flex flex-col pr-24 pt-36 gap-9">
        <Items img={marker} desc="ساری،فرهنگ،جنب پاساژ تقوی" title="آدرس : " />
        <Items img={phone} desc="09110000000" title="تلفن : " />
        <Items img={clock} desc="9 صبح تا 11 شب" title="ساعت کاری : " />
        <Items img={user} desc="خانوم ایکس" title="مدیریت : " />
      </div>
    </div>
  );
};

export { Footer };

// import { Map } from "./map";
// import marker from "../../assets/images/icons/marker.png";
// import phone from "../../assets/images/icons/phone.png";
// import user from "../../assets/images/icons/user.png";
// import clock from "../../assets/images/icons/clock.png";
// import { Items } from "./items";

// import instagram from "../../assets/images/instagram.png";

// const Footer = () => {
//   return (
//     <div className="flex h-[600px] gap-5">
//       <div className="w-1/2 flex items-center pr-10 py-16 h-full">
//         <div className="w-full h-full rounded-2xl overflow-hidden shadow-[7px_10px_15px_0_#2b2b2b47]">
//           <Map />
//         </div>
//       </div>

//       <div className="w-1/4 flex flex-col pt-28 gap-10">
//         <Items img={marker} desc="ساری،فرهنگ،جنب پاساژ تقوی" title="آدرس : " />
//         <Items img={phone} desc="09110000000" title="تلفن : " />
//         <Items img={clock} desc="9 صبح تا 11 شب" title="ساعت کاری : " />
//         <Items img={user} desc="خانوم ایکس" title="مدیریت : " />
//       </div>
//       <div className="w-1/6 h-full py-12">
//         {" "}
//         <img src={instagram} className="w-full h-full" />{" "}
//       </div>
//     </div>
//   );
// };

// export { Footer };
