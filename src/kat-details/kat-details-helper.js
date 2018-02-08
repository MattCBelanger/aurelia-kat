export function findNextKat(kats, kat) {
  let nextkat = {};
  kats.forEach((cat, index) => {
    if (cat.name === kat.name) {
      if (index + 1 === kats.length) {
        nextkat = kats[0];
      } else {
        nextkat = kats[index + 1];
      }
    }
  });
  return nextkat;
}