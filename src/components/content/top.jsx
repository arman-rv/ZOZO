import Typewriter from "typewriter-effect";

const Top = () => {

  return (
    <div className="flex ">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello World!")
            // .pauseFor(2500)
            .start();
        }}
      />
    </div>
  );
};

export default Top;