import io from 'socket.io-client';

const API_URL = `http://localhost:3001/`;

export const socket = io(API_URL);

export const sendMessage = (message: string) =>  {
    socket.emit('message', { message, author: 'me', date: new Date() });
}