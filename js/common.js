// Mesajları localStorage'dan al.
function loadMessages() {
  return JSON.parse(localStorage.getItem('messages')) || [];
}

/*
kullanıcının mesajını, ismini
ve mailini localStorage'a kaydet.
*/
function saveMessage(messageData) {
  let messages = loadMessages();
  messages.push({
      ...messageData,
      id: Date.now(),
      date: new Date().toLocaleString()
  });
  localStorage.setItem('messages', JSON.stringify(messages));
}