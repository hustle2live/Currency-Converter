import React, { useState } from 'react';

const Body = (props) => {
  const [inputValue, setInputValue] = useState([]);
  const [outputCurrency, setOutputCurrency] = useState([]);
  const [inputCurrency, setInputCurrency] = useState([]);

  function handleInputValue(e) {
    setInputValue(e.target.value);
    getCurrency();
  }

  function handleCurrencyValue(e) {
    setOutputCurrency(e.target.value);
  }

  function inputCurrencyValue(e) {
    setInputCurrency(e.target.value);
  }

  function getCurrency(a = inputValue, b = outputCurrency, c = inputCurrency) {
    b = roundCourse(b);
    c = roundCourse(c);
    const summ = (a * c) / b;
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
          <select
            id='currency_from'
            type='text'
            value={inputCurrency}
            onChange={inputCurrencyValue}
          >
            <option className='option-small' value={0}></option>
            <option className='option-small' value={1}>
              UAH
            </option>
            {props.state.course.map(({ ccy, sale }) => (
              <option className='option-small' key={ccy + 1} value={sale}>
                {ccy}
              </option>
            ))}
          </select>

          <label htmlFor='currency_to'>TO:</label>
          <select
            id='currency_to'
            type='text'
            value={outputCurrency}
            onChange={handleCurrencyValue}
          >
            <option className='option-small' value={0}></option>
            {props.state.course.map(({ ccy, sale }) => (
              <option className='option-small' key={ccy} value={sale}>
                {ccy}
              </option>
            ))}
            <option className='option-small' value={1}>
              UAH
            </option>
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
