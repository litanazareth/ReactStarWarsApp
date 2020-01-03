import React from 'react';
import Star_Wars_Logo from './Star_Wars_Logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button' 


import {Task1} from './components/Task1'
import {Task2} from './components/Task2'
import {Task3} from './components/Task3'
import {Task4} from './components/Task4'


class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: ''
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState() {
      this.setState({data: 
      <div className="ResultTable">
        <Task1 className="ResultTable"/>
        <Task2 className="ResultTable"/>
        <Task3 className="ResultTable"/>
        <Task4 className="ResultTable"/> 
      </div>
      })
   }
   render() {
      return (

        <div className="App">
      
        <header className="App-header">
          <img src={Star_Wars_Logo} className="App-logo" alt="logo" />
         
          <span></span>
          <Button name='button test' variant = 'warning' className='button-logo' onClick={this.updateState}>
          ★ Do. Or do not. There is no try. ★
          </Button>
          

          
          <br />
          <h4 className="Results">{this.state.data}</h4>
          
        </header> 
        
      </div>

        
      );
   }
}
export default App;