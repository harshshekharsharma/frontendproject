const coefficients = [3, 12, 2];
const findRoots = co => 
{
   const [a, b, c] = co;
   
   const discriminant = (b * b) - 4 * a * c;
   
   if(discriminant < 0)
   {
      
      return false;
   };
   const d = Math.sqrt(discriminant);
   const x1 = (d - b) / (2 * a);
   const x2 = ((d + b) * -1) / (2 * a);
   return [x1, x2];
};
console.log(findRoots(coefficients));