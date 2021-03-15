module.exports = function reverse (n) {
    if (n < 0) {
        n = n * -1;
    }
    let str = Array.from(String(n), Number);
    let reversed = str.reverse().join('');
    return reversed;
}
