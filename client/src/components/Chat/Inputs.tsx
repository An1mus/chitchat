import React, {useEffect, useState} from 'react';
import styles from './Inputs.module.scss';
import {sendMessage, socket} from "../../api";
import {useUserStore} from "../../mobx/userStore";
import {observer} from "mobx-react-lite";
import {useChatStore} from "../../mobx/chatStore";

const Inputs: React.FC = observer(() => {
    const [message, setMessage] = useState('');
    const user = useUserStore();
    const chat = useChatStore();

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        sendMessage(message, user.nickName);
        setMessage('');
    }

    useEffect(() => {
        socket.on('connectedUsers', (users) => {
            chat.updateConnectedUsers(users);
        })

        return () => {
            socket.removeListener('connectedUsers');
        }
    }, [])

    return <form className={styles.inputs}>
        <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
        />
        <button onClick={handleSubmit}>send</button>
    </form>;
});

export default Inputs;