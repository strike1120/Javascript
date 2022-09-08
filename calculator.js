const calculator = {
    add : function (a, b) {
        return(a + b);
    },
    minus : function (a, b) {
        return(a - b);
    },
    square : function (a, b) {
        return(a ** b);
    }


} ;

document.writeln(calculator.square(2, 3));
document.writeln(calculator.add(2, 3));
document.writeln(calculator.minus(2, 3));


