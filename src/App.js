import "./styles.css";
import { useState } from "react";
function TextHolder  ({ onInputChange }){
  return(
    <textarea id="editor"  onChange={onInputChange}></textarea>
  );
}

function Preview({ value }) {
  return (
    <div id ="preview" >{ value }</div>
  );
}
export default function App() {

  const [text, setText]=useState("");

  function handleInputChange(e){
    setText(e.target.value);
  }
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <TextHolder onInputChange={handleInputChange}/>
      <Preview value={text} />
      
    </div>
  );
}
