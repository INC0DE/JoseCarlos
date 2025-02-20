import React from "react";

const Where = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full max-w-3xl h-96">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4359447279283!2d-99.162474!3d19.432608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff2f53d4cf61%3A0x6f600279b9d5be69!2sCiudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1676811216355!5m2!1ses!2smx&zoom=10"
          loading="lazy"
          aria-label="Mapa de la Ciudad de México"
        ></iframe>
      </div>
    </div>
  );
};

export default Where;
