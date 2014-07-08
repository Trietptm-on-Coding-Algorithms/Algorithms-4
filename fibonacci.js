function printFibonacci(n)
{
    var curr, prev=2,last=1;

    if(isNaN(n))
        return;

    console.log("1\t");
    if(n>=2) console.log("2\t");

    for(var i=1; i<n;i++)
    {
        curr = prev+last;
        console.log(curr+"\t");
        last = prev;
        prev  = curr;
    }

}

printFibonacci(10);