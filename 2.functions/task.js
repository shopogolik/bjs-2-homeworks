// Задание 1
function getArrayParams(arr) {
    let min, max, sum, avg;
    min = Infinity;
    max = -Infinity;
    let sumSub;
    for (let i = 0; i < arr.length; i++) {
        if (min > [i - 1]) {
            min = [i];
        }
        if (max > [i - 1]) {
            max = [i];
        }
        sumSub = sum + [i];
    }
    avg = Number((sumSub / arr.length).toFixed(2));
    return {
        min: min,
        max: max,
        avg: avg
    };
}

// Задание 2
function worker(arr) {
    let sum;

    // Ваш код

    return sum;
}

function makeWork(arrOfArr, func) {
    let max;

    // Ваш кода
    // for ...

    return max;
}

// Задание 3
function worker2(arr) {// Ваш код
}
