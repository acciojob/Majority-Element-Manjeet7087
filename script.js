//your code here
function findMajorityElement(arr) {
  let count = 1;
  let majority = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === majority) {
      count++;
    } else {
      count--;
      if (count === 0) {
        majority = arr[i];
        count = 1;
      }
    }
  }

  return majority;
}

// Test the function
const arr = [2, 1, 2];
const majorityElement = findMajorityElement(arr);
console.log(majorityElement);

