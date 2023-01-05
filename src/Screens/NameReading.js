import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, Animated, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "react-native-modal";
import Entypo from 'react-native-vector-icons/Entypo'
import LottieView from 'lottie-react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { openDatabase } from 'react-native-sqlite-storage';
import { Other, OneToOne, Names } from '../ReduxFloder/action';
import Moment from 'moment';


var db = openDatabase({ name: 'AStar8.db' });


const NameReading = ({ navigation }) => {

    const OneToOne = useSelector(state => state.OneToOne)
    const Data = useSelector(state => state.Data)
    console.error(Data.userdetail.userid);
    const list = useSelector(state => state.list)
    console.log(list);

    const [iscon, con] = useState(false)
    const [show, hide] = useState(false)
    const [names, setnames] = useState([])

    const step3 = () => {
        navigation.navigate('OnboardingStep3')
    }

    const step1 = () => {
        navigation.navigate('CompatibilityCheck')
    }

    useEffect(() => {
        tryOut()

        const unsubscribe = navigation.addListener('focus', () => {
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
                        // temp.push(results.rows.item(i));
                        // setfavcal(temp);
                    }
                );
            });
            tryOut()
        });
        return unsubscribe;

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

    const test3 = (iscon) => {
        con(iscon)
        trySome()
    }
    const test4 = () => {
        con(false)
        tryOut()
    }

    const showPopup = (show) => {
        hide(show)
    }
    const hidePopup = () => {
        hide(false)
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
                    // Animated.spring(translation5.x, {
                    //     toValue: 7,
                    //     useNativeDriver: true,
                    // }),
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
        let bodyFormData = { 'userid': Data.userdetail.userid, }
        console.error(bodyFormData);
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
                console.error(error)
            })
        // navigation.navigate('Compatibility4')
        con(false)
    }

    const test9 = () => {
        navigation.navigate('Compatibility5')
        con(false)
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
            <ImageBackground source={require('./assets/Astar8.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom: 10 }}>
                    <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', }}>
                        <TouchableOpacity onPress={() => { step1() }}
                            style={{ paddingTop: 7, paddingRight: 2 }}>
                            <Icon name="left" size={15} color="#007AFF" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontFamily: 'AvertaStd-Regular', color: '#3B2F5C', fontSize: 13 }}>Astronumerology Reading of</Text>
                            <View style={{ backgroundColor: '#65096F', borderRadius: 12, alignSelf: 'flex-end', paddingLeft: 10, paddingRight: 10, marginLeft: '10%', flexDirection: 'row' }}>
                                <Text style={{ color: '#fff', fontSize: 10 }}>DOB : </Text>
                                <Text style={{ fontFamily: 'AvertaStd-Regular', color: '#fff', fontSize: 10 }}>{Moment(OneToOne.otheruser_detail.otherpersondob).format('Do MMM, YYYY')}</Text>
                            </View>
                        </View>
                        <Text style={{ fontFamily: 'AvertaStd-Black', fontSize: 38, color: '#3B2F5C', fontWeight: '900' }}>{OneToOne.otheruser_detail.otherpersonname}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: 0.2, elevation: 5 }}>
                    <View style={{ backgroundColor: '#fff', justifyContent: 'space-around', flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
                        <View style={{ alignItems: 'center', alignSelf: 'center', marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 10 }}>
                            {OneToOne.otheruser_detail.planet_detail.planet_name == 'Saturn' &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Image source={require('./assets/Saturn-unscreen.gif')} style={{ height: 55, width: 55, }} />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>SATURN</Text>
                                </View>}
                            {OneToOne.otheruser_detail.planet_detail.planet_name == 'Moon' &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Image source={require('./assets/Moon.gif')} style={{ height: 55, width: 55, }} />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>MOON</Text>
                                </View>}
                            {OneToOne.otheruser_detail.planet_detail.planet_name == 'Jupiter' &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Image source={require('./assets/space-nasa-GIF-unscreen.gif')} style={{ height: 55, width: 55, }} />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>JUPITER</Text>
                                </View>}
                            {OneToOne.otheruser_detail.planet_detail.planet_name == 'Uranus' &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Image source={require('./assets/Uranus-unscreen.gif')} style={{ height: 55, width: 55, }} />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>URANUS</Text>
                                </View>}
                            {OneToOne.otheruser_detail.planet_detail.planet_name == 'Mercury' &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Image source={require('./assets/Mercury-unscreen.gif')} style={{ height: 55, width: 55, }} />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>MERCURY</Text>
                                </View>}
                            {OneToOne.otheruser_detail.planet_detail.planet_name == 'Neptune' &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Image source={require('./assets/Neptune-unscreen.gif')} style={{ height: 55, width: 55, }} />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>NEPTUNE</Text>
                                </View>}
                            {OneToOne.otheruser_detail.planet_detail.planet_name == 'Mars' &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Image source={require('./assets/mars-GIF-unscreen.gif')} style={{ height: 55, width: 55, }} />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>MARS</Text>
                                </View>}
                            {OneToOne.otheruser_detail.planet_detail.planet_name == 'Earth' &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Image source={require('./assets/Earth--unscreen.gif')} style={{ height: 55, width: 55, }} />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>EARTH</Text>
                                </View>}
                            {OneToOne.otheruser_detail.planet_detail.planet_name == 'Venus' &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Image source={require('./assets/venus-unscreen.gif')} style={{ height: 55, width: 55, }} />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>VENUS</Text>
                                </View>}
                            {OneToOne.otheruser_detail.planet_detail.planet_name == 'Sun' &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Image source={require('./assets/sun-unscreen.gif')} style={{ height: 55, width: 55, }} />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>SUN</Text>
                                </View>}
                        </View>
                        <View style={{ alignItems: 'center', alignSelf: 'center', marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 10 }}>
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "CANCER" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-cancer" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>CANCER</Text>
                                </View>}
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "ARIES" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-aries" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>ARIES</Text>
                                </View>}
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "TAURUS" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-taurus" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>TAURUS</Text>
                                </View>}
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "GEMINI" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-gemini" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>GEMINI</Text>
                                </View>}
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "LEO" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-leo" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>LEO</Text>
                                </View>}
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "VIRGO" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-virgo" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>VIRGO</Text>
                                </View>}
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "LIBRA" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-libra" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>LIBRA</Text>
                                </View>}
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "SCORPIO" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-scorpio" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>SCORPIO</Text>
                                </View>}
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "SAGITTARIUS" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-sagittarius" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>SAGITTARIUS</Text>
                                </View>}
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "CAPRICORN" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-capricorn" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>CAPRICORN</Text>
                                </View>}
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "AQUARIUS" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-aquarius" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>AQUARIUS</Text>
                                </View>}
                            {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "PISCES" &&
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3' }}>
                                        <Icons name="zodiac-pisces" size={50} color="#65096F" />
                                    </View>
                                    <Text style={{ fontSize: 16, color: '#444444', fontFamily: 'AvertaStd-Semibold' }}>PISCES</Text>
                                </View>}
                        </View>
                        <View style={{ alignItems: 'center', alignSelf: 'center', marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 10 }}>
                            <FlatList
                                data={OneToOne.otheruser_detail.Module_types}
                                keyExtractor={(item) => item.key}
                                renderItem={({ item, index }) =>
                                    <View style={{ alignItems: 'center' }}>
                                        {item.module_type == 4 &&
                                            <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 70, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3', }}>
                                                {item.description.split(' ')[0] == 'Fire' &&
                                                    <LottieView source={require('./assets/fireflame.json')} autoPlay loop style={{ width: 100, height: 67 }} />
                                                }
                                                {item.description.split(' ')[0] == 'Water' &&
                                                    <LottieView source={require('./assets/liquid-water-drop.json')} autoPlay loop style={{ width: 100, height: 50 }} />
                                                }
                                                {item.description.split(' ')[0] == 'Air' &&
                                                    <LottieView source={require('./assets/astar-Air-travel.json')} autoPlay loop style={{ width: 100, height: 70 }} />
                                                }
                                                {item.description.split(' ')[0] == 'Earth' &&
                                                    <LottieView source={require('./assets/earth-globe-looped-icon.json')} autoPlay loop style={{ width: 100, height: 70 }} />
                                                }
                                            </View>}
                                        {item.module_type == 4 &&
                                            <Text style={{ color: '#444444', textAlign: 'center', fontSize: 16, fontFamily: 'AvertaStd-Semibold' }}>{(item.description.split(' ')[0]).toUpperCase()}</Text>}
                                    </View>}
                            />
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', justifyContent: 'space-around', flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#444444', marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                        <View style={{ alignItems: 'center', alignSelf: 'center', marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 10 }}>
                            <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 75, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3', }}>
                                {/* <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#65096F', fontSize: 65, }}>{OneToOne.otheruser_detail.primary_detail.number}</Text> */}
                                <FlatList
                                    data={OneToOne.otheruser_detail.Module_types}
                                    keyExtractor={(item) => item.key}
                                    renderItem={({ item, index }) =>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            {item.module_type == 2 &&
                                                <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#65096F', fontSize: 65, marginTop:-5 }}>{item.number}</Text>}
                                        </View>}
                                />
                            </View>
                            <Text style={{ color: '#444444', textAlign: 'center', fontSize: 16, fontFamily: 'AvertaStd-Semibold' }}>BIRTH NO.</Text>
                        </View>
                        <View style={{ alignItems: 'center', alignSelf: 'center', marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 10 }}>
                            <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 75, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3', }}>
                                <FlatList
                                    data={OneToOne.otheruser_detail.Module_types}
                                    keyExtractor={(item) => item.key}
                                    renderItem={({ item, index }) =>
                                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            {item.module_type == 16 &&
                                                <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#65096F', fontSize: 65, marginTop:-5 }}>{item.number}</Text>}
                                        </View>}
                                />
                            </View>
                            <Text style={{ color: '#444444', textAlign: 'center', fontSize: 16, fontFamily: 'AvertaStd-Semibold' }}>DESTINY NO.</Text>
                        </View>
                        <View style={{ alignItems: 'center', alignSelf: 'center', marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 10 }}>
                            <View style={{ backgroundColor: '#fff', borderRadius: 7, width: 100, height: 75, justifyContent: 'center', borderWidth: 0.5, alignItems: 'center', alignSelf: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, borderColor: '#D3D3D3', }}>
                                {/* <FlatList
                                    data={Other.Module_types}
                                    keyExtractor={(item) => item.key}
                                    renderItem={({ item, index }) => */}
                                <View style={{ alignItems: 'center' }}>
                                    {/* {item.module_type == 2 && */}
                                    <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#65096F', fontSize: 65, marginTop:-5 }}>{OneToOne.otheruser_detail.name_reading.Chald_number}</Text>
                                    {/* } */}
                                </View>
                                {/* }
                                /> */}
                            </View>
                            <Text style={{ color: '#444444', textAlign: 'center', fontSize: 16, fontFamily: 'AvertaStd-Semibold' }}>NAME NO.</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ backgroundColor: '#fff', }}>
                        <View style={{ marginLeft: 15, marginRight: 15, marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ fontFamily: 'AvertaStd-Semibold', fontSize: 18, color: '#2C294A' }}>General Reading</Text>
                            <FlatList
                                data={OneToOne.otheruser_detail.Module_types}
                                keyExtractor={(item) => item.key}
                                renderItem={({ item, index }) =>
                                    <View>
                                        {item.module_type == 2 &&
                                            <Text style={{ color: '#444444', fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>{item.description}</Text>}
                                    </View>}
                            />
                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <View style={{ backgroundColor: '#fff', borderRadius: 12, paddingTop: 10, paddingLeft: 15, paddingRight: 15, paddingBottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ backgroundColor: '#81D0D4', width: 36, height: 36, borderRadius: 1000, justifyContent: 'center' }}>
                                    <LottieView source={require('./assets/4887-book.json')} autoPlay loop style={{ width: 100, height: 70, alignSelf: 'center' }} />
                                </View>
                                <Text style={{ fontFamily: 'AvertaStd-Semibold', fontSize: 18, color: '#2C294A', paddingLeft: 10 }}>Name Reading</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <Text style={{ fontFamily: 'AvertaStd-Black', color: '#000', lineHeight: 20 }}>{OneToOne.otheruser_detail.name_reading.Chald_positive_title} :<Text style={{ fontFamily: 'AvertaStd-Regular', color: '#6B6B6B', lineHeight: 20, maxWidth: '85%' }}>{OneToOne.otheruser_detail.name_reading.Chald_positive_desc}</Text></Text>

                            </View>
                            <View style={{ flexDirection: 'row', paddingBottom: 10, paddingTop: 10 }}>
                                <Text style={{ fontFamily: 'AvertaStd-Black', color: '#000', lineHeight: 20 }}>{OneToOne.otheruser_detail.name_reading.Chald_negative_title} :<Text style={{ fontFamily: 'AvertaStd-Regular', color: '#6B6B6B', lineHeight: 20, maxWidth: '85%' }}>{OneToOne.otheruser_detail.name_reading.Chald_negative_desc}</Text></Text>

                            </View>
                            {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{ margin: 5 }}>
                                    <Image source={require('./assets/Fill-hrt.png')} style={{ width: 18, height: 18 }} />
                                </View>
                                <View style={{ margin: 5 }}>
                                    <Image source={require('./assets/Send-das.png')} style={{ width: 18, height: 18 }} />
                                </View>
                                <View style={{ margin: 5 }}>
                                    <Image source={require('./assets/saveinsta.png')} style={{ width: 18, height: 18 }} />
                                </View>
                            </View> */}
                        </View>
                        <View style={{ backgroundColor: '#fff', borderRadius: 12, paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -10 }}>
                                {/* <View style={{ backgroundColor: '#F9ABD1', width: 36, height: 36, borderRadius: 1000, justifyContent: 'center' }}>
                                    <View style={{ backgroundColor: '#F03891', width: 26, height: 26, borderRadius: 1000, alignSelf: 'center', alignItems: 'center' }}>
                                    </View>
                                </View> */}
                                <LottieView source={require('./assets/6370-keys.json')} autoPlay loop style={{ width: 50, height: 50, }} />
                                <Text style={{ fontFamily: 'AvertaStd-Semibold', fontSize: 18, color: '#2C294A', paddingLeft: 5, paddingTop: 5 }}>Key Numbers</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ borderRightWidth: 1, borderRightColor: '#D1D1D1', marginBottom: 10 }}>
                                    <View style={{ paddingLeft: 10, paddingTop: 10, marginRight: '10%' }}>
                                        <Text style={{ fontSize: 15, fontFamily: 'AvertaStd-Semibold', color: '#2C294A' }}>Favorable Number</Text>
                                    </View>
                                    <View style={{ paddingLeft: 10, paddingTop: 20, marginRight: '10%' }}>
                                        <Text style={{ fontSize: 15, fontFamily: 'AvertaStd-Semibold', color: '#2C294A' }}>Unfavorable Number</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{ paddingLeft: 10, paddingBottom: 5 }}>
                                        <View style={{ paddingTop: 5, paddingRight: 15, flexDirection: 'row', justifyContent: 'space-around' }}>

                                            {OneToOne.otheruser_detail.favunfav_parameters.favparameter.numbers[0] &&
                                                <View style={{ paddingRight: 5, display: 'flex', }}>
                                                    <Image source={require('./assets/fav-blue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                    <View style={{ marginTop: -30, marginLeft: 10, paddingTop: 2, paddingLeft: 1 }}>
                                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>{OneToOne.otheruser_detail.favunfav_parameters.favparameter.numbers[0]}</Text>
                                                    </View>
                                                </View>}

                                            {OneToOne.otheruser_detail.favunfav_parameters.favparameter.numbers[2] &&
                                                <View style={{ paddingRight: 5, display: 'flex' }}>
                                                    <Image source={require('./assets/fav-red.png')} style={{ width: 34.41, height: 31.51 }} />
                                                    <View style={{ marginTop: -30, marginLeft: 10, paddingTop: 2, paddingLeft: 1 }}>
                                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>{OneToOne.otheruser_detail.favunfav_parameters.favparameter.numbers[2]}</Text>
                                                    </View>
                                                </View>}

                                            {OneToOne.otheruser_detail.favunfav_parameters.favparameter.numbers[4] &&
                                                <View style={{ paddingRight: 5 }}>
                                                    <Image source={require('./assets/fav-darkBlue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                    <View style={{ marginTop: -30, marginLeft: 10, paddingTop: 2, paddingLeft: 1 }}>
                                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>{OneToOne.otheruser_detail.favunfav_parameters.favparameter.numbers[4]}</Text>
                                                    </View>
                                                </View>}

                                            {OneToOne.otheruser_detail.favunfav_parameters.favparameter.numbers[6] &&
                                                <View style={{ paddingRight: 5, display: 'flex' }}>
                                                    <Image source={require('./assets/fav-Sky-Blue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                    <View style={{ marginTop: -30, marginLeft: 10, paddingTop: 2, paddingLeft: 1 }}>
                                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>{OneToOne.otheruser_detail.favunfav_parameters.favparameter.numbers[6]}</Text>
                                                    </View>
                                                </View>}
                                        </View>
                                    </View>
                                    <View style={{ marginBottom: 30, paddingLeft: 10 }}>
                                        <View style={{ paddingTop: 5, paddingRight: 15, flexDirection: 'row', justifyContent: 'space-around' }}>

                                            {OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.numbers[0] &&
                                                <View style={{ paddingRight: 5, display: 'flex', }}>
                                                    <Image source={require('./assets/Unfav-blue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                    <View style={{ marginTop: -30, marginLeft: 10, paddingTop: 2, paddingLeft: 1 }}>
                                                        <Text style={{ fontSize: 20, color: '#066AFF', fontFamily: 'AvertaStd-Semibold' }}>{OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.numbers[0]}</Text>
                                                    </View>
                                                </View>}

                                            {OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.numbers[2] &&
                                                <View style={{ paddingRight: 5, display: 'flex' }}>
                                                    <Image source={require('./assets/unfav-red.png')} style={{ width: 34.41, height: 31.51 }} />
                                                    <View style={{ marginTop: -30, marginLeft: 10 }}>
                                                        <Text style={{ fontSize: 20, color: '#FF173A', fontFamily: 'AvertaStd-Semibold' }}>{OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.numbers[2]}</Text>
                                                    </View>
                                                </View>}

                                            {OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.numbers[4] &&
                                                <View style={{ paddingRight: 5 }}>
                                                    <Image source={require('./assets/unfav-darkBlue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                    <View style={{ marginTop: -30, marginLeft: 10, paddingTop: 2, paddingLeft: 1 }}>
                                                        <Text style={{ fontSize: 20, color: '#022457', fontFamily: 'AvertaStd-Semibold' }}>{OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.numbers[4]}</Text>
                                                    </View>
                                                </View>}

                                            {OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.numbers[6] &&
                                                <View style={{ paddingRight: 5, display: 'flex' }}>
                                                    <Image source={require('./assets/unfav-Sky-Blue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                    <View style={{ marginTop: -30, marginLeft: 10, paddingTop: 2, paddingLeft: 1 }}>
                                                        <Text style={{ fontSize: 20, color: '#009E99', fontFamily: 'AvertaStd-Semibold' }}>{OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.numbers[6]}</Text>
                                                    </View>
                                                </View>}
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'AvertaStd-Regular', color: '#6B6B6B', fontSize: 12, lineHeight: 20, paddingLeft: 10, paddingRight: 10 }}>{OneToOne.otheruser_detail.primary_detail.description}</Text>
                            {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{ margin: 5 }}>
                                    <Image source={require('./assets/Fill-hrt.png')} style={{ width: 18, height: 18 }} />
                                </View>
                                <View style={{ margin: 5 }}>
                                    <Image source={require('./assets/Send-das.png')} style={{ width: 18, height: 18 }} />
                                </View>
                                <View style={{ margin: 5 }}>
                                    <Image source={require('./assets/saveinsta.png')} style={{ width: 18, height: 18 }} />
                                </View>
                            </View> */}
                        </View>
                        <View style={{ backgroundColor: '#fff', borderRadius: 12, paddingTop: 10, paddingLeft: 15, paddingRight: 15, paddingBottom: 10, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {/* <View style={{ backgroundColor: '#FFC29D', width: 36, height: 36, borderRadius: 1000, justifyContent: 'center' }}>
                                    <View style={{ backgroundColor: '#fff', width: 26, height: 26, borderRadius: 1000, alignSelf: 'center', alignItems: 'center' }}>
                                        <LottieView source={require('./assets/24490-dollar-coin-shining.json')} autoPlay loop style={{ width: 35, height: 28, }} />
                                    </View>
                                </View> */}
                                <LottieView source={require('./assets/44076-dollar.json')} autoPlay loop style={{ width: 35, height: 35, }} />
                                <Text style={{ fontFamily: 'AvertaStd-Semibold', fontSize: 18, color: '#2C294A', paddingLeft: 10 }}>Money Matters</Text>
                            </View>
                            <FlatList
                                data={OneToOne.otheruser_detail.Module_types}
                                keyExtractor={(item) => item.key}
                                renderItem={({ item, index }) =>
                                    <View style={{  }}>
                                        {item.module_type == 14 &&
                                            <Text style={{ fontFamily: 'AvertaStd-Regular', color: '#6B6B6B', lineHeight: 20 }}>{item.description}</Text>}
                                        {item.module_type == 15 &&
                                            <Text style={{ fontFamily: 'AvertaStd-Regular', color: '#6B6B6B', lineHeight: 20, paddingTop: 5,textAlign:'left' }}>{item.description}</Text>}
                                    </View>}
                            />
                            {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{ margin: 5 }}>
                                    <Image source={require('./assets/Fill-hrt.png')} style={{ width: 18, height: 18 }} />
                                </View>
                                <View style={{ margin: 5 }}>
                                    <Image source={require('./assets/Send-das.png')} style={{ width: 18, height: 18 }} />
                                </View>
                                <View style={{ margin: 5 }}>
                                    <Image source={require('./assets/saveinsta.png')} style={{ width: 18, height: 18 }} />
                                </View>
                            </View> */}
                        </View>
                        <View style={{ backgroundColor: '#fff', borderRadius: 12, paddingTop: 10, paddingLeft: 15, paddingRight: 15, paddingBottom: 10, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ backgroundColor: '#62EBBA', width: 36, height: 36, borderRadius: 1000, justifyContent: 'center' }}>
                                    <View style={{ backgroundColor: '#06AA6F', width: 26, height: 26, borderRadius: 1000, alignSelf: 'center', alignItems: 'center' }}>
                                        <LottieView source={require('./assets/heart2.json')} autoPlay loop style={{ width: 30, height: 18, marginTop: 2 }} />
                                    </View>
                                </View>
                                <Text style={{ fontFamily: 'AvertaStd-Semibold', fontSize: 18, color: '#2C294A', paddingLeft: 10 }}>Health</Text>
                            </View>
                            <FlatList
                                data={OneToOne.otheruser_detail.Module_types}
                                keyExtractor={(item) => item.key}
                                renderItem={({ item, index }) =>
                                    <View style={{ alignItems: 'center' }}>
                                        {item.module_type == 5 &&
                                            <Text style={{ fontFamily: 'AvertaStd-Regular', color: '#6B6B6B', fontSize: 12, lineHeight: 20 }}>{item.description}</Text>}
                                    </View>}
                            />
                            {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{ margin: 5 }}>
                                    <Image source={require('./assets/Fill-hrt.png')} style={{ width: 18, height: 18 }} />
                                </View>
                                <View style={{ margin: 5 }}>
                                    <Image source={require('./assets/Send-das.png')} style={{ width: 18, height: 18 }} />
                                </View>
                                <View style={{ margin: 5, }}>
                                    <Image source={require('./assets/saveinsta.png')} style={{ width: 18, height: 18 }} />
                                </View>
                            </View> */}
                        </View>
                    </View>
                </ScrollView>
                <View style={{ paddingLeft: 15, paddingRight: 15, position: 'relative', paddingBottom: 10 }}>
                    <View style={{ height: 60, borderColor: '#73207C', borderWidth: 1, borderRadius: 15, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => { SelectTab() }} style={{ justifyContent: 'center' }}>
                            <Image source={require('./assets/home-icon.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { test() }}
                            style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: -15, alignItems: 'center' }}>
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
                            style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
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
                        <View style={{ alignSelf: 'center', marginTop: 20, marginLeft: -8 }}>
                            <TouchableOpacity onPress={() => { test4() }} style={{ alignItems: 'center' }}>
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

export default NameReading