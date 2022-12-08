import React from 'react';
import {observer} from "mobx-react-lite";
import {useUserStore} from "../../mobx/userStore";

const Controls: React.FC = observer(() => {
    const user = useUserStore();

    return <>
        <input type="text" placeholder={'nickname'} onChange={e => user.updateUserName(e.target.value)}/>
    </>;
});

export default Controls;