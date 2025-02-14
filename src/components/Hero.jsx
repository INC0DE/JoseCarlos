import Header from "./Header";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { socials } from "../constants";
import { Josehero } from "../assets";
import { Image } from "@heroui/react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen pt-10 bg-gradient-to-br from-brown from-10% via-black via-50% to-black to-10%">

      <div className="absolute top-2 left-0 w-full">
        <Header />
      </div>

      <div className="flex items-center justify-center h-screen px-20">
        <div className="w-1/2 space-y-32 ">
          <div className="space-y-4 justify-items-center">
            <h1 className="text-9xl text-yellow font-Script">Jose Carlos</h1>
            <h1 className="text-5xl text-end text-whitelight font-Baskerville ml-5">
              Cervantes
            </h1>
            <h1 className="text-sm font-semibold ml-3">CANTANTE</h1>
          </div>

          <div className="flex justify-center gap-8">
            <a href="https://www.instagram.com/incodeweb/">
              <FaInstagram className="w-6 h-8" />
            </a>
            <a href="https://www.instagram.com/incodeweb/">
              <FaFacebook className="w-6 h-8" />
            </a>
            <a href="https://www.instagram.com/incodeweb/">
              <FaTiktok className="w-6 h-8" />
            </a>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-end overflow-hidden">
          <Image
            alt="JoseCarlos"
            src={Josehero}
            className="w-full max-h-[100vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
