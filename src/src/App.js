import React,{useContext} from 'react'
import { MyContext } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './css/app.css';

import Stage_1 from './components/Stage_1';
import Stage_2 from './components/Stage_2';


const App = () => {

  const context=useContext(MyContext);
  //console.log(context);

  return (
    <div className='wrapper'>
      <div className="center-wrapper">
        <h1>Who pays the bill ?</h1>
        {context.state.stage===1?
          <Stage_1/>:
          <Stage_2/>
        }
      </div>            
    </div>
  );
}

export default App;