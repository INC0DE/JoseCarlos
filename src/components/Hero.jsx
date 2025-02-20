import Header from "./Header";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Josehero } from "../assets";
import { Image } from "@heroui/react";

const Hero = () => {
  return (
    <div className="w-full max-h-screen pt-32 bg-gradient-to-br from-brown from-10% via-black via-50% to-black to-10% lg:pt-12 ">
      <div className="items-center  h-screen  lg:flex xl:px-20">
        <div className="space-y-32 justify-self-center lg:w-1/2 ">
          <div className="space-y-4 justify-items-center">
            <h1 className="text-7xl text-yellow font-Script sm:text-9xl">
              Jose Carlos
            </h1>
            <h1 className="w-full text-5xl text-center text-whitelight font-Baskerville ml-5 ">
              Cervantes
            </h1>
            <h1 className="text-sm font-semibold ml-3">CANTANTE</h1>
          </div>

          <div className="flex justify-center gap-8">
            <a href="https://www.instagram.com/josecarloscervantesmx/">
              <FaInstagram className="w-6 h-8" />
            </a>
            <a href="https://www.facebook.com/JoseCarlosCervantesCantanteRanchero?mibextid=wwXIfr&rdid=JEdC5nhbRXdMaoNg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15pQ5UgASe%2F%3Fmibextid%3DwwXIfr#">
              <FaFacebook className="w-6 h-8" />
            </a>
            <a href="https://www.tiktok.com/@josecarloscervantesmx?lang=es">
              <FaTiktok className="w-6 h-8" />
            </a>
          </div>
        </div>

        <div className="hidden w-full lg:w-1/2 flex justify-items-center items-end   lg:block mt-0 ">
          <Image
            alt="JoseCarlos"
            src={Josehero}
            className="w-full max-h-[70vh] md:max-h-[70vh] lg:max-h-[85vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
