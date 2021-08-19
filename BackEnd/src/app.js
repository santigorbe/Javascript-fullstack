const express = require("express");
const app = express();
const cors = require("cors");

app.set("port", process.env.PORT || 4000);

app.use(cors())
app.listen(app.get("port"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(require("./routes/employees.routes"))

module.exports = app;