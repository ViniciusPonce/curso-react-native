import React, {useState} from 'react'
import {Text, Button} from 'react-native'
import Style from './style'

export default props => {
    const [numero, setNumero] = useState(props.inicial)
    //let numero = props.inicial
    const inc = () => setNumero(numero+props.passo)
    const dec = () => setNumero(numero-1)
    
    return(
        <>
            <Text style={Style.fontG}> {numero} </Text>
            <Button title="Aumentar +" onPress={inc}/>
            <Button title="Diminuir -" onPress={dec}/>
        </>

    )
    }