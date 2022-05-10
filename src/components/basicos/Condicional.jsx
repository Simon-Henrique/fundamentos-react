import React from 'react'

const Cond = props => {
    return <div>
        <h2>o numero é {props.numero}</h2>
        {props.numero % 2 === 0 ? 
        <span>Par</span> :
        <span>Impar</span>}

    </div>
}


export default Cond