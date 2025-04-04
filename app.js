// Elementlarni olish
const container = document.getElementById('container');
const navbar = document.getElementById('navbar');
const banner = document.getElementById('banner');
const buy = document.getElementById('buy');
const img = document.getElementById('img');

// Tugmalarni olish
const buttons = {
    btn1: document.getElementById('btn1'),
    btn2: document.getElementById('btn2'),
    btn3: document.getElementById('btn3'),
    btn4: document.getElementById('btn4'),
    btn5: document.getElementById('btn5'),
    btn6: document.getElementById('btn6'),
};

// Savdo tugmalari va rasmlar
const sales = [
    { button: document.getElementById('sale1'), imgSrc: 'assets/img7.png' },
    { button: document.getElementById('sale2'), imgSrc: 'assets/img8.png' },
    { button: document.getElementById('sale3'), imgSrc: 'assets/img9.png' },
    { button: document.getElementById('sale4'), imgSrc: 'assets/img10.png' },
    { button: document.getElementById('sale5'), imgSrc: 'assets/img11.png' },
];

// Funksiya: elementni ko‘rsatish/yashirish
const toggleVisibility = (element, state) => {
    element.style.display = state ? 'flex' : 'none';
};

// Tugmalar uchun hodisalar
buttons.btn1.addEventListener('click', () => {
    toggleVisibility(container, false);
    toggleVisibility(navbar, true);
});

buttons.btn2.addEventListener('click', () => {
    toggleVisibility(container, true);
    toggleVisibility(navbar, false);
});

buttons.btn3.addEventListener('click', () => {
    toggleVisibility(navbar, false);
    toggleVisibility(banner, true);
});

buttons.btn4.addEventListener('click', () => {
    toggleVisibility(banner, false);
    toggleVisibility(navbar, true);
});

buttons.btn5.addEventListener('click', () => {
    toggleVisibility(buy, false);
    toggleVisibility(banner, true);
});

// Savdo tugmalari uchun universal funksiya
sales.forEach(({ button, imgSrc }) => {
    button.addEventListener('click', () => {
        toggleVisibility(buy, true);
        toggleVisibility(banner, false);
        img.setAttribute('src', imgSrc);
    });
});

buttons.btn6.addEventListener('click', () => {
    thankYouMessage.style.display = 'block';
    setTimeout(() => {
        thankYouMessage.style.opacity = '1'; // Sekin ko'rinishi
    }, 100);

    setTimeout(() => {
        thankYouMessage.style.opacity = '0'; // Sekin yo'qolishi
        setTimeout(() => {
            thankYouMessage.style.display = 'none'; // To‘liq yashirish
        }, 500);
    }, 3000);
});