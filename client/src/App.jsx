import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import Contact from "./components/Contact";

function App() {
  // Define state for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <BrowserRouter>
        <Routes>
          {/* Pass darkMode state and toggleDarkMode function to each page */}
          <Route path="/" element={<LoginPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/signup" element={<SignupPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/landing" element={<LandingPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} /> {/* Route for the Contact page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
