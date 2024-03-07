import Typewriter from "typewriter-effect";
import homeImage from "../../assets/images/home.jpg";
import homeImage1 from "../../assets/images/home1.jpg";
import homeImage2 from "../../assets/images/home2.jpg";

const HeroSection = () => {

  return (
    <div className="mt-5 mb-20  h-[600px] flex flex-row-reverse w-full">
      <div className="flex h-full w-1/2">
        <div className="flex flex-col w-5/12">
          <div className="rounded-xl w-full h-[50%] p-3">
            <img src={homeImage1} className="rounded-2xl w-full h-full" />
          </div>
          <div className="rounded-xl w-full h-[50%] p-3">
            <img
              src={homeImage2}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-xl w-7/12 p-3">
          <img src={homeImage} className="rounded-2xl w-full h-full" />
        </div>
      </div>

      <div className="w-1/2">
        <div className="text-[#eee] h-1/2 pt-20 pr-14">
          <h1 className="font-semibold text-4xl pb-12 text-primary-600">
            بوتیک زوزو ، همون چیزی که نیاز دارید...
          </h1>
          <p className="text-2xl pl-10 leading-8 ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `   با تکیه بر سالها تجربه مد و فشن با خیالی راحت از خریدتون لذت ببرید <br/> بهترین ها را از ما بخواهید .`
                  )
                  .start();
                // .pauseFor(2500)
              }}
            />
          </p>
        </div>
        <div className="custom-text font-zozo font-bold text-[230px] h-1/2 text-center">
          ZOZO
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
