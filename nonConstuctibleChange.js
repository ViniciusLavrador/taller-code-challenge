// Sample Input -> const coins = [5, 7, 1, 1, 2, 3, 22];
// Sample Output -> 20

export const nonConstuctiblChange = (inputArr) => {
  // Since we're looking for the mimimum possible change we cannot construct giver the input
  // We will first order the array (min -> max), so that we have easier access to lower values
  const sortedInputArr = inputArr.sort((a, b) => a - b);

  // we'll then assume that the initial minimum value we can construct is the lowest input value.
  let maximumPossibleChange = sortedInputArr[0];

  // We'll then iterate through the input
  for (let c of sortedInputArr) {
    // If the input we have is greater than the maximum change we can create + 1, we cannot create asnything between
    // maximumPossibleChange and maximumPossibleChange + the current change value, as adding it to the max will no give us any of
    // the values in between.
    if (c > maximumPossibleChange + 1) {
      return maximumPossibleChange;
    }

    // Otherwise, if the input we have is lower or equal than the maximum change we can create + 1, it means that adding it
    // to our maximum change will give us the new maximum without any spaces in between, and we can now use it to construct our change.
    if (c <= maximumPossibleChange + 1) {
      maximumPossibleChange += c;
    }
  }

  // This is the maximum change we can make if every item on the list accounted for.
  return maximumPossibleChange + 1;
};

export default nonConstuctiblChange;

// console.log(nonConstuctiblChange([5, 7, 1, 1, 2, 3, 22]));

// As the for loop is O(n) and the sort is O(n logn), our maximum time complexity is the latter.
// Time Complexity: O(nlogn).
