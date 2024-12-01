function palindrome(n, reverse) {
    let d = 0;
    while (n > 0) {
        d = n % 10;
        reverse = reverse * 10 + d;
        n = Math.floor(n / 10); 
    }
    return reverse;
}

let reverse = 0;
let n = parseInt(prompt("Enter Your Number:" )); 
let inital = n;
let ans = palindrome(n, reverse);

if (ans === inital) {
    console.log("YES! It is a Palindrome");
} else {
    console.log("NO! It is not a Palindrome");
}
