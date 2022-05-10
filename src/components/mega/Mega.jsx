import React, { useState } from 'react'

const Mega = (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdNum).fill(0))

    function gerarNaoRepetidos(array){
        const min = 1
        const max = 60
        const novoNum = parseInt(Math.random() * (max - min)) + 1
        return array.includes(novoNum)
        ? gerarNaoRepetidos(array) : novoNum
    }

    function gerarNum() {
        const novoArray = Array(props.qtdNum)
        .fill(0)
        .reduce(a => [...a, gerarNaoRepetidos(a)], [])
        .sort((a,b) => a - b)
        setNumeros(novoArray)
    }

    return (
        <div>
            <h3>Mega</h3>
            <h4>{numeros.join('  ')}</h4>
            <button onClick={gerarNum}>Gerar Números</button>
        </div>
    )
}

export default Mega