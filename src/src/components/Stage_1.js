import React,{useState,useContext,useRef} from 'react'

import {Button, Form, Alert } from 'react-bootstrap';
import { MyContext } from '../context';

const Stage_1 = () => {

  const textInput=useRef();
  const context=useContext(MyContext);
  const [error, setError]=useState([false,'']);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const value=textInput.current.value;
    const validate= validateInput(value);

    if(validate){
      setError([false,'']);
      // console.log('ADD PLAYER')
      context.addPlayer(value);
      textInput.current.value='';
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

  console.log(context.state);
  return (
    <>
      <Form onSubmit={handleSubmit} className='mt-4'>
        <Form.Group>
          <Form.Control 
            type='text' placeholder='Add player name' name='player' 
            ref={textInput} 
          />
          {error[0] ? 
            <Alert>
              {error[1]}
            </Alert>
              :null}
          <Button variant='primary' type='submit' className='miami'>
            Add player
          </Button>
          {context.state.players && context.state.players.length>0?
            <>            
              <hr/>
              <div>
                <ul className="list-group">
                  {context.state.players.map((player,idx)=>(
                    <li key={idx} className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'>
                      {player}
                      <span className="badge badge-danger"
                      onClick={()=>context.removePlayer(idx)}>X</span>
                    </li>
                  ))

                  }
                </ul>
                <div className="action_button"
                onClick={()=>{alert('STAGE 2')}}>NEXT</div>
              </div>
            </>
          :null
          }

        </Form.Group>

    
      </Form>
    </>
  );
}

export default Stage_1;