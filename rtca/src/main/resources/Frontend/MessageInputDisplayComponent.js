import { socket, sendMessage } from './FrontendBackendConnection';

class MessageInputDisplayComponent {
    constructor() {
    }

    displayMessageInput() {
        const messageInputContainer = document.querySelector('.message-input-container');
        messageInputContainer.innerHTML = `
            <input type="text" class="message-input" placeholder="Type your message...">
            <button class="send-button">Send</button>
        `;

        //event listener to the send button
        const sendButton = document.querySelector('.send-button');
        sendButton.addEventListener('click', () => {
            this.sendMessage();
        });
    }

    // Method to handle sending a message
    sendMessage() {
        const messageInput = document.querySelector('.message-input');
        const messageContent = messageInput.value.trim();

        if (messageContent !== '') {
            const message = {
                sender: 'YourUsername', 
                content: messageContent,
                timestamp: Date.now(),
            };

            // Send the message to the backend through the WebSocket
            sendMessage(message);

            messageInput.value = '';
        }
    }

}

export default MessageInputDisplayComponent;
