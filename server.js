require('dotenv').config();
const http = require("http");
require("./config/dbconnect");
const app = require("./App/app");

const PORT = process.env.PORT || 1000

//server
const server = http.createServer(app);
server.listen(PORT,
   ()=> console.log(`The site is live on http://localhost:${PORT}`));