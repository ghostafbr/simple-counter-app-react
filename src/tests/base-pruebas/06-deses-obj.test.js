import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';
import { usContext } from '../../base-pruebas/06-deses-obj';

describe('Pruebas en <06-deses-abj />', () => {
  test('usContext debe retornar un Objeto', () => {
    const heroe = {
      clave: 123,
      edad: 60,
      nombre: 'capi',
    };
    const user = usContext(heroe);
    const mustBe = {
      nombreClave: heroe.clave,
      anios: heroe.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };
    expect(user).toStrictEqual(mustBe);
  });
});
