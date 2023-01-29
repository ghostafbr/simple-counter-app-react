import { render, screen } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp />', () => {
  const title = '¡Hola! Soy Goku';
  const subTitle = 'Soy un subtitulo';

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "¡Hola! Soy Goku', () => {
    render(<FirstApp title={title} />);
    expect(screen.getAllByText).toBeTruthy();
    //screen.debug();
  });

  test('Debe de mostrar el título en un H1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('Debe de mostrar el subtítulo enviado por Props', () => {
    render(<FirstApp title={title} subtitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
