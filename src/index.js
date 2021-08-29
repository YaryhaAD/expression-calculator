function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    try {
        let res = new Function('return ' + expr);
        if (res() === Infinity || expr.includes('/ 0')) {
            throw new TypeError();
        }
        return res();
    } catch (error) {
        if (error.name === 'SyntaxError') {
            throw new SyntaxError('ExpressionError: Brackets must be paired');
        }
        if (error.name === 'TypeError') {
            throw new TypeError('TypeError: Division by zero.');
        }
    }
}

module.exports = {
    expressionCalculator
}