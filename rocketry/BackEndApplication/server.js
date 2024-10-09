const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const WebSocket = require('ws');

const portName = 'COM4'; 
const port = new SerialPort({ path: portName, baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

const spatialDataServer = new WebSocket.Server({ port: 5001 });
const gpsPositionServer = new WebSocket.Server({ port: 5002 });
const graphDataServer = new WebSocket.Server({ port: 5003 });
const progressDataServer = new WebSocket.Server({ port: 5004 });

parser.on('data', (data) => {
  console.log('Received data from serial port:', data);
  
  const parsedData = parseData(data);

  if (spatialDataServer.clients.size > 0) {
    spatialDataServer.clients.forEach(client => client.send(parsedData.spatial));
  }

  if (gpsPositionServer.clients.size > 0) {
    gpsPositionServer.clients.forEach(client => client.send(parsedData.gps));
  }

  if (graphDataServer.clients.size > 0) {
    graphDataServer.clients.forEach(client => client.send(parsedData.graph));
  }

  if (progressDataServer.clients.size > 0) {
    progressDataServer.clients.forEach(client => client.send(parsedData.progress));
  }
});

spatialDataServer.on('connection', (ws) => {
  console.log('Client connected to spatial data server');
});

gpsPositionServer.on('connection', (ws) => {
  console.log('Client connected to GPS position server');
});

graphDataServer.on('connection', (ws) => {
  console.log('Client connected to graph data server');
});

progressDataServer.on('connection', (ws) => {
  console.log('Client connected to progress data server');
});

function parseData(data) {
  // Implement your parsing logic here
  return {
    spatial: data,  // Replace with actual parsing logic
    gps: data,
    graph: data,
    progress: data
  };
}
