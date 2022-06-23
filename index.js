var num1 = window.prompt("Enter a Nnmber");
var Op = window.prompt("Enter an Operation(+, -, x or /)");
var num2 = window.prompt("Enter another Number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

function basicArithemtics(Op) {
    if (Op == "+") {
        document.write(num1 + num2)
    }
    else if (Op == "-") {
        document.write(num1 - num2)
    }
    else if (Op == "x") {
        document.write(num1 * num2)
    }
    else if (Op == "/")
        document.write(num1 / num2)
}
basicArithemtics(Op);
