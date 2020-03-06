// node后端服务器
const http = require('http');
const badyParser = require('body-parser');
const express = require('express');
const userApi = require('./api/userApi');
const path = require('path')

let app = express();
let server = http.createServer(app);
// app.use(express.static('./dist'));
app.use(express.static(path.join(__dirname, './dist')));
app.use(badyParser.json());
app.use(badyParser.urlencoded({
    extended: false
}));

// 后端api路由
app.use('/api/user', userApi);

// 启动监听
server.listen(8088, () => {
    console.log('success!! port:8088')
})
