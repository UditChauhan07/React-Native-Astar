import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TextInput, Switch, } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux';
import { Data, Step1 } from '../ReduxFloder/action'
import axios from 'axios'
import Loader from './Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToggleSwitch from 'toggle-switch-react-native'

const Login = ({ navigation }) => {

    useEffect(() => {
        AsyncStorage.getItem('USER', (err, result) => {
            if (err) {
                console.error(err);
                navigation.navigate('Login')
            }
            if (result) {
                console.log("pop", result);
                if (result.loginERR) {
                    navigation.navigate('Login')
                } else {
                    navigation.navigate('Dashboard')
                }
            }
        })
    }, [])
    const dispatch = useDispatch();

    const [move, setMove] = useState()
    const [isEnabled, setIsEnabled] = useState(false);
    const [name, setname] = useState('')
    const [mail, setmail] = useState('')
    const [num, setnum] = useState('')
    const [loading, setloading] = useState(false)

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

        if (mail == "") {
            alert('Please Enter Email')
        }

        let bodyFormData = { username: mail, signupby: type }
        console.log(bodyFormData);

        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/userlogin`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn(data)
                if (data.status == 1) {
                    dispatch(Step1(data))
                    navigation.navigate('LoginOtp')
                    setloading(false)
                } else {
                    alert(data.message)
                    setloading(false)
                }
            })
            .catch(error => {
                console.warn(error.response)
                setloading(false)
            })
    }

    const Signup = () => {
        navigation.navigate('OnboardingStep1')
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('./assets/Astar8.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', margin: 20 }}>
                    <TouchableOpacity style={{ paddingTop: 7, paddingRight: 2 }}>

                        <Icon name="left" size={15} color="#007AFF" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 24, color: '#65096F', fontFamily: 'AvertaStd-Semibold', paddingLeft: '24%' }}>Welcome To</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('./assets/Logo.png')} style={{ width: 195, height: 88 }} />
                    </View>
                </View>
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
                    style={{ backgroundColor: '#ffffffa1', marginTop: '5%', borderTopRightRadius: 146, }}
                    showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: -20 }}>
                        <View style={{ borderTopRightRadius: 146, flex: 1, marginTop: 20, borderWidth: 3, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', }}>
                            {loading ? <Loader showloading={loading} /> : null}
                            <View style={{ marginTop: '10%' }}>
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
                                            thumbOnStyle={{ backgroundColor: '#65096F' }}
                                            thumbOffStyle={{ backgroundColor: '#65096F' }}
                                            size='medium'
                                            onToggle={toggleSwitch}
                                        />
                                    </View>
                                    {isEnabled == false &&
                                        <TextInput style={{ borderBottomWidth: 1, color: '#DA0AE4', fontSize: 16, borderBottomColor: '#EBEBEB', paddingTop: '4%' }}
                                            onChangeText={mail => setmail(mail)}
                                            autoCapitalize='none'
                                            placeholder="test@gmail.com"
                                            placeholderTextColor="#828282" />
                                    }
                                    {isEnabled == true &&
                                        <TextInput style={{ borderBottomWidth: 1, color: '#DA0AE4', fontSize: 16, borderBottomColor: '#EBEBEB', paddingTop: '4%' }}
                                            onChangeText={num => setnum(num)}
                                            placeholder="Enter your phone number"
                                            placeholderTextColor="#828282"
                                            keyboardType='numeric' />}
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', zIndex: 9999, marginBottom: 10, marginTop: '20%', position: 'relative' }}>
                                <TouchableOpacity onPress={() => {
                                    Step2()
                                    // step2()
                                }}
                                    style={{ backgroundColor: '#65096F', paddingTop: 12, borderRadius: 8, paddingBottom: 12, paddingLeft: '35%', paddingRight: '35%' }}>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => { Signup() }}>
                                <Text style={{ textAlign: 'center', color: '#65096F', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Login