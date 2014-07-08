function binaryToDecimal(strBinary) {
    var result = 0, pow = 1;

    for (var i = strBinary.length - 1; i >= 0; i--) {
        if (strBinary[i] != 1 && strBinary[i] != 0)
            return;

        result += strBinary[i] * pow;
        pow *= 2;
    }
    return result;

}
console.log(binaryToDecimal("10101001"));