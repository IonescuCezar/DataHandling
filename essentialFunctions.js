// Reduce
// e.g.: Have an array of numbers and get the sum
function getSumArr(iArr) {
    let result = iArr.reduce((acc, item) => acc + item, 0);
    console.log("Successful (Sum): ", result);
}


// Map
// e.g.: Have an array of numbers and get the square of each item in a newly formed array
function getSquareArr(iArr) {
    result = iArr.map((item) => item * item);
    console.log("Successful (Square): ", iArr, result);
}


// Run function(s)
getSumArr([2, 4, 8, 16, 32]);
getSquareArr([3, 7, 17, 24]);





