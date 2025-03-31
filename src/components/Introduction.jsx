import { hat } from "../assets";
import { Image } from "@heroui/react";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="flex flex-col-reverse lg:flex-row w-full min-h-screen border-t-2 border-b-2 border-gray"
    >
      <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
        <Image
          src={hat}
          alt="Sombrero charro representando la música ranchera"
          className="w-full h-[50vh] lg:h-screen object-cover"
        />
      </div>
      <div className="w-full lg:w-3/5 flex justify-items-center items-center px-3 xl:px-12 py-10 lg:py-0">
        <div className="space-y-10 max-h-[80vh] overflow-y-auto scroll-smooth md:space-y-12">
          <div className="justify-items-center lg:text-left md:space-y-6">
            <h1 className="text-3xl  md:text-6xl  xl:text-7xl font-semibold text-whitelight 2xl:text-8xl">
              "Andar echando grito,
            </h1>
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <h2 className="text-3xl xl:text-5xl text-gray 2xl:text-7xl">
                es mi verdadera
              </h2>
              <h2 className="text-6xl mt-3 text-center  lg:text-7xl font-Baskerville text-yellow 2xl:text-8xl">
                PASIÓN".
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-whitelight font-Baskerville">
              <strong className="text-yellow">José Carlos Cervantes</strong>,
              cantante ranchero, ofrece sus servicios artísticos para todo tipo
              de eventos sociales y empresariales en la{" "}
              <strong className="text-yellow">Ciudad de México</strong> y sus
              alrededores.
            </p>

            <p className="text-lg md:text-xl text-whitelight font-Baskerville">
              Con más de{" "}
              <strong className="text-yellow">7 años de experiencia</strong>, ha
              amenizado fiestas, bodas, cumpleaños, lienzos charros, foros y
              teatros. Su voz y pasión por la música ranchera crean un ambiente
              único e inolvidable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
