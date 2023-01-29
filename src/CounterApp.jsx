import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (evt) => {
    /* console.log(evt); */
    setCounter(counter + 1);
    /* setCounter((c) => c + 1); */
  };
  const handleSubstract = (evt) => setCounter(counter - 1);

  return (
    <>
      <h1> CounterApp </h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button aria-label='btn-reset' onClick={() => setCounter(value)}>
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
