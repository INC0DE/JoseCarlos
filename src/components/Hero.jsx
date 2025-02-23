import Header from "./Header";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Josehero } from "../assets";
import { Image } from "@heroui/react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-brown via-black to-black pt-24 lg:pt-12">
      <div className="text-center justify-items-center lg:text-left space-y-5 px-6 lg:px-12 lg:w-1/2">
        <h1 className="text-yellow font-Script text-7xl md:text-9xl">
          Jose Carlos
        </h1>
        <h2 className="text-whitelight font-Baskerville text-[clamp(2rem,4vw,4rem)]">
          Cervantes
        </h2>
        <p className="text-sm font-semibold tracking-wide">CANTANTE</p>

        <div className="flex justify-center lg:justify-start gap-6 pt-8">
          <a
            href="https://www.instagram.com/josecarloscervantesmx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform transform hover:scale-110" />
          </a>
          <a
            href="https://www.facebook.com/JoseCarlosCervantesCantanteRanchero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform transform hover:scale-110" />
          </a>
          <a
            href="https://www.tiktok.com/@josecarloscervantesmx?lang=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform transform hover:scale-110" />
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-center mt-10 lg:mt-0">
        <Image
          alt="JoseCarlos"
          src={Josehero}
          className="w-full max-h-[60vh] md:max-h-[70vh] lg:max-h-[100vh] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
