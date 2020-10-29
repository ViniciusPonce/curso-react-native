import React from 'react'
import {Text} from 'react-native'
import Style from './style'

export default props => {
    const{min, max} = props
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    return(
        <Text style={Style.fontG}> O valor aleatorio é: {aleatorio} </Text>
    )
}