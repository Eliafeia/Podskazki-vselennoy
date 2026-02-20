// Генерация данных для 60 карт
function generateCardsData() {
    const titles = [
        'НОВОЕ НАЧАЛО', 'ГАРМОНИЯ', 'УДАЧА', 'ИСПЫТАНИЯ', 'ЛЮБОВЬ',
        'ТВОРЧЕСТВО', 'ДЕНЬГИ', 'ПУТЕШЕСТВИЕ', 'ЗДОРОВЬЕ', 'МУДРОСТЬ',
        'ВДОХНОВЕНИЕ', 'ЭНЕРГИЯ', 'СПОКОЙСТВИЕ', 'РАДОСТЬ', 'УВЕРЕННОСТЬ',
        'ПЕРЕМЕНЫ', 'СТАБИЛЬНОСТЬ', 'РАЗВИТИЕ', 'ПАРТНЕРСТВО', 'УСПЕХ',
        'СИЛА', 'ОТКРЫТИЕ', 'ОЧИЩЕНИЕ', 'ЗАЩИТА', 'ПРОЗРЕНИЕ',
        'РЕШЕНИЕ', 'ВЫБОР', 'ПОМОЩЬ', 'УРОК', 'НАГРАДА',
        'ИСЦЕЛЕНИЕ', 'ПРОЩЕНИЕ', 'БЛАГОДАРНОСТЬ', 'ИЗОБИЛИЕ', 'ПОНИМАНИЕ',
        'ТЕРПЕНИЕ', 'НАДЕЖДА', 'ВЕРА', 'ПРИНЯТИЕ', 'ОСВОБОЖДЕНИЕ',
        'ВДОХНОВЕНИЕ', 'ТРАНСФОРМАЦИЯ', 'ВОЗРОЖДЕНИЕ', 'РАСЦВЕТ', 'СИНТЕЗ',
        'ПОТОК', 'БАЛАНС', 'ЦЕЛОСТНОСТЬ', 'ЕДИНСТВО', 'ГЛУБИНА',
        'ПРОСТОТА', 'ЛЕГКОСТЬ', 'ИГРА', 'ЧУДО', 'МАГИЯ',
        'СВЕТ', 'ТЕНЬ', 'ДВИЖЕНИЕ', 'ПОКОЙ', 'БЕСКОНЕЧНОСТЬ'
    ];
    
    const descriptions = [
        'Сегодня идеальный день, чтобы начать что-то важное. Вселенная на вашей стороне.',
        'День принесет внутренний покой и равновесие. Найдите время для медитации.',
        'Звезды благоволят вам! Удача будет следовать за вами по пятам.',
        'Сегодня могут возникнуть трудности, но они временны. Проявите терпение.',
        'День наполнен любовью и романтикой. Откройте свое сердце.',
        'Ваша креативность сегодня на пике. Творите смело!',
        'Финансовый успех не за горами. Обратите внимание на новые возможности.',
        'Возможно спонтанное путешествие или приятная поездка.',
        'Обратите внимание на свое самочувствие. Займитесь спортом.',
        'Сегодня вы получите важный урок или совет. Будьте внимательны.',
        'Муза посетит вас сегодня. Ловите вдохновение и творите!',
        'Вы полны энергии и сил. Самое время для активных действий.',
        'Обретите внутреннее спокойствие. Помедитируйте или погуляйте на природе.',
        'Радость переполняет вас! Делитесь ей с окружающими.',
        'Вы уверены в себе и своих силах. Действуйте смело!',
        'Грядут перемены. Примите их с открытым сердцем.',
        'Сегодня все будет стабильно и предсказуемо. Наслаждайтесь покоем.',
        'День благоприятен для обучения и саморазвития.',
        'Важные партнерские отношения выйдут на новый уровень.',
        'Успех во всех начинаниях. Действуйте!',
        'Ваша внутренняя сила поможет преодолеть любые препятствия.',
        'Сделаете важное открытие сегодня. Будьте внимательны.',
        'День подходит для очищения пространства и мыслей.',
        'Вы находитесь под защитой высших сил. Не бойтесь!',
        'Внезапно придет понимание важной ситуации.',
        'Сложный вопрос найдет свое решение сегодня.',
        'Вам предстоит сделать важный выбор. Доверьтесь интуиции.',
        'Неожиданная помощь придет оттуда, откуда не ждали.',
        'Усвойте важный урок, который преподносит жизнь.',
        'Вы получите заслуженную награду за свои труды.',
        'Энергия исцеления наполнит ваше тело и душу.',
        'День прощения. Отпустите старые обиды.',
        'Поблагодарите вселенную за все, что у вас есть.',
        'Вселенная щедра сегодня. Принимайте дары с благодарностью.',
        'Придет глубокое понимание важных вещей.',
        'Проявите терпение в сложной ситуации.',
        'Надежда осветит ваш путь в темные времена.',
        'Укрепите свою веру в лучшее.',
        'Примите ситуацию такой, какая она есть.',
        'Освободитесь от того, что вас тяготит.',
        'Почувствуйте прилив вдохновения и творческой энергии.',
        'Ваша жизнь начнет трансформироваться к лучшему.',
        'Возрождение после трудного периода.',
        'Ваши таланты расцветут сегодня.',
        'Объедините разрозненные части в единое целое.',
        'Позвольте жизни течь свободно и легко.',
        'Найдите баланс между работой и отдыхом.',
        'Почувствуйте свою целостность и гармонию.',
        'Ощутите единство с миром и людьми.',
        'Загляните в глубину своей души.',
        'Вернитесь к простоте и естественности.',
        'Относитесь к жизни легче и радостнее.',
        'Воспринимайте все как игру, но играйте честно.',
        'Сегодня возможно настоящее чудо.',
        'Магия присутствует в каждом моменте.',
        'Наполните мир своим внутренним светом.',
        'Примите свои теневые стороны.',
        'Движение вперед - вот ваш девиз.',
        'Найдите время для полного покоя.',
        'Почувствуйте бесконечность возможностей.'
    ];
    
    const data = {};
    
    for (let i = 1; i <= 60; i++) {
        const index = (i - 1) % titles.length;
        data[i] = {
            title: `Карта дня: ${titles[index]}`,
            description: descriptions[index] + ' Верьте в себя и все получится!',
            smallImage: `images/card-${i}.jpg`,
            bigImage: `images/card-${i}-big.jpg`
        };
    }
    
    return data;
}

const cardsData = generateCardsData();

// Telegram Mini App интеграция
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.expand();
    tg.ready();
}

// Создание карточек на странице
function createCards() {
    const container = document.getElementById('cardsContainer');
    if (!container) {
        console.error('Контейнер cardsContainer не найден!');
        return;
    }
    
    // Показываем загрузку
    container.innerHTML = '<div class="loading">Загрузка карт</div>';
    
    // Очищаем и создаем карточки
    setTimeout(() => {
        container.innerHTML = '';
        
        for (let i = 1; i <= 60; i++) {
            const card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('onclick', `showCardInfo(${i})`);
            
            // Добавляем номер карты
            const number = document.createElement('span');
            number.className = 'card-number';
            number.textContent = `#${i}`;
            
            const img = document.createElement('img');
            img.src = cardsData[i].smallImage;
            img.alt = cardsData[i].title;
            img.loading = 'lazy';
            
            // Если картинка не загрузится, покажем заглушку
            img.onerror = function() {
                this.src = `https://via.placeholder.com/300x450?text=Карта+${i}`;
                console.log('Не удалось загрузить картинку для карты ' + i);
            };
            
            card.appendChild(number);
            card.appendChild(img);
            container.appendChild(card);
        }
        
        console.log('Создано 60 карточек');
    }, 100);
}

// Функция открытия модального окна
function showCardInfo(cardNumber) {
    console.log('Кликнули по карте:', cardNumber);
    
    const modal = document.getElementById('cardModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    if (!modal || !modalImage || !modalTitle || !modalDescription) {
        console.error('Элементы модального окна не найдены!');
        alert('Ошибка: элементы модального окна не найдены');
        return;
    }
    
    const card = cardsData[cardNumber];
    
    if (card) {
        modalImage.src = card.bigImage;
        modalImage.alt = card.title;
        
        modalImage.onerror = function() {
            this.src = `https://via.placeholder.com/600x900?text=Карта+${cardNumber}`;
            console.log('Не удалось загрузить большую картинку для карты ' + cardNumber);
        };
        
        modalTitle.textContent = card.title;
        modalDescription.textContent = card.description;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Вибрация для Telegram (если доступно)
        if (tg?.HapticFeedback) {
            tg.HapticFeedback.impactOccurred('medium');
        }
    } else {
        console.error('Карта с номером ' + cardNumber + ' не найдена');
        alert('Ошибка: карта не найдена');
    }
}

// Функция закрытия модального окна
function closeModal() {
    const modal = document.getElementById('cardModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Закрытие по клику вне модального окна
window.onclick = function(event) {
    const modal = document.getElementById('cardModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Закрытие по клавише Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Функция прокрутки наверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Показываем кнопку "Наверх" при прокрутке
window.onscroll = function() {
    const btn = document.getElementById('scrollTopBtn');
    if (btn) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            btn.style.display = 'flex';
        } else {
            btn.style.display = 'none';
        }
    }
};

// ========== БЫСТРЫЙ СЧЕТЧИК ПРОСМОТРОВ ==========

// Функция для мгновенного обновления счетчика
function updateViewCounter() {
    const counterElement = document.getElementById('viewCounter');
    if (!counterElement) return;
    
    // МГНОВЕННО показываем сохраненное значение
    let currentCount = localStorage.getItem('totalViews') || '74'; // Значение по умолчанию
    counterElement.textContent = parseInt(currentCount).toLocaleString();
    
    // Асинхронно обновляем в фоне
    fetch('https://api.countapi.xyz/hit/eliafeia-podskazki-vselennoy/views')
        .then(response => response.json())
        .then(data => {
            const newCount = data.value;
            counterElement.textContent = newCount.toLocaleString();
            localStorage.setItem('totalViews', newCount);
            console.log('Счетчик обновлен:', newCount);
        })
        .catch(() => {
            // Если не удалось получить, увеличиваем локальный счетчик
            let localCount = parseInt(localStorage.getItem('totalViews') || '74');
            localCount += 1;
            localStorage.setItem('totalViews', localCount);
            counterElement.textContent = localCount.toLocaleString();
            console.log('Использован локальный счетчик');
        });
}

// Запускаем создание карточек и счетчик после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    createCards();
    updateViewCounter(); // Запускаем сразу - он покажет сохраненное значение мгновенно
    console.log('Страница загружена, создаем 60 карт');
});

// Предзагрузка изображений для плавности
window.addEventListener('load', function() {
    console.log('Все ресурсы загружены');
});

