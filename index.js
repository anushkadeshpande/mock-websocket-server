const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

const data = [1, 2, 3, 4, 5, 6]

function* sendData() {
  let i = 0
  while(true) {
    yield(data[i])
    i = (i + 1) % data.length
  }
}

server.on('connection', (ws) => {
  ws.send('Connected to websocket');
  
  // Send a specific message every 2 seconds
  let genObj = sendData()
  setInterval(() => {
    ws.send(genObj.next().value)}, 2000)
});

server.on('message', (message) => {
  // Code to handle incoming messages
});


console.log('WebSocket server is running...');