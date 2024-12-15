/*
localStorage'dan mesajları yükleme fonksiyonu
*/
function loadMessages() {
    const messages = localStorage.getItem('messages');
    return messages ? JSON.parse(messages) : [];
}

/*
mesajları filtreleme fonksiyonu.
Arama kutusunda yazdığınız kelimeye
göre iletilen mesajı
isme göre filtreler ve görüntüler
*/
function filterMessages() {
    const searchText = document.getElementById('messageSearch').value.toLowerCase();
    const messages = loadMessages();
    const filteredMessages = messages.filter(msg =>
        msg.name.toLowerCase().includes(searchText)
    );
    displayMessages(filteredMessages);
}

/*
mesajları görüntüleme fonksiyonu.
*/
function displayMessages(messagesToShow = null) {
    const messagesList = document.getElementById('messagesList');

    /*
    messagesList elementten
    veri gelmiyorsa
    fomksiyondan çık
    */
    if (!messagesList) return;

    const messages = messagesToShow || loadMessages();

    if (messages.length === 0) {
        messagesList.innerHTML = `
            <div class="w3-panel w3-pale-yellow w3-center">
                <h3>Henüz mesaj bulunmamaktadır.</h3>
            </div>`;
        return;
    }

    messagesList.innerHTML = messages.map(msg => `
        <div class="w3-col l4 m6 w3-margin-bottom">
            <div class="w3-card-4 message-card">
                <header class="w3-container w3-black">
                    <h4>${msg.name}</h4>
                </header>

                <div class="w3-container">
                    <p><i class="fa fa-envelope"></i> ${msg.email}</p>
                    <hr>
                    <p>${msg.message}</p>
                </div>

                <footer class="w3-container w3-light-grey">
                    <p><small>${msg.date}</small></p>
                    <button onclick="deleteMessage(${msg.id})"
                            class="w3-button w3-red w3-small w3-margin-bottom">
                        <i class="fa fa-trash"></i> Sil
                    </button>
                </footer>
            </div>
        </div>
    `).join('');
}

/*
mesajı silme fonksiyonu.
*/
function deleteMessage(id) {
    if (confirm('Bu mesajı silmek istediğinizden emin misiniz?')) {
        let messages = loadMessages();
        messages = messages.filter(msg => msg.id !== id);
        localStorage.setItem('messages', JSON.stringify(messages));
        displayMessages();
    }
}

/*
Sayfa yüklendiğinde mesajları göster
*/
document.addEventListener('DOMContentLoaded', () => {
    // messagesList elementi varsa mesajları göster
    const messagesList = document.getElementById('messagesList');
    if (messagesList) {
        displayMessages();
    }
});