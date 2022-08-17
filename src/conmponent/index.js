import React, { useState } from "react";

function Note() {
   const [text, setText] = useState("");
   const [ug, setUg] = useState("hi");
   const handleChange = (e) => {
      setText(e.target.value);
   };
   const changeText = () => {
      setUg(text);
   };
   return (
      <div className="Note'">
         <input onChange={handleChange} />
         <button onClick={changeText}>Add</button>
         <p>{ug}</p>
      </div>
   );
}

export default Note;
