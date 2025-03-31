import { useState } from "react";
import { motion } from "framer-motion";
import Songs from "./Songs";
import Events from "./Events";
import Where from "./Where";
import Socials from "./Socials";

const items = [
  { id: 1, title: "Canciones", content: <Songs /> },
  { id: 2, title: "Eventos", content: <Events /> },
  { id: 3, title: "¿Dónde?", content: <Where /> },
  { id: 4, title: "Redes", content: <Socials /> },
];

const Browser = () => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div className="min-h-screen bg-whitelight rounded-3xl flex flex-col-reverse lg:flex-row items-center justify-center p-6 lg:p-12 gap-6">
      <motion.div
        key={selected.id}
        className="flex-1 w-full lg:w-1/2 flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div className="text-xl font-bold w-full h-full text-white">
          {selected.content}
        </motion.div>
      </motion.div>

      <div className="w-full lg:w-1/2 flex flex-col items-center gap-2 lg:gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className={`text-5xl lg:text-8xl font-bold transition-all duration-300 ${
              selected.id === item.id
                ? "text-white bg-black px-4 py-2 rounded-xl shadow-lg"
                : "text-brown hover:text-black"
            }`}
          >
            {item.title}.
          </button>
        ))}
      </div>
    </div>
  );
};

export default Browser;
