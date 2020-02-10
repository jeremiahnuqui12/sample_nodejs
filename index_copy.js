// const Person = require('./person');
// //
// // (new Person('John Doe', 30)).greetings();
// //
// // console.log(__filename  + " -- " + __dirname)
// //
// // console.log(path)
//
// const fs = require('fs'); // fs => file system
// const path  = require('path'); //
// const os = require('os');
// const url = require('url');
// const EventEmitter = require('events');
// const http = require('http');
// //---
// const MySQL = require('mysql');
// //--create file
// // fs.writeFile(
// //   path.join(__dirname, '/test', 'hello.txt'),
// //   'Hello World',
// //   err => {
// //     if (err) throw err;
// //     console.log('Folder Created ...')
// //   }
// // )
//
// //--append data
// // fs.appendFile(
// //   path.join(__dirname, '/test', 'hello.txt'),
// //   '\nHello World',
// //   err => {
// //     if (err) throw err;
// //     console.log('Folder Created ...')
// //   }
// // )
//
// // // --Read file
// // fs.readFile(
// //   path.join(__dirname, '/public', 'hello.html'),
// //   'utf-8', (err, data) => {
// //     if (err) throw err;
// //     console.log(data)
// //   }
// // )
//
// //----Rename File
// // fs.rename(
// //   path.join(__dirname, '/test', 'hello.txt'), //Old File name
// //   path.join(__dirname, '/test', 'hellozxcxzc.txt'), //New File Name
// //   err => {
// //     if (err) throw err;
// //     console.log('File renamed!!!');
// //   }
// // )
//
//
// //--platform
// // console.log(os.platform());
// // console.log(os.arch());
// // console.table(os.cpus());
// // console.log(os.freemem());
// // console.log(os.totalmem());
// // console.log(os.homedir());
// // console.log(os.uptime());
//
//
// //---URL Module
// // const myUrl = new URL('http://mywebsite.com/hello.html?id=123&status=active');
//
// // console.log('href: -------------' + myUrl.href);
// // console.log('to string: --------' + myUrl.toString());
// // console.log('host: -------------' + myUrl.host);
// // console.log('hostname: ---------' + myUrl.hostname);
// // console.log('pathname: ---------' + myUrl.pathname);
// // console.log('search: -----------' + myUrl.search);
// // console.log('searchParams: -----' + myUrl.searchParams);
//
// // myUrl.searchParams.append('abc', '123');
// // console.log('append: -----------' + myUrl.searchParams);
// // myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
//
//
//
// // //Create Class
// // class MyEmitter extends EventEmitter {
// //
// // }
// // //Init Object
// // const myEmitter = new MyEmitter();
// // // Event Listener
// // myEmitter.on('event', () => console.log('Event Fired!!!'));
// // myEmitter.emit('event');
// // myEmitter.emit('event');
// // myEmitter.emit('event');
// // myEmitter.emit('event');
//
// // //Logger With Event Emitter
// // const uuid = require('uuid');
// //
// // class Logger extends EventEmitter {
// //   log(msg) {
// //     //call event
// //     this.emit('message', {id: uuid.v1(), msg });
// //   }
// // }
// //
// // const logger = new Logger();
// // logger.on('message', (data) => console.log('Called Listener:', data));
// // logger.log('Hello World');
//
//
// // Http Module
// // http.createServer((req, res) => {
// //   res.write('Hello World');
// //   // res.end();
// //   console.log("current url: ", req.url);
// //   // res.end();
// // }).listen(5000, () => console.log('Server running...'));
//
//
// // //Create a Server
// // const server = http.createServer((request, result) => {
// //   if(request.url === "/") {
// //     result.writeHead(200, {'Content-Type': 'application/json'});
// //     const users = [
// //       {name: 'Bob Smith', age: 40},
// //       {name: 'John Doe', age: 30},
// //     ];
// //     result.end(JSON.stringify(users));
// //     // console.table(users);
// //     // result.end((new Person('Jeremiah', 20)).greetings());
// //     result.end("<h2>Home</h2>");
// //   } else if (request.url == "/about") {
// //     result.writeHead(200, {'Content-Type': 'text/html'});
// //     fs.readFile(
// //       path.join(__dirname, '/public', 'hello.html'),
// //       'utf-8', (err, data) => {
// //         result.write(data);
// //         result.end();
// //       }
// //     );
// //   }
// //   let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);
// //
// //   let extname = path.extname(filePath);
// //
// //   let contentType = 'text/html';
// //
// //   switch (extname) {
// //     case '.js':
// //       contentType = 'text/javascript';
// //       break;
// //     case '.css':
// //       contentType = 'text/css';
// //       break;
// //     case '.json':
// //       contentType = 'application/json';
// //       break;
// //     case '.png':
// //       contentType = 'image/png';
// //       break;
// //     case '.jpg':
// //       contentType = 'image/jpg';
// //       break;
// //   }
// //   fs.readFile(filePath, (err, content) => {
// //     if(err) {
// //       if(err.code == 'ENOENT') { // Page not found
// //         fs.readFile(path.join(__dirname, 'public', '404.html'),
// //         (err1, content1) => {
// //           result.writeHead(200, {'Content-Type': 'text/html'});
// //           result.end(content1, 'utf-8');
// //         });
// //       } else { // Some Server error
// //         result.writeHead(500);
// //         result.end(`Server Error: ${err.code}`);
// //       }
// //     } else { // Success
// //       result.writeHead(200, {'Content-Type': contentType});
// //       result.end(content, 'utf-8');
// //     }
// //   })
// //
// //   result.writeHead(200, {'Content-Type': contentType});
// //   console.log(`Current Url: ${request.url}`);
// // });
//
//
// const server = http.createServer((request, result) => {
//   if(request.url == "/") {
//     result.end('zxczx');
//   }
// });
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//
// //-----------
// // const getDBConnection = MySQL.createConnection({
// //   host: 'localhost',
// //   user: 'root',
// //   password: '',
// //   database: 'menus'
// // });
// //
// // getDBConnection.connect(function(err) {
// //   if (err) throw err;
// //   getDBConnection.query("SELECT * FROM tbl_menu", function(err, result, fields) {
// //     if (err) throw err;
// //     console.table(result);
// //   });
// //   console.log("Connected!");
// // });
