function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  if(word === reversedWord){
    return true
  }else {
    return false
  }
}
console.log(isPalindrome('mom'))

/* 
  Add your pseudocode here
  reverse the word
  check if the reversed word is same as the word 
  if it is same return true
  if its false return false
*/

/*
  Add written explanation of your solution here
  when reversing the word you turn the word into 
  an array first then reverse it the joint it
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
   console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
