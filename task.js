// Задание 1
function getArrayParams(arr) {
    let min = arr[0]
    let max = arr[0]
    let sum = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
        var avg = arr[i] / arr.length;
        var arr2 = [max, min, avg];
    }

    return arr2;
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
