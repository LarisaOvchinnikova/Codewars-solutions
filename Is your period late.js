//Is your period late?
//https://www.codewars.com/kata/578a8a01e9fd1549e50001f1
function periodIsLate(last, today, cycleLength)
{
  return today > last.setDate(last.getDate()+cycleLength);
}
//-----
function periodIsLate(last, today, cycleLength)
{
  return (today - last)/(1000 * 60 * 60 * 24) > cycleLength ;
}