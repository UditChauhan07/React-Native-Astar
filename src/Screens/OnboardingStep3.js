import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Picker } from '@react-native-picker/picker';
import Moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { Data } from '../ReduxFloder/action';
import DatePicker from 'react-native-date-picker'
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import Loader from './Loader';


const OnboardingStep3 = ({ navigation }) => {

    const dispatch = useDispatch();

    const list = useSelector(state => state.list)
    console.log(list);

    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [mar, setmar] = useState('')
    const [oc, setoc] = useState('')
    const [cal, setcal] = useState(false)
    const [days, setday] = useState(Moment().format('YYYY-MM-DD'))
    const [loading, setloading] = useState(false)

    const [date, setDate] = useState(new Date())

    const step4 = () => {
        // navigation.navigate('Loading')
        if (selectedLanguage == "") {
            alert('Please Select the Gender')
        }
        if (mar == "") {
            alert('Please Select the Relationship status')
        }
        if (oc == "") {
            alert('Please Select the Your Occuption')
        }
        setloading(true)
        var day = Moment(date).format('YYYY-MM-DD')
        let bodyFormData = { 'user_id': list.user_id, 'dob': day, 'gender': selectedLanguage, 'relationship': mar, 'occupation': oc }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/onboardingstepthree`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn(data)
                var currentDate = Moment().format('YYYY-MM-DD')
                let bodyFormData = { 'userid': list.user_id, 'date_current':currentDate }
                console.log(bodyFormData)
                axios({
                    method: 'POST',
                    url: `https://astar.7kstartup.com/public/api/offlineapi`, // Signup API
                    data: bodyFormData,
                    config: { headers: { 'Content-Type': 'multipart/form-data' } }
                })
                    .then(({ data, status }) => {
                        console.warn(data)
                        dispatch(Data(data))
                        navigation.navigate('Loading')
                        setloading(false)
                    })
                    .catch(error => {
                        console.warn("offlineapi",error.response.data)
                        setloading(false)
                    })
            })
            .catch(error => {
                console.warn("onboardingstepthree",error.response.data)
                setloading(false)
            })
    }

    const step2 = () => {
        navigation.navigate('Login')
    }

    const calendar = () => {
        setcal(true)
    }
    const showdate = (cal) => {
        setcal(cal)
    }
    const hodedate = () => {
        setcal(false)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? <Loader showloading={loading} /> : null}
            <ImageBackground source={require('./assets/Astar8.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', margin: 20 }}>
                    <TouchableOpacity onPress={() => { step2() }}
                        style={{ paddingTop: 7, paddingRight: 2 }}>
                        <Icon name="left" size={15} color="#007AFF" />
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('./assets/Logo.png')} style={{ width: 195, height: 88 }} />
                    </View>
                </View>
                <View style={{ borderTopRightRadius: 146, flex: 1, marginTop: 20, backgroundColor: '#ffffffa1', borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#ffffff', }}>
                    <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
                        showsVerticalScrollIndicator={false}>
                        <View>
                            <View style={{ padding: 15 }}>
                                <Text style={{ color: '#65096F', fontSize: 25, fontFamily: 'AvertaStd-Semibold' }}>{list.Fullname}</Text>
                                <Text style={{ color: '#3B2F5C', fontSize: 29, fontFamily: 'AvertaStdBold' }}>We need a little more info from you.</Text>
                            </View>
                            <View style={{ padding: 15, }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Semibold' }}>Date of Birth</Text>
                                <TouchableOpacity onPress={() => { showdate(!cal) }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#ddd', }}>
                                        {date &&
                                            <Text style={{ color: '#DA0AE4', paddingTop: 20 }}>{Moment(date).format('DD-MM-YYYY')}</Text>}
                                    </View>
                                </TouchableOpacity>
                                <Modal
                                    onBackdropPress={() => hodedate()}
                                    onRequestClose={() => hodedate()}
                                    visible={cal}
                                    style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.9, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50, marginTop: -50 }}
                                >
                                    <View style={{ flex: 0.45, backgroundColor: '#fff', borderRadius: 20, zIndex: 11111, borderBottomColor: '#DA0AE4', borderBottomWidth: 3, marginTop: -50, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: '#DA0AE4' }}>
                                        <Text style={{ color: '#000', fontSize: 20, fontFamily: 'AvertaStd-Semibold', paddingTop: 20, textAlign: 'center' }}>Date of Birth</Text>
                                        <View style={{ paddingTop: 25 }}>
                                            <DatePicker date={date} onDateChange={setDate} androidVariant='iosClone' mode='date' textColor='#DA0AE4' />
                                        </View>
                                        <TouchableOpacity onPress={() => { hodedate() }} style={{ backgroundColor: '#65096F', borderRadius: 8, alignItems: 'center', alignSelf: 'center', marginTop: '15%', paddingBottom: 5, paddingTop: 5, paddingLeft: '20%', paddingRight: '20%' }}>
                                            <Text style={{ fontSize: 20, fontFamily: 'AvertaStd-Semibold', color: '#fff', alignSelf: 'center', padding: 2 }}>Confirm</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Modal>
                            </View>
                            <View style={{ marginLeft: 15, marginTop: 10, borderBottomWidth: 0.2, marginRight: 15 }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular' }}>Gender</Text>
                                <View style={{ height: 40, width: '100%', borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                        <View style={{ width: "100%" }}>
                                            <Picker
                                                selectedValue={selectedLanguage}
                                                style={{ marginLeft: -15 }}
                                                dropdownIconColor='#fff'
                                                onValueChange={(itemValue, itemIndex) =>
                                                    setSelectedLanguage(itemValue)
                                                }>
                                                <Picker.Item label="Select" value="Select" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                <Picker.Item label="Male" value="Male" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                <Picker.Item label="Female" value="Female" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                <Picker.Item label="Other" value="Other" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                            </Picker>
                                        </View>
                                        <View style={{ alignSelf: 'center', marginLeft: -30 }}>
                                            <Entypo name="chevron-small-down" size={27} color="#65096F" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginLeft: 15, marginTop: 10, borderBottomWidth: 0.2, marginRight: 15 }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Semibold' }}>Relationship Status</Text>
                                <View style={{ marginLeft: -10 }}>
                                    <View style={{ height: 40, width: '100%', }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                            <View style={{ width: "100%", }}>
                                                <Picker
                                                    selectedValue={mar}
                                                    dropdownIconColor="#fff"
                                                    style={{ marginLeft: -5, }}
                                                    onValueChange={(itemValue, itemIndex) =>
                                                        setmar(itemValue)
                                                    }>
                                                    <Picker.Item label="Select" value="Select" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                    <Picker.Item label="Marriage" value="1" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                    <Picker.Item label="love" value="2" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                    <Picker.Item label="family" value="3" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                    <Picker.Item label="Single" value="4" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                </Picker>
                                            </View>
                                            <View style={{ alignSelf: 'center', marginLeft: -30 }}>
                                                <Entypo name="chevron-small-down" size={27} color="#65096F" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginLeft: 15, marginTop: 10, borderBottomWidth: 0.2, marginRight: 15 }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Semibold' }}>Your Occupation</Text>
                                <View style={{ marginLeft: -10 }}>
                                    <View style={{ height: 40, width: '100%', }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                            <View style={{ width: '100%' }}>
                                                <Picker
                                                    selectedValue={oc}
                                                    dropdownIconColor="#fff"
                                                    style={{ marginLeft: -5 }}
                                                    onValueChange={(itemValue, itemIndex) =>
                                                        setoc(itemValue)
                                                    }>
                                                    <Picker.Item label="Select" value="Select" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                    <Picker.Item label="Business" value="1" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                    <Picker.Item label="Job" value="2" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                    <Picker.Item label="Farmer" value="3" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                    <Picker.Item label="Other" value="4" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 12 }} />
                                                </Picker>
                                            </View>
                                            <View style={{ alignSelf: 'center', marginLeft: -30 }}>
                                                <Entypo name="chevron-small-down" size={27} color="#65096F" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                    <View style={{ alignItems: 'center', position: 'relative', zIndex: 9999, marginBottom: 10 }}>
                        <View>
                            {selectedLanguage == "" && mar == "" && oc == "" &&
                                <TouchableOpacity onPress={() => { }}
                                    style={{ backgroundColor: '#EBEBEB', borderRadius: 8, paddingTop: 15, paddingBottom: 15, paddingLeft: '40%', paddingRight: '40%' }}>
                                    <Text style={{ textAlign: 'center', color: '#000', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Continue</Text>
                                </TouchableOpacity>
                            }
                            {selectedLanguage != "" && mar == "" && oc == "" &&
                                <TouchableOpacity onPress={() => { }}
                                    style={{ backgroundColor: '#EBEBEB', borderRadius: 8, paddingTop: 15, paddingBottom: 15, paddingLeft: '40%', paddingRight: '40%' }}>
                                    <Text style={{ textAlign: 'center', color: '#000', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Continue</Text>
                                </TouchableOpacity>
                            }
                            {selectedLanguage != "" && mar != "" && oc == "" &&
                                <TouchableOpacity onPress={() => { }}
                                    style={{ backgroundColor: '#EBEBEB', borderRadius: 8, paddingTop: 15, paddingBottom: 15, paddingLeft: '40%', paddingRight: '40%' }}>
                                    <Text style={{ textAlign: 'center', color: '#000', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Continue</Text>
                                </TouchableOpacity>
                            }
                            {selectedLanguage != "" && mar != "" && oc != "" &&
                                <TouchableOpacity onPress={() => { step4() }}
                                    style={{ backgroundColor: '#65096F', borderRadius: 8, paddingTop: 15, paddingBottom: 15, paddingLeft: '40%', paddingRight: '40%' }}>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: '500', alignSelf: 'center', fontFamily: 'AvertaStd-Semibold' }}>Continue</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default OnboardingStep3