import styles from './Users.module.scss';
import {IUser, Status, useChatStore} from "../../mobx/chatStore";
import {observer} from "mobx-react-lite";

const Users = observer(() => {
    const chatStore = useChatStore();
    return <div className={styles.usersList}>
        {chatStore.connectedUsers.map((user: IUser) => <div key={user.id}>
            <div className={styles.user}>
                {user.nickname}

                {
                    user.status === Status.Creator && <div className={styles.status}>
                        Creator
                    </div>
                }
            </div>
        </div>)}
    </div>
})

export default Users;