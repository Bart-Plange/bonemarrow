import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, NotFound, ChatDashboard, Appointment, AdminDashboard, AboutPage, Dashboard, EducationalResources } from "./pages";
import {Navbar, Footer, Service, Contact, Chatbot, Terms, PrivacyPolicy, ProtectedRoute, BubbleEffect, ScrollToTop} from "./components"
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <BubbleEffect />
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      
        {/* ✅ Admin-Only Routes */}
        <Route element={<ProtectedRoute adminOnly={true} />}>
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                </Route>
      </Routes>
      <Chatbot />
      <ThemeToggle />
      <Footer />
    </Router>
  );
}

export default App;
