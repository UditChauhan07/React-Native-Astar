import React, {useEffect, useState} from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native'



const SplashScreen = ({navigation}) => {

    useEffect(() => {

        setTimeout(() => {
            nav()
            
        }, 5000)
    },[])

    const nav = () => {
        navigation.navigate('Login')
    }

    return(
        <SafeAreaView style={{flex:1}}>
                <ImageBackground source={require('./assets/Astar8-design-white-back-ground-of-app1.png')} style={{ flex: 1, zIndex: -222 }}>
                    <View style={{ justifyContent:'center', alignSelf:'center', alignItems:'center', alignContent:'center', margin:'50%', marginTop:'70%'}}>
                        <Image source={require('./assets/Logo.png')} style={{width:343, height:154}}/>
                        <View style={{marginTop:20}}>
                        <Image source={require('./assets/play.png')} style={{width:85.51, height:111}}/>
                        </View>
                    </View>
                </ImageBackground>
        </SafeAreaView>
    )
}

export default SplashScreen