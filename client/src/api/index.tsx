import io from 'socket.io-client';
import uuid from "react-uuid";

const API_URL = `http://localhost:3001/`;

export const socket = io(API_URL);

export const sendMessage = (message: string, nickname: string) =>  {
    socket.emit('message', { message, author: nickname, uuid: uuid(), date: new Date() });
}
