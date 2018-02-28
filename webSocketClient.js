const ws = new WebSocket("ws://localhost:8500");

//client 客户端  实现监听服务端事件


//连接服务器
ws.onopen= function(){
    ws.send("大家好！")
}

//监听服务端发来的数据
ws.onmessage = function(){
    var chatroom = document.getElementById("chatroom");
    chatroom.innerHTML+=event.data;
}

//监听服务端server error
ws.onerror = function(err){
    alert("error" +err);
}

ws.onclose = function(){
    alert("server is closed")
}

//浏览器都有 webSocket方法




// const ws = new WebSocket("ws://localhost:8500");

// //client 客户端  主要监听服务端事件

// // 连接服务器
// ws.onopen = function(){
//     ws.send("大家好!")
// }

// //监听 服务端发生的数据
// ws.onmessate = function(event){
//     var chatroom = document.getElementById("chatroom");
//     chatroom.innerHTML += event.data;
// }

// // 监听服务端 server error
// ws.onerror = function(err){
//     alert("err" + err);
// }

// // 监听服务端的关闭
// ws.onclose = function(){
//     alert("server is closed")
// }
