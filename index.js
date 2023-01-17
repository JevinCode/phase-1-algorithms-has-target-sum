function hasTargetSum(array, target) {
  // Write your algorithm here
  let seen = [];
  seen[array[0]] = true;
  for(let i = 1; i < array.length; i++) {
    const complement = target - array[i];
    if(seen[complement] === true) {
      return true;
    }
    else {
      seen[array[i]] = true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  we will keep an array of the elements we have seen so far.
  we iterate one by one through our input array, and then for each item, compute the complement.
  we then check if we have seen the complement already in our seen array.
  if we have, then we know that two numbers in the array will add to target.
  if not, then we insert the item into the seen array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
