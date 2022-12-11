import React, {useEffect, useRef} from 'react';
import styles from './Chat.module.scss';
import Inputs from "./Inputs";
import {IMessage, useChatStore} from "../../mobx/chatStore";
import {observer} from "mobx-react-lite";
import {socket} from "../../api";
import Users from "../Users";

const ScrollOptions: any = {block: "end", inline: "nearest"};

const Chat: React.FC = observer(() => {
    const chatStore = useChatStore();
    const scrollElement = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        socket.on('message', (message: IMessage) => {
            chatStore.updateChat(message);
        });

        return () => {
            socket.removeListener('message');
        };
    }, []);

    useEffect(() => {
        scrollElement.current?.scrollIntoView(ScrollOptions);
    })

    return <main className={styles.container}>
        <Users />
        
        <div className={styles.chatContainer}>
            <section
                className={styles.chatBox}
            >
                {
                    chatStore.chat.map(message => {
                        return <div key={message.uuid} className={styles.message}>
                            <div className={styles.author}>
                                {message.author}
                            </div>
                            <div className={styles.text}>
                                {message.message}
                            </div>
                        </div>
                    })
                }
                <div ref={scrollElement}/>
            </section>
            <Inputs />
        </div>
    </main>;
});

export default Chat;