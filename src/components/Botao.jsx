import React from 'react'
import {Button} from 'react-native'

export default props => {
    function executar(){
        console.warn('Executar #01')
    }
    return(
        <>
        <Button title="Executar #01" onPress={executar}/>

        <Button title="Executar #02" onPress={function() {
            console.warn('Executar #02')
        }}/>
        <Button title="Executar #03" onPress={() => 
            console.warn('Executar #03')
        }/>
        </>
    )
}