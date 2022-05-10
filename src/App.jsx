import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import Card from './components/layout/Card'
import App from './App.css'
import ComFilho from './components/basicos/ComFilho'
import ComParametros from './components/basicos/comParametros'
import Rep from './components/basicos/Repeticao'
import Cond from './components/basicos/Condicional'
import CondIF from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

const Appy = props =>
<div className='App'>
    <h1>Fundamentos React</h1>      
    <div className='Cards'>
    <Card titulo="#01-primeiro Componente" color="#977FD7">
        <Primeiro/>
    </Card>

    <Card titulo="#2-Com parametros" color="#9CCFE7">
        <ComParametros titulo="esse é o titulo" subtitulo="é sobre isso"></ComParametros>
    </Card>
 
    <Card titulo="#3-componente com filhos" color="#F5A9CB">
    <ComFilho >
        <ul>
            <li>olivia</li>
            <li>samara</li>
            <li>pietra</li>
            <li>thayana</li>
        </ul>
       
    </ComFilho>
    </Card>
    <Card titulo="#4- utilizando repetição de elemento e estrutura" color="#091F92">
        <Rep></Rep>
    </Card>
    <Card titulo="#5- Condicionais v1" color="#3D0459">
        <Cond numero={10}></Cond>
    </Card>
    <Card titulo="#6- Condicionais v2" color="#E32227">
        <CondIF numero={11}></CondIF>
    </Card>
    <Card titulo="#7- Ligação direta " color="#C8D423" >
        <Pai sobrenome="Freitas"></Pai>
    </Card>
    <Card titulo="#8- Ligação indireta " color="#2875BA" >
        <Super></Super>
    </Card>
    <Card titulo="#9- Input " color="#76B08A" >
        <Input></Input>
    </Card>
    <Card titulo="#10- Contador " color="#61D4AC" >
        <Contador passo={10} valor={100}></Contador>
    </Card>
    <Card titulo="#11- Mega-sena " color="#CC0098" >
        <Mega qtdNum={8}></Mega>
    </Card>
    </div>
</div>

export default Appy