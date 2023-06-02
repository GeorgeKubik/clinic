import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/index";
import Header from "../Header/index";
import Footer from "../Footer/index";
import ServicesPage from "../pages/ServicesPage/index";
import SpecialistsPage from "../pages/SpecialistsPage/index";
import PricePage from "../pages/PricePage/index";
import ContactPage from "../pages/ContactPage";
import About from "../About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/specialists" element={<SpecialistsPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
