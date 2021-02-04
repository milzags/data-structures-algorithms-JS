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

