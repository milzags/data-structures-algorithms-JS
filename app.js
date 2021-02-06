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
