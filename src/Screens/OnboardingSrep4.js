import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CheckBox } from 'react-native-elements'


const OnboardingStep4 = ({ navigation }) => {

    const [check, setcheck] = useState(false)

    const step3 = () => {
        navigation.navigate('OnboardingStep3')
    }

    const step5 = () => {
        navigation.navigate('OnboardingStep5')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('./assets/Astar8.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', margin: 20 }}>
                    <TouchableOpacity onPress={() => { step3() }}
                        style={{ paddingTop: 7, paddingRight: 2 }}>
                        <Icon name="left" size={15} color="#007AFF" />
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom:10}}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('./assets/Logo.png')} style={{ width: 195, height: 88 }} />
                    </View>
                </View>
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
                    showsVerticalScrollIndicator={false}>
                    <View style={{ borderTopRightRadius: 146, flex: 1, marginTop: 20, backgroundColor: '#ffffffa1', borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff',alignItems:'center', zIndex: -333  }}>
                        <View style={{paddingTop:20,paddingLeft:2}}>
                            <Text style={{ color: '#65096F', fontSize: 25, fontFamily: 'AvertaStd-Regular' }}>Hi, ! Nitin</Text>
                            <Text style={{ color: '#3B2F5C', fontSize: 29, fontWeight: 'bold', fontFamily: 'AvertaStd-ExtraBold', maxWidth: '95%' }}>What would you like to know about?</Text>
                        </View>
                        <View style={{ width: '90%', height: 72,  margin: 10, borderRadius:12, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', backgroundColor: '#EACEF9'}}>
                            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                                <View style={{ margin: 5 }}>
                                    <Image style={{width:50,height:46}} source={require('./assets/Heart.png')} />
                                </View>
                                <View style={{ flexDirection: "column", margin: 5 }}>
                                    <Text style={{ fontSize: 16, color: '#65096F', fontFamily: 'AvertaStd-Semibold', }}>Love / Dating</Text>
                                    <View>
                                        <Text style={{ fontSize: 12, color: '#4F4F4F', fontFamily: 'AvertaStd-Regular', maxWidth: '90%', }}>Countless matches experience the joys relationship.</Text>
                                    </View>
                                </View>
                                <View style={{ marginLeft: -50, alignSelf: 'center' }}>
                                    <CheckBox
                                        uncheckedColor="#65096F"
                                        checkedColor="#65096F"
                                        size={35}
                                        onPress={''}
                                        checked={setcheck}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '90%', height: 72,  margin: 10, borderRadius:12, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', }}>
                            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                                <View style={{ margin: 5 }}>
                                    <Image style={{width:50,height:50}} source={require('./assets/Marriage-icon.png')} />
                                </View>
                                <View style={{ flexDirection: "column", margin: 5 }}>
                                    <Text style={{ fontSize: 16, color: '#65096F', fontFamily: 'AvertaStd-Semibold', }}>Marriage</Text>
                                    <View>
                                        <Text style={{ fontSize: 12, color: '#4F4F4F', fontFamily: 'AvertaStd-Regular', maxWidth: '90%', }}>Countless matches experience the joys relationship.</Text>
                                    </View>
                                </View>
                                <View style={{ marginLeft: -50, alignSelf: 'center' }}>
                                    <CheckBox
                                        uncheckedColor="#65096F"
                                        checkedColor="#65096F"
                                        size={35}
                                        onPress={''}
                                        checked={check}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '90%', height: 72, backgroundColor: '#EACEF9', margin: 10, borderRadius:12, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', }}>
                            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                                <View style={{ margin: 5 }}>
                                    <Image style={{width:50,height:50}} source={require('./assets/Promotion.png')} />
                                </View>
                                <View style={{ flexDirection: "column", margin: 5 }}>
                                    <Text style={{ fontSize: 16, color: '#65096F', fontFamily: 'AvertaStd-Semibold', }}>Promotion / financial</Text>
                                    <View>
                                        <Text style={{ fontSize: 12, color: '#4F4F4F', fontFamily: 'AvertaStd-Regular', maxWidth: '90%', }}>Countless matches experience the joys relationship.</Text>
                                    </View>
                                </View>
                                <View style={{ marginLeft: -50, alignSelf: 'center' }}>
                                    <CheckBox
                                        uncheckedColor="#65096F"
                                        checkedColor="#65096F"
                                        size={35}
                                        onPress={''}
                                        checked={setcheck}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '90%', height: 72, margin: 10, borderRadius:12, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', }}>
                            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                                <View style={{ margin: 5 }}>
                                    <Image style={{width:50,height:50}} source={require('./assets/Health.png')} />
                                </View>
                                <View style={{ flexDirection: "column", margin: 5 }}>
                                    <Text style={{ fontSize: 16, color: '#65096F', fontFamily: 'AvertaStd-Semibold', }}>Health Concerns</Text>
                                    <View>
                                        <Text style={{ fontSize: 12, color: '#4F4F4F', fontFamily: 'AvertaStd-Regular', maxWidth: '90%', }}>Countless matches experience the joys relationship.</Text>
                                    </View>
                                </View>
                                <View style={{ marginLeft: -50, alignSelf: 'center' }}>
                                    <CheckBox
                                        uncheckedColor="#65096F"
                                        checkedColor="#65096F"
                                        size={35}
                                        onPress={''}
                                        checked={check}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
                <View style={{ alignItems: 'center',position: 'relative', zIndex:9999, marginBottom:10 }}>
                    <TouchableOpacity onPress={() => {step5()}}
                    style={{ height: 46, width: 327, backgroundColor: '#65096F', paddingTop: 10, borderRadius: 8 }}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily:'AvertaStd-Semibold' }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default OnboardingStep4