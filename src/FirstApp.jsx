import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle = 'La tierra explota', name }) => {
  /* console.log(title); */
  return (
    <>
      {/* <h1>{title}</h1> */}
      <h1 data-testid='test-title'>{title}</h1>
      {/* <code>{ JSON.stringify(newMessage)}</code> */}
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  /* title: 'No hay título', */
  subtitle: 'No hay subtitulo',
  name: 'Andrés Bolaños',
};
