
function suma(a, b) {
    return a + b
}

let resultado = suma(1, 2);
esperado = 3;

if (resultado !== esperado) {
    console.log(`El ${resultado} es diferente a lo esperado, no paso el test`);
} else {
    console.log('Test pasado correctamente');
}