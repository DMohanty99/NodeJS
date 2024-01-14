const fs= require("fs");
const os= require("os");
console.log(os.cpus().length);  
//sync
//fs.writeFileSync('./test.txt',"hi there!");

//async
//fs.writeFile("./Test1.txt","Hi There",(err)=>{console.log(err)});

//sync file read
// result=fs.readFileSync('phoneDict.txt','utf-8');
// console.log(result);

//async read
// fs.readFile("./phoneDict.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error ",err);
//     }else{
//         console.log(result);;
//     }
// });

//file append
//fs.appendFileSync('test.txt',new Date().getDate().toLocaleString()+"\n");
//cpSync
//unlinkSync
//fs.mkdir

//event queue -> event loop -> thread pool(default value = 5, 
//used for blocking calls)

// we should always write non blocking code