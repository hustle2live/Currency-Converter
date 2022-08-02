import React from 'react';
import './styles.scss';

const Header = (props) => {
  const courcesArr = {};

  function roundCourse(number) {
    return Math.round(parseFloat(number) * 100) / 100;
  }

  if (props.state) {
    props.state.course.map(({ ccy, sale }) => {
      return (courcesArr[ccy] = roundCourse(sale));
    });
  }

  console.log(courcesArr);

  const getNewCourse = (courceId) => props.upgrade(courceId);

  return (
    <div className='header'>
      <div>
        <h1>Foreign currency converter</h1>
        <p className='header__description'>КОНВЕРТЕР ІНОЗЕМНИХ ВАЛЮТ</p>
      </div>
      <div className='header__currency-status'>
        <div className='header__currencies'>
          <div className='header__euro'>
            {' '}
            1 EURO =
            <span className='header__uah'>
              &nbsp;{courcesArr.EUR || '--'} UAH
            </span>{' '}
          </div>
          <div className='header__usd'>
            {' '}
            <span className='header__currencies_separate-line'>
              &nbsp;|&nbsp;
            </span>
            1 USD =
            <span className='header__uah'>
              &nbsp;{courcesArr.USD || '--'} UAH
            </span>{' '}
          </div>
        </div>
        <button
          className='header__primary cash'
          onClick={() => {
            document
              .querySelectorAll('.header__primary')
              .forEach((button) => button.classList.remove('active'));
            document.querySelector('.cash').classList.add('active');
            getNewCourse(props.state.rate.cash);
          }}
        >
          Готівковий курс
        </button>
        <button
          className='header__primary card'
          onClick={() => {
            document
              .querySelectorAll('.header__primary')
              .forEach((button) => button.classList.remove('active'));
            document.querySelector('.card').classList.add('active');
            getNewCourse(props.state.rate.card);
          }}
        >
          Безготівковий курс
        </button>
        <p>Курс валют за даними АРІ ПриватБанку</p>
      </div>
    </div>
  );
};

export default Header;
