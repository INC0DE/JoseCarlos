import FormContact from "./Form";
import { Input, Button } from "@heroui/react";

const Contact = () => {
  return (
    <div className="flex w-full min-h-screen  rounded-3xl">
      <div className="w-1/2 content-center justify-items-center space-y-20">
        <h1 className="text-2xl text-gray">
          ¡Contactame y celebremos un gran evento!
        </h1>
        <div className="w-80">
          <FormContact />
        </div>
      </div>

      <div className="w-1/2 content-center justify-items-center space-y-20">
        <div>
          <h1 className="text-9xl text-yellow font-Script">Ranchero</h1>
          <h1 className="text-4xl text-gray justify-self-end"> a tu rancho.</h1>
        </div>
        <div>
          <p className="text-2xl font-Baskerville text-whitelight">La tradicion mexicana que tu evento necesita.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
