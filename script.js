function reduceToOneDigit(num) {
    while (num > 22) {
        num = num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}

function calculateMatrix() {
    let birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("Пожалуйста, введите дату рождения.");
        return;
    }

    let [year, month, day] = birthdate.split("-").map(Number);

    // Основные зоны
    let A = day;
    let B = month;
    let V = reduceToOneDigit(year.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0));
    let G = reduceToOneDigit(A + B + V);
    let D = reduceToOneDigit(A + B + V + G);

    // Родовые линии
    let LO = reduceToOneDigit(A + B);
    let LM = reduceToOneDigit(B + V);

    // Материальная Карма
    let MK_JEN = reduceToOneDigit(A + G);
    let MK_MUZ = reduceToOneDigit(V + G);

    // **Вместо обновления Матрицы, выводим числа ВВЕРХУ!**
    let resultNumbers = `
        <p>${A}</p>
        <p>${B}</p>
        <p>${V}</p>
        <p>${G}</p>
        <p>${D}</p>
        <p>${LO}</p>
        <p>${LM}</p>
        <p>${MK_JEN}</p>
        <p>${MK_MUZ}</p>
    `;
    document.getElementById("resultNumbers").innerHTML = resultNumbers;
}

    // Обновляем числа в диаграмме
    updateMatrix([
        D, // Центр (Зона комфорта)
        B, // Верх (Главный талант → месяц рождения)
        A, // Левый бок (Зона ресурса → день рождения)
        G, // Низ (Кармическая задача)
        V, // Правый бок (Задача души)
        LO, // Левый верхний (Линия отца)
        LM, // Правый верхний (Линия матери)
        MK_JEN, // Левый нижний (Материальная карма по женскому роду)
        MK_MUZ // Правый нижний (Материальная карма по мужскому роду)
    ]);
}

// Функция обновления диаграммы
function updateMatrix(numbers = []) {
    document.getElementById("centerNumber").textContent = numbers[0] || ""; // D (Центр, Зона комфорта)
    document.getElementById("topNumber").textContent = numbers[1] || ""; // B (Верх, Месяц рождения)
    document.getElementById("leftNumber").textContent = numbers[2] || ""; // A (Лево, День рождения)
    document.getElementById("bottomNumber").textContent = numbers[3] || ""; // G (Низ, Кармическая задача)
    document.getElementById("rightNumber").textContent = numbers[4] || ""; // V (Право, Год рождения = Задача Души)

    document.getElementById("leftTop").textContent = numbers[5] || ""; // ЛО (Линия отца)
    document.getElementById("rightTop").textContent = numbers[6] || ""; // ЛМ (Линия матери)
    document.getElementById("leftBottom").textContent = numbers[7] || ""; // МК ЖЕН (Мат. Карма Ж)
    document.getElementById("rightBottom").textContent = numbers[8] || ""; // МК МУЖ (Мат. Карма М)
}

// 👇 Теперь матрица полностью пустая при загрузке
updateMatrix([]);
// Очищаем числа в начале
document.getElementById("resultNumbers").innerHTML = "";
// Очищаем Матрицу при загрузке страницы
window.onload = function() {
    updateMatrix(["", "", "", "", "", "", "", "", ""]); // Очищаем круги
    document.getElementById("resultNumbers").innerHTML = ""; // Очищаем список чисел сверху
};
