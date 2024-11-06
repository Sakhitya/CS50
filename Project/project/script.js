function convert() {
    const inputNumber = document.getElementById("inputNumber").value;
    const baseFrom = document.getElementById("baseFrom").value;
    let decimalValue;

    try {
        decimalValue = parseInt(inputNumber, baseFrom);
        if (isNaN(decimalValue)) throw "Invalid input";
    } catch (error) {
        alert("Please enter a valid number in the selected base.");
        return;
    }

    const binaryResult = decimalValue.toString(2);
    const decimalResult = decimalValue.toString(10);
    const hexadecimalResult = decimalValue.toString(16).toUpperCase();
    const romanResult = toRoman(decimalValue);

    document.getElementById("binaryResult").innerText = binaryResult;
    document.getElementById("decimalResult").innerText = decimalResult;
    document.getElementById("hexadecimalResult").innerText = hexadecimalResult;
    document.getElementById("romanResult").innerText = romanResult;
}

function toRoman(num) {
    if (num < 1 || num > 3999) return "Out of Range";

    const romanNumeralMap = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = "";
    for (const { value, numeral } of romanNumeralMap) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}

function resetFields() {

    document.getElementById("inputNumber").value = "";
    document.getElementById("baseFrom").value = "10";

    document.getElementById("binaryResult").innerText = " ";
    document.getElementById("decimalResult").innerText = " ";
    document.getElementById("hexadecimalResult").innerText = " ";
    document.getElementById("romanResult").innerText = " ";
}
