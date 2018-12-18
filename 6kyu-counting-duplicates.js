//Problem domain: https://www.codewars.com/kata/counting-duplicates/train/javascript

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(str){
  let count = {};
  str.toLowerCase().split('').forEach(l => count[l] ? count[l]++ : count[l] = 1);
  
  let value = Object.values(count);
  return value.filter(d => d > 1).length;
}

/* Clever: */
function duplicateCount(s){
  return (s.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}