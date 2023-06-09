import { useState, useEffect } from "react";
import "./App.css";
import {motion} from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      }) 

      }
   
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    
    }, 
    text: {
      height: 90,
      width: 90,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="App">
      <h1 onMouseEnter = {textEnter} onMouseLeave={textLeave} className="title">Hello World</h1>
      <motion.div 
        className="cursor"
        variants={variants}
        animate = {cursorVariant}
      />
 
    </div>
  );
}

export default App;
