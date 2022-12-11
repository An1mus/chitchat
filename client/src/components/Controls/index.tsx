import React, {useEffect, useState} from 'react';
import styles from './Controls.module.scss';
import {observer} from "mobx-react-lite";
import {useUserStore} from "../../mobx/userStore";
import {connectWithNickName} from "../../api";

interface Props {
    isOpen: boolean,
    setOpen: (value: boolean) => void
}

const Controls: React.FC<Props> = observer(({isOpen, setOpen}) => {
    const user = useUserStore();
    const [name, setName] = useState('');

    useEffect(() => {
        if(user.nickName) {
            connectWithNickName(user.nickName);
            setName(user.nickName);
        }
    }, [])

    useEffect(() => {
        !user.nickName ? setOpen(true) : setOpen(false);
    }, [user.nickName]);

    const handleSubmit = () => {
        user.nickName = name
        connectWithNickName(name);
        setOpen(false);
    }

    return <div className={`${styles.nicknamePopup} ${!isOpen && styles.closed}`}>
        <button
            className={styles.closeButton}
            onClick={() => setOpen(false)}
        >
            x
        </button>

        <input
            type="text"
            value={name}
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