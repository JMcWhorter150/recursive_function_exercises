function countdown (num, stopNum) {
    if (num < stopNum) {return 1};
    console.log(num);
    num--;
    countdown(num, stopNum);
}

countdown(7, 0);