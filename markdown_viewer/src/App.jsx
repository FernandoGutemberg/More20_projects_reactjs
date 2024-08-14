import { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';

import ToolBar from './components/ToolBar';

function App() {

  const [text, setText] = useState("# Olá, eu sou feito de markdown");

  const renderText = () => {
    return {__html: marked(text)};

  };

  const textAreaRef = useRef(null);

  return (
    <div className="app-container">
      <ToolBar />
      <textarea ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        ></textarea>
      <div dangerouslySetInnerHTML={renderText()}/> {/*div que vai exibir o texto */}
    </div>
  );
}

export default App;
