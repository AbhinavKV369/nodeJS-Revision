const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

const first = readFileSync("./folder/subfolder/first.txt", "utf-8");
const second = readFileSync("./folder/subfolder/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./folder/subfolder/writtenSync.txt",`This is the written file:${first},${second}`,
  { flag: 'a' }
);


console.log("Start");

readFile("./folder/subfolder/first.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err);
    }
    const second = result;
    writeFile("./folder/subfolder/writtenSync.txt",`Here is the result:${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("Done the writing of file");
    });
})