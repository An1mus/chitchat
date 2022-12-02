import React from 'react';
import styles from './Chat.module.scss';

const Chat: React.FC = () => {
    return <div className={styles.container}>
        Chat
        <div className={styles.message}>
            <div className={styles.author}>
                author
            </div>
            <div className={styles.text}>
                text
            </div>
        </div>
    </div>;
}

export default Chat;