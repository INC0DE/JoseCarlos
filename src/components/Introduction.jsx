import { hat } from "../assets";
import { Image } from "@heroui/react";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="flex flex-col lg:flex-row w-full min-h-screen border-t-2 border-b-2 border-gray-800"
    >
      <div className="w-full lg:w-2/5">
        <Image
          src={hat}
          alt="Sombrero charro"
          className="w-full h-[50vh] lg:h-screen object-cover"
        />
      </div>

      <div className="w-full lg:w-3/5 flex justify-center items-center px-6 xl:px-12 py-10 lg:py-0">
        <div className="space-y-12 max-h-[80vh] overflow-y-auto scrollbar-hide">
          <div className="space-y-6 justify-self-center">
            <h1 className="text-4xl md:text-8xl font-semibold text-whitelight xl:text-7xl 2xl:text-8xl">
              "Andar echando grito,
            </h1>
            <div className="flex flex-col md:flex-row md:items-end md:space-x-4">
              <h2 className="text-3xl md:text-4xl self-center lg:text-5xl text-gray 2xl:text-7xl">
                es mi verdadera
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-Baskerville text-yellow 2xl:text-8xl">
                PASIÓN".
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-left md:text-xl text-whitelight font-Baskerville">
              <strong className="text-yellow">José Carlos Cervantes</strong>,
              cantante ranchero, ofrece sus servicios artísticos para todo tipo
              de eventos sociales y empresariales en la{" "}
              <strong className="text-yellow">Ciudad de México</strong> y sus
              alrededores. Con un amplio repertorio de canciones rancheras
              tradicionales y contemporáneas, José Carlos lleva la esencia de la
              música mexicana a cada presentación.
            </p>

            <p className="text-lg text-right md:text-xl text-whitelight font-Baskerville">
              Con más de{" "}
              <strong className="text-yellow">7 años de experiencia</strong>, ha
              amenizado fiestas, bodas, cumpleaños, lienzos charros, foros,
              teatros y todo tipo de eventos. Su voz y pasión por la música
              ranchera crean un ambiente único e inolvidable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
