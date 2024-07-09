// Проверка, загружен ли скрипт Telegram Web App
if (Telegram.WebApp) {
    Telegram.WebApp.ready();

    // Получаем данные пользователя
    const user = Telegram.WebModals.initDataUnsafe.user;

    // Заполняем информацию о пользователе
    const userNameElement = document.getElementById('userName');
    const userAvatarElement = document.getElementById('userAvatar');

    if (user) {
        userNameElement.textContent = `${user.first_name} ${user.last_name}`;
        userAvatarElement.src = user.photo_url || 'images/default-avatar.png'; // Укажите путь к изображению по умолчанию.
        // Дополнительная логика после получения данных пользователя
    } else {
        userNameElement.textContent = 'User information not available.';
        // Можно отобразить сообщение об ошибке или скрыть элементы
    }
} else {
    console.error('Telegram Web App SDK not loaded!');
}
