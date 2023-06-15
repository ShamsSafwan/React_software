import "./styles.css";
import { useState } from "react";
import { marked } from "marked";



export default function App() {

  const [text, setText]=useState(`
  # H1 Welcome to my React Markdown Previewer!
  ## H2 use formatting syntax to see the output on desired format. Use the cheatsheet from link below
  [Click here for markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/)
  \`code\`
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
1. First item
2. Second item
  > you can delete all the text that is preloaded on editor and start writing yours
  ![alt text](image.jpg)
  **bold text**
  `);

  function handleInputChange(e){
    setText(e.target.value);
  }
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <textarea id="editor" onChange={handleInputChange} value={text}></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text,{ breaks: true }) }}
      ></div>
      
    </div>
  );
}
