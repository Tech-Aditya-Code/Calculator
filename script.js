// display value in input field
function pick(val)
{
    document.getElementById('Cal').value += val;
}

// evaluation
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
