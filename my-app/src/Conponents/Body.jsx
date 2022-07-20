import React, { useState } from 'react';

const Body = (props) => {
  const [inputValue, setInputValue] = useState([]);
  const [currency, setCurrency] = useState([]);

  function handleInputValue(e) {
    setInputValue(e.target.value);
    getCurrency();
    return setInputValue(e.target.value);
  }

  function handleCurrencyValue(e) {
    return setCurrency(e.target.value);
  }

  function getCurrency(a = inputValue, b = currency) {
    b = roundCourse(b);
    const summ = a / b;
    if (a && b) return summ.toFixed(2);
    return ' -';
  }

  function roundCourse(number) {
    return Math.round(parseFloat(number) * 100) / 100;
  }

  return (
    <div className='body_section'>
      <h2 className='body_section_header'>CURRENCY TABLE</h2>
      <div className='body_section__wrapper'>
        <div className='body_section__wrapper_input_section'>
          <label htmlFor='currency_from'>FROM:</label>
          <select id='currency_from' type='text'>
            <option value=''>UAH</option>
          </select>

          <label htmlFor='currency_to'>TO:</label>
          <select
            id='currency_to'
            type='number'
            value={currency}
            onChange={handleCurrencyValue}
          >
            <option value={0}></option>
            {props.state.course.map(({ ccy, sale }) => (
              <option key={ccy} value={sale}>
                {ccy}
              </option>
            ))}
          </select>
        </div>

        <div className='body_section__wrapper_output_section'>
          <label htmlFor='amount_from'>AMOUNT</label>
          <input
            id='amount_from'
            type='number'
            value={inputValue}
            onChange={handleInputValue}
          />

          <label htmlFor='amount_to'>AMOUNT</label>
          <div id='amount_to' type='number'>
            {getCurrency()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
