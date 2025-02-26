import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="w-full h-screen justify-items-center space-y-4 lg:content-center gap-10 p-6">
      <a
        href="https://www.instagram.com/josecarloscervantesmx/"
        aria-label="Instagram de Jose Carlos Cervantes"
        className="flex items-center gap-4 w-64 h-52 bg-black border-2 border-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 lg:w-72"
      >
        <FaInstagram className="w-16 h-16 text-[#e95950]" />
        <h1 className="text-3xl font-bold text-gray group-hover:text-black">
          Instagram
        </h1>
      </a>

      <a
        href="https://www.facebook.com/JoseCarlosCervantesCantanteRanchero"
        aria-label="Facebook de Jose Carlos Cervantes"
        className="flex items-center gap-4 w-64 h-52 bg-black border-2 border-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 lg:w-72 "
      >
        <FaFacebook className="w-16 h-16 text-blue" />
        <h1 className="text-3xl font-bold text-gray group-hover:text-black">
          Facebook
        </h1>
      </a>

      <a
        href="https://www.tiktok.com/@josecarloscervantesmx"
        aria-label="TikTok de Jose Carlos Cervantes"
        className="flex items-center  gap-4 w-64 h-52 bg-black border-2 border-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 lg:w-72"
      >
        <FaTiktok className="w-16 h-16 text-[#ff0050]" />
        <h3 className="text-3xl font-bold text-gray group-hover:text-black">
          TikTok
        </h3>
      </a>
    </div>
  );
};

export default Socials;
