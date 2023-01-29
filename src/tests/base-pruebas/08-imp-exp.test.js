import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';

describe('Pruebas en <08-imp-exp />', () => {
  test('getHeroeById debe retornar un heroe por id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById debe retornar undefined si no existe el id', () => {
    const id = 100;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar un arreglo con hereoes de DC de tres elementos', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(3);
  });

  test('getHeroesByOwner debe retornar un arreglo con hereoes de Marvel de tres elementos', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(2);
  });
});
