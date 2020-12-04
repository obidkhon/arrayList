//import logo from './logo.svg';
import React  from 'react'
import './App.css';
import Inline from './compo/Inline';
import NameLit from './compo/NameLit';

import './appStyles.css'
import Styles from './appStyles.module.css'


 function App()  {
  
  
      
        
    
    
  
  return (
    <div className="App">
<h1  className='touqir'> salom</h1>
<h1  className={Styles.souqir}> salom</h1>

     <NameLit orzu={true}/>
<Inline/>

    </div>
  )
  }


export default App;
