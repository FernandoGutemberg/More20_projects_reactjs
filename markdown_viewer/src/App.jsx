import { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';

import ToolBar from './components/ToolBar';

function App() {

  const [text, setText] = useState(localStorage.getItem("markdownText") || "# Olá, eu sou feito de markdown");

  const textAreaRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("markdownText", text);
  }, [text]);

  const renderText = () => {
    return { __html: marked(text) };

  };

  const insertText = (before, after) => {
    const textArea = textAreaRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const previousText = textArea.value;
    const beforeText = previousText.substring(0, start);
    const selectedText = previousText.substring(start, end);
    const afterText = previousText.substring(end);

    const newText = `${beforeText}${before}${selectedText}${after}${afterText}`;

    setText( newText );

    textArea.focus();


  };

 
  //

  return (
    <div className="app-container">
      <ToolBar insertText={insertText} />
      <textarea ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div dangerouslySetInnerHTML={renderText()} /> {/*div que vai exibir o texto */}
    </div>
  );
};

export default App;
