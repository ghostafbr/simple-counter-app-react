import { getImagen } from '../../base-pruebas/11-async-await';

describe('Pruebas en <11-async-await />', () => {
  test('getImagen debe una URL de imagen ', async () => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  });

  /*   test('getImagen un error si no tenemos apiKey ', async () => {
    const url = await getImagen();
    expect(url).toBe('No se encontró la imagen');
  }); */
});
