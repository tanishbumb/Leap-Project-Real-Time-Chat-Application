import { socket, sendMessage } from './FrontendBackendConnection';

class ChatWindowComponent {
    constructor() {
        this.messages = []; 
    }

    // Method to display messages in the chat window
    displayMessages() {
        const messagesContainer = document.querySelector('.messages-container');
        messagesContainer.innerHTML = ''; // Clear previous messages

        this.messages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.innerHTML = `
                <div class="message-sender">${message.sender}</div>
                <div class="message-content">${message.content}</div>
                <div class="message-timestamp">${new Date(message.timestamp).toLocaleString()}</div>
            `;
            messagesContainer.appendChild(messageElement);
        });
    }

    // Method to handle receiving a message from the WebSocket
    receiveMessage(message) {
        this.messages.push(message); 
        this.displayMessages(); 
    }

    // Method to handle sending a message
    sendMessage(messageContent) {
        const message = {
            sender: 'YourUsername', 
            content: messageContent,
            timestamp: Date.now(),
        };

        // Send the message to the backend through the WebSocket
        sendMessage(message);
    }

}

export default ChatWindowComponent;
