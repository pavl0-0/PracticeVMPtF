document.addEventListener("DOMContentLoaded", () => {
    const loadBtn = document.getElementById("loadBtn");
    const tableContainer = document.getElementById("table-container");

    loadBtn.addEventListener("click", () => {
        // Використовуємо fetch для отримання файлу
        fetch('data2.json')
            .then(response => response.json())
            .then(data => {
                // Очищаємо контейнер перед новим малюванням
                tableContainer.innerHTML = '';
                
                // Викликаємо функцію генерації таблиці
                const table = generateTableFromJSON(data);
                
                // Додаємо таблицю на сторінку
                if (table) {
                    tableContainer.appendChild(table);
                } else {
                    tableContainer.innerHTML = '<p>Немає даних для відображення.</p>';
                }
            })
            .catch(error => {
                console.error("Помилка:", error);
                tableContainer.innerHTML = '<p style="color:red;">Помилка завантаження або парсингу JSON.</p>';
            });
    });

    // Функція, яка перетворює масив об'єктів на HTML-таблицю
    function generateTableFromJSON(dataArray) {
        if (!Array.isArray(dataArray) || dataArray.length === 0) {
            return null;
        }

        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        // 1. Створюємо шапку таблиці (заголовки беремо з ключів першого об'єкта)
        const headers = Object.keys(dataArray[0]);
        const headerRow = document.createElement("tr");
        
        headers.forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // 2. Створюємо рядки з даними
        dataArray.forEach(item => {
            const row = document.createElement("tr");
            
            headers.forEach(header => {
                const td = document.createElement("td");
                td.textContent = item[header];
                row.appendChild(td);
            });
            
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);

        return table;
    }
});