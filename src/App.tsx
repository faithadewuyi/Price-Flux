import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import Coin from "./pages/Coin"
import { useState } from "react"


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
    <div className={`dark:bg-white  text-black dark:text-white
    
    Light bg-gradient-to-b from-greenLight to-greenDark h-[100vh]`} >
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode=
      {isDarkMode}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:coinId" element={<Coin/>}/>
      </Routes>
    </div>
  )
}

export default App
