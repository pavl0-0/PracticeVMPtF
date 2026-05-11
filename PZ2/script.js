document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("categorySelect");
    const display = document.getElementById("quoteDisplay");
    
    // Змінна для зберігання всіх цитат після завантаження
    let quotesData = [];

    // Використовуємо fetch для завантаження JSON-файлу 
    fetch('data.json')
        // Зчитуємо відповідь як текст, щоб чітко виконати вимогу використання JSON.parse()
        .then(response => response.text())
        .then(text => {
            // Розбираємо JSON-файл за допомогою JSON.parse() 
            const data = JSON.parse(text);
            
            // Зберігаємо масив цитат
            quotesData = data.quotes;

            // Заповнюємо випадаючий список категоріями 
            data.categories.forEach(category => {
                const option = document.createElement("option");
                option.value = category;
                option.textContent = category;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Виникла помилка під час завантаження даних:", error);
            display.textContent = "Не вдалося завантажити дані.";
        });

    // Слухаємо подію зміни значення у випадаючому списку
    select.addEventListener("change", (event) => {
        const selectedCategory = event.target.value;

        // Якщо категорія не обрана, очищуємо поле
        if (!selectedCategory) {
            display.textContent = "Тут з'явиться цитата...";
            return;
        }

        // Фільтруємо цитати за обраною категорією
        const filteredQuotes = quotesData.filter(q => q.category === selectedCategory);

        // При виборі категорії відображаємо цитату 
        if (filteredQuotes.length > 0) {
            // Щоб було цікавіше, обираємо випадкову цитату з цієї категорії
            const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
            display.textContent = `«${filteredQuotes[randomIndex].text}»`;
        } else {
            display.textContent = "На жаль, цитат для цієї категорії не знайдено.";
        }
    });
});