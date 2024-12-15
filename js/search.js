// Kitap listemiz
const books = [
  {
      title: "Gün Olur Asra Bedel",
      author: "Cengiz Aytmatov",
      authorPage: "pages/cengiz-aytmatov.html"
  },
  {
      title: "Selvi Boylum Al Yazmalım",
      author: "Cengiz Aytmatov",
      authorPage: "pages/cengiz-aytmatov.html"
  },
  {
      title: "Yırtıcı Kuşlar Zamanı",
      author: "Yaşar Kemal",
      authorPage: "pages/yasar-kemal.html"
  },
  {
      title: "Robonlar/Bir Kaçış Operasyonu",
      author: "Isaac Asimov",
      authorPage: "pages/isaac-asimov.html"
  },
  {
      title: "Gece Yarısı Kütüphanesi",
      author: "Matt Haig",
      authorPage: "pages/matt-haig.html"
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