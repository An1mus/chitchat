import React, {useState} from 'react';
import styles from './Inputs.module.scss';
import {sendMessage} from "../../api";
import {useUserStore} from "../../mobx/userStore";
import {observer} from "mobx-react-lite";

const Inputs: React.FC = observer(() => {
    const [message, setMessage] = useState('');
    const user = useUserStore();

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        sendMessage(message, user.userName);
        setMessage('');
    }

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