import io from 'socket.io-client';
import uuid from "react-uuid";

const API_URL = `http://localhost:3001/`;

export const socket = io(API_URL);

export const sendMessage = (message: string) =>  {
    socket.emit('message', { message, author: 'me', uuid: uuid(), date: new Date() });
}