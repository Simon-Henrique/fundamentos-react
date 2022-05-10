import React, {useState} from 'react'

const Input = props => {
    const [nome, AltNome] = useState('Pedro')   
    return (
        
        <div>
            <h3>{nome}</h3>
            <input type="text" value={nome} onChange={e => AltNome(e.target.value)} />
        </div>
    )
}



export default Input