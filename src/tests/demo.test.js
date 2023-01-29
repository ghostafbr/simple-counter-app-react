describe('Pruebas en <DemoComponent />', () => {
  test('Esta prueba nod ebe de fallar', () => {
    // 1. Inivialización
    const message1 = 'Hola Mundo';

    // 2. Estímulo
    const message2 = message1.trim();

    // 3. Observar el comportamiento... esperado
    expect(message1).toBe(message2);
  });
});
