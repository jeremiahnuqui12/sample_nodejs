const MyEmitter = require('./sampleEmitter');
const fs = require('fs'); // fs => file system
const path  = require('path'); //
const os = require('os'); // Operating system
const url = require('url');
const EventEmitter = require('events');
const http = require('http');
const MySQL = require('mysql');
const express = require('express');
const cors = require('cors');
const { detect } = require('detect-browser');
const browser = detect();
var app = express();
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
let request = require('request');
var corsOptions = {
  origin: 'http://localhost:3001/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(bodyparser.urlencoded());

app.use(bodyparser.json());
const MySQLConnection = MySQL.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'menus'
});

app.set('view engine', 'ejs');
app.set('json spaces', 3);
app.options('*', cors())
app.get('/api/menu/', cors(), (req, res) => {
    MySQLConnection.query('SELECT * FROM `tbl_menu`', (err, rows, fields) => {
        if (!err)
          res.send(rows);
        else
          res.send(err);
    });
});
//Send Mail
// app.get('/sendmail', (req, res) => {
//   console.log("Current Url: ", `${req.protocol}://${req.get('host')}${req.originalUrl}`);
//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'jmnuqui01@gmail.com',
//       pass: 'asda'
//     }
//   });
//   var mailOptions = {
//     from: 'jmnuqui01@gmail.com',
//     to: 'jeremiahnuqui10@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
//
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// });

//index/home page
app.get('/', (req, res) => {

  console.log("Current Url: ", `${req.protocol}://${req.get('host')}${req.originalUrl}`);
  res.render('index');
  // fs.readFile(
  //   path.join(__dirname, '/public', 'index.html'),
  //   'utf-8', (err, data) => {
  //     if (err) throw err;
  //     res.send(data);
  //   }
  // )
});
// app.post('/zxc', function (req, res) {
//   // res.render('index');
//   // console.log(req.body.city);
//   const apiKey = 'b6907d289e10d714a6e88b30761fae22';
//   let city = req.body.city;
//   let url = `https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//   // let url = 'api.openweathermap.org/data/2.5/weather?q=' + city;
//   request(url, function (err, response, body) {
//     if(err){
//       res.render('index', {weather: null, error: 'Error, please try again'});
//     } else {
//       let weather = JSON.parse(body);
//       if(weather.main == undefined){
//         res.render('index', {weather: null, error: 'Error, please try again'});
//       } else {
//         let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//         res.render('index', {weather: weatherText, error: null});
//       }
//     }
//   });
// });
app.post('/api/menu/add', cors(), (req, res) => {
  const data = req.body;
  const sql = "INSERT INTO `tbl_menu`(`menu`, `description`) VALUES ('" + data.menu + "','" + data.description + "')";
    MySQLConnection.query(sql, (err, rows, fields) => {
      res.send({message: err ? "error-" + err : "success"});
      // res.json(req);
    })
});

app.delete('/api/menu/delete/:id', cors(), (req, res) => {
  const sql = "DELETE FROM `tbl_menu` WHERE `id`=" + req.params.id;
    MySQLConnection.query(sql, (err, rows, fields) => {
      res.send(err ? "query error" : "success");
    })
});

app.get('/tutorial', (req, res) => {
  var person1 = new Person('Jeremiah Nuqui', 18);
  res.send(person1.greetings(res));
});

app.listen(3000, () => console.log('Express server is running at port no : 3000'));
// console.log(`Browser Name: ${browser.name}`);
// console.log(`Version: ${browser.version}`);
// console.log('Browser OS:', browser);
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// const server = http.createServer((request, result) => {
//   const users = [
//     {name: 'Bob Smith', age: 40},
//     {name: 'John Doe', age: 30},
//   ];
//   if(request.url == "/") {
//     result.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile(
//       path.join(__dirname, '/public', 'index.html'),
//       'utf-8', (err, data) => {
//         if (err) throw err;
//         result.end(data);
//       }
//     )
//   } else if(request.url == '/api/menu/all') {
//     result.writeHead(200, {'Content-Type': 'application/json'});
//     MySQLConnection.query('SELECT * FROM `tbl_menu`', (err, rows, fields) => {
//       if(err){
//         result.end(JSON.stringify(rows));
//       } else {
//         result.end(JSON.stringify(rows));
//         // data = rows;
//       }
//     });
//   } else if (request.url == '/api/menu/add') {
//     result.writeHead(200, {'Content-Type': 'application/json'});
//     let data = []
//     request.on('data', chunk => {
//       // data.push(chunk)
//       result.end(JSON.stringify(chunk))
//     })
//     // request.on('end', () => {
//       // result.end(JSON.stringify(data)) // 'Buy the milk'
//     // })
//   } else {
//     result.end("page not found");
//   }
// });
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//--------------------------------------------------------------------------------

// let MySQLConnection = require('./server');
//---
// // --Path Module
// console.log(`Filename: ${__filename}`);
// console.log(`Directory Name: ${__dirname}`);
// console.log(`Path Basename: ${path.basename(__filename)}`);
// console.log(`Path Directory: ${path.basename(__dirname)}`);
// console.log(`Path Extension Name: ${path.extname(__filename)}`);
// console.log(`Path Basename: ${path.parse(__filename).base}`);
// console.log(`Append path: ${path.join(__dirname, 'test', 'index.html')}`)

// //---File System module
// // --Create folder
// fs.mkdir(
//   path.join(__dirname, '/test'), err => {
//     if (err) console.log('Folder existed');
//     console.log('Folder Created ...')
//   }
// );
// //--Create and write file
// fs.writeFile(
//   path.join(__dirname, '/test', 'sample.txt'), 'sample',  err => {
//     if (err) throw err;
//     console.log('File Created ...')
//   }
// );
// //--Edit file
// fs.writeFile(
//   path.join(__dirname, '/test', 'sample.txt'),
//   'Hello World',
//   err => {
//     if (err) throw err;
//     console.log('File Edited ...')
//   }
// );

// //--append data

  // fs.appendFile(
  //   path.join(__dirname, '/test', 'hello.txt'),
  //   '\nHello zxcxz',
  //   err => {
  //     if (err) throw err;
  //     console.log('Folder Created ...')
  //   }
  // );

// // --Read file
// fs.readFile(
//   path.join(__dirname, '/public', 'hello.html'),
//   'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
//   }
// )

//----Rename File
// fs.rename(
//   path.join(__dirname, '/test', 'hello.txt'), //Old File name
//   path.join(__dirname, '/test', 'hellozxcxzc.txt'), //New File Name
//   err => {
//     if (err) throw err;
//     console.log('File renamed!!!');
//   }
// )
// http.createServer((req, res) => {
//   res.write('OS Module\n\n');
//   res.write(`-OS: ${os.platform()}\n`);
//   res.write(`-Architecture: ${os.arch()}\n`);
//   res.write(`-CPUS: ${JSON.stringify(os.cpus())}`);
//   console.log("current url: ", req.url);
//   res.end();
// }).listen(5000, () => console.log('Server running...'));

// // // --Computer Specification
// console.log(`OS: ${os.platform()}`);
// console.log(`architecture: ${os.arch()}`);
// console.table(os.cpus());
// console.log(`Free Memory: ${os.freemem()}`);
// console.log(`Total Memory: ${os.totalmem()}`);
// console.log(`Home Directory: ${os.homedir()}`);
// console.log(`Up-time: ${os.uptime()}`);


// // // ---URL Module
// const myUrl = new URL('http://mywebsite.com/hello.html?id=123&status=active');
// console.log('href: -------------' + myUrl.href);
// console.log('to string: --------' + myUrl.toString());
// console.log('host: -------------' + myUrl.host);
// console.log('hostname: ---------' + myUrl.hostname);
// console.log('pathname: ---------' + myUrl.pathname);
// console.log('search: -----------' + myUrl.search);
// console.log('searchParams: -----' + myUrl.searchParams);
// myUrl.searchParams.append('abc', '123');
// console.log('append: -----------' + myUrl.searchParams);

// myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))



// //Create Class
// class MyEmitter extends EventEmitter {
//
// }
// //Init Object
// const myEmitter = new MyEmitter();
// // Event Listener
// myEmitter.on('event', () => console.log('Event Fired!!!'));
// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');

// //Logger With Event Emitter
// const uuid = require('uuid');
//
// class Logger extends EventEmitter {
//   log(msg) {
//     //call event
//     this.emit('message', {id: uuid.v1(), msg });
//   }
// }
//
// const logger = new Logger();
// logger.on('message', (data) => console.log('Called Listener:', data));
// logger.log('Hello World');


// Http Module
// http.createServer((req, res) => {
//   res.write('Hello World');
//   // res.end();
//   console.log("current url: ", req.url);
//   // res.end();
// }).listen(5000, () => console.log('Server running...'));


// //Create a Server
// const server = http.createServer((request, result) => {
//   if(request.url === "/") {
//     result.writeHead(200, {'Content-Type': 'application/json'});
//     const users = [
//       {name: 'Bob Smith', age: 40},
//       {name: 'John Doe', age: 30},
//     ];
//     result.end(JSON.stringify(users));
//     // console.table(users);
//     // result.end((new Person('Jeremiah', 20)).greetings());
//     result.end("<h2>Home</h2>");
//   } else if (request.url == "/about") {
//     result.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile(
//       path.join(__dirname, '/public', 'hello.html'),
//       'utf-8', (err, data) => {
//         result.write(data);
//         result.end();
//       }
//     );
//   }
//   let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);
//
//   let extname = path.extname(filePath);
//
//   let contentType = 'text/html';
//
//   switch (extname) {
//     case '.js':
//       contentType = 'text/javascript';
//       break;
//     case '.css':
//       contentType = 'text/css';
//       break;
//     case '.json':
//       contentType = 'application/json';
//       break;
//     case '.png':
//       contentType = 'image/png';
//       break;
//     case '.jpg':
//       contentType = 'image/jpg';
//       break;
//   }
//   fs.readFile(filePath, (err, content) => {
//     if(err) {
//       if(err.code == 'ENOENT') { // Page not found
//         fs.readFile(path.join(__dirname, 'public', '404.html'),
//         (err1, content1) => {
//           result.writeHead(200, {'Content-Type': 'text/html'});
//           result.end(content1, 'utf-8');
//         });
//       } else { // Some Server error
//         result.writeHead(500);
//         result.end(`Server Error: ${err.code}`);
//       }
//     } else { // Success
//       result.writeHead(200, {'Content-Type': contentType});
//       result.end(content, 'utf-8');
//     }
//   })
//
//   result.writeHead(200, {'Content-Type': contentType});
//   console.log(`Current Url: ${request.url}`);
// });
