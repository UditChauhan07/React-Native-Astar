import React from 'react'
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native'

const Loader = () => {
    return(
        <SafeAreaView style={{flex:1, justifyContent:'center'}}>
            <View style={{ zIndex:99999,backgroundColor:'#FFFFFFa1', position:'absolute', height:'120%', justifyContent:'center', width:'100%', alignItems:'center', alignSelf:'center'}}>
            <ActivityIndicator size='large' color='blue'/> 
            </View>
        </SafeAreaView>
    )
}

export default Loader