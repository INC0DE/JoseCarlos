import { useState } from "react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <div id="experience" className="">
      <div className="w-96 h-min mt-5 justify-self-center content-center space-y-5">
        <h1 className="text-5xl text-gray self-start font-medium">
          El recorrido de un
        </h1>
        <div className="flex justify-self-end">
          <h1 className="text-9xl font-Script text-yellow text-center">
            Ranchero
          </h1>
          <h1 className="text-2xl text-whitelight font-extralight text-end self-end">
            experiencia.
          </h1>
        </div>
      </div>

      <div className="min-h-screen p-2 content-center">
        <Timeline />
      </div>
    </div>
  );
};

export default Experience;
