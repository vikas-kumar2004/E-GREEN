import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import UserForm from "./pages/UserForm";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-15 h-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/userform" element={<UserForm/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
