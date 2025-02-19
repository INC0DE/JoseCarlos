import FormContact from "./Form";
import { Input, Button , Image} from "@heroui/react";
import {image3} from "../assets"

const Contact = () => {
  return (
    <div id="contact" className="flex w-full min-h-screen  rounded-3xl">
      <div className="w-1/2 content-center justify-items-center space-y-20">
        <h1 className="text-2xl text-gray">
          ¡Contactame y celebremos un gran evento!
        </h1>
        <div className="w-80">
          <FormContact />
        </div>
      </div>

      <div className="w-1/2 content-center justify-items-center px-5 space-y-20">
        <div>
          <h1 className="text-5xl text-yellow font-Script">
            "No hay tequila sin canción, ni noche sin sentimiento."
          </h1>
          <h1 className="text-2xl text-end font-Baskerville">
            Jose Carlos Cervantes.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
