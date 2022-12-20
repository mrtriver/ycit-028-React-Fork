import { useEffect } from "react";
import { useState } from "react";

export default function App() {  
  const [borderColor, setBorderColor] = useState(false);
  let borderColorClassName
  if (borderColor) {
    borderColorClassName = "border-red-600";
  }else {
    borderColorClassName = "border-yellow-600";
  }

  useEffect(() => {
    console.log("setInterval begins");
    setInterval(() => {
      setBorderColor((state)=>!state)
     
    }, 2000)
   }, [])



  return (
    <div className="flex flex-col"> 
      <h1>My App</h1>
            <span className={`w-4 h-4 border-4 rounded ${borderColorClassName}`}/>
            <span className="w-4 h-4 border-4 rounded border-black"/>
            <span className="w-4 h-4 border-4 rounded border-black"/>
    </div>
  );
}