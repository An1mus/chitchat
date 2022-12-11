import React from 'react';
import styles from './Controls.module.scss';
import {observer} from "mobx-react-lite";
import {useUserStore} from "../../mobx/userStore";

const Controls: React.FC = observer(() => {
    const user = useUserStore();

    return <div className={styles.nicknamePopup}>
        <button className={styles.closeButton}>x</button>
        <input type="text" placeholder={'nickname'} onChange={e => user.updateUserName(e.target.value)}/>
        <button className={styles.submitButton}>submit</button>
    </div>;
});

export default Controls;