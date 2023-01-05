import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TextInput, Animated } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { openDatabase } from 'react-native-sqlite-storage';
import { Picker } from '@react-native-picker/picker';
import Moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios';
import { Spouse, Names } from '../ReduxFloder/action';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import DatePicker from 'react-native-date-picker'
import Loader from './Loader';


var db = openDatabase({ name: 'AStar8.db' });


const Compatibility5 = ({ navigation }) => {

    const dispatch = useDispatch();
    const ProfileImage = useSelector(state => state.ProfileImage)
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
    const [show, hide] = useState(false)
    const [zodiac, setzodiac] = useState([])
    const [date, setDate] = useState(new Date())
    const [issug, sug] = useState(false)
    const [compatiblepartner, setcompatiblepartner] = useState([])

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

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM compatiblepartner",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        console.error("compatiblepartner", results.rows.item(i));
                        setcompatiblepartner(results.rows.item(i))
                    }
                }
            );
        });

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
        con(false)
        if(name == ""){
            alert('Please enter your name')
        }
        if(day == ""){
            alert('Please enter your DOB')
        }
        if(selectedLanguage == ""){
            alert('Please select gender')
        }
        setloading(true)
        var day = Moment(date).format('YYYY-MM-DD')
        let bodyFormData = { 'userid': Data.userdetail.userid, 'type': 6, 'name': name, 'dob': day, 'gender': selectedLanguage, 'email': mail }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/onetoothercompatibilitycheck`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.log(data);
                dispatch(Spouse(data))
                navigation.navigate('SpouseCompatibilityCheck')
                setloading(false)
                con(false)
            })
            .catch(error => {
                console.warn(error.response)
                setloading(false)
            })
    }

    const EmaiShare = () => {
        if (mail == "") {
            alert('Please enter your Email')
        }
        if (mail != "") {
            hide(false)
            var day = Moment(date).format('YYYY-MM-DD')
            setloading(true)
            let bodyFormData = { 'userid': Data.userdetail.userid, 'type': 6, 'name': name, 'dob': day, 'gender': selectedLanguage, 'email': mail }
            console.log(bodyFormData);
            axios({
                method: 'POST',
                url: `https://astar.7kstartup.com/public/api/onetoothercompatibilitycheck`, // Signup API
                data: bodyFormData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(({ data, status }) => {
                    console.log(data);
                    dispatch(Spouse(data))
                    setloading(false)
                    con(false)
                    let FormData = { 'otherpersonid': data.otheruser_detail.otherpersonid, 'userid': Data.userdetail.userid, 'module_type': 3, 'email': mail }
                    console.log(FormData);
                    axios({
                        method: 'POST',
                        url: `https://astar.7kstartup.com/public/api/sharepersonreading`, // Signup API
                        data: FormData,
                        config: { headers: { 'Content-Type': 'multipart/form-data' } }
                    })
                        .then(({ data, status }) => {
                            console.error("email status", data);
                            navigation.navigate('SpouseCompatibilityCheck')
                            con(false)
                            setloading(false)
                        })
                        .catch(error => {
                            console.warn(error.response.data)
                            setloading(false)
                        })
                })
                .catch(error => {
                    console.warn(error)
                    setloading(false)
                })
        }
    }

    const test4 = () => {
        con(false)
    }
    const test3 = (iscon) => {
        con(iscon)
    }

    const test10 = (show) => {
        console.log('boooo');
        hide(show)
        trySome()
    }
    const test11 = () => {
        hide(false)
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
                        toValue: 0,
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
                        toValue: 25,
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
        hide(false)
        navigation.navigate('Compatibility1')
    }

    const test6 = () => {
        hide(false)
        navigation.navigate('Compatibility2')
    }

    const test7 = () => {
        hide(false)
        navigation.navigate('Compatibility3')
    }

    const test8 = () => {
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
            })
            .catch(error => {
                console.warn(error.response)
            })
        hide(false)
    }

    const test9 = () => {
        hide(false)
        navigation.navigate('Compatibility5')
    }
    const showdate = (cal) => {
        setcal(cal)
    }
    const hodedate = () => {
        setcal(false)
    }

    const Ask = () => {
        navigation.navigate('AskQuestion')
    }

    const test12 = (issug) => {
        sug(issug)
    }
    const test13 = () => {
        sug(false)
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
                    <KeyboardAwareScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: -5 }}>
                            <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', marginLeft: 20, marginTop: 23 }}>
                                <TouchableOpacity onPress={() => { SelectTab() }}
                                    style={{ paddingTop: 7, paddingRight: 2, alignSelf: 'center' }}>
                                    <Icons name="left" size={15} color="#007AFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                <Text style={{ color: '#3B2F5C', fontSize: 19, fontFamily: 'AvertaStd-Semibold' }}>RELATIONSHIP CHECK</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginRight: 20, marginTop: 5, alignSelf: 'center' }}>
                                {names.profile_pic !== "" &&
                                    <Image source={names.profile_pic !== "" ? { uri: names.profile_pic } : require('./assets/user-details-profile.png')} style={{ height: 60, width: 60, borderColor: '#000', borderWidth: 2, borderRadius: 60 }} />}
                                {names.profile_pic == "" &&
                                    <View style={{ paddingTop: 10, paddingRight: 10, flexDirection: 'row', }}>
                                        <View style={{ borderColor: '#000', borderWidth: 2, borderRadius: 60 / 2, height: 60, width: 60, padding: 10 }}>
                                            {zodiac.zodiac_sign == "CANCER" &&
                                                <Icon name="zodiac-cancer" size={35} color="#000" />
                                            }
                                            {zodiac.zodiac_sign == "ARIES" &&
                                                <Icon name="zodiac-aries" size={35} color="#000" />
                                            }
                                            {zodiac.zodiac_sign == "TAURUS" &&
                                                <Icon name="zodiac-taurus" size={35} color="#000" />
                                            }
                                            {zodiac.zodiac_sign == "GEMINI" &&
                                                <Icon name="zodiac-gemini" size={35} color="#000" />
                                            }
                                            {zodiac.zodiac_sign == "LEO" &&
                                                <Icon name="zodiac-leo" size={35} color="#000" />
                                            }
                                            {zodiac.zodiac_sign == "VIRGO" &&
                                                <Icon name="zodiac-virgo" size={35} color="#000" />
                                            }
                                            {zodiac.zodiac_sign == "LIBRA" &&
                                                <Icon name="zodiac-libra" size={35} color="#000" />
                                            }
                                            {zodiac.zodiac_sign == "SCORPIO" &&
                                                <Icon name="zodiac-scorpio" size={35} color="#000" />
                                            }
                                            {zodiac.zodiac_sign == "SAGITTARIUS" &&
                                                <Icon name="zodiac-sagittarius" size={35} color="#000" />
                                            }
                                            {zodiac.zodiac_sign == "CAPRICORN" &&
                                                <Icon name="zodiac-capricorn" size={35} color="#000" />
                                            }
                                            {zodiac.zodiac_sign == "AQUARIUS" &&
                                                <Icon name="zodiac-aquarius" size={35} color="#000" />
                                            }
                                            {zodiac.zodiac_sign == "PISCES" &&
                                                <Icon name="zodiac-pisces" size={35} color="#000" />
                                            }
                                        </View>
                                    </View>
                                }
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#ffffffa1', borderRadius: 30, borderBottomWidth: 3, borderLeftColor: '#DA0AE4', borderRightColor: '#DA0AE4', borderBottomColor: '#DA0AE4', borderLeftWidth: 0.1, borderRightWidth: 0.1 }}>
                            <View style={{ borderRadius: 10, backgroundColor: '#73207C', marginLeft: 25, marginTop: -10, paddingBottom: 2, paddingTop: 2, paddingLeft: 15, paddingRight: 15, alignSelf: 'flex-start' }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Partner Name</Text>
                            </View>
                            <View style={{ marginLeft: 25, marginTop: 20, marginBottom: 5, borderBottomWidth: 0.2, marginRight: 25 }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular' }}>Name</Text>
                                <TextInput style={{ borderBottomWidth: 1, color: '#DA0AE4', fontSize: 16, borderBottomColor: '#EBEBEB', fontFamily: 'AvertaStd-Regular' }}
                                    placeholder='Enter Your Name' placeholderTextColor='#828282'
                                    autoCapitalize='sentences'
                                    onChangeText={name => setname(name)}
                                    value={name} />
                            </View>
                            <View style={{ marginLeft: 25, marginTop: 10, marginBottom: 5, borderBottomWidth: 0.2, marginRight: 25 }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'AvertaStd-Regular' }}>Date of Birth</Text>
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
                                    <View style={{ flex: 0.45, backgroundColor: '#fff', borderRadius: 20, zIndex: 11111, borderBottomColor: '#DA0AE4', borderBottomWidth: 3, marginTop: -50, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: '#DA0AE4' }}>
                                        <Text style={{ color: '#3B2F5C', fontSize: 20, fontFamily: 'AvertaStd-Regular', paddingTop: 20, textAlign: 'center' }}>Date of Birth</Text>
                                        <View style={{ paddingTop: 25 }}>
                                            <DatePicker date={date} onDateChange={setDate} androidVariant='iosClone' mode='date' textColor='#DA0AE4' />
                                        </View>
                                        <TouchableOpacity onPress={() => { hodedate() }} style={{ backgroundColor: '#65096F', borderRadius: 8, alignItems: 'center', alignSelf: 'center', marginTop: '15%', paddingBottom: 5, paddingTop: 5, paddingLeft: '20%', paddingRight: '20%' }}>
                                            <Text style={{ fontSize: 20, fontFamily: 'AvertaStd-Semibold', color: '#fff', alignSelf: 'center', padding: 2 }}>Confirm</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Modal>
                            </View>
                            <View style={{ marginLeft: 25, marginTop: 10, borderBottomWidth: 0.2, marginRight: 25 }}>
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
                                                <Picker.Item label="Select" value="Select" style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                                <Picker.Item label="Male" value="Male" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                                <Picker.Item label="Female" value="Female" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                                <Picker.Item label="Other" value="Other" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                            </Picker>
                                        </View>
                                        <View style={{ alignSelf: 'center', marginLeft: -30 }}>
                                            <Entypo name="chevron-small-down" size={27} color="#65096F" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    // test3(!iscon)
                                    nav()
                                }}
                                    style={{ backgroundColor: '#65096F', alignSelf: 'center', borderRadius: 8, margin: 10, paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }}>
                                    <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>GET COMPATIBILITY</Text>
                                </TouchableOpacity>
                                <Modal
                                    animationType="none"
                                    hardwareAccelerated={true}
                                    statusBarTranslucent={true}
                                    transparent={true}
                                    useNativeDriver={true}
                                    onBackdropPress={() => test4()}
                                    onRequestClose={() => test4()}
                                    visible={iscon}
                                    style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.9, width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 10, margin: 10, zIndex: 111111 }}>
                                        <View>
                                            <Text style={{ color: '#3B2F5C', fontSize: 29, fontFamily: 'AvertaStd-Black', textAlign: 'center' }}>Share the Reading with</Text>
                                            <Text style={{ color: '#FE4E82', fontSize: 24, textAlign: 'center', fontFamily: 'AvertaStd-Regular' }}>"{(name).toUpperCase()}"</Text>
                                        </View>
                                        <View style={{ marginLeft: 25, marginTop: 10, marginBottom: 5, borderBottomWidth: 0.2, marginRight: 25, }}>
                                            <Text style={{ color: '#000', fontSize: 20, fontFamily: 'AvertaStd-Regular' }}>Email {name} email address</Text>
                                            <TextInput style={{ borderBottomWidth: 1, color: '#DA0AE4', fontSize: 16, borderBottomColor: '#EBEBEB', marginLeft: -5, fontFamily: 'AvertaStd-Regular' }}
                                                placeholder='Enter Your Email' placeholderTextColor='#828282'
                                                onChangeText={mail => setmail(mail)}
                                                value={mail} />
                                        </View>
                                        <View style={{ margin: 20 }}>
                                            <TouchableOpacity onPress={() => { EmaiShare() }}
                                                style={{ backgroundColor: '#65096F', borderRadius: 8, padding: 10, alignSelf: "center" }}>
                                                <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, textAlign: 'center' }}>GENERATE AND SEND READING</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <TouchableOpacity onPress={() => { nav() }}
                                                style={{ borderBottomColor: '#65096F', borderBottomWidth: 1, alignSelf: 'center' }}>
                                                <Text style={{ color: '#65096F', fontSize: 16, textAlign: 'center', fontFamily: 'AvertaStd-Regular' }}>Do Not Share</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </Modal>
                            </View>
                        </View>
                        <View style={{ margin: 25, marginTop: '20%' }}>
                            <TouchableOpacity onPress={() => { test12(!issug) }}
                                style={{ backgroundColor: '#65096F', alignSelf: 'center', borderRadius: 8, paddingLeft: 15, paddingRight: 15, paddingBottom: 10, paddingTop: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'AvertaStd-Semibold' }}>SUGGESTED COMPATIBILITY</Text>
                            </TouchableOpacity>
                        </View>
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
                        <TouchableOpacity onPress={() => { test10(!show) }}
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

                <Modal visible={issug}
                    onBackdropPress={() => test13()}
                    style={{ backgroundColor: '#DEDEDE', height: '105%', width: '105%', flex: 1, marginLeft: -10, position: 'absolute', marginTop: -10, opacity: .9 }}
                    onRequestClose={() => test13()}>
                    <View style={{ margin: 25, flex: 1, display: 'flex', zIndex: 1111 }}>
                        <View style={{ flex: 0.9, backgroundColor: '#fff', borderRadius: 12, shadowColor: '#3B2F5C', shadowOpacity: 0.2, elevation: 10, shadowRadius: 12 }}>
                            <View style={{ margin: 25, alignSelf: 'center', flex: 1 }}>
                                <Text style={{ color: '#3B2F5C', fontSize: 24, fontFamily: 'AvertaStd-Semibold' }}>SUGGESTED COMPATIBILITY</Text>
                                <KeyboardAwareScrollView>
                                    <Text style={{ color: '#000', fontSize: 16, paddingTop: 10 }}>
                                        {compatiblepartner.description}
                                    </Text>
                                </KeyboardAwareScrollView>
                            </View>
                            <View style={{ alignSelf: 'flex-end' }}>
                                <TouchableOpacity onPress={() => test13()}
                                    style={{ borderColor: '#65096F', borderWidth: 3, borderRadius: 8, margin: 10, paddingBottom: 10, paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Semibold', color: '#65096F', textAlign: 'center', }}>I UNDERSTAND</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginTop: -45, }}>
                            <Image source={require('./assets/lloyd-strayhorn.png')} style={{ height: 80, width: 80, borderWidth: 3, borderColor: '#65096F', borderRadius: 60 }} />
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="none"
                    hardwareAccelerated={true}
                    statusBarTranslucent={true}
                    transparent={true}
                    duration={50}
                    useNativeDriver={true}
                    onBackdropPress={() => test11()}
                    onRequestClose={() => test11()}
                    visible={show}
                    style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.9, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                    <View style={{ zIndex: 9999, alignItems: 'center', alignContent: 'center', flex: 1 }}>
                        <View style={{ flex: 0.82 }}></View>
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
                            <TouchableOpacity onPress={() => { test6() }} style={{ paddingLeft: 30 }} >
                                <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                                    <Animated.View
                                        style={{
                                            transform: [{ translateX: translation1.x },
                                            { translateY: translation1.y },]         // Bind opacity to animated value
                                        }}>
                                        <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, alignItems: 'center', paddingTop: 18, backgroundColor: '#fff' }}>
                                            <Image source={require('./assets/Vector(1).png')} style={{ width: 40.73, height: 33.12 }} />
                                        </View>
                                        <Text style={{ fontFamily: 'AvertaStd-Regular', textAlign: 'center', color: '#65096F' }}>  Car / Vehicle  </Text>
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
                        <View style={{ alignSelf: 'center', marginTop: 20, marginLeft: -8 }}>
                            <TouchableOpacity onPress={() => { test11() }} style={{ alignItems: 'center' }}>
                                <View style={{ width: 55, height: 55, backgroundColor: "#73207C", transform: [{ rotate: "45deg" }], borderRadius: 7, position: 'absolute', alignItems: 'center' }}>
                                </View>
                                <View style={{ paddingTop: 5 }}>
                                    <Entypo name='cross' size={40} color="#fff" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Compatibility5