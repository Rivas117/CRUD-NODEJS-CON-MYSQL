const express = require("express");
const router = express.Router();

const conexion = require("./Database/db");

router.get("/",(req, res)=>{
    conexion.query("Select * From Users", (error, results)=>{
       if(error){
        throw error;
       } else{
        res.send(results);
       }
    })
})

module.exports = router;