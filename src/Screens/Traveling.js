import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TextInput, Animated, FlatList } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { openDatabase } from 'react-native-sqlite-storage';
import { Picker } from '@react-native-picker/picker';
import Moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios';
import { TravelData } from '../ReduxFloder/action';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import DatePicker from 'react-native-date-picker'

var db = openDatabase({ name: 'AStar8.db' });

const Traveling = ({ navigation }) => {
    const dispatch = useDispatch();
    const Data = useSelector(state => state.Data)
    console.error(Data.userdetail.userid);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [cal, setcal] = useState(false)
    const [days, setday] = useState(date)
    const [names, setnames] = useState([])
    const [name, setname] = useState('')
    const [mail, setmail] = useState('')
    const [loading, setloading] = useState(false)
    const [iscon, con] = useState(false)
    const [zodiac, setzodiac] = useState([])
    const [date, setDate] = useState(new Date())
    const [todate, settodate] = useState(new Date())
    const [show, hide] = useState(false)
    const [travel, settravel] = useState([])

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
                    }
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM zodiacdetail",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        console.error("zodiac_detail", results.rows.item(i));
                        setzodiac(results.rows.item(i))
                    }
                }
            );
        });

        var CurrentDate = Moment().format('YYYY-MM-DD')
        let bodyFormData = { 'userid': Data.userdetail.userid, 'current_date':CurrentDate }
        console.error(bodyFormData);
        setloading(true)
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/usertraveldata`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn(data)
                settravel(data.traveldetail)
                setloading(false)
            })
            .catch(error => {
                console.warn(error)
                setloading(false)
            })


        tryOut();
    }, [])

    const SelectTab = (item, index) => {
        console.log('Dashboard');
        navigation.navigate('Dashboard')
    }

    const Profile = (item, index) => {
        console.log('UserProfile');
        navigation.navigate('UserProfile')
    }

    const Cosmic = () => {
        console.log('CustomCalender');
        navigation.navigate('CustomCalender')
    }

    const test = () => {
        console.log('Reading');
        navigation.navigate('Reading')
    }

    const test1 = () => {
        console.log('Compatibility');
        navigation.navigate('Compatibility')
    }

    const test3 = (iscon) => {
        con(iscon)
        trySome()
    }
    const test4 = () => {
        con(false)
        tryOut()
    }

    const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const translation1 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const translation2 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const translation3 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const translation4 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const translation5 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const trySome = () => {
        setTimeout(() => {
            Animated.sequence([
                Animated.parallel([
                    Animated.spring(translation.x, {
                        toValue: 7,
                        useNativeDriver: true,
                    }),
                    Animated.spring(translation.y, {
                        toValue: 7,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
        }, 10);

        setTimeout(() => {
            Animated.sequence([
                Animated.parallel([
                    Animated.spring(translation1.x, {
                        toValue: -50,
                        useNativeDriver: true,
                    }),
                    Animated.spring(translation1.y, {
                        toValue: 5,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
        }, 110);

        setTimeout(() => {
            Animated.sequence([
                Animated.parallel([
                    Animated.spring(translation2.x, {
                        toValue: 25,
                        useNativeDriver: true,
                    }),
                    Animated.spring(translation2.y, {
                        toValue: 5,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
        }, 210);

        setTimeout(() => {
            Animated.sequence([
                Animated.parallel([
                    Animated.spring(translation3.x, {
                        toValue: -10,
                        useNativeDriver: true,
                    }),
                    Animated.spring(translation3.y, {
                        toValue: 5,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
        }, 310);

        setTimeout(() => {
            Animated.sequence([
                Animated.parallel([
                    Animated.spring(translation4.x, {
                        toValue: 10,
                        useNativeDriver: true,
                    }),
                    Animated.spring(translation4.y, {
                        toValue: 5,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
        }, 410);

        setTimeout(() => {
            Animated.sequence([
                Animated.parallel([
                    Animated.spring(translation5.y, {
                        toValue: 0,
                        useNativeDriver: true,
                    }),
                ]),

            ]).start();
        }, 510);
    }


    const tryOut = () => {
        setTimeout(() => {
            Animated.sequence([
                Animated.spring(translation.y, {
                    toValue: 1000,
                    useNativeDriver: true
                })
            ]).start();
        }, 100);

        setTimeout(() => {
            Animated.sequence([
                Animated.spring(translation1.y, {
                    toValue: 1000,
                    useNativeDriver: true
                }),
            ]).start();
        }, 100);

        setTimeout(() => {
            Animated.sequence([
                Animated.spring(translation2.y, {
                    toValue: 1000,
                    useNativeDriver: true
                }),
            ]).start();
        }, 100);

        setTimeout(() => {
            Animated.sequence([
                Animated.spring(translation3.y, {
                    toValue: 1000,
                    useNativeDriver: true
                }),
            ]).start();
        }, 100);

        setTimeout(() => {
            Animated.sequence([
                Animated.spring(translation4.y, {
                    toValue: 1000,
                    useNativeDriver: true
                }),
            ]).start();
        }, 100);

        setTimeout(() => {
            Animated.sequence([
                Animated.spring(translation5.y, {
                    toValue: 1000,
                    useNativeDriver: true
                }),
            ]).start();
        }, 100);
    }

    const test5 = () => {
        navigation.navigate('Compatibility1')
        con(false)
    }

    const test6 = () => {
        navigation.navigate('Compatibility2')
        con(false)
    }

    const test7 = () => {
        navigation.navigate('Compatibility3')
        con(false)
    }

    const test9 = () => {
        navigation.navigate('Compatibility5')
        con(false)
    }

    const showdate = (cal) => {
        setcal(cal)
    }
    const hodedate = () => {
        setcal(false)
    }

    const test10 = (show) => {
        console.log('boooo');
        hide(show)
    }
    const test11 = () => {
        hide(false)
    }

    const CheckPossibilities = () => {
        setloading(true)
        var fromDate = Moment(date).format('YYYY-MM-DD')
        var toDate = Moment(todate).format('YYYY-MM-DD')
        var currentDate = Moment().format('YYYY-MM-DD')
        let bodyFormData = { 'userid': Data.userdetail.userid, 'going_for': selectedLanguage, 'date_from': fromDate, 'date_to': toDate, 'check_date':currentDate }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/usertravelpossibility`, // travel check posibility API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.log(data);
                dispatch(TravelData(data))
                navigation.navigate('CheckPossibilities')
                setloading(false)
            })
            .catch(error => {
                console.warn(error.response)
                setloading(false)
            })
    }

    const Ask = () => {
        navigation.navigate('AskQuestion')
    }

    const Seen = () => {
        let body = { 'userid': Data.userdetail.userid, 'seenstatus': 1 }
        console.error(body);

        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/seenunseenmessage`, // Ask Question API
            data: body,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn("live api of seen status", data)
                setloading(false)
            })
            .catch(error => {
                console.warn(error)
                setloading(false)
            })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? <Loader showloading={loading} /> : null}
            <ImageBackground source={require('./assets/DashboardBackgroundImage.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: -5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', marginLeft: 20, marginTop: 23 }}>
                                <TouchableOpacity onPress={() => SelectTab()}
                                    style={{ paddingTop: 7, paddingRight: 2, alignSelf: 'center' }}>
                                    <Icons name="left" size={15} color="#007AFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                <Text style={{ color: '#65096F', fontSize: 24, fontFamily: 'AvertaStd-Semibold' }}>Travel</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginRight: 20, marginTop: 5, alignSelf: 'center' }}>
                            {names.profile_pic !== "" &&
                                <Image source={names.profile_pic !== "" ? { uri: names.profile_pic } : require('./assets/user-details-profile.png')} style={{ height: 60, width: 60, borderColor: '#000', borderWidth: 2, borderRadius: 60 }} />}
                            {names.profile_pic == "" &&
                                <View style={{ paddingTop: 10, paddingRight: 10, flexDirection: 'row', }}>
                                    <View style={{ borderColor: '#000', borderWidth: 2, borderRadius: 60 / 2, height: 60, width: 60, padding: 10 }}>
                                        {zodiac.zodiac_sign == "CANCER" &&
                                            <Icon name="zodiac-cancer" size={35} color="#000" />}
                                        {zodiac.zodiac_sign == "ARIES" &&
                                            <Icon name="zodiac-aries" size={35} color="#000" />}
                                        {zodiac.zodiac_sign == "TAURUS" &&
                                            <Icon name="zodiac-taurus" size={35} color="#000" />}
                                        {zodiac.zodiac_sign == "GEMINI" &&
                                            <Icon name="zodiac-gemini" size={35} color="#000" />}
                                        {zodiac.zodiac_sign == "LEO" &&
                                            <Icon name="zodiac-leo" size={35} color="#000" />}
                                        {zodiac.zodiac_sign == "VIRGO" &&
                                            <Icon name="zodiac-virgo" size={35} color="#000" />}
                                        {zodiac.zodiac_sign == "LIBRA" &&
                                            <Icon name="zodiac-libra" size={35} color="#000" />}
                                        {zodiac.zodiac_sign == "SCORPIO" &&
                                            <Icon name="zodiac-scorpio" size={35} color="#000" />}
                                        {zodiac.zodiac_sign == "SAGITTARIUS" &&
                                            <Icon name="zodiac-sagittarius" size={35} color="#000" />}
                                        {zodiac.zodiac_sign == "CAPRICORN" &&
                                            <Icon name="zodiac-capricorn" size={35} color="#000" />}
                                        {zodiac.zodiac_sign == "AQUARIUS" &&
                                            <Icon name="zodiac-aquarius" size={35} color="#000" />}
                                        {zodiac.zodiac_sign == "PISCES" &&
                                            <Icon name="zodiac-pisces" size={35} color="#000" />}
                                    </View>
                                </View>}
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFFa1', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderBottomWidth: 3, borderBottomColor: '#DA0AE4', borderLeftWidth: 0.5, borderRightWidth: 0.5, borderLeftColor: '#DA0AE4', borderRightColor: '#DA0AE4' }}>
                        <View style={{ marginLeft: 25, marginTop: 10, marginBottom: 5, borderBottomWidth: 0.2, marginRight: 25 }}>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular' }}>Going To</Text>
                            <View style={{ height: 40, width: '100%', borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                                    <View style={{ width: '100%' }}>
                                        <Picker
                                            selectedValue={selectedLanguage}
                                            style={{ marginLeft: -15, }}
                                            dropdownIconColor='#fff'
                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedLanguage(itemValue)
                                            }>
                                            <Picker.Item label="Show trip" style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 14, }} />
                                            <Picker.Item label="New Places" value="1" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                            <Picker.Item label="Short/Weekend Trip" value="5" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                            <Picker.Item label="Exotic/Family Trip" value="7" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                            <Picker.Item label="International/Business Trip" value="9" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                        </Picker>
                                    </View>
                                    <View style={{ alignSelf: 'center', marginLeft: -30 }}>
                                        <Entypo name="chevron-small-down" size={27} color="#65096F" />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginLeft: 25, marginTop: 10, marginBottom: 5, borderBottomWidth: 0.2, marginRight: 25 }}>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular' }}>Date From</Text>
                            <TouchableOpacity onPress={() => { showdate(!cal) }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#ddd', }}>
                                    <Text style={{ color: '#DA0AE4', paddingTop: 20 }}>{Moment(date).format('DD-MM-YYYY')}</Text>
                                </View>
                            </TouchableOpacity>
                            <Modal
                                onBackdropPress={() => hodedate()}
                                onRequestClose={() => hodedate()}
                                visible={cal}
                                style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.9, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50, marginTop: -50 }}
                            >
                                <View style={{ flex: 0.45, backgroundColor: '#fff', borderRadius: 20, zIndex: 11111, borderBottomColor: '#DA0AE4', borderBottomWidth: 3, marginTop: -50, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: '#DA0AE4', }}>
                                    <Text style={{ color: '#3B2F5C', fontSize: 20, fontFamily: 'AvertaStd-Regular', paddingTop: 20, textAlign: 'center' }}>Date From</Text>
                                    <View style={{ paddingTop: 25 }}>
                                        <DatePicker date={date} onDateChange={setDate} androidVariant='iosClone' mode='date' textColor='#DA0AE4' />
                                    </View>
                                    <TouchableOpacity onPress={() => { hodedate() }} style={{ backgroundColor: '#65096F', width: 227, height: 36, borderRadius: 8, alignItems: 'center', alignSelf: 'center', marginTop: '15%' }}>
                                        <Text style={{ fontSize: 20, fontFamily: 'AvertaStd-Semibold', color: '#fff', alignSelf: 'center', padding: 2 }}>Confirm</Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                        <View style={{ marginLeft: 25, marginTop: 10, marginBottom: 5, borderBottomWidth: 0.2, marginRight: 25 }}>
                            <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular' }}>Date To</Text>
                            <TouchableOpacity onPress={() => { test10(!show) }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#ddd', }}>
                                    <Text style={{ color: '#DA0AE4', paddingTop: 20 }}>{Moment(todate).format('DD-MM-YYYY')}</Text>
                                </View>
                            </TouchableOpacity>
                            <Modal
                                onBackdropPress={() => test11()}
                                onRequestClose={() => test11()}
                                visible={show}
                                style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.9, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50, marginTop: -50 }}
                            >
                                <View style={{ flex: 0.45, backgroundColor: '#fff', borderRadius: 20, zIndex: 11111, borderBottomColor: '#DA0AE4', borderBottomWidth: 3, marginTop: -50, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: '#DA0AE4', }}>
                                    <Text style={{ color: '#3B2F5C', fontSize: 20, fontFamily: 'AvertaStd-Regular', paddingTop: 20, textAlign: 'center' }}>Date To</Text>
                                    <View style={{ paddingTop: 25 }}>
                                        <DatePicker date={todate} onDateChange={settodate} androidVariant='iosClone' mode='date' textColor='#DA0AE4' />
                                    </View>
                                    <TouchableOpacity onPress={() => { test11() }} style={{ backgroundColor: '#65096F', width: 227, height: 36, borderRadius: 8, alignItems: 'center', alignSelf: 'center', marginTop: '15%' }}>
                                        <Text style={{ fontSize: 20, fontFamily: 'AvertaStd-Semibold', color: '#fff', alignSelf: 'center', padding: 2 }}>Confirm</Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        </View>
                        <TouchableOpacity onPress={() => { CheckPossibilities() }}
                            style={{ backgroundColor: '#65096F', alignSelf: 'center', borderRadius: 8, margin: 20, paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }}>
                            <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>CHECK POSSIBILITY</Text>
                        </TouchableOpacity>
                    </View>
                    <KeyboardAwareScrollView>
                        <FlatList
                            data={travel}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item, index }) =>
                                <View>
                                    <View>
                                        {index == 0 &&
                                            <View style={{ margin: 10 }}>
                                                <View style={{ backgroundColor: '#2D6BB5', borderRadius: 12, width: '100%', paddingLeft: 5, paddingBottom: 10, flexDirection: 'row' }}>
                                                    <Image source={require('./assets/family-trip.png')} style={{ height: 63, width: 59, alignSelf: 'center', margin: 10 }} />
                                                    <View style={{ width: '76.5%', backgroundColor: '#fff', borderBottomLeftRadius: 15, borderBottomRightRadius: 12, borderTopRightRadius: 12, padding: 5, }}>
                                                        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                                            <Text style={{ color: '#65096F', fontFamily: 'AvertaStd-Regular', fontSize: 13, lineHeight: 18 }}>{item.travel_type}: </Text>
                                                            <Text style={{ color: '#2C294A', fontFamily: 'AvertaStd-Bold', fontSize: 13, lineHeight: 18 }}>{item.travel_title} </Text>
                                                        </View>
                                                        <View style={{ paddingLeft: 10 }}>
                                                            <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 13, lineHeight: 18 }}>{item.travel_description}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>}
                                        {index == 1 &&
                                            <View style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
                                                <View style={{ backgroundColor: '#F56425', borderRadius: 12, width: '100%', paddingLeft: 5, paddingBottom: 10, flexDirection: 'row' }}>
                                                    <Image source={require('./assets/internation-trip.png')} style={{ width: 59, height: 47, alignSelf: 'center', margin: 10 }} />
                                                    <View style={{ width: '76.5%', backgroundColor: '#fff', borderBottomLeftRadius: 15, borderBottomRightRadius: 12, borderTopRightRadius: 12, padding: 5, }}>
                                                        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                                            <Text style={{ color: '#65096F', fontFamily: 'AvertaStd-Regular', fontSize: 13, lineHeight: 18 }}>{item.travel_type}: </Text>
                                                            <Text style={{ color: '#2C294A', fontFamily: 'AvertaStd-Bold', fontSize: 13, lineHeight: 18 }}>{item.travel_title} </Text>
                                                        </View>
                                                        <View style={{ paddingLeft: 10 }}>
                                                            <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 13, lineHeight: 18 }}>{item.travel_description}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>}
                                        {index == 2 &&
                                            <View style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
                                                <View style={{ backgroundColor: '#B62376', borderRadius: 12, width: '100%', paddingLeft: 5, paddingBottom: 10, flexDirection: 'row' }}>
                                                    <Image source={require('./assets/beach(1).png')} style={{ height: 58, width: 59, alignSelf: 'center', margin: 10 }} />
                                                    <View style={{ width: '76.5%', backgroundColor: '#fff', borderBottomLeftRadius: 15, borderBottomRightRadius: 12, borderTopRightRadius: 12, padding: 5, }}>
                                                        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                                                            <Text style={{ color: '#65096F', fontFamily: 'AvertaStd-Regular', fontSize: 13, lineHeight: 18 }}>{item.travel_type}: </Text>
                                                            <Text style={{ color: '#2C294A', fontFamily: 'AvertaStd-Bold', fontSize: 13, lineHeight: 18 }}>{item.travel_title} </Text>
                                                        </View>
                                                        <View style={{ paddingLeft: 10 }}>
                                                            <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 13, lineHeight: 18 }}>{item.travel_description}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>}
                                    </View>
                                </View>} />
                    </KeyboardAwareScrollView>
                </View>
                <View style={{ paddingLeft: 15, paddingRight: 15, paddingBottom: 10, }}>
                    <View style={{ height: 60, borderColor: '#73207C', borderWidth: 1, borderRadius: 15, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => { SelectTab() }} style={{ justifyContent: 'center' }}>
                            <Image source={require('./assets/home-icon.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { test() }}
                            style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: -15 }}>
                            <Image source={require('./assets/All-Icon&Photos/Do_reading.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { test3(!iscon) }}
                            style={{ justifyContent: 'center', flexDirection: 'row', }}>
                            <View style={{ width: 55, height: 55, backgroundColor: "#73207C", transform: [{ rotate: "45deg" }], borderRadius: 7, position: 'absolute' }}>
                            </View>
                            <View style={{ paddingTop: 12, marginTop: 3 }}>
                                <Image source={require('./assets/All-Icon&Photos/compatability-white-icon.png')} style={{ width: 33, height: 24 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Ask()
                            Seen()
                        }}
                            style={{ justifyContent: 'center' }}>
                            <Image source={require('./assets/prediction.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Profile()} style={{ justifyContent: 'center' }}>
                            <Image source={require('./assets/All-Icon&Photos/user.png')} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal
                    animationType="none"
                    hardwareAccelerated={true}
                    statusBarTranslucent={true}
                    transparent={true}
                    duration={50}
                    useNativeDriver={true}
                    onBackdropPress={() => test4()}
                    onRequestClose={() => test4()}
                    visible={iscon}
                    style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.9, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                    <View style={{ zIndex: 9999, alignItems: 'center', alignContent: 'center', flex: 0.81 }}>
                        <View style={{ flex: 0.9 }}></View>
                        <View style={{}}>
                            <TouchableOpacity onPress={() => { test9() }} style={{ alignSelf: 'center', marginLeft: -5 }}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Animated.View
                                        style={{
                                            transform: [{ translateX: translation.x },
                                            { translateY: translation.y },]         // Bind opacity to animated value
                                        }}>
                                        <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18, margin: 10 }}>
                                            <Image source={require('./assets/Life-partner.png')} style={{ width: 32.42, height: 45.96 }} />
                                        </View>
                                        <Text style={{ color: '#65096F', textAlign: 'center', fontFamily: 'AvertaStd-Regular' }}>Relationships </Text>
                                    </Animated.View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-between', marginTop: -20 }}>
                            <TouchableOpacity onPress={() => { test6() }} style={{ paddingLeft: 15 }} >
                                <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                                    <Animated.View
                                        style={{
                                            transform: [{ translateX: translation1.x },
                                            { translateY: translation1.y },]         // Bind opacity to animated value
                                        }}>
                                        <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, alignItems: 'center', paddingTop: 18, backgroundColor: '#fff' }}>
                                            <Image source={require('./assets/Vector(1).png')} style={{ width: 40.73, height: 33.12 }} />
                                        </View>
                                        <Text style={{ fontFamily: 'AvertaStd-Regular', textAlign: 'center', color: '#65096F' }}>  Car / Vehicle   </Text>
                                    </Animated.View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { test7() }} style={{ marginLeft: '5%' }}>
                                <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                                    <Animated.View
                                        style={{
                                            transform: [{ translateX: translation2.x },
                                            { translateY: translation2.y },]         // Bind opacity to animated value
                                        }}>
                                        <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18 }}>
                                            <Image source={require('./assets/Business.png')} style={{ width: 37.34, height: 33.05 }} />
                                        </View>
                                        <Text style={{ textAlign: 'center', fontFamily: 'AvertaStd-Regular', color: '#65096F' }}>Business</Text>
                                    </Animated.View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, alignSelf: 'center' }}>
                            <View style={{ marginLeft: -10, marginRight: 80 }}>
                                <TouchableOpacity onPress={() => { test5() }} >
                                    <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                                        <Animated.View
                                            style={{
                                                transform: [{ translateX: translation3.x },
                                                { translateY: translation3.y },]         // Bind opacity to animated value
                                            }}>
                                            <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18 }}>
                                                <Image source={require('./assets/Vector.png')} style={{ width: 44.39, height: 40.49 }} />
                                            </View>
                                            <Text style={{ color: '#65096F', textAlign: 'center', fontFamily: "AvertaStd-Regular" }}>Property</Text>
                                        </Animated.View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{}}>
                                <TouchableOpacity onPress={() => { test1() }} >
                                    <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                                        <Animated.View
                                            style={{
                                                transform: [{ translateX: translation4.x },
                                                { translateY: translation4.y },]         // Bind opacity to animated value
                                            }}>
                                            <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18 }}>
                                                <Image source={require('./assets/One-to-one.png')} style={{ width: 41.2, height: 29.44 }} />
                                            </View>
                                            <Text style={{ color: '#65096F', textAlign: 'center', fontFamily: "AvertaStd-Regular" }}>Other Person</Text>
                                        </Animated.View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', marginTop: -10, marginLeft: -8 }}>
                        <TouchableOpacity onPress={() => { test4() }} style={{ alignItems: 'center' }}>
                            <View style={{ width: 55, height: 55, backgroundColor: "#73207C", transform: [{ rotate: "45deg" }], borderRadius: 7, position: 'absolute', alignItems: 'center' }}>
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <Entypo name='cross' size={40} color="#fff" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Traveling