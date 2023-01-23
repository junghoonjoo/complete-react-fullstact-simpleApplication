import React,{useState,useContext,useRef} from 'react'

import {Button, Form, Alert } from 'react-bootstrap';

const Stage_1 = () => {

  const textInput=useRef();


  const handleSubmit=(e)=>{
    e.preventDefault();
    const value=textInput.current.value;
    console.log(value);
  }
  return (
    <>
      <Form onSubmit={handleSubmit} className='mt-4'>
        <Form.Group>
          <Form.Control 
            type='text' 
            placeholder='Add plaer name' 
            name='player' 
            ref={textInput} 
          />
          <Button variant='primary' type='submit' className='miami'>
            Add player
          </Button>
          
        </Form.Group>
      </Form>
    </>
  );
}

export default Stage_1;