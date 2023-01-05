import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker'
import { Picker } from '@react-native-picker/picker';
import { openDatabase } from 'react-native-sqlite-storage';
import Modal from "react-native-modal";
import Entypo from 'react-native-vector-icons/Entypo'
import { useDispatch, useSelector } from 'react-redux';
import Loader from "./Loader";
import Moment from "moment";
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { Edit } from '../ReduxFloder/action';

var db = openDatabase({ name: 'AStar8.db' });

const EditProfile = ({ navigation }) => {

    const [loading, setloading] = useState(false)
    const dispatch = useDispatch();
    const Data = useSelector(state => state.Data)
    const [names, setnames] = useState([])
    const [zodiac, setzodiac] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [cal, setcal] = useState(false)
    const [date, setDate] = useState(new Date())
    const [oc, setoc] = useState('')
    const [name, setname] = useState('')
    const [per, setper] = useState([])
    const [wid, setwid] = useState()
    const [profile, setprofile] = useState('')

    useEffect(() => {

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM userdetail",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        console.error("userdetail", results.rows.item(i));
                        setnames(results.rows.item(i))
                        setname(results.rows.item(i).fullname)
                        setDate(new Date(results.rows.item(i).dob))
                        setprofile(results.rows.item(i).profile_pic)
                        setoc(results.rows.item(i).occupation)
                        setSelectedLanguage(results.rows.item(i).gender)
                        setper(results.rows.item(i).namepercentage)
                        setwid(results.rows.item(i).removewidgets)
                    }
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM zodiacdetail",
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        setzodiac(results.rows.item(i))
                    }
                }
            );
        });

    }, [])

    const showdate = (cal) => {
        setcal(cal)
    }
    const hodedate = () => {
        setcal(false)
    }

    const Cancel = () => {
        navigation.navigate('UserProfile')
    }

    const Imageupload = async () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image.path);
            setprofile(image.path)
        })
    }

    const Update = () => {
        setloading(true)
        var newdob = Moment(date).format('YYYY-MM-DD')
        var CurrentDate = Moment().format('YYYY-MM-DD')
        let body = new FormData()
        body.append('name', name)
        body.append('gender', selectedLanguage)
        body.append('dob', newdob)
        body.append('occupation', oc)
        body.append('userid', names.userid)
        body.append('date_current', CurrentDate)
        body.append('profile_pic', { uri: profile, name: 'profile_pic.png', filename: 'imageName.png', type: 'image/png' })
        console.log("update profile log",body);
        fetch('https://astar.7kstartup.com/public/api/editprofile', {
            method: 'POST', headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }, body: body
        })
            .then((response) => (response.json()))
            .then((res) => {
                console.log("updte api chechk", res);
                dispatch(Edit(res))
                navigation.navigate('DatauploadfromeditProfile')
                setloading(false)
            })
            .catch(error => {
                console.error(error)
                alert('Network request failed')
                setloading(false)
            })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? <Loader showloading={loading} /> : null}
            <ImageBackground source={require('./assets/DashboardBackgroundImage.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ alignSelf: 'center', marginTop: 30, flexDirection: 'row' }}>
                    {profile != "" &&
                        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                            <Image source={profile !== "" ? { uri: profile } : require('./assets/user-details-profile.png')} style={{ height: 87, width: 87, borderColor: '#fff', borderWidth: 3, borderRadius: 60 }} />
                            <TouchableOpacity onPress={() => { Imageupload() }}>
                                <View style={{ backgroundColor: '#fff', borderRadius: 50, borderColor: '#65096F', height: 25, width: 25, alignItems: 'center', alignContent: 'center', marginLeft: -20, marginTop: 5, borderWidth: 1, justifyContent: 'center' }}>
                                    <Icon name='edit' size={13} color='#65096F' />
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                    {profile == "" &&
                        <View style={{ paddingTop: 10, paddingRight: 10, flexDirection: 'row', }}>
                            <View style={{ borderColor: '#65096F', borderWidth: 3, borderRadius: 80 / 2, height: 80, width: 80, padding: 10 }}>
                                {zodiac.zodiac_sign == "CANCER" &&
                                    <Icons name="zodiac-cancer" size={55} color="#65096F" />}
                                {zodiac.zodiac_sign == "ARIES" &&
                                    <Icons name="zodiac-aries" size={55} color="#65096F" />}
                                {zodiac.zodiac_sign == "TAURUS" &&
                                    <Icons name="zodiac-taurus" size={55} color="#65096F" />}
                                {zodiac.zodiac_sign == "GEMINI" &&
                                    <Icons name="zodiac-gemini" size={55} color="#65096F" />}
                                {zodiac.zodiac_sign == "LEO" &&
                                    <Icons name="zodiac-leo" size={55} color="#65096F" />}
                                {zodiac.zodiac_sign == "VIRGO" &&
                                    <Icons name="zodiac-virgo" size={55} color="#65096F" />}
                                {zodiac.zodiac_sign == "LIBRA" &&
                                    <Icons name="zodiac-libra" size={55} color="#65096F" />}
                                {zodiac.zodiac_sign == "SCORPIO" &&
                                    <Icons name="zodiac-scorpio" size={55} color="#65096F" />}
                                {zodiac.zodiac_sign == "SAGITTARIUS" &&
                                    <Icons name="zodiac-sagittarius" size={55} color="#65096F" />}
                                {zodiac.zodiac_sign == "CAPRICORN" &&
                                    <Icons name="zodiac-capricorn" size={55} color="#65096F" />}
                                {zodiac.zodiac_sign == "AQUARIUS" &&
                                    <Icons name="zodiac-aquarius" size={55} color="#65096F" />}
                                {zodiac.zodiac_sign == "PISCES" &&
                                    <Icons name="zodiac-pisces" size={55} color="#65096F" />}
                            </View>
                            <TouchableOpacity onPress={() => { Imageupload() }}>
                                <View style={{ backgroundColor: '#fff', borderRadius: 50, borderColor: '#65096F', height: 25, width: 25, alignItems: 'center', alignContent: 'center', padding: 2, marginLeft: -20, marginTop: 5, borderWidth: 1 }}>
                                    <Icon name='edit' size={18} color='#65096F' />
                                </View>
                            </TouchableOpacity>
                        </View>}
                </View>
                <View>
                    <View style={{ paddingTop: 20, paddingLeft: 15, paddingRight: 15 }}>
                        <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Semibold', }}>Name</Text>
                        <TextInput style={{ borderBottomWidth: 0.5, color: '#DA0AE4', fontSize: 16, borderBottomColor: '#000' }}
                            onChangeText={name => setname(name)}
                            placeholder="Enter your full name"
                            autoCapitalize='sentences'
                            value={name}
                            placeholderTextColor="#828282" />
                    </View>
                    <View style={{ paddingLeft: 15, paddingTop: 10, paddingRight: 15 }}>
                        <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Semibold' }}>Date of Birth</Text>
                        <TouchableOpacity onPress={() => { showdate(!cal) }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, borderBottomColor: '#000', }}>
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
                                    <DatePicker date={date} onDateChange={date => setDate(date)} androidVariant='iosClone' mode='date' textColor='#DA0AE4' />
                                </View>
                                <TouchableOpacity onPress={() => { hodedate() }} style={{ backgroundColor: '#65096F', borderRadius: 8, alignItems: 'center', alignSelf: 'center', marginTop: '15%', paddingBottom: 5, paddingTop: 5, paddingLeft: '20%', paddingRight: '20%' }}>
                                    <Text style={{ fontSize: 20, fontFamily: 'AvertaStd-Semibold', color: '#fff', alignSelf: 'center', padding: 2 }}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </View>
                    <View style={{ marginLeft: 15, marginTop: 10, borderBottomWidth: 0.5, marginRight: 15, borderBottomColor: '#000' }}>
                        <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Semibold' }}>Gender</Text>
                        <View style={{ height: 40, width: '100%', borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                <View style={{ width: "100%" }}>
                                    <Picker
                                        selectedValue={selectedLanguage}
                                        style={{ marginLeft: -15 }}
                                        dropdownIconColor='#FFFFFFed'
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedLanguage(itemValue)
                                        }>
                                        <Picker.Item label="Select" value="Select" style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16 }} />
                                        <Picker.Item label="Male" value="Male" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 16 }} />
                                        <Picker.Item label="Female" value="Female" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 16 }} />
                                        <Picker.Item label="Other" value="Other" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 16 }} />
                                    </Picker>
                                </View>
                                <View style={{ alignSelf: 'center', marginLeft: -30 }}>
                                    <Entypo name="chevron-small-down" size={27} color="#65096F" />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginLeft: 15, marginTop: 10, borderBottomWidth: 0.2, marginRight: 15 }}>
                        <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Semibold' }}>Your Occuption</Text>
                        <View style={{ marginLeft: -10 }}>
                            <View style={{ height: 40, width: '100%', }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <View style={{ width: '100%' }}>
                                        <Picker
                                            selectedValue={oc}
                                            dropdownIconColor="#FFFFFFed"
                                            style={{ marginLeft: -5 }}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setoc(itemValue)
                                            }>
                                            <Picker.Item label="Select" value="Select" style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16 }} />
                                            <Picker.Item label="Business" value="1" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 16 }} />
                                            <Picker.Item label="Job" value="2" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 16 }} />
                                            <Picker.Item label="Farmer" value="3" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 16 }} />
                                            <Picker.Item label="Other" value="4" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 16 }} />
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => { Cancel() }}
                        style={{ backgroundColor: '#65096F', borderRadius: 8, alignItems: 'center', alignSelf: 'center', marginTop: '15%', paddingBottom: 5, paddingTop: 5, paddingLeft: '10%', paddingRight: '10%' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'AvertaStd-Semibold', color: '#fff', alignSelf: 'center', padding: 2 }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Update() }}
                        style={{ backgroundColor: '#65096F', borderRadius: 8, alignItems: 'center', alignSelf: 'center', marginTop: '15%', paddingBottom: 5, paddingTop: 5, paddingLeft: '10%', paddingRight: '10%' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'AvertaStd-Semibold', color: '#fff', alignSelf: 'center', padding: 2 }}>Update</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default EditProfile