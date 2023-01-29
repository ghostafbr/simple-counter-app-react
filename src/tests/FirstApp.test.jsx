import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp />', () => {
  /*   test('Debe de hacer match con el snapshot', () => {
    const title = '¡Hola! Soy Goku';
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  }); */

  test('Debe de mostrar el título en un H1', () => {
    const title = '¡Hola! Soy Goku';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    /* const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toBe(title); */

    expect(getByTestId('test-title').innerHTML).toBe(title);
  });

  test('Debe de mostrar el subtítulo enviado por Props', () => {
    const title = '¡Hola! Soy Goku';
    const subTitle = 'Soy un subtitulo';
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subTitle} />
    );
    expect(getAllByText(subTitle).length).toBe(2);

    /* expect(getByTestId('test-title').innerHTML).toBe(title); */
  });
});
