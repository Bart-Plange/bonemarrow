import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, NotFound, ChatDashboard, Appointment, AdminDashboard, AboutPage } from "./pages";
import {Navbar, Footer, Service, Contact, Chatbot, Terms, PrivacyPolicy} from "./components";
import EducationalResources from "./pages/EducationalResources";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatdashboard" element={<ChatDashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<EducationalResources />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
