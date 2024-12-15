// Kitap listemiz
const books = [
    /*
    Ahmet Ümit key:value
    */
    {
        title: "Sis ve Gece (1996)",
        author: "Ahmet Ümit",
        authorPage: "pages/ahmet-umit.html"
    },
    {
        title: "Kar Kokusu (1998)",
        author: "Ahmet Ümit",
        authorPage: "pages/ahmet-umit.html"
    },
    {
        title: "Patasana (2000)",
        author: "Ahmet Ümit",
        authorPage: "pages/ahmet-umit.html"
    },
    {
        title: "Kukla (2002)",
        author: "Ahmet Ümit",
        authorPage: "pages/ahmet-umit.html"
    },
    {
        title: "Bab-ı Esrar (2008)",
        author: "Ahmet Ümit",
        authorPage: "pages/ahmet-umit.html"
    },
    {
        title: "İstanbul Hatırası (2010)",
        author: "Ahmet Ümit",
        authorPage: "pages/ahmet-umit.html"
    },
    {
        title: "Sultanı Öldürmek (2012)",
        author: "Ahmet Ümit",
        authorPage: "pages/ahmet-umit.html"
    },
    {
        title: "Elveda Güzel Vatanım (2015)",
        author: "Ahmet Ümit",
        authorPage: "pages/ahmet-umit.html"
    },
    {
        title: "Kırlangıç Çığlığı (2018)",
        author: "Ahmet Ümit",
        authorPage: "pages/ahmet-umit.html"
    },
    {
        title: "Kayıp Tanrılar Ülkesi (2021)",
        author: "Ahmet Ümit",
        authorPage: "pages/ahmet-umit.html"
    },

    /*
    Marcus Aurelius key:value
    */
    {
        title: "Kendime Düşünceler (Meditasyonlar)",
        author: "Marcus Aurelius",
        authorPage: "pages/marcus-aurelius.html"
    },
    {
        title: "Felsefi Yazılar",
        author: "Marcus Aurelius",
        authorPage: "pages/marcus-aurelius.html"
    },

    /*
    Cengiz Aytmatov key:value
    */
    {
        title: "Beyaz Gemi (1973)",
        author: "Cengiz Aytmatov",
        authorPage: "pages/cengiz-aytmatov.html"
    },
    {
        title: "Al Yazmalım (1963)",
        author: "Cengiz Aytmatov",
        authorPage: "pages/cengiz-aytmatov.html"
    },
    {
        title: "Cemile (1958)",
        author: "Cengiz Aytmatov",
        authorPage: "pages/cengiz-aytmatov.html"
    },
    {
        title: "Toprak Ana (1963)",
        author: "Cengiz Aytmatov",
        authorPage: "pages/cengiz-aytmatov.html"
    },
    {
        title: "Kızıl Elma (1964)",
        author: "Cengiz Aytmatov",
        authorPage: "pages/cengiz-aytmatov.html"
    },
    {
        title: "Elveda Gülsarı (1963)",
        author: "Cengiz Aytmatov",
        authorPage: "pages/cengiz-aytmatov.html"
    },
    {
        title: "İlk Öğretmenim (1962)",
        author: "Cengiz Aytmatov",
        authorPage: "pages/cengiz-aytmatov.html"
    },
    {
        title: "Dişi Kurdun Rüyaları (1986)",
        author: "Cengiz Aytmatov",
        authorPage: "pages/cengiz-aytmatov.html"
    },
    {
        title: "Gün Olur Asla Bedel (1980)",
        author: "Cengiz Aytmatov",
        authorPage: "pages/cengiz-aytmatov.html"
    },
    {
        title: "Fuji Yama (1973)",
        author: "Cengiz Aytmatov",
        authorPage: "pages/cengiz-aytmatov.html"
    }
];

function searchBooks(event) {
    const searchText = event.target.value.toLowerCase();
    const resultsDiv = document.getElementById('results');

    if (searchText.length < 2) {
        resultsDiv.innerHTML = '';
        resultsDiv.style.display = 'none';
        return;
    }

    const matchedBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchText) ||
        book.author.toLowerCase().includes(searchText)
    );

    if (matchedBooks.length > 0) {
        resultsDiv.innerHTML = `
            <div class="search-results">
                ${matchedBooks.map(book => `
                    <div class="search-item">
                        <div class="book-title">${book.title}</div>
                        <a href="${book.authorPage}" class="book-author">${book.author}</a>
                    </div>
                `).join('')}
            </div>
        `;
        resultsDiv.style.display = 'block';
    } else {
        resultsDiv.innerHTML = '<div class="search-results">Kitap bulunamadı</div>';
        resultsDiv.style.display = 'block';
    }
}