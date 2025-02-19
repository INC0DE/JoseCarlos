import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Browser from "./components/Browser";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="overflow-hidden">
          <Hero />
          <Introduction />
          <Experience />
          <Browser />
          <Contact />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
