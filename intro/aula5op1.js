let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let temp;

//varA = B e Temp = A
temp = varA;
varA = varB;

//varB = C e varC = A
varB = varC;
varC = temp;

console.log(`VarA = ${varA} \nVarB = ${varB} \nVarC = ${varC}`);
