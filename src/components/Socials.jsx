import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="w-full h-screen flex flex-col space-y-6 p-5 justify-center">
      <a
        href="https://www.instagram.com/josecarloscervantesmx/"
        className="flex items-center group relative w-72 h-52 bg-black p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-white"
      >
        <FaInstagram color="#e95950" className="w-20 h-10" />

        <div>
          <h1 className="text-3xl font-bold text-gray group-hover:text-black">
            Instagram
          </h1>
        </div>
      </a>

      <a
        href="https://www.facebook.com/JoseCarlosCervantesCantanteRanchero?mibextid=wwXIfr&rdid=JEdC5nhbRXdMaoNg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15pQ5UgASe%2F%3Fmibextid%3DwwXIfr#"
        className="flex items-center group relative w-72 h-52 self-center bg-black p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-white"
      >
        <FaFacebook color="blue" className="w-20 h-10" />

        <div className="">
          <h3 className="text-3xl font-bold text-gray group-hover:text-black">
            Facebook
          </h3>
        </div>
      </a>

      <a
        href="https://www.tiktok.com/@josecarloscervantesmx?lang=es"
        className="flex justify-items-center items-center group relative w-72 h-52 self-end bg-black p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-white"
      >
        <FaTiktok color=" #ff0050" className="w-20 h-10" />
        <div className="">
          <h3 className="text-3xl font-bold text-gray group-hover:text-black">
            TikTok
          </h3>
        </div>
      </a>
    </div>
  );
};

export default Socials;
