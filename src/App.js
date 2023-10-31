import { Route, Routes } from "react-router-dom"
import './App.css';
import Contact from "./Pages/Contact/Contact";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Footer from "./Components/Footer/Footer";
import Head_Gear from "./Pages/Information/Head_Gear/Head_Gear";
import Face_Protection from "./Pages/Information/Face_Protection/Face_Protection";
import Hearing_Protection from "./Pages/Information/Hearing_Protection/Hearing_Protection";
import Respiratory_Protection from "./Pages/Information/Respiratory_Protection/Respiratory_Protection";
import Hand_Gloves from "./Pages/Information/Hand_Gloves/Hand_Gloves";
import Foot_Wear from "./Pages/Information/Foot_Wear/Foot_Wear";
import Protective_Clothing from "./Pages/Information/Protective_Clothing/Protective_Clothing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/HeadGear" element={<Head_Gear />} />
        <Route path="/FaceProtection" element={<Face_Protection />} />
        <Route path="/HearingProtection" element={<Hearing_Protection />} />
        <Route path="/RespiratoryProtection" element={<Respiratory_Protection />} />
        <Route path="/HandGloves" element={<Hand_Gloves />} />
        <Route path="/FootWear" element={<Foot_Wear />} />
        <Route path="/ProtectiveClothing" element={<Protective_Clothing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
