import React, {Component} from 'react';
import { ToastContainer,toast } from 'react-toastify';

const MyContext=React.createContext();

class MyProvider extends Component {

    state={
        stage:1,
        players:[]
    }

    addPlayerHandler=(name)=>{
        this.setState((prevState)=>({
            players:[
                ...prevState.players,
                name
            ]
        }))
    }
    removePlayerHandler=(idx)=>{
        let newArrary=this.state.players;
        newArrary.splice(idx,1);
        this.setState({players:newArrary});
    }

    nextHandler=()=>{
        const {players}=this.state;

        if(players.length<2){            
            toast.error('You need one more player!!',{
                position:toast.POSITION.TOP_LEFT,
                autoClose:2000
            });

        }else{
            ///
            this.setState({
                stage:2
            },()=>{
                setTimeout(()=>{
                    console.log('loose')
                },2000)
            })
        }

    }
    render(){
        return(
            <>
                <MyContext.Provider value={{
                    state:this.state,
                    addPlayer:this.addPlayerHandler,
                    removePlayer:this.removePlayerHandler,
                    next:this.nextHandler,
                }}>
                    {this.props.children}
                </MyContext.Provider>
                <ToastContainer/>
            </>
        );
    }
}

export {
    MyContext, MyProvider
}