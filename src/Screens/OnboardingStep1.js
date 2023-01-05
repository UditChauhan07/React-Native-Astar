import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TextInput, Switch, } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux';
import { Data, Step1 } from '../ReduxFloder/action'
import axios from 'axios'
import Loader from './Loader';
import ToggleSwitch from 'toggle-switch-react-native'


const OnboardingStep1 = ({ navigation }) => {

    const dispatch = useDispatch();

    const [isEnabled, setIsEnabled] = useState(false);
    const [name, setname] = useState('')
    const [mail, setmail] = useState('')
    const [num, setnum] = useState('')
    const [loading, setloading] = useState(false)


    useEffect(() => {
    }, [])

    const step3 = () => {
        navigation.navigate('OnboardingStep5')
    }

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const Step2 = () => {

        setloading(true)

        let type = undefined
        if (isEnabled == false) {
            type = 1
        }
        if (isEnabled == true) {
            type = 2
        }
        console.log(type);

        if (name == "") {
            alert('Please Enter Name')
        }
        if (mail == "") {
            alert('Please Enter Email')
        }

        let bodyFormData = { name: name, username: mail, signupby: type }
        console.log(bodyFormData);


        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/onboardingstepone`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn(data)
                dispatch(Step1(data))
                setloading(false)
                navigation.navigate('OnboardingStep5')
            })
            .catch(error => {
                console.error(error.response.data.error)
                error.response.data.error.username.forEach(element => {
                    alert(element)
                });
                setloading(false)
            })
    }

    const nav = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('./assets/Astar8.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', margin: 20 }}>
                    <TouchableOpacity onPress={() => {nav()}}
                    style={{ paddingTop: 7, paddingRight: 2 }}>
                        <Icon name="left" size={15} color="#007AFF" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 24, color: '#65096F', fontFamily: 'AvertaStd-Semibold', marginLeft: '25%' }}>Welcome To</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('./assets/Logo.png')} style={{ width: 195, height: 88 }} />
                    </View>
                </View>
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
                    showsVerticalScrollIndicator={false}>
                        <View  style={{ borderTopRightRadius: 146, flex: 1, marginTop: 20, backgroundColor: '#ffffffa1', borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#ffffff', }}>
                    {loading ? <Loader showloading={loading} /> : null}
                    <View style={{}}>
                        <View style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 30, }}>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Semibold', }}>Name</Text>
                            <TextInput style={{ borderBottomWidth: 1, color: '#DA0AE4', fontSize: 16, borderBottomColor: '#EBEBEB' }}
                                onChangeText={name => setname(name)}
                                placeholder="Enter your full name"
                                autoCapitalize='sentences'
                                placeholderTextColor="#828282" />
                        </View>
                        <View style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 30, borderColor: '#EBEBEB' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                {isEnabled == false &&
                                    <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Semibold' }}>Email Address</Text>}
                                {isEnabled == true &&
                                    <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Semibold' }}>Phone Number</Text>}
                                <ToggleSwitch
                                    isOn={isEnabled}
                                    onColor="#F7B9E7"
                                    offColor="#F7B9E7"
                                    thumbOnStyle={{backgroundColor:'#65096F'}}
                                    thumbOffStyle={{backgroundColor:'#65096F'}}
                                    size='medium'
                                    onToggle={toggleSwitch}
                                />
                            </View>
                            {isEnabled == false &&
                                <TextInput style={{ borderBottomWidth: 1, color: '#DA0AE4', fontSize: 16, borderBottomColor: '#EBEBEB' }}
                                    onChangeText={mail => setmail(mail)}
                                    placeholder="test@gmail.com"
                                    placeholderTextColor="#828282" />
                            }
                            {isEnabled == true &&
                                <TextInput style={{ borderBottomWidth: 1, color: '#DA0AE4', fontSize: 16, borderBottomColor: '#EBEBEB' }}
                                    onChangeText={num => setnum(num)}
                                    placeholder="Enter your phone number"
                                    placeholderTextColor="#828282"
                                    keyboardType='numeric' />}
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', zIndex: 9999, marginBottom: 10, marginTop: '40%', position: 'relative' }}>
                        <TouchableOpacity onPress={() => {
                            Step2()
                            // step2()
                        }}
                            style={{ backgroundColor: '#65096F', borderRadius: 8, paddingTop: 15, paddingBottom: 15, paddingLeft: 100, paddingRight: 100 }}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Read My Name</Text>
                        </TouchableOpacity>
                    </View>
                        </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default OnboardingStep1