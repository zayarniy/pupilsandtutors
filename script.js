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
        listItem.innerHTML = `<a href='${item.link}'>${item["ФИО"]}, ${item["класс"]} (тьютор: ${item["тьютор"]})</a>`;
        resultsList.appendChild(listItem);
    });

    // Если результатов нет, выводим сообщение
    if (filteredData.length === 0 && input) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = 'Нет результатов';
        resultsList.appendChild(listItem);
    }
}
/*
function searchByTutor() {
    const input = document.getElementById('tutorSearchInput').value.toLowerCase();
    const resultsList = document.getElementById('tutorResultsList');

    resultsList.innerHTML = ''; // Очищаем предыдущие результаты

    // Фильтруем данные
    const filteredData = data.filter(item => item["тьютор"].toLowerCase().includes(input));

    // Отображаем результаты
    filteredData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML =  `<a href='${item.link}'>${item["ФИО"]} (тьютор: ${item["тьютор"]})</a>`;
        resultsList.appendChild(listItem);
    });

    // Если результатов нет, выводим сообщение
    if (filteredData.length === 0 && input) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = 'Нет результатов';
        resultsList.appendChild(listItem);
    }
}
*/

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
            listItem.innerHTML = `<a href='${item.link}'>${item["ФИО"]}, ${item["класс"]} (тьютор: ${item["тьютор"]})</a>`;
            resultsList.appendChild(listItem);
        });
    }

    window.onload = displayAllStudents;