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

    // Выводим числа СВЕРХУ
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

    // Заполняем Матрицу (только после расчёта!)
    updateMatrix([D, B, A, G, V, LO, LM, MK_JEN, MK_MUZ]);
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
    document.getElementById("centerNumber").textContent = numbers[0] || "";
    document.getElementById("topNumber").textContent = numbers[1] || "";
    document.getElementById("leftNumber").textContent = numbers[2] || "";
    document.getElementById("bottomNumber").textContent = numbers[3] || "";
    document.getElementById("rightNumber").textContent = numbers[4] || "";
    document.getElementById("leftTop").textContent = numbers[5] || "";
    document.getElementById("rightTop").textContent = numbers[6] || "";
    document.getElementById("leftBottom").textContent = numbers[7] || "";
    document.getElementById("rightBottom").textContent = numbers[8] || "";
}


// 👇 Теперь матрица полностью пустая при загрузке
updateMatrix([]);
window.onload = function() {
    updateMatrix(["", "", "", "", "", "", "", "", ""]); // Очищаем все круги в Матрице
    document.getElementById("resultNumbers").innerHTML = ""; // Убираем числа сверху
};
