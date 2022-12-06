import {makeAutoObservable} from "mobx";
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
        makeAutoObservable(this);
    }

    updateChat(message: IMessage) {
        this.chat.push(message);
    }
}

export const chatStore = new ChatStore();
const context = createContext(chatStore);

export const useChatStore = () => React.useContext(context);