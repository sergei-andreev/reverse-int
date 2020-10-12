module.exports = function reverse (n) {
  return (n < 0 ? -n : n)
    .toString()
    .split('')
    .reverse()
    .join('');
}
