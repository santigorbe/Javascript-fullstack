require("./database");
const morgan=require("morgan");
const app = require("./app");
app.use(morgan("dev"));

console.log("Servidor en puerto",app.get("port") );