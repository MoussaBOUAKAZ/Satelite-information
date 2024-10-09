const WebSocket = require('ws');

const spatialDataServer = new WebSocket.Server({ port: 5001 });
const gpsPositionServer = new WebSocket.Server({ port: 5002 });
const graphDataServer = new WebSocket.Server({ port: 5003 });
const progressDataServer = new WebSocket.Server({ port: 5004 });

const simulateData = () => {
  return {
    spatial: JSON.stringify({ x: Math.random(), y: Math.random(), z: Math.random() }),
    gps: JSON.stringify({ latitude: Math.random() * 90, longitude: Math.random() * 180 }),
    graph: JSON.stringify({ value: Math.random() * 100 }),
    progress: JSON.stringify({ percentage: Math.random() * 100 })
  };
};

spatialDataServer.on('connection', (ws) => {
  console.log('Client connected to spatial data server');
  setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      const data = simulateData();
      ws.send(data.spatial);
    }
  }, 1000); // Send data every second
});

gpsPositionServer.on('connection', (ws) => {
  console.log('Client connected to GPS position server');
  setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      const data = simulateData();
      ws.send(data.gps);
    }
  }, 1000);
});

graphDataServer.on('connection', (ws) => {
  console.log('Client connected to graph data server');
  setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      const data = simulateData();
      ws.send(data.graph);
    }
  }, 1000);
});

progressDataServer.on('connection', (ws) => {
  console.log('Client connected to progress data server');
  setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      const data = simulateData();
      ws.send(data.progress);
    }
  }, 1000);
});
