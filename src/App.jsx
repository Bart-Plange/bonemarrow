import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, NotFound, ChatDashboard, Appointment, Stories, AdminDashboard } from "./pages";
import {Navbar, Footer, About, Service, Contact, Chatbot} from "./components";
import EducationalResources from "./pages/EducationalResources";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatdashboard" element={<ChatDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<EducationalResources />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
