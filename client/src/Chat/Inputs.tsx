import React, {useState} from 'react';
import styles from './Inputs.module.scss';
import {sendMessage} from "../api";

const Inputs: React.FC = () => {
    const [message, setMessage] = useState('');
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        sendMessage(message)
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
}

export default Inputs;