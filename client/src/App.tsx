import React, {useState} from 'react';
import './App.scss';
import {Chat, Controls} from "./components";
import {useUserStore} from "./mobx/userStore";

function App() {
    const user = useUserStore();
    const [settingsOpen, setSettingsOpen] = useState(false);

    return (
        <div className="App">
            <header onClick={() => setSettingsOpen(true)}>
                <h1>Welcome to ChitChat, {user.nickName}</h1>
                <span>edit</span>
            </header>

            <Chat />
            <Controls isOpen={settingsOpen} setOpen={setSettingsOpen} />

            <footer>
                <small>Nothing is saved in this chat</small>
            </footer>
        </div>
    );
}

export default App;
