import React from 'react'

const Sub = props => {
    return (
        <div>
        <button onClick={() => {
            props.aoClicar(Math.random(), "Fim")
        }}>Alterar</button>
    </div>
    )
}    

export default Sub    