// display value in input field
function pick(val)
{
    document.getElementById('Cal').value += val;
}

// gives output based on users input
function solve()
{
   let x = document.getElementById('Cal').value;
   let y = eval(x);
   document.getElementById('Cal').value = y;
}

// clears input field
function clr()
{
    document.getElementById('Cal').value=" ";
}
