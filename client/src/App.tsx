import React from 'react';
import './App.scss';
import {Chat, Controls} from "./components";

function App() {
    return (
        <div className="App">
            <header>
                <h1>ChitChat</h1>
                <Controls />
            </header>

            <Chat />
        </div>
    );
}

export default App;
