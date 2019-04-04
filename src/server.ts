import http from "http";
import Router from './utils/express_app'

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const { PORT = 3000 } = process.env;
const server = http.createServer( Router );

server.listen(PORT, () =>
  console.log( `Server is running http://localhost:${ PORT }` )
);
