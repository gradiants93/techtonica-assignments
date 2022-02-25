// ========== Problem 1 ==========
// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.
function divisibleByThree (num) {
    if (typeof num !== 'number') {
        return false;
    } else if (num % 3 == 0) {
        return true;
    }
    return false;
};

console.log(divisibleByThree(3)); // true
console.log(divisibleByThree(4)); // false
console.log(divisibleByThree(0)); // true
console.log(divisibleByThree(-3)); // true
console.log(divisibleByThree("4")); // false
console.log(divisibleByThree("3")); // false

// ========== Problem 2 ==========
// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.
function numberOfCharacters(string) {
    if (typeof string !== 'string') {
        return "Please input a string";
    }
    string = string.trim().replace(" ", "");
    return string.length;
}

console.log(numberOfCharacters('Dog')); // 3
console.log(numberOfCharacters('Cat')); // 3
console.log(numberOfCharacters(33)); // Please input a string
console.log(numberOfCharacters('')); // 0
console.log(numberOfCharacters()); // Please input a string
console.log(numberOfCharacters('Human-being')); //   11
console.log(numberOfCharacters('Human being')); //   10
console.log(numberOfCharacters('   Human being   ')); //   10

// ========== Problem 3 ==========
// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")
function taskList (array) {
    console.log(array[0]);
    console.log(Number(array.slice(-1)));
    array.push(4);
    array.unshift(["a","b","c"]);
    console.log(array[0][0]);
}

array = [1, 2, 3];
taskList(array); // 1, 3, a
array2 = [7, 2, 9];
taskList(array2); // 7, 9, a

// ========== Problem 4 ==========
// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

function minsFromMidnight() {
    let rightNow = new Date();
    // console.log(rightNow, "collect date")
    // let utc = ((rightNow.getTimezoneOffset() * 60 * 1000) + rightNow.getTime()); 
    // console.log(utc, "current time in milliseconds UTC")
    rightNow = rightNow.getTime();
    // console.log(rightNow, "current time in milliseconds PST")
    let oneDayMS = 86400000;
    let randoSetDate = new Date(2022, 0, 30, 0, 0, 0);
    if ((rightNow - randoSetDate) % oneDayMS == 0) {
        return ("It's midnight!");
    } else {
        // console.log((rightNow - randoSetDate) % oneDayMS);
        let minsSinceMidnight = (((rightNow - randoSetDate) % oneDayMS) / (1000 * 60)).toFixed();
        console.log(`It's been ${minsSinceMidnight} minutes since midnight`)
    }
    // let yesterday = new Date(2022, 0, 30, 0, 0, 0);
    // yesterday = yesterday.getTime();
    // console.log(rightNow % oneDayMS)
    // console.log((yesterday - rightNow) % oneDayMS == 0)
    // console.log(end)
}

minsFromMidnight();

//See my comments in my pull request
