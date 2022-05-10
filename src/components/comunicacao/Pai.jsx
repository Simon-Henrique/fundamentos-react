import React from 'react'
import Filho from './direta/Filho'

const Pai = props => 
    <div>
        <Filho {...props}>Jonelson</Filho>
        <Filho sobrenome={props.sobrenome}>Jamal</Filho>
        <Filho sobrenome="Pereira">Janaina</Filho>        
    </div>


export default Pai