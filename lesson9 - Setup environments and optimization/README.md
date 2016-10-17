Is an optimization and splitting processes to "development" and "production".

## Usage

- `npm run dev` - start local server in 3000 port;
- `npm run prod` - build end production project files in `dist/` folder, where `server.bundle.js` is a main sever file for deplaying or somelike.

## Azure hosting

- try to understand how it work;
- `npm run prod` then run `dist/server.bundle.js`;
- be better if you find way how to run multiple servers in the same time(and we split server to server.bundle.js and api.bundle.js and it will be better);

## Server side rendering applied to prod

- https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering
- https://github.com/reactjs/react-router-tutorial/blob/master/lessons/14-whats-next/server.js
