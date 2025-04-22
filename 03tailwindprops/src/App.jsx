import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    username: "Vkp",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-400  text-black p-4 rounded-xl mb-4">TailWind test</h1>
      <Card username="chaiauercode" btnText="clickME"/>
      <Card username="vivek" btnText = "visit Me"/>
      <Card/>
      
    </>
  );
}

export default App;
