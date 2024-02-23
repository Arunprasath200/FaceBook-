
const chatList = document.querySelector('.chat-list');
const chatWindow = document.querySelector('.chat-window');
const messageList = chatWindow.querySelector('.chat-messages');
function displayMessage(sender, text) {
  const messageItem = document.createElement('li');
  messageItem.textContent = `${sender}: ${text}`;
  messageList.appendChild(messageItem);
}
chatList.addEventListener('click', (event) => {
 messageList.innerHTML = '';
  const messages = [
    { sender: "Amit RO", text: "Hello, how can I help you?" },
    { sender: "You", text: "I have a question about my order." },
   
  ];
  messages.forEach(message => {
    displayMessage(message.sender, message.text);
  });
});
const chatInput = document.querySelector('.chat-input');
chatInput.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const messageText = chatInput.querySelector('input').value;
  displayMessage("You", messageText);
  chatInput.querySelector('input').value = '';
});
