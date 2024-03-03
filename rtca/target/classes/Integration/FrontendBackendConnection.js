import { connect } from 'socket.io-client';

const backendServerUrl = 'ws://localhost:27017';
const socket = connect(backendServerUrl); // Connect to the backend WebSocket server

socket.on('connect', () => {
    console.log(`Connected to the backend server at ${backendServerUrl}`);
});

socket.on('message', (data) => {
    // Handle incoming messages from the backend
    console.log('Received message:', data);
    // Update the frontend UI with the incoming message
    updateFrontendUI(data);
});

socket.on('connect_error', (error) => {
    console.error('WebSocket connection error:', error.message);
});

function sendMessage(message) {
    // Send a message to the backend server
    socket.emit('message', message);
}

function updateFrontendUI(message) {
    // Implement logic to update your frontend UI with the incoming message
    console.log('Updating frontend UI with message:', message);
}

export { socket, sendMessage };
