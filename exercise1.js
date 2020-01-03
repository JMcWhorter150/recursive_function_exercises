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

function productOfArray(arr) {
    let product = arr.pop();
    if (arr.length === 0) return 1;
    return product * productOfArray(arr);
}
// console.log(productOfArray([1, 2, 3]));

let nestedObject = { data: {
    info: {
        stuff: {
            thing: {
                moreStuff: {
                    magicNumber: 44,
                    something: 'foo2'
                }
            }
        },
        morestuff: {
            thing: {
                moreStuff2: {
                    magicNumber: 445,
                    something: 'foobar'
                }
            }
        },
        evenmore: {
            thing: {
                moreStuff2: {
                    magicNumber: [9,6,7,5000],
                    something: 'foobar'
                }
            }
        },
    }
}
}

function contains(obj, search) {
    if (typeof obj === 'object') {
        for (let key of Object.keys(obj)) {
            if (search === obj[key]) {
                return true;
            } else if (typeof obj[key] === 'object' || Array.isArray(obj[key])) {
                return contains(obj[key], search);
            } 
        }
        return false;
    } else if (Array.isArray(obj)) {
        for (let item of obj) {
            if (search === item) {
                return true;
            } else if (typeof item === 'object' || Array.isArray(item)) {
                return contains(item, search);
            }
        }
        return false;
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt);
console.log(doesntHaveIt);