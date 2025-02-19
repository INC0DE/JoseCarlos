import { hat, image3 } from "../assets";
import { Image } from "@heroui/react";

const Introduction = () => {
  return (
    <div
      id="introduction"
      className="flex w-full min-h-screen border-t-2 border-b-2"
    >
      <div className="w-2/6 2xl:w-2/5">
        <Image src={hat} className="w-full h-screen object-cover" />
      </div>

      <div className="w-4/6 2xl:w-3/5 flex justify-center items-center">
        <div className="space-y-24 max-h-[100vh] overflow-y-auto scrollbar-hide">
          <div className="space-y-5 pt-32">
            <h1 className="text-8xl font-semibold text-whitelight">
              "Andar echando grito,
            </h1>
            <div className="flex space-x-3">
              <h1 className="text-6xl text-gray">es mi verdadera</h1>
              <h1 className="text-8xl font-Baskerville text-yellow">
                PASIÓN".
              </h1>
            </div>
          </div>
          <div className="space-y-20 pb-20 justify-items-center">
            <p className="w-96 text-left text-xl font-Baskerville">
              <strong className="text-yellow"> José Carlos Cervantes</strong>{" "}
              cantante Ranchero le ofrece sus servicios artísticos para todo
              tipo de eventos sociales y empresariales en la{" "}
              <strong className="text-yellow">Ciudad de México</strong> y sus
              alrededores, con un amplio repertorio de canciones rancheras
              tradicionales y contemporáneas.
            </p>

            <p className="w-96 text-right text-xl font-Baskerville">
              Con una trayectoria de poco mas de{" "}
              <strong className="text-yellow"> 7 años de experiencia</strong> en
              el género amenizando fiestas, cocteles, bodas, cumpleaños, lienzos
              charros, foros, teatros y todo tipo de acontecimientos ambientados
              con la interpretación de nuestra hermosa música mexicana en la voz
              de José Carlos Cervantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
