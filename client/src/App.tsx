import React from 'react';
import './App.scss';
import {Chat, Controls} from "./components";

function App() {
    return (
        <div className="App">
            <header>
                <span>
                    <h1>ChitChat</h1>
                    <h4>Send a message to creator</h4>
                </span>
                <Controls />
            </header>

            <Chat />
        </div>
    );
}

export default App;
