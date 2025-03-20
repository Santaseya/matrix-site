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
    let resourceZone = day; // A = День рождения
    let mainTalentFromGod = month; // B = Месяц рождения
    let soulTask = reduceToOneDigit(year.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0)); // V = Год рождения (В)
    let karmaTask = reduceToOneDigit(resourceZone + mainTalentFromGod + soulTask); // G = A + B + V (Г)

    // Зона комфорта
    let comfortZone = reduceToOneDigit(resourceZone + mainTalentFromGod + soulTask + karmaTask); // D

    // Родовые линии
    let fatherLine = reduceToOneDigit(resourceZone + mainTalentFromGod); // ЛО
    let motherLine = reduceToOneDigit(mainTalentFromGod + soulTask); // ЛМ

    // Материальная Карма
    let materialKarmaFather = reduceToOneDigit(soulTask + karmaTask); // МР
    let materialKarmaMother = reduceToOneDigit(resourceZone + karmaTask); // ЖР

    // Обновляем числа в диаграмме **(теперь всё правильно расставлено!)**
    updateMatrix([
        comfortZone, // D (Центр)
        mainTalentFromGod, // B (Верх) = месяц рождения (Б)
        resourceZone, // A (Левый бок) = день рождения
        karmaTask, // G (Низ) = A + B + V (Г)
        soulTask, // V (Правый бок) = рассчитанное число по году рождения (В)
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
