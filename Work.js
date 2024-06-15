function sendMessage() {
    let messages = document.getElementById('chat');
    let messageText = document.getElementById('text-input').value;
    if (messageText === '') {
        return;
    }
    let message = document.createElement('div');
    document.getElementById('text-input').value = '';
    message.innerHTML = messageText;
    message.className = 'message';
    messages.appendChild(message);
}
