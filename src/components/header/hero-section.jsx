import Typewriter from "typewriter-effect";
import homeImage from "../../assets/images/home.jpg";
import homeImage1 from "../../assets/images/home1.jpg";
import homeImage2 from "../../assets/images/home2.jpg";

const HeroSection = () => {
  return (
    <div className="mt-5 mb-20  h-[600px] flex flex-row-reverse w-full 
    max-[1350px]:h-[500px] max-[1200px]:h-[450px] max-[1200px]:mb-16 max-[1100px]:h-[390px] max-[960px]:h-[370px] max-[880px]:h-[340px] max-[800px]:h-[300px] max-[730px]:h-[260px] max-[560px]:h-[240px] max-[500px]:h-[220px]">
      <div className="flex h-full w-1/2  max-[630px]:w-2/5">
        <div className="flex flex-col w-5/12 max-[630px]:hidden">
          <div className="rounded-xl w-full h-[50%] p-3 max-[800px]:p-2">
            <img src={homeImage1} className="rounded-2xl w-full h-full object-cover max-[800px]:rounded-xl" />
          </div>
          <div className="rounded-xl w-full h-[50%] p-3 max-[800px]:p-2">
            <img
              src={homeImage2}
              className="rounded-2xl w-full h-full object-cover max-[800px]:rounded-xl"
            />
          </div>
        </div>

        <div className="rounded-xl w-7/12 p-3 max-[800px]:p-2 max-[630px]:w-full">
          <img src={homeImage} className="rounded-2xl w-full h-full object-cover max-[800px]:rounded-xl" />
        </div>
      </div>

      <div className="w-1/2 max-[630px]:w-3/5">
        <div className="text-[#eee] h-1/2 pt-20 pr-14  max-[1350px]:pt-14 max-[1200px]:pt-10 max-[1200px]:pr-10 max-[1100px]:pt-8 max-[880px]:pr-8 max-[800px]:py-5 max-[730px]:pt-3 max-[650px]:pr-4  max-[630px]:pr-5 max-[630px]:pt-2">
          <h1 className="font-semibold text-4xl pb-12 text-primary-600 max-[1350px]:text-[33px] max-[1200px]:text-3xl max-[1100px]:text-2xl max-[960px]:text-xl max-[800px]:pb-8 max-[730px]:text-lg max-[730px]:pb-6 max-[630px]:pb-5 max-[560px]:text-base max-[500px]:text-sm">
            بوتیک زوزو ، همون چیزی که نیاز دارید...
          </h1>
          <div className="text-2xl pl-10 leading-8 max-[1350px]:text-xl max-[1200px]:text-lg max-[1100px]:text-base max-[960px]:text-sm max-[730px]:text-xs  max-[630px]:text-sm max-[560px]:text-xs max-[460px]:pl-5">
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
          </div>
        </div>
        <div className="custom-text font-zozo font-bold text-[230px] h-1/2 text-center select-none 
        max-[1350px]:text-[200px] max-[1200px]:text-[185px] max-[1100px]:text-[160px] max-[960px]:text-[145px] max-[880px]:text-[130px] max-[800px]:text-[115px] max-[730px]:text-[100px]  max-[630px]:text-[110px]  max-[630px]:leading-[130px] max-[560px]:text-[100px] max-[500px]:text-[85px] max-[460px]:text-[75px]">
          ZOZO
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
