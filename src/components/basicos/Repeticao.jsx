import React from 'react'
import Produtos from '../data/products'

const Rep = props => {
    
    function getProdutosList(){
        return Produtos.map(item => {
            return <li key="item.id">
                {item.id} - {item.nome} - R$ {item.preco}
                </li>
        })}   
    
    
    return (<div>
                <h2>Repetição</h2>
                <ul>
                    {getProdutosList()}
                </ul>
            </div>)
}

export default Rep