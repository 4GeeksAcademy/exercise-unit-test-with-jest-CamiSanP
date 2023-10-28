const { sum } = require('./app.js');

test('la suma de 14 y 9 debe ser 23', () => {
 let total = sum(14,9);
 expect(total).toBe(23);
});

test("3 euros son 3.21 dolares", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3)).toBe(3.21); 
})

test("3 dolares son 438.785 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3)).toBe(438.785); 
})

test("3 yen son 0.017 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3)).toBe(0.017); 
})