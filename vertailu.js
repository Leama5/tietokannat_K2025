
function vertailu(p1,p2)
{
  if (p1>p2)
  {
    return "Suurempi luku on" +p1;
  }
  if (p1<p2)
  {
    return "Suurempi luku on" +p2;

  }
  else 
  return "Luvut ovat yhtä suuret";
};

var x=prompt("Anna ensimmäinen luku:");
var p1=parseFloat(x);
var y=prompt("Anna toinen luku:");
var p2=parseFloat(y);
console.log(vertailu(p1,p2));