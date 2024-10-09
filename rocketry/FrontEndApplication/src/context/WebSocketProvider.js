import React, { createContext, useContext, useEffect, useState, useRef } from 'react';

// Create a WebSocket context
const WebSocketContext = createContext();

// WebSocketProvider component to manage WebSocket connections
export const WebSocketProvider = ({ children }) => {
    const [data, setData] = useState({
        co2: '595912346',
        o2: '2512345697854',
        altitude: '12541232322332332',
        gps: { latitude: "35.18083", longitude: "1.49343" },
        //35.12652 1.28898 35.32383 1.56343)
        humidity: '1669321548',
        temperature: "9",
        rocketStats: {
            speed: 0,
            phase: 'earth',
            fuelLevel: 0,
            signalStrength: 0,
        },
        hum: "25",
        acceleration: "23",
    });
    const ws = useRef(null); // Using a ref to hold the WebSocket instance

    // Establish WebSocket connection and handle events
    useEffect(() => {
        const connectWebSocket = () => {
            ws.current = new WebSocket('ws://localhost:4000'); // Update the URL as needed

            // Handle incoming messages
            ws.current.onmessage = (event) => {
                try {
                    const parsedData = JSON.parse(event.data); // Assuming data is a JSON string
                    setData(parsedData); // Set the received data to state
                } catch (error) {
                    console.error('Error parsing WebSocket message:', error);
                }
            };

            // Log when the connection is established
            ws.current.onopen = () => {
                // console.log('WebSocket connection established'); // Optional log
            };

            // Handle connection close and attempt to reconnect
            ws.current.onclose = (event) => {
                // console.log('WebSocket connection closed:', event); // Optional log
                setTimeout(connectWebSocket, 1000); // Retry connection after 1 second
            };

            // Log any errors
            ws.current.onerror = (error) => {
                console.error('WebSocket error:', error); // More detailed logging
            };
        };

        connectWebSocket(); // Initiate WebSocket connection

        // Cleanup on component unmount
        return () => {
            if (ws.current) {
                ws.current.close(); // Close WebSocket connection
            }
        };
    }, []); // No dependencies

    // Provide data and ws instance to children components
    return (
        <WebSocketContext.Provider value={{ data, ws: ws.current }}>
            {children}
        </WebSocketContext.Provider>
    );
};

// Custom hook to use WebSocketContext
export const useWebSocket = () => useContext(WebSocketContext);

// Export WebSocketContext for direct access if needed
export { WebSocketContext };
