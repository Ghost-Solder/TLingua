document.addEventListener('DOMContentLoaded', function() {
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

    function showSection(sectionId) {
        const sections = document.querySelectorAll('main > section');
        sections.forEach(section => section.classList.add('hidden'));
        document.getElementById(sectionId).classList.remove('hidden');
    }

    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-target');
            showSection(targetSection);
        });
    });

    function updateTutorsList(tutors) {
        const tutorsListElement = document.getElementById('tutorsList');
        tutorsListElement.innerHTML = '';

        tutors.forEach(tutor => {
            const tutorElement = document.createElement('div');
            tutorElement.classList.add('tutor');
            tutorElement.textContent = tutor.name;
            // Дополните информацию о преподавателе в соответствии с вашими данными
            tutorsListElement.appendChild(tutorElement);
        });
    }

    // Функция-заглушка для поиска преподавателей (нужно использовать реальный запрос к серверу или API)
    function searchTutors(searchTerm) {
        console.log('Searching tutors for:', searchTerm);
        // Пример данных о преподавателях
        const tutors = [
            { name: 'John Doe', subject: 'English' },
        ];
        updateTutorsList(tutors);
    }

    document.getElementById('tutorSearchButton').addEventListener('click', function() {
        const searchTerm = document.getElementById('tutorSearchInput').value;
        searchTutors(searchTerm);
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Добавить код, который должен выполняться после загрузки DOM
    });

    showSection('homePage');
});