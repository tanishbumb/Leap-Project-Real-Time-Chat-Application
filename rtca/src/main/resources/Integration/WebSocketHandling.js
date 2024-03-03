

class WebSocketHandling {
    constructor() {
    }

    establishWebSocketConnection() {
        const socket = new WebSocket('ws://localhost:27017/chat'); // WebSocket endpoint

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const receivedMessage = JSON.parse(event.data);
            // Process the received message and handle it accordingly
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        socket.onerror = (error) => {
            console.error('WebSocket error: ', error);
        };
    }


}

export default WebSocketHandling;
