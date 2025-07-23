const { error } = require("console");
const { createReadStream } = require("fs");

// for(let i = 0;i<=500;i++){
// writeFileSync("./folder/subfolder/bigFile.txt",`Hello world ${i}\n` ,{flag:"a"});
// }

const stream = createReadStream("./folder/subfolder/bigFile.txt", {
  highWaterMark: 10000,
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error",(error)=>{
    console.log(error);
})
