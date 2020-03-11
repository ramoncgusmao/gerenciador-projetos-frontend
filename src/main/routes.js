import React from 'react'

import { Route, Switch, HashRouter} from 'react-router-dom'
import ProjetoCadastro from '../views/projeto/cadastro'
import TarefaCadastro from '../views/tarefa/cadastro'

function Router(){
    return (
        <HashRouter>
            <Switch>
                <Route path="#/projeto/cadastro" component={ProjetoCadastro} />
                <Route path="#/tarefa/cadastro" component={TarefaCadastro} />
       
            </Switch>
        </HashRouter>
    )
}

export default Router