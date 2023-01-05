import React, {useState} from 'react'
import  { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import LottieView from 'lottie-react-native';

const Loader = () => {
    return(
        <SafeAreaView style={{backgroundColor:'#FFFFFFa1', position:'absolute', height:'120%', justifyContent:'center', width:'100%'}}>
            <View style={{flex:1, alignSelf:'center', alignItems:'center', alignContent:'center', justifyContent:'center'}}>
                <ActivityIndicator size='large' color='#73207C'/>
            </View>
        </SafeAreaView>
    )
}

export default Loader