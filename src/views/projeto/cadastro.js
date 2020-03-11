import React from 'react';
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class ProjetoCadastro extends React.Component {
    
state = {
    id: '',
    Nome: '',
    dataEntrega: ''
}

salvar = () => {
   axios.post('http://localhost:8080/api/usuarios/autenticar', {
       Nome: this.state.nome,
       dataEntrega: this.state.dataEntrega
   }).then( response => {
       console.log(response)
   }).catch( erro => {
       console.log(erro.response)
   }) 

   
}

voltar = () => {
  this.props.history.push('/')
}

    render(){
        return(
       
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative',left: '300px'}} >
                    <div className="bs-docs-section">
        
                        <Card title="Cadastrar Projeto">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <fieldset>
                                        <FormGroup label="Nome: *" htmlFor="exampleInputNome">
                                            <input type="text" className="form-control" id="exampleInputNome1" onChange={e => this.setState({Nome: e.target.value})} 
                                                    aria-describedby="NomeHelp" placeholder="Digite o Nome do Projeto" />
                                        </FormGroup>
                                        <FormGroup label="Data Entrega: *" htmlFor="exampleInputDataEntrega1">
                                            <input type="date" className="form-control" onChange={e => this.setState({dataEntrega: e.target.value})}  id="exampleInputDataEntrega1" placeholder="Data da Entrega" />
                                        </FormGroup>
                                        
                                    
  
                                        <button onClick={ this.salvar}  className="btn btn-success">Salvar</button>
                                        <button onClick={ this.voltar } className="btn btn-danger">Voltar</button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjetoCadastro // withRouter(ProjetoCadastro)