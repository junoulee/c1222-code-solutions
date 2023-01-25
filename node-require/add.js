function add(x, y) {
  return x + y;
}
module.exports = add(Number(process.argv[2]), Number(process.argv[4]));
