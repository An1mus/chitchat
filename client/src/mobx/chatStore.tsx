import {action, makeObservable, observable} from "mobx";
import React, {createContext} from "react";

export interface IMessage {
    date: string;
    message: string;
    author: string;
    uuid: string,
}

export class ChatStore {
    chat: IMessage[] = [];

    constructor() {
        makeObservable(this, {
            chat: observable,
            updateChat: action,
        })
    }

    updateChat(message: IMessage) {
        this.chat.push(message);
    }
}

export const chatStore = new ChatStore();
const context = createContext(chatStore);

export const useChatStore = () => React.useContext(context);