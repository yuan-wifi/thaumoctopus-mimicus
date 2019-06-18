'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//创建一个服务器，并配置主机名与端口
var server = new _hapi2.default.Server({
    host: 'localhost',
    port: 8000
});
//server.connection();

// 添加路由
server.route({
    method: 'GET',
    path: '/hello',
    handler: function handler(request, replay) {
        return 'hello worldsss!dsdsddffdfdvvvv';
    }
});

//start server
server.start();