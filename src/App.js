import React from 'react';
import Forms from'./components/Forms';
import Like from './components/Like';
import './App.css';
import ToDo from './components/ToDo'

    function App () {
      return (
        <div className="container">
          <div idName="Form"> {<Forms/>}</div>
          <div idName="ToDo"> {<ToDo/>}</div>
          <div idName="Like">{<Like/>}</div>


        
      </div>
     )
    }
    


export default App;
