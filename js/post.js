const phoneInput = document.getElementById("phone");
const formMessage = document.getElementById("formMessage");

// Маска для украинского номера телефона
phoneInput.addEventListener("input", function (e) {
  let digits = e.target.value.replace(/\D/g, "");

  if (digits.startsWith("380")) {
    digits = digits.slice(3);
  } else if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  let formatted = "+380 ";

  if (digits.length > 0) {
    formatted += "(" + digits.slice(0, 2);
  }
  if (digits.length >= 3) {
    formatted += ") " + digits.slice(2, 5);
  }
  if (digits.length >= 6) {
    formatted += "-" + digits.slice(5, 7);
  }
  if (digits.length >= 8) {
    formatted += "-" + digits.slice(7, 9);
  }

  e.target.value = formatted;
});

// Обработка формы и отправка в Telegram
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const token = '8076178360:AAEMNOLDYUjLEtvnE3SjEbEvXzlNzPbnf1g';
  const chat_id = '386807281';

  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  const text = `New message from portfolio:\n\n` +
               `Name: ${name}\n` +
               `Email: ${email}\n` +
               `Phone: ${phone}\n` +
               `Message:\n${message}`;

  // Скрываем сообщение перед отправкой
  formMessage.style.display = "none";

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chat_id, text: text })
  })
  .then(res => {
    if (res.ok) {
      form.reset();
      formMessage.textContent = "Сообщение отправлено успешно!";
      formMessage.style.color = "green";
    } else {
      formMessage.textContent = "Ошибка при отправке сообщения.";
      formMessage.style.color = "red";
    }
    formMessage.style.display = "block";
  })
  .catch(err => {
    console.error("Fetch error:", err);
    formMessage.textContent = "Ошибка подключения.";
    formMessage.style.color = "red";
    formMessage.style.display = "block";
  });
});