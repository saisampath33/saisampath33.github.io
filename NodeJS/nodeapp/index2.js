import fs from 'fs';

// fs.writeFile("myfile.txt", "Hello, World!", (err) => {
//     if (err)  throw err;
// });

// fs.appendFile("myfile.txt","Hello World\n",(err)=>{
//     if(err) throw err;
// })

// fs.readFile("about.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// fs.rename("myfile.txt", "newfile.txt", (err) => {
//     if(err) throw err;
// }) //only run one time to change file name

fs.unlink("myfile.txt", (err) => {
    if(err) throw err;
    console.log("File deleted successfully");
});