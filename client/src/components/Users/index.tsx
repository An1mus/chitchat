import styles from './Users.module.scss';
import {IUser, useChatStore} from "../../mobx/chatStore";

const Users = () => {
    const chatStore = useChatStore();
    return <div className={styles.user}>
        {chatStore.connectedUsers.map((user: IUser) => <div key={user.id}>
            {user.nickname}
        </div>)}
    </div>
}

export default Users;