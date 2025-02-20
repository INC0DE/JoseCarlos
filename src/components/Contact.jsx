import FormContact from "./Form";
import { Image } from "@heroui/react";
import { image3 } from "../assets";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row w-full min-h-screen items-center justify-center px-6 lg:px-12 py-10"
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left space-y-8">
        <h1 className="text-2xl text-gray">
          ¡Contáctame y celebremos un gran evento!
        </h1>
        <div className="w-full max-w-sm">
          <FormContact />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col text-center lg:space-y-6 mt-10 lg:mt-0 px-4">
        <h1 className="text-3xl lg:text-5xl text-yellow font-Script leading-snug">
          "No hay tequila sin canción, ni noche sin sentimiento."
        </h1>
      </div>
    </div>
  );
};

export default Contact;
