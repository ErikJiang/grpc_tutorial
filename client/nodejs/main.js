const grpc = require('grpc');

const protoPath = require('path').join(__dirname, '../..', 'proto');
const proto = grpc.load({ root: protoPath, file: 'user_resource.proto' });

const client = new proto.user_resource.UserService('localhost:3080', grpc.credentials.createInsecure());

client.getUserInfo({ user_id: 1 }, (err, res) => {
    if(err) {
        console.error(`err: ${err.stack}`);
    }
    console.log(`res: ${JSON.stringify(res)}`);
});
