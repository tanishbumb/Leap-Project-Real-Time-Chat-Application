import ChatWindowComponent from './ChatWindowComponent';

class RealTimeUpdates {
    constructor() {
        this.chatWindow = new ChatWindowComponent();
    }

    // Method to establish WebSocket connection for real-time updates
    establishWebSocketConnection() {
        const socket = new WebSocket('ws://localhost:8080/chat'); // WebSocket endpoint

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const receivedMessage = JSON.parse(event.data);
            // Process the received message and update the chat window
            this.chatWindow.displayMessages([receivedMessage]);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        socket.onerror = (error) => {
            console.error('WebSocket error: ', error);
        };
    }

}

export default RealTimeUpdates;
