import axios from 'axios';
import { RenderEntireTree } from './render';

let state = {
  course: [{ USD: '-', EUR: '-', RUR: '-' }],
  rate: {
    cash: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
    card: 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
  }
};

export let updateCourse = (someLink = state.rate.cash) => {
  console.log(someLink);
  const address = someLink;
  axios
    .get(`${address}`)
    .then((response) => response.data)
    .then((data) => {
      // console.log(data);
      state.course = data;
      RenderEntireTree(state);
    });
};

updateCourse();

export default state;

/*

Готівковий курс ПриватБанку (у відділеннях):

GET XML: https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5
GET JSON: https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5
Безготівковий курс ПриватБанку (конвертація за картками, Приват24, поповнення вкладів):

GET XML: https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11
GET JSON: https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11

джерело - https://api.privatbank.ua/#p24/exchange
*/
