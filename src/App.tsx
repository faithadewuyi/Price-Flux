import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`text-black dark:text-white dark:bg-gray-900`}>
      {/* Navbar */}
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
 
      <main className="bg-gradient-to-b from-greenLight to-greenDark min-h-screen pt-[80px] p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
