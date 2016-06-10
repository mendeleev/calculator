(function () {
    //plain JavaScript Based Calculator
    //with square and square root functions

    var result = null;
    var operandA = null;
    var operandB = null;
    var operation = null;

    var display = document.getElementById("display");

    var reset = document.getElementById("reset");
    var zero = document.getElementById("zero");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");

    var plus = document.getElementById("plus");
    var minus = document.getElementById("minus");
    var divide = document.getElementById("divide");
    var multiply = document.getElementById("multiply");

    var btnSqrt = document.getElementById("sqrt");
    var btnSquare = document.getElementById("square");

    var numberPrint = function (num) {
        num.onclick = function () {
            if (result === null) {
                result = 0;
                display.value = "";
            }
            display.value += num.value;
        };
    };

    reset.onclick = function () {
        display.value = "0";
        operandA = null;
        result = null;
        operation = null;
    };

    var sum = function (a, b) {
        return a + b;
    };

    var difference = function (a, b) {
        return a - b;
    };

    var division = function (a, b) {
        return a / b;
    };

    var product = function (a, b) {
        return a * b;
    };

    var square = function (x) {
        return x * x;
    };

    var squareRoot = function (x) {
        return Math.sqrt(x);
    };

    var getResult = function () {
        if (operandA === null) {
            operandA = parseFloat(display.value);
            result = operandA;
        } else {
            operandB = parseFloat(display.value);
        }

        if (operandB) {
            switch (operation) {
                case '+':
                    result = sum(operandA, operandB);
                    break;
                case '-':
                    result = difference(operandA, operandB);
                    break;
                case '*':
                    result = product(operandA, operandB);
                    break;
                case '/':
                    result = division(operandA, operandB);
                    break;
                default:
                    result = operandB;
                    break;
            }
            operandA = result;
            console.log(operandA + " " + operandB);
        }
        display.value = result;
        result = null;
        operandB = null;
        memory = null;

        if (!operandB) {
            console.log(operandA + " null");
        }
    };

    plus.onclick = function () {
        if (operation != "+") {
            operation = "+";
        }
        getResult();
    };

    minus.onclick = function () {
        getResult();
        operation = "-";
    };

    multiply.onclick = function () {
        getResult();
        operation = "*";
    };

    divide.onclick = function () {
        getResult();
        operation = "/";
    };

    equal.onclick = function () {
        getResult();
        operation = "";
        operandA = null;
        operandB = null;
    };

    point.onclick = function () {
        if (/\./.exec(display.value) === null) {
            display.value += ".";
        }
    };

    btnSquare.onclick = function () {
        operandB = display.value;
        display.value = square(operandB);
        operandB = null;
    };

    btnSqrt.onclick = function () {
        operandB = display.value;
        display.value = squareRoot(operandB);
        operandB = null;
    };

    numberPrint(zero);
    numberPrint(one);
    numberPrint(two);
    numberPrint(three);
    numberPrint(four);
    numberPrint(five);
    numberPrint(six);
    numberPrint(seven);
    numberPrint(eight);
    numberPrint(nine);

})();
