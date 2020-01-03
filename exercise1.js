function countdown (num, stopNum) {
    if (num < stopNum) {return 1};
    console.log(num);
    num--;
    countdown(num, stopNum);
}

// countdown(7, 0);

function sumRange(num) {
    if (num <= 0) {return 0};
    // console.log(num);
    let newNum = num - 1;
    return num + sumRange(newNum);
}

// console.log(sumRange(3));

function factorial(num) {
    if (num <= 1) {return 1};
    let newNum = num - 1;
    return num * factorial(newNum);
}

// console.log(factorial(5));