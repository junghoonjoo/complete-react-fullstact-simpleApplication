import React,{useState,useContext,useRef} from 'react'

import {Button, Form, Alert } from 'react-bootstrap';

const Stage_1 = () => {

  const textInput=useRef();

  const [error, setError]=useState([false,'']);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const value=textInput.current.value;
    const validate= validateInput(value);

    if(validate){
      setError([false,'']);
      console.log('ADD PLAYER')
    }

    console.log(value);
  }

  const validateInput=(value)=>{

    if(value===''){
      setError([true, 'Sorry, you need to add something']);
      return false;
    }
    if(value.length<=2){
      setError([true,'Sorry, you need 3char at least']);
      return false;
    }
    return true;
  };


  return (
    <>
      <Form onSubmit={handleSubmit} className='mt-4'>
        <Form.Group>
          <Form.Control 
            type='text' placeholder='Add player name' name='player' 
            ref={textInput} 
          />
          <Button variant='primary' type='submit' className='miami'>
            Add player
          </Button>
          
        </Form.Group>

        {error[0] ? 
          <Alert>
            {error[1]}
          </Alert>
        :null}
      </Form>
    </>
  );
}

export default Stage_1;