import { useState } from "react";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./context/Theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    const eleMent = document.querySelector('html').classList
    eleMent.remove("light", "dark")
    eleMent.add(themeMode)
  }, [themeMode])



  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>
        <Card/>
        <div className="w-full max-w-sm mx-auto">{/* Card */}</div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
