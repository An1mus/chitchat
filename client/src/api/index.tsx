import io from 'socket.io-client';
import uuid from 'react-uuid';

const API_URL = `https://websocketchattest.herokuapp.com/`;

export const socket = io(API_URL);

export const sendMessage = (message: string, nickname: string) => {
	socket.emit('message', {
		message,
		author: nickname,
		uuid: uuid(),
		date: new Date(),
	});
};

export const connectWithNickName = (nickname: string) => {
	socket.emit('userConnected', nickname);
};
