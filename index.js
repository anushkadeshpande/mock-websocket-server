const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });


wss.on('connection', (ws) => {
  ws.send('Connected to websocket');
  
  // Send a specific message every 2 seconds
  let message = 'Hello!'
  setInterval(() => ws.send(message), 2000)
});

wss.on('message', (message) => {
  // Code to handle incoming messages
});


console.log('WebSocket server is running...');