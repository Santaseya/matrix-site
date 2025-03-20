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

    // Корректируем день, месяц и год, если они больше 22
    day = reduceToOneDigit(day);
    month = reduceToOneDigit(month);
    let reducedYear = reduceToOneDigit(year.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0));

    // Основные зоны
    let soulTask = reducedYear; // В
    let karmaTask = reduceToOneDigit(day + month + soulTask); // Г
    let comfortZone = reduceToOneDigit(day + month + soulTask + karmaTask); // Д

    // Остальные Таланты от Бога
    let mainTalentFromGod = month; // Главный талант = месяц рождения (после приведения к 22)
    let talent1 = reduceToOneDigit(month + comfortZone); // Б2 (Б+Д)
    let talent2 = reduceToOneDigit(month + talent1); // Б1 (Б+Б2)

    // Материальная (Финансовая) Карма
    let moneyEntry = reduceToOneDigit(comfortZone + soulTask); // Вход в Денежный Канал (Е)
    let secondMaterialKarma = reduceToOneDigit(moneyEntry + soulTask); // Вторая энергия Материальной Кармы

    // Кармический Хвост
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
    let destinyBefore40_AplusV = reduceToOneDigit(day + soulTask); // (А+В), если >22, снова складываем
    let destinyBefore40 = reduceToOneDigit(destinyBefore40_AplusV + (month + karmaTask)); // До 40 лет = (А+В) + (Б+Г)
    let destiny40_60 = reduceToOneDigit((fatherLine + materialKarmaFather) + (motherLine + materialKarmaMother)); // И1
    let spiritualDestiny = reduceToOneDigit(destinyBefore40 + destiny40_60); // Духовное предназначение

    let resultText = `
        <h3>Основные зоны</h3>
        <p><strong>Зона Ресурса:</strong> ${day}</p>

        <h3>Главный Талант от Бога</h3>
        <p>${mainTalentFromGod}</p>

        <h3>Остальные Таланты от Бога</h3>
        <p>${talent1}</p>
        <p>${talent2}</p>

        <h3>Материальная (Финансовая) Карма</h3>
        <p><strong>Задача Души:</strong> ${soulTask}</p>
        <p><strong>Вход в Денежный Канал:</strong> ${moneyEntry}</p>
        <p><strong>Вторая энергия Материальной Кармы:</strong> ${secondMaterialKarma}</p>

        <h3>Кармический Хвост</h3>
        <p><strong>Главная проработка:</strong> ${karmaTask}</p>
        <p>${karmaTail1}</p>
        <p>${karmaTail2}</p>

        <h3>Вход в Отношения</h3>
        <p><strong>Вход в Отношения:</strong> ${relationshipEntry}</p>

        <h3>Зона Комфорта</h3>
        <p><strong>Зона Комфорта:</strong> ${comfortZone}</p>

        <h3>Родовые линии</h3>
        <p><strong>Таланты по Линии Отца:</strong> ${fatherLine}</p>
        <p><strong>Таланты по Линии Матери:</strong> ${motherLine}</p>

        <h3>Материальная Карма</h3>
        <p><strong>По мужскому роду:</strong> ${materialKarmaFather}</p>
        <p><strong>По женскому роду:</strong> ${materialKarmaMother}</p>

        <h3>Предназначение</h3>
        <p><strong>До 40 лет:</strong> ${destinyBefore40}</p>
        <p><strong>С 40 до 60 лет:</strong> ${destiny40_60}</p>
        <p><strong>После 60 лет (Духовное):</strong> ${spiritualDestiny}</p>
    `;

    document.getElementById("result").innerHTML = resultText;
}
function updateMatrix(numbers) {
    document.getElementById("centerNumber").textContent = numbers[0];
    document.getElementById("topNumber").textContent = numbers[1];
    document.getElementById("leftNumber").textContent = numbers[2];
    document.getElementById("rightNumber").textContent = numbers[3];
    document.getElementById("bottomNumber").textContent = numbers[4];
}

// Пример данных (потом заменим на расчётные)
const exampleNumbers = [6, 3, 8, 19, 3];
updateMatrix(exampleNumbers);
