# ChitChat

The chat app with React, TypeScript and Nest, containing a single chat room.<br/>
No data is chat data is saved.<br/>
User nicknames are saved in localstorage only.

## Running the server

```
cd server 
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Server side application will run at `localhost` port `3001`

## Running the client

```
cd client
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Running with docker

The `docker-compose.yml` file is present in the root directory.<br/>
Use `docker-compose up` to run both client and server within docker container.
