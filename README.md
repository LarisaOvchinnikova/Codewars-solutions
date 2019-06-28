##Codewars solutions
**Sort the Gift Code**
	*[Sort the Gift Code](https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3)
	*Task: Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
	*Solution:
	```javascript
	function sortGiftCode(code){
    return code.split('').sort().join(''); }
	```
**Return the Missing Element**
	*[Return the Missing Element](https://www.codewars.com/kata/5299413901337c637e000004)
	*Task: Fellow code warrior, we need your help! We seem to have lost one of our array elements, and we need your help to retrieve it! Our array, superImportantArray, was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing. Write a function called getMissingElement that accepts an array of unique integers between 0 and 9 (inclusive), and returns the missing element.
	*Solution:
	```javascript
	function getMissingElement(superImportantArray){
    for (let i = 0; i <= 9; i++){
     if (!superImportantArray.includes(i)) return i;
     }
    }
    ```


