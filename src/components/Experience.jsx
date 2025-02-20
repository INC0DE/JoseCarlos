import Timeline from "./Timeline";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full min-h-screen flex flex-col items-center px-6 md:px-12 lg:px-20 py-10"
    >
      <div className="w-full max-w-2xl space-y-5 justify-items-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-start space-y-3 lg:space-y-0 lg:space-x-4">
          <h1 className="text-6xl  text-center md:text-8xl lg:text-9xl font-Script text-yellow">
            Cancionero
          </h1>
          <h1 className="text-xl md:text-2xl text-whitelight font-extralight">
            experiencia.
          </h1>
        </div>
      </div>
      <div className="w-full mt-10">
        <Timeline />
      </div>
    </div>
  );
};

export default Experience;
