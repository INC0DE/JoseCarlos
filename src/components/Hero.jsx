import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Josehero } from "../assets";
import { Image } from "@heroui/react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen pt-14 bg-gradient-to-br from-brown from-10% via-black via-50% to-black to-10%">
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen px-6 md:px-12 lg:px-20">
        <div className="w-full justify-items-center lg:w-1/2 space-y-16 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-yellow font-Script">
              Jose Carlos
            </h1>
            <h1 className="text-3xl justify-self-center md:text-4xl lg:text-5xl text-whitelight font-Baskerville">
              Cervantes
            </h1>
            <h1 className="text-sm justify-self-center md:text-base font-semibold">CANTANTE</h1>
          </div>

          <div className="flex justify-center lg:justify-start gap-6">
            <a
              href="https://www.instagram.com/josecarloscervantesmx/"
              target="_blank"
            >
              <FaInstagram className="w-6 h-6 md:w-8 md:h-8 hover:text-yellow transition" />
            </a>
            <a
              href="https://www.facebook.com/JoseCarlosCervantesCantanteRanchero"
              target="_blank"
            >
              <FaFacebook className="w-6 h-6 md:w-8 md:h-8 hover:text-yellow transition" />
            </a>
            <a
              href="https://www.tiktok.com/@josecarloscervantesmx?lang=es"
              target="_blank"
            >
              <FaTiktok className="w-6 h-6 md:w-8 md:h-8 hover:text-yellow transition" />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-end mt-10 lg:mt-0">
          <Image
            alt="JoseCarlos"
            src={Josehero}
            className="w-full max-h-[70vh] md:max-h-[80vh] lg:max-h-[100vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
