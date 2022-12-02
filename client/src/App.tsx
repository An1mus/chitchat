import React from 'react';
import './App.scss';
import Chat from "./Chat";

function App() {
    return (
        <div className="App">
            <header>
                <h1>ChitChat</h1>
                <h4>Send a message to creator</h4>
            </header>

            <Chat />
        </div>
    );
}

export default App;
