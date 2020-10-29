import React from 'react'
import {View, StyleSheet} from 'react-native'
//import CompPadrao, {Comp1, Comp2 } from './components/Multi'
//import Primeiro from './components/Primeiro.jsx'
//import MinMax from './components/MinMax'
//import Aleatorio from './components/Aleatorio'
//import Titulo from './components/Titulo'
//import Botao from './components/Botao'
//import Contador from './components/Contador'
//import Pai from './components/Direta/Pai'
import Pai from './components/Indireta/Pai'

export default () => (
    <View style={style.App}>
        <Pai/>
        
        {/*
        <Contador inicial={100} passo={13}/>
        <Botao/>
        <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>

        <Aleatorio min={10} max={60}/>
        <Aleatorio min={10} max={60}/>
        <Aleatorio min={10} max={60}/>
        <Aleatorio min={10} max={60}/>
        <Aleatorio min={10} max={60}/>
        <Aleatorio min={10} max={60}/>
        <MinMax min={3} max={20}/>
        <MinMax min={1} max={94}/>
        <CompPadrao/>
        <Primeiro/>
        <Comp1/>
        <Comp2/>*/}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent:"center",
        alignItems: "center",
        padding: 20,
        
    }
})
