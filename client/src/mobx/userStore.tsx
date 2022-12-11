import {computed, makeObservable, observable} from "mobx";
import React, {createContext} from "react";

const LOCAL_STORAGE_NICK_NAME = 'LOCAL_STORAGE_USER_NAME';

export class UserStore {
    _nickName = localStorage.getItem(LOCAL_STORAGE_NICK_NAME) || '';

    constructor() {
        makeObservable(this, {
            _nickName: observable,
            nickName: computed,
        });
    }

    get nickName() {
        return this._nickName;
    }

    set nickName(value) {
        this._nickName = value;
        localStorage.setItem(LOCAL_STORAGE_NICK_NAME, value)
    }
}

export const userStore = new UserStore();
const context = createContext(userStore);

export const useUserStore = () => React.useContext(context);

