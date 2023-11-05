import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor.jsx';

function App() {
    const [text, setText] = useState('');
    const [ro, setRo] = useState(false);

    const handleRo = (event) => {
        const checked = event.currentTarget.value;
        setRo(checked);
    };

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <span>Read only</span>
            <input type="checkbox" value={ro} onChange={handleRo} />
            <Editor text={text} onChange={setText} readOnly={ro} />
        </div>
    );
}

export default App;
