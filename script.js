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
    let soulTask = reduceToOneDigit(year.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0)); // В
    let karmaTask = reduceToOneDigit(day + month + soulTask); // Г
    let comfortZone = reduceToOneDigit(day + month + soulTask + karmaTask); // Д

    // Остальные Таланты от Бога
    let mainTalentFromGod = month; // Б = Месяц рождения
    let talent1 = reduceToOneDigit(month + comfortZone); // Б2 (Б+Д)
    let talent2 = reduceToOneDigit(month + talent1); // Б1 (Б+Б2)

    // Материальная (Финансовая) Карма
    let moneyEntry = reduceToOneDigit(comfortZone + soulTask); // Вход в Денежный Канал (Е)
    let secondMaterialKarma = reduceToOneDigit(moneyEntry + soulTask); // Вторая энергия Материальной Кармы

    // Кармический Хвост (по новой формуле)
    let karmaTail1 = reduceToOneDigit(karmaTask + comfortZone); // Г1 = Г + Д
    let karmaTail2 = reduceToOneDigit(karmaTask + karmaTail1); // Г2 = Г + Г1

    // Вход в Отношения (отдельно)
    let relationshipEntry = karmaTail1; // Вход в Отношения = Г1

    // Родовые линии
    let fatherLine = reduceToOneDigit(day + month); // ЛО
    let motherLine = reduceToOneDigit(month + soulTask); // ЛМ

    // Материальная Карма
    let materialKarmaFather = reduceToOneDigit(soulTask + karmaTask); // МР
    let materialKarmaMother = reduceToOneDigit(day + karmaTask); // ЖР

    // Предназначение (исправленная формула)
    let destinyBefore40_AplusV = reduceToOneDigit(day + soulTask); // (А+В) → если >22, снова складываем
    let destinyBefore40 = reduceToOneDigit(destinyBefore40_AplusV + (month + karmaTask)); // До 40 лет = (А+В) + (Б+Г)
    let destiny40_60 = reduceToOneDigit((fatherLine + materialKarmaFather) + (motherLine + materialKarmaMother)); // И1
    let spiritualDestiny = reduceToOneDigit(destinyBefore40 + destiny40_60); // Духовное предназначение

    // Обновляем числа в диаграмме
    updateMatrix([
        comfortZone, // D (Центр)
        soulTask, // B (Верх)
        day, // A (Левый бок)
        karmaTask, // G (Низ)
        mainTalentFromGod, // V (Правый бок)
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
