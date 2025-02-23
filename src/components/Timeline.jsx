import { motion } from "framer-motion";

const timelineData = [
  {
    year: "1979 - Nacimiento",
    description:
      "Nacido el 10 de Mayo de 1979 en la Ciudad de México. Desde pequeño mostró interés por el canto, influenciado por artistas como Javier Solís, Pedro Infante y Vicente Fernández.",
    image: "url-de-imagen-1",
  },
  {
    year: "1991 - Comienza a Cantar",
    description:
      "A los 12 años comienza a cantar en estudiantinas, mostrándose como un cantante con gran pasión por la música.",
    image: "url-de-imagen-2",
  },
  {
    year: "1997 - Ingreso al Rock en Español",
    description:
      "A los 18 años incursiona en el rock en español, ofreciendo una propuesta original en lugares como Rock Stock y Rockotitlán.",
    image: "url-de-imagen-3",
  },
  {
    year: "2003 - Regreso a la música",
    description:
      "Después de terminar sus estudios, José Carlos retoma su carrera musical y toma clases formales de canto con la Lic. Laura Marielli y el Tenor Carlos Courrech.",
    image: "url-de-imagen-4",
  },
  {
    year: "2015 - Inicio de su carrera ranchera",
    description:
      "José Carlos se adentra en la música ranchera, incorporando un repertorio de canciones de grandes artistas como Alejandro Fernández, Vicente Fernández, Pedro Infante.",
    image: "url-de-imagen-5",
  },
  {
    year: "2023 - Gira por Europa",
    description:
      "José Carlos es invitado a una gira por Europa cantando para el grupo de ballet Folckórico “México de mis amores”.",
    image: "url-de-imagen-6",
  },
];

const Timeline = () => {
  return (
    <div className="w-full px-4 sm:px-10 pb-5">
      <div className="relative overflow-y-auto scrollbar-hide max-h-screen">
        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center py-10 space-y-6 md:space-y-0 md:space-x-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="w-full md:w-1/3 flex justify-center relative">
                <motion.img
                  src={item.image}
                  alt={item.year}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              </div>

              <div className="w-full md:w-2/3 px-4 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-semibold text-yellow">
                  {item.year}
                </h2>
                <p className="text-md sm:text-lg text-whitelight mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
