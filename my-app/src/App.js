import React from 'react';
import Header from './Conponents/Header.jsx';
import Body from './Conponents/Body.jsx';

const App = (props) => {
  return (
    <div className='App'>
      <Header state={props.state} upgrade={props.getCourse} />
      <Body state={props.state} />
    </div>
  );
};

export default App;
