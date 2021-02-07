// Big O notation

// imagine running a loop to add up numbers:

function addNumbers(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i
    }
    return total; 
}

// this would be what most people think of and default to. The number of operations increases with num. Therefore, this is O(n) time complexity. A better solution is below:

function addNumbersAgain(num) {
    return num * (num  + 1) / 2;
}

// in the function above there are a fixed number of operations, no matter the value of num. Therefore, this is constant time which is a flat line compared to the O(n) line which is 45 degrees starting from the origin (0,0).

// Space Complexity

function addArray(arr) {
    let total = 0;
    for (let i =0; i < arr.length; i++){
        total += arr[i];
    }

    return total; 
}

//no matter the size of the array, the space is already assigned because there are only two variables and they exist no matter what. We are adding to the total variable but not making new variables, therefore this is constant space!

function doubleArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }

    return newArr;
}

//newArr is getting longer and longer directly proportional to the input. Therefore this is O(n) space.

// write a function that takes in a string and returns a count of each character in the string
// steps -> create an empty dict to store the results
// loop through the string via string index
// check to see if the value at the string index position exists as a key in the dict
// if it does, increment value (count) by 1. If not, set the key value to 1.

function countLetters(string) {
    let counted = {};
    for (let i = 0; i < string.length; i++) {
        if (!counted[string[i]]) {
            counted[string[i]] = 1
        } else {
            counted[string[i]] += 1
        }
    }

    return counted
}
// some additional changes can be made here such that it's taken into consideration whether the character is alpha numeric, ie. ignore spaces and symbols etc.

//write a function called same which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. the frequency of values must be the same.

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let counter1 = {};
    let counter2 = {};

    for (let val of arr1) {
        counter1[val] = (counter1[val] || 0) + 1
    }

    for (let val of arr2) {
        counter2[val] = (counter2[val] || 0) + 1
    }

    for (let key in counter1) {
        if (!(key ** 2) in counter2) {
            return false
        }

        if (counter2[key ** 2] !== counter1[key]) {
            return false;
        }
    }

    return true;
};


//write a function called sameFrequency, where given two positive integers, find out if the two numbers have the same frequency of digits. Solution must be O(n) complexity. 

const sameFrequency = (num1, num2) => {
    let freqOne = {};
    let freqTwo = {};
    let stringed1 = num1.toString();
    let stringed2 = num2.toString();

    if (stringed1.length !== stringed2.length) {
        return false;
    }

    for (let digit of stringed1) {
        if (!freqOne[digit]) {
            freqOne[digit] = 1;
        } else {
            freqOne[digit] += 1;
        }
    }

    for (let digit of stringed2) {
        if (!freqTwo[digit]) {
            freqTwo[digit] = 1;
        } else {
            freqTwo[digit] += 1;
        }
    }

    for (let key in freqOne) {
        if (!(key) in freqTwo) {
            return false;
        }

        if (freqOne[key] !== freqTwo[key]) {
            return false;
        }
    }

    return true;
}

//write a function called areThereDuplicates which accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in. Can be solved with the frequency counter pattern or multiple pointers pattern. 

function areThereDuplicates(arguments) {

    let counter = {};
    let args = Array.from(arguments);

    for (let arg of args) {
        if (!counter[arg]) {
            counter[arg] = 1;
        } else {
            counter[arg] += 1
        }
    }

    for (let key in counter) {
        if (counter[key] > 1) {
            return true;
        }
    }

    return false;
}



//given two strings, write a function to determine if the second string is an anagram of the first. 

function validAnagram(str1,str2){

    if (str1.length !== str2.length) {
        return false;
    }

    let lookup = {};

    for (let i = 0; i < str1.length; i++){
        let letter = str1[i];
        if (!lookup[letter]) {
            lookup[letter] = 1;
        } else {
            lookup[letter] += 1;
        }
    };

    //console.log(lookup);

    for (let i = 0; i < str1.length; i++) {
        let letter = str2[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}


//write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. 

const sumZero = (arr) => {
    let left  = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right -= 1;
        } else {
            left += 1
        }
    }

    return undefined
}

// write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. 

//start with averaging the largest and smallest values (since the array is sorted) and compare that to the value that you are searching for. If the average here is lower, you increase the low end pointer so that the average increases. If the average here is higher, you decrease the high end pointer so that the average decreases. 

function averagePair(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let avg = (arr[start]+arr[end]) / 2
        if (avg == val) {
            return true;
        } else if (avg < val) {
            start += 1
        } else {
            end -= 1;
        }
    }

    return false;
};

// write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. The function should check whether the characters in the first string appear somwhere in the second string without their order changing. Solution must have the following complexities - Time complexity O(n+m) and space complexity O(1);

const isSubsequence = (str1, str2) => {
    //WIP
}

// Count unique values challenge - implement a function called countUniqueValues which accepts a sorted array, and counts the unique valies in the array. There can be negative numbers in the array but it will always be sorted. 

const countUniqueValues = (array) => {
    let i = 0;

    if (array.length === 0) {
        return 0;
    };

    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i += 1;
            array[i] = array[j];
        }   
    }
    return i + 1;
}

// write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

function maxSubarraySum(array, n) {
    
    if (n > array.length){
        return null;
    }

    let sum = -Infinity;

    for (let i = 0; i < array.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += array[i+j];
        }

        if (temp > sum) {
            sum = temp;
        }
    }
    return sum;
}

// this solution isn't that great since it's O(n^2) time complexity. If the number n increased, it becomes extremely inefficient if the length of the array is really large. A better way to do this is the sliding window approach. 

function maxSubSum(array, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (array.length < num) {
        return null;
    }

    for (let i = 0; i < num; i++) {
        maxSum += array[i];
    }

    tempSum = maxSum;

    for (let i = num; i < array.length; i++) {
        tempSum = tempSum - array[i-num] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// this is a better solution since this is O(n) time complexity. 

// Divid and conquer - Given a sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

// binary search split the array. Check the value of the subarray at the max index and compare that to the number that's being searched for. We can cut out a large portion of data where we search which greatly reduces the time complexity. Ignore the sub-arrays where the data can't possibly be. This is log(N) complexity compared to O(n) for a linear search.

function search(arr, val) {
    let min = 0;
    let max = array.length -1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2 );
        let currentElement = array[middle]

        if (currentElement < val) {
            min = middle + 1;
        } else if (currentElement > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}