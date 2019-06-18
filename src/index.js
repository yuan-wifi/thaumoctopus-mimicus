import Hapi from 'hapi';

//创建一个服务器，并配置主机名与端口
const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
});
//server.connection();

// 添加路由
server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request,replay) {
        return 'hello worldsss!dsdsddffdfdvvvv';
    }
});

//start server
server.start();