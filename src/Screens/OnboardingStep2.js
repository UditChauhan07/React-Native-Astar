import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux';

const OnboardingStep2 = ({ navigation }) => {

    const list = useSelector(state => state.list)
    console.log(list);

    const step3 = () => {
        navigation.navigate('OnboardingStep3')
    }

    const step1 = () => {
        navigation.navigate('OnboardingStep1')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('./assets/Astar8.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', margin: 20 }}>
                    <TouchableOpacity onPress={() => { step1() }}
                        style={{ paddingTop: 7, paddingRight: 2 }}>
                        <Icon name="left" size={15} color="#007AFF" />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('./assets/Logo.png')} style={{ width: 195, height: 88 }} />
                    </View>
                </View>
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
                    style={{ borderTopRightRadius: 146, flex: 1, marginTop: 20, backgroundColor: '#ffffffa1', borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#fff' }}
                    showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 15 }}>
                        <Text style={{ color: '#65096F', fontSize: 25, fontFamily: 'AvertaStd-Semibold' }}>Hello,</Text>
                        <Text style={{ color: '#3B2F5C', fontSize: 35, fontFamily: 'AvertaStd-Bold' }}>{list.Fullname}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold',lineHeight:25, }}>{list.namereadingdesc.positive_title} : <Text style={{ color: '#000', maxWidth: '85%',  fontFamily:'AvertaStd-Regular' }}>{list.namereadingdesc.positive_desc}</Text></Text>    
                        </View>
                        <View style={{ flexDirection: 'row',paddingTop:5 }}>
                            <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold', lineHeight:25 }}>{list.namereadingdesc.negative_title} : <Text style={{ color: '#000', maxWidth: '85%', fontFamily:'AvertaStd-Regular' }}>{list.namereadingdesc.negative_desc}</Text></Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', position: 'relative', zIndex: 9999, marginBottom: 10, marginTop: '20%' }}>
                        <TouchableOpacity onPress={() => { step3() }}
                            style={{ backgroundColor: '#65096F', borderRadius: 8, paddingBottom: 15, paddingTop: 15, paddingLeft: '35%', paddingRight: '35%' }}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Know More</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default OnboardingStep2