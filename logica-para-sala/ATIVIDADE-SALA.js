const prompt = require ('prompt-sync') ({sigint: true});
var idade = 18;
idade = 2**4;
var CNH = (idade >=18) ? "tem direito": "não tem direito";
console.log(`A pessoa tem ${idade} anos, logo ela ${CNH} a tirar CNH`);
 