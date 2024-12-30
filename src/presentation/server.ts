import express from 'express';
import router from './routes';

const server = express();

//* Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//* Routes
server.use('/', router)

//* Listener
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

export default server;
