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

