import React, {useEffect, useState} from 'react';
import styles from './Controls.module.scss';
import {observer} from "mobx-react-lite";
import {useUserStore} from "../../mobx/userStore";
import {connectWithNickName} from "../../api";

const Controls: React.FC = observer(() => {
    const [isOpen, setOpen] = useState(false);
    const [name, setName] = useState('');
    const user = useUserStore();

    useEffect(() => {
        if(user.nickName) connectWithNickName(user.nickName);
    }, [])

    useEffect(() => {
        !user.nickName ?
            setOpen(false) :
            setOpen(true);
    }, [user.nickName]);

    const handleSubmit = () => {
        user.nickName = name
        connectWithNickName(name);
        setOpen(false);
    }

    return <div className={`${styles.nicknamePopup} ${isOpen && styles.closed}`}>
        <button
            className={styles.closeButton}
            onClick={() => setOpen(false)}
        >
            x
        </button>

        <input
            type="text"
            value={user.nickName || name}
            placeholder={'nickname'}
            onChange={e => setName(e.target.value)}
        />
        <button
            className={styles.submitButton}
            onClick={() => handleSubmit()}
        >
            submit
        </button>
    </div>;
});

export default Controls;