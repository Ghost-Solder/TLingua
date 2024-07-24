function displayLanguage(code) {
    // Словарь с переводами
    const languageNames = {
        'en': 'English',
        'ru': 'Русский',
        'es': 'Español',
        // Добавьте другие языки по необходимости
    };

    // Отображение языка пользователя
    const languageName = languageNames[code] || 'Unknown';
    userLanguageElement.textContent = languageName;
}

if (Telegram.WebApp) {
    Telegram.WebApp.ready();
    const user = Telegram.WebApp.initDataUnsafe.user;
    const userNameElement = document.getElementById('userName');
    const userLanguageElement = document.getElementById('userLanguage');

    if (user) {
        userNameElement.textContent = user.first_name + (user.last_name ? ` ${user.last_name}` : '');

        const userPhotoUrl = user.photo_url || 'images/default-avatar.png';
        const userAvatarElement = document.getElementById('userAvatar');
        userAvatarElement.src = userPhotoUrl;

        const languageCode = user.language_code;
        displayLanguage(languageCode);
    } else {
        userNameElement.textContent = 'User information not available.';
    }
} else {
    console.error('Telegram Web App SDK not loaded!');
}
