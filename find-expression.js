
function findExpression(num, result = 1, string = '1') {
    if (result === num) {
        return string;
    }

    if (result > num) {
        return undefined;
    }


    return findExpression(num, result + 4, string + ' ' + add4) ||
    findExpression(num, result * 2, string +  ' ' + mul2);
}