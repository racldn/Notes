assert.js
const assert = {
 isTrue: function(assertionToCheck) {
  if (!assertionToCheck) {
   throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
  } else {
   console.log ("Life is great");
  }
 },
​
 include: function(array, contents) {
  let arrayLength = array.length;
  let times = 0
  for (let i = 0; i < arrayLength; i++) {
   if (array[i] === contents) {
    times++;
   }
  }
  if (times === 0) {
   throw new Error("Assertion failed: " + array + " does not include " + contents);
  } else {
   console.log ("Life is great")
  }
 }
};
