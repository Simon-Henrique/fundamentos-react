import React from 'react'

const PassoForm = props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo:</label>
                    <input 
                    id="passoInput" 
                    type="number"
                    style={{fontSize: '1.3rem', width: '50px'}}
                    value={props.passo}
                    onChange={e => props.onPassoChange(+e.target.value)}></input>
        </div>
    )
}

export default PassoForm