import {action, makeObservable, observable} from "mobx";
import React, {createContext} from "react";

export interface IMessage {
    date: string;
    message: string;
    author: string;
    uuid: string,
}

export interface IUser {
    id: string;
    nickname: string;
}

export class ChatStore {
    chat: IMessage[] = [];
    connectedUsers: IUser[] = [];

    constructor() {
        makeObservable(this, {
            chat: observable,
            updateChat: action,
            connectedUsers: observable,
            updateConnectedUsers: action,
        })
    }

    updateChat(message: IMessage) {
        this.chat.push(message);
    }

    updateConnectedUsers(users: IUser[]) {
        this.connectedUsers = users;
    }
}

export const chatStore = new ChatStore();
const context = createContext(chatStore);

export const useChatStore = () => React.useContext(context);