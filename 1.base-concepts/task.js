"use strict";
function solveEquation(a, b, c) {
    let arr = [];
    let d = b * b - 4 * a * c;
    let x1, x2;

    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a),
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(x1, x2);
    } else if (d == 0) {
        x1 = -b / (2 * a);
        arr.push(x1);
    }

    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    let dateStart = new Date();
    let dateEnd = new Date(date);
    let S = amount - contribution;
    totalAmount = S * ((percent + percent / (((1 + percent) ** (dateEnd / dateStart) - 1)))) / 100

    return totalAmount;
}
