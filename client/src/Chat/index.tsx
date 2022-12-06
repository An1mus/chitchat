import React, {useEffect} from 'react';
import styles from './Chat.module.scss';
import Inputs from "./Inputs";
import {IMessage, useChatStore} from "../mobx/chatStore";
import {observer} from "mobx-react-lite";
import {socket} from "../api";

const Chat: React.FC = observer(() => {
    const chatStore = useChatStore();

    useEffect(() => {
        socket.on('message', (message: IMessage) => {
            console.log(message);
            chatStore.updateChat(message)
        });
    }, []);

    return <main className={styles.container}>
        <section className={styles.chatBox}>
            {
                chatStore.chat.map(message => {
                    return <div key={message.message + message.author} className={styles.message}>
                        <div className={styles.author}>
                            {message.author}
                        </div>
                        <div className={styles.text}>
                            {message.message}
                        </div>
                    </div>
                })
            }
        </section>
        <Inputs/>
    </main>;
});

export default Chat;