const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const chatWindow = document.getElementById('chat-window');

// Send message when the form is submitted
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the message from the input field
  const message = messageInput.value;

  // Send the message to the server
  sendMessage(message);

  // Clear the input field
  messageInput.value = '';
});

// Receive messages from the server
socket.on('message', (data) => {
  // Display the message in the chat window
  displayMessage(data);
});

// Function to send a message to the server
function sendMessage(message) {
  socket.emit('send-message', message);
}

// Function to display a message in the chat window
function displayMessage(data) {
  const p = document.createElement('p');
  p.innerText = data.message;
  chatWindow.appendChild(p);
}