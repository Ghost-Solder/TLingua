if (Telegram.WebApp) {
    Telegram.WebApp.ready();
    const user = Telegram.WebApp.initDataUnsafe.user;
    const userNameElement = document.getElementById('userName');
    const userAvatarElement = document.getElementById('userAvatar');
    if (user) {
        userNameElement.textContent = `${user.first_name} ${user.last_name}`;
        userAvatarElement.src = user.photo_url || 'images/default-avatar.png';
    } else {
        userNameElement.textContent = 'User information not available.';
    }
} else {
    console.error('Telegram Web App SDK not loaded!');
}
