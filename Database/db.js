const mysql = require("mysql");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "NodeJs",
    port: 3306
})

conexion.connect((error)=>{
    if(error){
        console.error("Error de conexion: "+error);
        return
    }
    console.log("Conectado a la Base de Datos")
})

module.exports = conexion;