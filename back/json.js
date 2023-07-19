const https = require("https");
const fs = require("fs");

const options = {
//   key: fs.readFileSync("key.pem"),
//   cert: fs.readFileSync("cert.pem"),
//   key: fs.readFileSync("/etc/letsencrypt/live/dariavlady.ru/privkey.pem").toString(),
//   cert: fs.readFileSync("/etc/letsencrypt/live/dariavlady.ru/cert.pem").toString(),
  key: fs.readFileSync("/etc/letsencrypt/live/dariavlady.ru/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/dariavlady.ru/cert.pem"),
};

// const host = "195.2.79.212";
const host = "dariavlady.ru";
const port = 8000;
const TelegramBot = require("node-telegram-bot-api");
const token = "5656788140:AAHpSCLaLriqkRVF-cWt6qMYdzz4a2wCTng";
const bot = new TelegramBot(token, { polling: true });
//const chatID = "300712588"; //? Katya DEV chatID
const chatID = "293318065"; //? Dasha PROD chatID

let messages = JSON.stringify([]);

const requestListener = function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "origin, content-type, application/json, accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );

  let methodReq = req.method;
  let address = req.url;

  console.log(req.url);

  const messagesRequest = (address) => {
    console.log("messageRequest");
    if (address === "/send_registration_form") {
      console.log("if address");
      console.log(methodReq);
      if (methodReq == "OPTIONS") {
        console.log("options");
        res.setHeader("200", "OK");
        res.setHeader(
          "Access-Control-Allow-Methods",
          "PUT, PATCH, DELETE, POST"
        );
        res.setHeader(
          "Access-Control-Allow-Headers",
          "API-Key, Content-Type, If-Modified-Since, Cache-Control"
        );
        res.setHeader("Access-Control-Max-Age", "86400");
        res.writeHead(200);
        res.end();
      } else if (methodReq == "POST") {
        console.log("post");
        let data = "";
        req.on("data", function (chunk) {
          data += chunk.toString();
        });
        req.on("end", function () {
          console.log(JSON.parse(data));
          let obj = JSON.parse(messages);
          obj.push(JSON.parse(data));
          messages = JSON.stringify(obj);
          let message;
          if (JSON.parse(data).message.course === "") {
            message = `Пользователь ${
              JSON.parse(data).message.name
            } заказал звонок на номер ${JSON.parse(data).message.phone}`;
          } else message = `Пользователь ${JSON.parse(data).message.name}  с номером телефона ${JSON.parse(data).message.phone} записался на курс ${JSON.parse(data).message.course}`;
          console.log(message);
          bot.on("message", (msg) => {
            var Hi = "hi";
            if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
              bot.sendMessage(msg.chat.id, "Hello dear user");
            }
          });
          bot.sendMessage(chatID, message);
          res.writeHead(200);
          res.end(messages);
        });
      }
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
    }
  };

  messagesRequest(address);
};

const server = https.createServer(options, requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)});

// const http = require("http");
// const host = 'localhost';
// const port = 8000;
// const TelegramBot = require('node-telegram-bot-api');
// const token = '5656788140:AAHpSCLaLriqkRVF-cWt6qMYdzz4a2wCTng';
// const bot = new TelegramBot(token, { polling: true });
//// const chatID = "300712588"; //? Kata DEV chatID
// //const chatID = "293318065"; //? Dasha PROD chatID

// let messages = JSON.stringify([]);

// const requestListener = function (req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, application/json, accept');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

//     let methodReq = req.method;
//     let address = req.url;

//     console.log(req.url);

//     const messagesRequest = (address) => {
//         console.log('messageRequest');
//         if (address === "/send_registration_form") {
//             console.log('if address');
//             console.log(methodReq);
//             if (methodReq == "OPTIONS") {
//                 console.log('options');
//                 res.setHeader('200', 'OK');
//                 res.setHeader('Access-Control-Allow-Methods', 'PUT, PATCH, DELETE, POST');
//                 res.setHeader('Access-Control-Allow-Headers', 'API-Key, Content-Type, If-Modified-Since, Cache-Control');
//                 res.setHeader('Access-Control-Max-Age', '86400');
//                 res.writeHead(200);
//                 res.end();
//             } else if (methodReq == "POST") {
//                 console.log('post');
//                 let data = '';
//                 req.on('data', function (chunk) {
//                     data += chunk.toString();
//                 });
//                 req.on('end', function () {
//                     console.log(JSON.parse(data));
//                     let obj = JSON.parse(messages);
//                     obj.push(JSON.parse(data));
//                     messages = JSON.stringify(obj);
//                     let message;
//                     if(JSON.parse(data).message.course === '') {
//                         message = `Пользователь ${JSON.parse(data).message.name} заказал звонок на номер ${JSON.parse(data).message.phone}` 
//                     } else message = `Пользователь ${JSON.parse(data).message.name}  с номером телефона ${JSON.parse(data).message.phone} записался на курс ${JSON.parse(data).message.course}`;
//                     console.log(message);
//                     bot.on('message', (msg) => {
//                         var Hi = "hi";
//                         if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
//                             bot.sendMessage(msg.chat.id, "Hello dear user");
//                         }
//                     });
//                     bot.sendMessage(chatID, message);
//                     res.writeHead(200);
//                     res.end(messages);
//                 });
//             }
//         } else {
//             res.writeHead(404);
//             res.end(JSON.stringify({ error: "Resource not found" }));
//         }
//     }

//     messagesRequest(address);
// };



// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });
