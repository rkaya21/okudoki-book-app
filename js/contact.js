function showMessage() {
  const nameInput = document.querySelector('input[name="Name"]');
  const emailInput = document.querySelector('input[name="Email"]');
  const messageInput = document.querySelector('input[name="Message"]');
  const messageBox = document.getElementById("messageBox");

  let errorDiv = document.getElementById('errorMessage');
  if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.id = 'errorMessage';
      errorDiv.className = 'w3-panel w3-red w3-padding';
      messageBox.parentNode.insertBefore(errorDiv, messageBox);
  }

  /*
  Inputları trimle temizle
  */
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  let errors = [];

  /*
  İsim kontrolü
  */
  if (name.length === 0) {
      errors.push("İsim alanı boş bırakılamaz");
  } else if (name.length < 2) {
      errors.push("İsim en az 2 karakter olmalıdır");
  }

  /*
  Email kontrolü
  */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
      errors.push("Email alanı boş bırakılamaz");
  } else if (!emailRegex.test(email)) {
      errors.push("Geçerli bir email adresi giriniz");
  }

  /*
  Mesaj kontrolü
  */
  if (!message) {
      errors.push("Mesaj alanı boş bırakılamaz");
  } else if (message.length < 10) {
      errors.push("Mesaj en az 10 karakter olmalıdır");
  }

  /*
  Hata varsa hata mesajını göster
  */
  if (errors.length > 0) {
      errorDiv.style.display = 'block';
      errorDiv.innerHTML = errors.join('<br>');
      return;
  }

  /*
  Hata mesajını gizle
  LocalStorage'a mesajı kaydet
  Mesajın iletildiğini göster
  Mesaj kutusunu göster
  Form alanını temizle
  Mesaj kutusunu 3 saniye sonra gizle
  */
  errorDiv.style.display = 'none';

  saveMessage({ name, email, message });

  messageBox.innerHTML = "Teşekkürler! Mesajınız kaydedildi.";
  messageBox.className = "w3-panel w3-green w3-padding";
  messageBox.style.display = "block";

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  setTimeout(() => {
      messageBox.style.display = "none";
  }, 3000);
}