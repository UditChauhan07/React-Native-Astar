import React, { useState, useRef } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { list } from '../ReduxFloder/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Data } from '../ReduxFloder/action';
import Loader from './Loader';
import OtpTextInput from 'react-native-otp-textinput'
import Moment from 'moment';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const LoginOtp = ({ navigation }) => {

    const dispatch = useDispatch();

    const Step1 = useSelector(state => state.Step1)

    const [otp, setotp] = useState('')
    const [loading, setloading] = useState(false)

    const step4 = () => {
        navigation.navigate('Login')
    }

    const step6 = () => {
        navigation.navigate('OnboardingStep6')
    }

    const step7 = () => {
        setloading(true)

        let bodyFormData = { 'user_id': Step1.user_id, 'otp': otp }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/verifyloginotp`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn(data)
                if (data.status == 0) {
                    alert('Invalid Otp')
                    setloading(false)
                }
                if (data.status != 0) {
                    if (data.nextboardingstep != 'finish') {
                        dispatch(list(data))
                        navigation.navigate('OnboardingStep2')
                        var token = data.userdetail.user_token;
                        console.log({ "boooo": data.userdetail });
                        AsyncStorage.setItem('USER', token);
                        console.log("======>");
                    }
                    var token = data.userdetail.user_token;
                    AsyncStorage.setItem('USER', token);
                    console.log(token);
                    if (data.nextboardingstep == 'finish') {
                        var currentDate = Moment().format('YYYY-MM-DD')
                        let bodyFormData = { 'userid': Step1.user_id, 'date_current': currentDate }
                        console.log(bodyFormData)
                        axios({
                            method: 'POST',
                            url: `https://astar.7kstartup.com/public/api/offlineapi`, // Signup API
                            data: bodyFormData,
                            config: { headers: { 'Content-Type': 'multipart/form-data' } }
                        })
                            .then(({ data, status }) => {
                                console.warn("offline api data", data)
                                dispatch(Data(data))
                                setloading(false)
                                navigation.navigate('Loading')
                            })
                            .catch(error => {
                                console.warn(error.response)
                                setloading(false)
                            })
                    }

                }
            })
            .catch(error => {
                setloading(false)
                setotp('')
            })
    }

    const ResendOtp = () => {
        setloading(true)
        let bodyFormData = { 'userid': Step1.user_id }
        console.log(bodyFormData);

        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/resentverifyloginotp`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                setotp('')
                console.warn(data)
                setloading(false)
            })
            .catch(error => {
                console.error(error.reponse)
                setloading(false)
            })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? <Loader showloading={loading} /> : null}
            <ImageBackground source={require('./assets/Astar8.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', margin: 20 }}>
                    <TouchableOpacity onPress={() => { step4() }}
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
                    showsVerticalScrollIndicator={false}
                    style={{ backgroundColor: '#ffffffa1', marginTop: '2%', borderTopRightRadius: 146, }}>
                    <View style={{ marginTop: -20 }}>
                        <View style={{ borderTopRightRadius: 146, flex: 1, marginTop: 20, backgroundColor: '#ffffffa1', borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#ffffff', }}>
                            <View>
                                <View style={{ margin: 15, }}>
                                    <Text style={{ color: '#3B2F5C', fontSize: 29, fontFamily: 'AvertaStd-Bold', }}>One Last Thing</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#65096F', fontSize: 16, fontFamily: 'AvertaStd-Semibold', paddingLeft: 15, maxWidth: '80%' }}>Please verify your <Text style={{ color: '#65096F', fontSize: 16, fontFamily: 'AvertaStd-Semibold', fontWeight: 'bold', }}>{Step1.username}</Text><Text style={{ color: '#65096F', fontSize: 16, fontFamily: 'AvertaStd-Semibold', paddingLeft: 15 }}> by entering the unique code</Text></Text>
                                    </View>
                                </View>
                                <View style={{ zIndex: 9999, flexDirection: 'row', justifyContent: 'space-between', height: 64, paddingTop: '5%' }}>
                                    <View style={{ marginLeft: '3%', marginRight: '3%', alignItems: 'center' }}>
                                        {/* <OtpTextInput
                                            containerStyle={{ width: '90%', }}
                                            handleTextChange={otp => setotp(otp)}
                                            tintColor='#0E7DE3'
                                        /> */}
                                        <OTPInputView
                                            style={{ width: '80%', }}
                                            pinCount={4}
                                            autoFocusOnLoad
                                            codeInputFieldStyle={{ width: 30, height: 45, borderWidth: 0, borderBottomWidth: 1, borderBottomColor: '#828282', color: "#000" }}
                                            codeInputHighlightStyle={{ borderColor: "#03DAC6", }}
                                            onCodeFilled={otp => setotp(otp)}
                                        />
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center', position: 'relative', zIndex: 9999, marginTop: 50 }}>
                                    {otp != "" &&
                                        <TouchableOpacity onPress={() => { step7() }}
                                            style={{ backgroundColor: '#65096F', borderRadius: 8, paddingTop: 15, paddingBottom: 15, paddingLeft: '35%', paddingRight: '35%' }}>
                                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Continue</Text>
                                        </TouchableOpacity>}
                                    {otp == "" &&
                                        <TouchableOpacity onPress={() => { step7() }}
                                            style={{ backgroundColor: '#EBEBEB', borderRadius: 8, paddingTop: 15, paddingBottom: 15, paddingLeft: '35%', paddingRight: '35%' }}>
                                            <Text style={{ textAlign: 'center', color: '#000', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Continue</Text>
                                        </TouchableOpacity>}
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => { ResendOtp() }} style={{ paddingTop: 15 }}>
                                        <Text style={{ textAlign: 'center', color: '#0E7DE3', fontSize: 12, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Resend OTP</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <TouchableOpacity onPress={() => { step6() }}>
                                        <Text style={{ color: '#0E7DE3', textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Do not have access to the above email ?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default LoginOtp