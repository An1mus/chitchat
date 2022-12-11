import React from 'react';
import './App.scss';
import {Chat, Controls} from "./components";
import {useUserStore} from "./mobx/userStore";

function App() {
    const user = useUserStore();

    return (
        <div className="App">
            <header>
                <h1>Welcome to ChitChat, {user.nickName}</h1>
                <Controls />
            </header>

            <Chat />
        </div>
    );
}

export default App;
