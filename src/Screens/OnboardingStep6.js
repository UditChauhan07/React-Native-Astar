import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const OnboardingStep6 = ({ navigation }) => {

    const step5 = () => {
        navigation.navigate('OnboardingStep1')
    }

    const step6 = () => {
        navigation.navigate('OnboardingStep5')
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('./assets/Astar8.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', margin: 20 }}>
                    <TouchableOpacity onPress={() => { step5() }}
                        style={{ paddingTop: 7, paddingRight: 2 }}>
                        <Icon name="left" size={15} color="#007AFF" />
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('./assets/Logo.png')} style={{ width: 195, height: 88 }} />
                    </View>
                </View>
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
                    showsVerticalScrollIndicator={false}>
                    <View style={{ borderTopRightRadius: 146, flex: 1, marginTop: 20, backgroundColor: '#ffffffa1', borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#ffffff', }}>
                        <View style={{ margin: 15, zIndex: 9999, }}>
                            <Text style={{ color: '#3B2F5C', fontSize: 29, fontFamily: 'AvertaStd-ExtraBold', fontWeight: 'bold', zIndex: 999999, }}>One Last Thing</Text>
                        </View>
                        <View style={{ zIndex: 9999, }}>
                            <Text style={{ color: '#65096F', fontSize: 16, fontFamily: 'AvertaStd-Regular', maxWidth: '96%', paddingLeft: 15 }}>Please verify your registered email address or phone number</Text>
                        </View>
                        <View style={{ margin: 15 }}>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular', }}>Email Address</Text>
                            <View style={{ borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
                                <TextInput style={{ height: 40, width: 327, }} />
                            </View>
                        </View>
                        <View style={{ margin: 15 }}>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular', }}>Phone Number</Text>
                            <View style={{ borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
                                <TextInput style={{ height: 40, width: 327, }}
                                    keyboardType='numeric' />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', position: 'relative', zIndex: 9999, marginTop: 50 }}>
                            <TouchableOpacity onPress={() => { step6() }}
                                style={{ height: 46, width: 327, backgroundColor: '#65096F', paddingTop: 10, borderRadius: 8 }}>
                                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Get New Verification Code</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default OnboardingStep6