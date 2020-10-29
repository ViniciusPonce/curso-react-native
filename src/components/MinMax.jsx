import React from 'react'
import {Text} from 'react-native'
import style from './style'
import Style from './style'

export default props => 
    <Text style={style.fontG}>
        O valor {props.max} é maior que o valor {props.min}! 
        </Text>
