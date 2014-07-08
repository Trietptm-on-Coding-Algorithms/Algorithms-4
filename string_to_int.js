function stringToInt(str, base)
{
    var pow=1, result=0;

    str = str.toLowerCase();

    if(arguments.length == 1)
        base = 10;

    for(var i=str.length-1; i>=0; i--)
    {
       if(base > 10 && str[i].charCodeAt(0)> "a".charCodeAt(0) && str[i].charCodeAt(0) < "z".charCodeAt(0))
            result += (10+(str[i].charCodeAt(0) - "a".charCodeAt(0))) *pow;
       else
            result += str[i]*pow;

       pow *= base;
    }
    return result;
}
console.log(stringToInt("12F"));