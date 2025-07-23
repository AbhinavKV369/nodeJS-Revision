const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

// app.get("/",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"./index.html"));
// });

// app.all("*",(req,res)=>{
//     res.end("No such page found")
// })

app.listen(3000,()=>{
    console.log("Server connected at 3000")
})