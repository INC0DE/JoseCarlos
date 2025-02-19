import { useState } from "react";
import { motion } from "framer-motion";
import Songs from "./Songs";
import Events from "./Events";
import Where from "./Where";
import Socials from "./Socials";

const items = [
  { id: 1, title: "Eventos", content: <Events />, size:"text-2xl" },
  { id: 2, title: "Canciones", content: <Songs />, size:"text-2xl" },
  { id: 3, title: "Lugares", content: <Where />, size:"text-3xl" },
  { id: 4, title: "Redes", content: <Socials />, size:"text-4xl" },
];

const Browser = () => {
  const [selected, setSelected] = useState(items[0]);
  return (
    <div id="browser" className="flex min-h-screen bg-whitelight ">
      <motion.div
        key={selected.id}
        className="flex-1 flex w-3/5 items-center justify-center content-center "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div className="text-xl font-bold w-full h-full text-white">
          {selected.content}
        </motion.div>
      </motion.div>

      <div className="w-2/5 flex flex-col gap-6 justify-center">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className={`text-8xl font-bold transition ${
              selected.id === item.id ? "text-white" : "text-black"
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
