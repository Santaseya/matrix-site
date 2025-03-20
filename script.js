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
    let mainTalentFromGod = month; // Б = Месяц рождения
    let soulTask = reduceToOneDigit(year.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0)); // В
    let karmaTask = reduceToOneDigit(day + month + soulTask); // Г

    // Зона комфорта
    let comfortZone = reduceToOneDigit(day + month + soulTask + karmaTask); // Д

    // Родовые линии
    let fatherLine = reduceToOneDigit(day + month); // ЛО
    let motherLine = reduceToOneDigit(month + soulTask); // ЛМ

    // Материальная Карма
    let materialKarmaFather = reduceToOneDigit(soulTask + karmaTask); // МР
    let materialKarmaMother = reduceToOneDigit(day + karmaTask); // ЖР

    // Обновляем числа в диаграмме **(поменял местами!)**
    updateMatrix([
        comfortZone, // D (Центр)
        mainTalentFromGod, // B (Верх) = месяц рождения (Б)
        day, // A (Левый бок)
        karmaTask, // G (Низ) = A + B + V
        soulTask, // V (Правый бок) = рассчитанное по году рождения (В)
        fatherLine, // ЛО (Левый верхний)
        motherLine, // ЛМ (Правый верхний)
        materialKarmaMother, // ЖР (Левый нижний)
        materialKarmaFather // МР (Правый нижний)
    ]);
}

// Функция обновления диаграммы
function updateMatrix(numbers = []) {
    document.getElementById("centerNumber").textContent = numbers[0] || ""; // D
    document.getElementById("topNumber").textContent = numbers[1] || ""; // B
    document.getElementById("leftNumber").textContent = numbers[2] || ""; // A
    document.getElementById("bottomNumber").textContent = numbers[3] || ""; // G
    document.getElementById("rightNumber").textContent = numbers[4] || ""; // V

    document.getElementById("leftTop").textContent = numbers[5] || ""; // ЛО
    document.getElementById("rightTop").textContent = numbers[6] || ""; // ЛМ
    document.getElementById("leftBottom").textContent = numbers[7] || ""; // ЖР
    document.getElementById("rightBottom").textContent = numbers[8] || ""; // МР
}

// 👇 Теперь матрица полностью пустая при загрузке
updateMatrix([]);
