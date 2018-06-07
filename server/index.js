const grpc = require('grpc');

const proto = grpc.load('proto/user_resource.proto');
const server = new grpc.Server();

server.addProtoService(proto.user_resource.UserService.service, {
    // 获取用户列表
    getUserList(call, callback) {
        console.log(`call: ${JSON.stringify(call)}`);
        callback(null, [{
            user_id: 1,
            name: 'wangxiaoming',
            email: 'xiaoming@grpc.io',
            height: 170.5,
            weight: 115.6,
            city: 'CHENGDU',
            position: 'ENGINEER'
        }]);
    },
    getUserInfo(call, callback) {
        console.log(`call: ${JSON.stringify(call)}`);
        callback(null, {
            user_id: 1,
            name: 'wangxiaoming',
            email: 'xiaoming@grpc.io',
            height: 170.5,
            weight: 115.6,
            city: 'CHENGDU',
            position: 'ENGINEER'
        });
    },
    addUserInfo(call, callback) {
        console.log(`call: ${JSON.stringify(call)}`);
        callback(null, {
            status: true
        });
    },
    editUserInfo(call, callback) {
        console.log(`call: ${JSON.stringify(call)}`);
        callback(null, {
            user_id: 1,
            name: 'wangxiaoming',
            email: 'xiaoming@grpc.io',
            height: 170.5,
            weight: 115.6,
            city: 'CHENGDU',
            position: 'ENGINEER'
        });
    },
    delUserInfo(call, callback) {
        console.log(`call: ${JSON.stringify(call)}`);
        callback(null, {
            status: true
        });
    },
});

server.bind('localhost:3080', grpc.ServerCredentials.createInsecure());
server.start();
console.log(`grpc server running on port: localhost:3080`);
