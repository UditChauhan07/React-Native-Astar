import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TextInput, Animated } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { openDatabase } from 'react-native-sqlite-storage';
import { Picker } from '@react-native-picker/picker';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios';
import { Other, Names } from '../ReduxFloder/action';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import Loader from './Loader';


var db = openDatabase({ name: 'AStar8.db' });


const Compatibility4 = ({ navigation }) => {

    const dispatch = useDispatch();
    const ProfileImage = useSelector(state => state.ProfileImage)
    const Data = useSelector(state => state.Data)
    console.error(Data.userdetail.userid);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [cal, setcal] = useState(false)
    const [days, setday] = useState(date)
    const date = Moment().format('DD-MM-YYYY')
    const [names, setnames] = useState([])
    const [name, setname] = useState('')
    const [mail, setmail] = useState('')
    const [iscon, con] = useState(false)
    const [loading, setloading] = useState(false)
    const [zodiac, setzodiac] = useState([])

    useEffect(() => {
        setloading(true)
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
        setloading(false)

        tryOut();
    }, [])

    const SelectTab = (item, index) => {
        console.log('boooo');
        navigation.navigate('Dashboard')
    }

    const Profile = (item, index) => {
        console.log('boooo');
        navigation.navigate('UserProfile')
    }

    const Cosmic = () => {
        navigation.navigate('CustomCalender')
    }

    const test = () => {
        navigation.navigate('Reading')
    }

    const test1 = () => {
        navigation.navigate('Compatibility')
    }

    const calendar = () => {
        setcal(true)
    }

    const nav = () => {
        setloading(true)
        var day = Moment(days).format('YYYY-MM-DD')
        let bodyFormData = { 'userid': Data.userdetail.userid, 'type': 7, 'name': name, 'dob': day, 'gender': selectedLanguage, 'email': mail }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/checknamereadingcompatibility`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.log(data);
                dispatch(Names(data))
                navigation.navigate('NameCompatibilityCheck')
                setloading(false)
            })
            .catch(error => {
                console.warn(error)
                setloading(false)
            })
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

    const test8 = () => {
        setloading(true)
        let bodyFormData = { 'userid': Data.userdetail.userid, }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/namereadingcompatibilitycheck`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.log(data);
                dispatch(Names(data))
                navigation.navigate('NameCompatibilityCheck')
                con(false)
                setloading(false)
            })
            .catch(error => {
                console.warn(error.response)
                setloading(false)
            })
        con(false)
    }

    const test9 = () => {
        navigation.navigate('Compatibility5')
        con(false)
    }

    const Ask = () => {
        navigation.navigate('AskQuestion')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? <Loader showloading={loading} /> : null}
            <ImageBackground source={require('./assets/DashboardBackgroundImage.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ flex: 1 }}>
                    <KeyboardAwareScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: -5 }}>
                            <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', marginLeft: 20, marginTop: 23 }}>
                                <TouchableOpacity onPress={() => { SelectTab() }}
                                    style={{ paddingTop: 7, paddingRight: 2, alignSelf: 'center' }}>
                                    <Icons name="left" size={15} color="#007AFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                <Text style={{ color: '#3B2F5C', fontSize: 24, fontFamily: 'AvertaStd-Semibold' }}>Compatibility Check</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginRight: 20, marginTop: 5, alignSelf: 'center' }}>
                            {names.profile_pic !== "" &&
                                <Image source={names.profile_pic  !== "" ? { uri: names.profile_pic  } : require('./assets/user-details-profile.png')} style={{ height: 60, width: 60, borderColor: '#000', borderWidth: 2, borderRadius: 60 }} />}
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
                        <View style={{ backgroundColor: '#ffffffa1', borderRadius: 30, borderBottomWidth: 3, borderLeftColor: '#DA0AE4', borderRightColor: '#DA0AE4', borderBottomColor: '#DA0AE4', borderLeftWidth: 0.1, borderRightWidth: 0.1 }}>
                            <View style={{ height: 22, width: 157, borderRadius: 10, backgroundColor: '#73207C', marginLeft: 25, marginTop: -10 }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Other Person</Text>
                            </View>
                            <View style={{ marginLeft: 25, marginTop: 20, marginBottom: 5, borderBottomWidth: 0.2, marginRight: 25 }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular' }}>Name</Text>
                                <TextInput style={{ borderBottomWidth: 1, color: '#DA0AE4', fontSize: 16, borderBottomColor: '#EBEBEB', fontFamily: 'AvertaStd-Regular' }}
                                    placeholder='Enter Your Name' placeholderTextColor='#000'
                                    autoCapitalize='sentences'
                                    onChangeText={name => setname(name)}
                                    value={name} />
                            </View>
                            <View style={{ marginLeft: 25, marginTop: 10, marginBottom: 5, borderBottomWidth: 0.2, marginRight: 25 }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular' }}>Date of Birth</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#ddd', }}>
                                    <Text style={{ color: '#DA0AE4', paddingTop: 20, fontFamily: 'AvertaStd-Regular' }}>{Moment(days).format('DD-MM-YYYY')}</Text>
                                    <TouchableOpacity onPress={() => { calendar() }}
                                        style={{ justifyContent: 'center', paddingRight: 15 }}>
                                        <FontAwesome5 name="calendar-minus" size={25} color="#73207C" />
                                    </TouchableOpacity>
                                </View>
                                {cal == true &&
                                    <CalendarPicker
                                        onDateChange={days => {
                                            setday(days)
                                            setcal(false)
                                            console.log('===', days)
                                        }}
                                    />}
                            </View>
                            <View style={{ marginLeft: 25, marginTop: 10, marginBottom: 5, borderBottomWidth: 0.2, marginRight: 25 }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular' }}>Gender</Text>
                                <View style={{ height: 40, width: '100%', borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                                    <Picker
                                        selectedValue={selectedLanguage}
                                        style={{ color: '#DA0AE4', marginLeft: -15, fontFamily: 'AvertaStd-Regular' }}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedLanguage(itemValue)
                                        }>
                                        <Picker.Item label="Select" value="Select" />
                                        <Picker.Item label="Male" value="Male" />
                                        <Picker.Item label="Female" value="Female" />
                                        <Picker.Item label="Other" value="Other" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={{ marginLeft: 25, marginTop: 10, marginBottom: 5, borderBottomWidth: 0.2, marginRight: 25, }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular' }}>Email Address</Text>
                                <TextInput style={{ borderBottomWidth: 1, color: '#DA0AE4', fontSize: 16, borderBottomColor: '#EBEBEB', fontFamily: 'AvertaStd-Regular' }}
                                    placeholder='Enter Your Email' placeholderTextColor='#000'
                                    onChangeText={mail => setmail(mail)}
                                    value={mail} />
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { nav() }}
                                    style={{ backgroundColor: '#65096F', alignSelf: 'center', borderRadius: 8, margin: 10, paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }}>
                                    <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>GET COMPATIBILITY</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ margin: 25 }}>
                            <TouchableOpacity onPress={() => { }}
                                style={{ backgroundColor: '#65096F', alignSelf: 'center', borderRadius: 8, paddingLeft: 15, paddingRight: 15, paddingBottom: 10, paddingTop: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'AvertaStd-Semibold' }}>SUGGESTED COMPATIBILITY</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
                <View style={{ paddingLeft: 15, paddingRight: 15, paddingBottom: 10, }}>
                    <View style={{ height: 60, borderColor: '#73207C', borderWidth: 1, borderRadius: 15, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => { SelectTab() }} style={{ justifyContent: 'center' }}>
                            {/* <Icons name="home" size={30} color="#73207C" /> */}
                            <Image source={require('./assets/home-icon.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { test() }}
                            style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: -15 }}>
                            {/* <FontAwesome5 name="book-reader" size={23} color="#73207C" /> */}
                            <Image source={require('./assets/All-Icon&Photos/Do_reading.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { test3(!iscon) }}
                            style={{ justifyContent: 'center', flexDirection: 'row', }}>
                            <View style={{ width: 55, height: 55, backgroundColor: "#73207C", transform: [{ rotate: "45deg" }], borderRadius: 7, position: 'absolute' }}>
                            </View>
                            <View style={{ paddingTop: 12, marginTop: 3 }}>
                                {/* <FontAwesome5 name="handshake" size={25} color="#fff" /> */}
                                <Image source={require('./assets/All-Icon&Photos/compatability-white-icon.png')} style={{ width: 33, height: 24 }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Cosmic() }}
                            style={{ justifyContent: 'center' }}>
                            {/* <FontAwesome5 name="calendar-minus" size={23} color="#73207C" /> */}
                            <Image source={require('./assets/Daterangefill.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Profile()} style={{ justifyContent: 'center' }}>
                            {/* <FontAwesome5 name="user" size={22} color="#73207C" /> */}
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
                        <View style={{ flex: 1 }}></View>
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
                            <TouchableOpacity onPress={() => { test8() }} >
                                <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                                    <Animated.View
                                        style={{
                                            transform: [{ translateX: translation1.x },
                                            { translateY: translation1.y },]         // Bind opacity to animated value
                                        }}>
                                        <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18 }}>
                                            {/* <FontAwesome5 name="handshake" size={35} color="#65096F" /> */}
                                            <Image source={require('./assets/hands.png')} style={{ width: 32.42, height: 45.96 }}/>
                                        </View>
                                        <Text style={{ fontFamily: 'AvertaStd-Regular', textAlign: 'center', color: '#65096F' }}>Name Compatability</Text>
                                    </Animated.View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { test7() }} >
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
                        <View style={{ marginTop: -20 }}>
                            <TouchableOpacity onPress={() => { test6() }} style={{ marginLeft: -10 }}>
                                <View style={{ alignSelf: 'center', alignItems: 'center', margin: 10 }}>
                                    <Animated.View
                                        style={{
                                            transform: [{ translateX: translation5.x },
                                            { translateY: translation5.y },]         // Bind opacity to animated value
                                        }}>
                                        <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18 }}>
                                            <Image source={require('./assets/Vector(1).png')} style={{ width: 40.73, height: 33.12 }} />
                                        </View>
                                        <Text style={{ color: '#65096F', textAlign: 'center', fontFamily: 'AvertaStd-Regular' }}>car / vehical</Text>
                                    </Animated.View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', marginTop: 20, marginLeft: -8 }}>
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

export default Compatibility4