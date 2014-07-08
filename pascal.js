function printPascal(n) {
    var currLine = new Array(n + 1), prevLine, str="1";
    currLine[0] = currLine[n] = 1;

    //recursion base
    if (n == 1) {
        console.log("1\n");
        return;
    }
    if (n == 2) {

        currLine[1] = 2;            //1 2 1

        printPascal(n - 1);
        console.log("1\t2\t1\n");
        return currLine;
    }

    prevLine = printPascal(n - 1);

    for (var i = 1; i < prevLine.length; i++)
    {
        currLine[i] = prevLine[i-1]+prevLine[i]

        str +="\t"+ currLine[i];
    }
    str += "\t1\n";
    console.log(str);

    return currLine;
}

printPascal(10);