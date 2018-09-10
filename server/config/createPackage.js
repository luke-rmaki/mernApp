import { writeFileSync } from 'fs';

const data = `
{
  "name": "mernapp",
  "version": "1.0.0",
  "description": "A template for MERN apps",
  "main": "server.js",
  "scripts": {
    "start": "node server/server"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.3",
    "concurrently": "^4.0.1",
    "express": "^4.16.3",
    "mongoose": "^5.2.14",
    "nodemon": "^1.18.4",
    "react": "^16.5.0",
    "react-dom": "^16.5.0"
  }
}
`;

writeFileSync('../../package.json', data, (err) => {
  if (err) {
    console.log(err);
  }
});
