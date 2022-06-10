const a = 2, b = 5;
const N = 7;
const findNthTerm = (first, second, num) =>
 {
   const diff = second - first;
   const fact = (num - 1) * diff;
   const term = first + fact;
   return term;
};
console.log(findNthTerm(a, b, N));