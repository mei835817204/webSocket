// var ws = require("ws");

// // console.log(ws)

// const webSocketServer = ws.Server;

// const wss = new webSocketServer({port:8500})

// var clientMap = {};

// var count = 0;

// var user = "wh1706";

// console.log("服务器socket已经监听完毕")


// //监听 client 的连接
// wss.on("connection",(ws)=>{
//     console.log(ws.data);
//     console.log(`${ws}上线了`);
//     count++;
//     ws.name =user+count;
//     clientMap[ws.name]=ws;//存入client信息

//     //监听 client 发来的消息
//     ws.on("message",(msg)=>{
//         console.log(msg);
//         broadcast(msg.ws);
//     })

//     //监听client关闭
//     ws.on("close",err=>{
//         delete clientMap[ws.name];//删除对象
//         broadcast("系统消息")
//     })
// })

// function broadcast(msg,ws){
//     for(var key in clientMap){
//         clientMap[key].send(ws.name+" :"+msg+"</br>")
//     }
// }


var ws =require("ws");
const webSocketServer = ws.Server;
const wss = new webSocketServer({port:8500});


var clientMap = {};

var count = 0;
var user = "happy_"
console.log("服务端socket已经监听完毕");

//监听client 的 连接
wss.on("connection",(ws)=>{
    console.log(ws.data)
    console.log(`${ws.data} 上线了`);
    count++;
    ws.name = user + count ;
    clientMap[ws.name] = ws;  //存入客户端信息

    //监听 client发送的信息
    ws.on("message",(msg)=>{
        console.log(msg);
        broadcast(msg,ws);
    })

    //监听client 关闭
    ws.on("close",err=>{
        console.log(ws.name + "离开了");
        delete clientMap[ws.name];  //删除对象
        broadcast("系统消息:" + ws.name + "下线了...",ws);
    })

})

function broadcast(msg,ws){
    for(var key in clientMap){
        clientMap[key].send(ws.name + "说:" + msg +"<br/>")  //send发送消息
    }
}
