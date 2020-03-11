import React from 'react';

import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css'
import ProjetoCadastro from '../views/projeto/cadastro'
import Router from './routes';

class App extends React.Component {
 
 
  render(){
    return(
     
    
      
      <div className="container">
          <ProjetoCadastro />
    
      </div>
  )
  }
}


export default App;
