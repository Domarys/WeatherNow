import React from 'react';
import { Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Text, Layout}  from 'react-native-ui-kitten';
import icon from '../../assets/icon2.png';
import styles from '../style';

export default function Main () {
    return(
        <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
            <Text style = {styles.title}> WeatherNow!</Text>
            <Image source = {icon} style = {styles.image}></Image>
            <Layout>
            <Text style = {styles.form}> Informe a cidade:</Text>
            <TextInput 
            style = {styles.input}
            placeholder = "    Porto Alegre"
            placeholderTextColor = "#999"/>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Buscar
                </Text>
            </TouchableOpacity>
            </Layout>
        </KeyboardAvoidingView>    
    );
}
