// Кнопка "Наверх"
window.onscroll = function() {
    document.body.classList.toggle('scrolled', window.scrollY > 100);
};

// Валидация формы
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Отменяем отправку (пока нет бэкенда)
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Пожалуйста, заполните все поля!');
    } else {
        alert('Сообщение отправлено! (Симуляция)');
        document.querySelector('form').reset(); // Очищаем форму
    }
});