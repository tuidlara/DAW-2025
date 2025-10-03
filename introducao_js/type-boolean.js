const value1 = true;
const value2 = false;

if (value1) {
    console.log('Verdadeiro');
}else{
    console.log('False');
}
//Saída: Verdadeiro

if (!value1) {
    console.log('Verdadeiro');
}else{
    console.log('False');
}
//Saída: False

//Truthy/Falsy -> Variáveis vazias ou com valor 0, se submeter a um teste lógico, ficam boolean.

const value3 = '';
if (value3) {
    console.log('Verdadeiro');
}else{
    console.log('False');
}


//Operador ternário
(Logica) ? (entao) : (senao)

const resultado = value3 ? 'Verdadeiro' : 'False';
console.log(resultado);
//Saída: False