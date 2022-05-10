import React, {useState} from 'react'
import Sub from './Sub'

const Super = props => {

    const [Num,SetNum] = useState(0)
    const [txt,SetTxt] = useState('Valor')


    function quandoClicar(NumGerado, txt){
        SetNum(NumGerado)
        SetTxt(txt)
    }
    return (<div>
        <h4>{txt}: {Num}</h4>
        <Sub aoClicar={quandoClicar}></Sub>
           
    </div>)
} 

export default Super