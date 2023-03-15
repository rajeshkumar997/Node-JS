// const fs = require('fs');
// fs.writeFileSync("hello2.txt", "hello world");

//console.log("-->>", __dirname);

// const http = require('http');
// http.createServer((req, resp) => {
//     resp.write("<h1>hello this is rajesh</h1>");
//     resp.end();
// }).listen(4500);

////////////////all about pacakage.json///////////////

// const colors = require('colors');
// console.log("hello".red);

// console.log("trying nodemon");

/////////////////make a simple API/////////

// const http = require('http');
// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'content-type': 'application\json' });
//     resp.write(JSON.stringify({ name: 'rajesh', email: 'raj123@gmail.com' }));
//     resp.end();
// }).listen(5000)

//////////////////////Input from commond line ////////////

// console.log(process.argv)
// console.log(process.argv[2])

// const fs = require('fs');
// const input = process.argv;
// //fs.writeFileSync(input[2], input[3])
// if (input[2] == 'add') {
//     fs.writeFileSync(input[3], input[4])
// }
// else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3])
// }
// else {
//     console.log("invalid input");
// }


////////////////////////Show file List //////////////////
//make files in a folder
//use path modele
//get files name and print

// const fs = require('fs');
// const path = require('path')

// const dirPath = path.join(__dirname, 'files');
// // console.log(dirPath);
// // for (i = 0; i < 4; i++) {
// //     fs.writeFileSync(dirPath + '/hello' + i + '.txt', "this is a sample file");
// //     // fs.writeFileSync(`hello ${i}.txt`, "this is a sample file");

// // }

// fs.readdir(dirPath, (err, files) => {
//     // console.log(files); //in this file show as array
//     files.forEach((item) => {
//         console.log(item);
//     })
// })


//////////  CRUD with file system      /////////////

//make file
//read file
//update file
//rename fiel
//delete file

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, "this is a simple text file");

// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// })

// fs.appendFile(filePath, ' and filename is apple.txt', (err) => {
//     if (!err) {
//         console.log("file is updated");
//     }
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) {
//         console.log("file name is updated");
//     }
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`);


/////////    Asynchronous Basics in Node js     //////////////////

// in synchronous operation tasks are performed one at a time
// In Asynchronous , second task do not wait to finish first task

// console.log("Start exe....");
// setTimeout(() => {
//     console.log("logic exe....");
// }, 2000)
// console.log("complete exe....");

//asynchronous programming draback

let a = 10;
let b = 0;
setTimeout(() => {
    b = 20;
}, 2000)
console.log(a + b);