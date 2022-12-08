import {action, makeObservable, observable} from "mobx";
import React, {createContext} from "react";

export class UserStore {
    userName: string = '';

    constructor() {
        makeObservable(this, {
            userName: observable,
            updateUserName: action
        })
    }

    updateUserName(name: string) {
        this.userName = name;
    }
}

export const userStore = new UserStore();
const context = createContext(userStore);

export const useUserStore = () => React.useContext(context);

