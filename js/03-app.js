// --- Mini framework de pruebas --- //
function expect(resultado) {
    return {
        toBe(esperado) {
            if (resultado !== esperado) {
                console.error(`❌ ${resultado} es diferente a lo esperado (${esperado}). Test fallido.`);
            } else {
                console.log('✅ Test pasado correctamente');
            }
        }
    }
}

async function test(mensaje, callback) {
    try {
        await callback();
        console.log(`🟢 El test "${mensaje}" se ejecutó correctamente.\n`);
    } catch (error) {
        console.error(`🔴 Error en test "${mensaje}":`);
        console.error(error);
    }
}

// --- Código a probar --- //
function suma(a, b) {
    return a + b;
}

async function sumaAsync(a, b) {
    return Promise.resolve(suma(a, b));
}

// --- Pruebas --- //
test('Suma 1 + 2 y el resultado debe ser 3', () => {
    const resultado = suma(1, 2);
    const esperado = 3;
    expect(resultado).toBe(esperado);
});

test('Suma 20 + 10 y el resultado debe ser 30 (async)', async () => {
    const resultado = await sumaAsync(20, 10);
    const esperado = 30;
    expect(resultado).toBe(esperado);
});
