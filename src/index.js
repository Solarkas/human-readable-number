module.exports = function toReadable(number) {
    const massiv = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];
    const massiv2 = [
        "",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const massiv3 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundred = "hundred";
    const numberMassiv = [...("" + number)].map(Number);

    if (number < 11) {
        return massiv[number];
    } else if (number > 10 && number < 20) {
        return massiv2[number - 10];
    } else if (number >= 20 && number < 100) {
        if (numberMassiv[1] === 0) {
            return massiv3[numberMassiv[0]];
        } else {
            return massiv3[numberMassiv[0]] + " " + massiv[numberMassiv[1]];
        }
    } else if (number >= 100 && number < 1000) {
        if (numberMassiv[1] === 0 && numberMassiv[2] === 0) {
            return massiv[numberMassiv[0]] + " " + hundred;
        } else if (
            numberMassiv[1] !== 0 &&
            numberMassiv[2] === 0 &&
            numberMassiv[1] !== 1
        ) {
            return (
                massiv[numberMassiv[0]] +
                " " +
                hundred +
                " " +
                massiv3[numberMassiv[1]]
            );
        } else if (
            numberMassiv[1] !== 0 &&
            numberMassiv[2] !== 0 &&
            numberMassiv[1] !== 1
        ) {
            return (
                massiv[numberMassiv[0]] +
                " " +
                hundred +
                " " +
                massiv3[numberMassiv[1]] +
                " " +
                massiv[numberMassiv[2]]
            );
        } else if (
            numberMassiv[1] === 0 &&
            numberMassiv[2] !== 0 &&
            numberMassiv[1] !== 1
        ) {
            return (
                massiv[numberMassiv[0]] +
                " " +
                hundred +
                " " +
                massiv[numberMassiv[2]]
            );
        } else if (numberMassiv[1] === 1 && numberMassiv[2] !== 0) {
            return (
                massiv[numberMassiv[0]] +
                " " +
                hundred +
                " " +
                massiv2[numberMassiv[2]]
            );
        } else {
            return massiv[numberMassiv[0]] + " " + hundred + " " + massiv[10];
        }
    }
};
