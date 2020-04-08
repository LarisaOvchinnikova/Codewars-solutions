// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
// https://www.codewars.com/kata/582746fa14b3892727000c4f
function countDevelopers(list) {
 return list.filter(el=>el.continent === 'Europe' && el.language === 'JavaScript').length;
}