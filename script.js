// display value in input box
function pick(val)
{
    document.getElementById('Cal').value += val;
}

// solve the given equation
function solve()
{
   let x = document.getElementById('Cal').value;
   let y = eval(x);
   document.getElementById('Cal').value = y;
}

// clear the input box
function clr()
{
    document.getElementById('Cal').value=" ";
}