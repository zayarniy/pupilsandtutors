function searchStudents() {
    const input = document.getElementById('studentSearchInput').value.toLowerCase();
    const resultsList = document.getElementById('studentResultsList');
    resultsList.innerHTML = ''; // Очищаем предыдущие результаты

    // Фильтруем данные
    const filteredData = data.filter(item => item["ФИО"].toLowerCase().includes(input) || item["тьютор"].toLowerCase().includes(input));

    // Отображаем результаты
    filteredData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `<a href='${item.link}'><strong>${item["ФИО"]}<br>${item["класс"]}</strong><br>${item["тьютор"]}</a>`;
        resultsList.appendChild(listItem);
    });
    
    // Если результатов нет, выводим сообщение
    if (filteredData.length === 0 && input) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = 'Нет результатов';
        resultsList.appendChild(listItem);
    }
    document.getElementById('countList').textContent=filteredData.length;
}


    // Функция для отображения полного списка
    function displayAllStudents() {
        const resultsList = document.getElementById('studentResultsList');
        data=data.sort((a, b) => {
            return a["ФИО"].localeCompare(b["ФИО"]);
        });
        resultsList.innerHTML = ''; // Очищаем предыдущие результаты
        
        // Отображаем все результаты
        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `<a href='${item.link}'><strong>${item["ФИО"]}<br>${item["класс"]}</strong><br>${item["тьютор"]}</a>`;
            resultsList.appendChild(listItem);
        });
        document.getElementById('countList').textContent=data.length;
    }

    window.onload = displayAllStudents;