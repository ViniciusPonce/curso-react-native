import React from 'react'
import {Text} from 'react-native'
import style from './style'

function Comp(){
    return (
        <Text style={style.fontG}>Comp #Oficial</Text>
    )
}
function Comp1(){
    return (
        <Text style={style.fontG}>Comp #01</Text>
    )
}
function Comp2(){
    return (
        <Text style={style.fontG}>Comp #02</Text>
    )
}

export{Comp1, Comp2}
export default Comp


