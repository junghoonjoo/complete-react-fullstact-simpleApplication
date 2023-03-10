import React, { useContext } from 'react';
import {Button, Form, Alert } from 'react-bootstrap';
import { MyContext } from '../context';

const Stage_2 = () => {

  const context=useContext(MyContext);

  return (
    <>
      <div className="result_wrapper">
        <h3>The looser is:</h3>
        <div>{context.state.result}</div>
      </div>
      <div className="action_button" onClick={()=>{context.resetGame()}}>
        START OVER
      </div>
      <div className="action_button btn_2" onClick={()=>{context.getNewLooser()}}>
        NEW LOOSER
      </div>
    </>
  )
};

export default Stage_2;