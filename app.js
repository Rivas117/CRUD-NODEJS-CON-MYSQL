const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use("/", require("./router"));

app.listen(7777,()=>{
    console.log("Servidor funcional en http://localhost:7777");
});