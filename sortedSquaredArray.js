// Sample Input -> [1, 2, 3, 5, 6, 8, 9]
// Sample Output -> [1, 4, 9, 25, 36, 64, 81]

const sortedSquaredArray = (inputArr) => {
  // We'll first square the entire input array
  const squaredArray = inputArr.map((i) => i ** 2);

  // We'll then check if the array has more the one item and if it's first item is bigger than the second.
  // This will happen in cases that at least one of the inputs are negative.
  // If so, we'll sort the array and return.
  // This works beacause we have a sorted array as input.
  if (squaredArray.length >= 1 && squaredArray[0] >= squaredArray[1]) {
    return squaredArray.sort((a, b) => a - b);
  }

  // If the first item is lower than the second, we'll assume thats true for
  // the entire array (as it was initially sorted and potentiation is a linear transformation)
  // So we will just return the squared Array
  return squaredArray;
};

// console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));

// As the map in O(n) and the for loop is O(n)
// Time Complexity: O(n).
