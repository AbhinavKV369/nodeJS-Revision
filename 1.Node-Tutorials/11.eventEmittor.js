const eventEmittor = require("events");

const customEmmittor = new eventEmittor();

customEmmittor.on("response",(name,id)=>{
    console.log("data recieved from "+ name,id);
});

customEmmittor.on("response",()=>{
    console.log("data recieved once more");
});

customEmmittor.emit("response","Abhinav",23);