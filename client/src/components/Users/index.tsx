import styles from './Users.module.scss';
import {IUser, useChatStore} from "../../mobx/chatStore";
import {observer} from "mobx-react-lite";

const Users = observer(() => {
    const chatStore = useChatStore();
    return <div className={styles.usersList}>
        {chatStore.connectedUsers.map((user: IUser) => <div key={user.id}>
            <div className={styles.user}>
                {user.nickname}
            </div>
        </div>)}
    </div>
})

export default Users;