import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, Animated } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Speedometers, { Background, Arc, Needle, Progress, Marks, Indicator, } from 'react-native-cool-speedometer';
import SimpleGradientProgressbarView from "react-native-simple-gradient-progressbar-view";
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import { openDatabase } from 'react-native-sqlite-storage';
import axios from 'axios';
import { Other, OneToOne, Names } from '../ReduxFloder/action';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


var db = openDatabase({ name: 'AStar8.db' });

const HouseCompatibilityCheck = ({ navigation }) => {

    const dispatch = useDispatch();
    const House = useSelector(state => state.House)
    console.log("check api ", House);
    const Data = useSelector(state => state.Data)
    console.error(Data.userdetail.userid);
    const [per, setper] = useState('')
    const [iscon, con] = useState(false)
    const [zodiac, setzodiac] = useState([])
    const [names, setnames] = useState([])

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


        const per = House.compatibilitydetail.final_compatibility_percentage
        setper(per)
        console.warn(per);
        tryOut()

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
        con(false)
        navigation.navigate('Compatibility1')
    }

    const test6 = () => {
        con(false)
        navigation.navigate('Compatibility2')
    }

    const test7 = () => {
        con(false)
        navigation.navigate('Compatibility3')
    }

    const test9 = () => {
        con(false)
        navigation.navigate('Compatibility5')
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
            <ImageBackground source={require('./assets/DashboardBackgroundImage.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: -5 }}>
                        <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', marginLeft: 20, marginTop: 23 }}>
                            <TouchableOpacity onPress={() => { test5() }}
                                style={{ paddingTop: 7, paddingRight: 2, alignSelf: 'center' }}>
                                <Icons name="left" size={15} color="#007AFF" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                            <Text style={{ color: '#3B2F5C', fontSize: 24, fontFamily: 'AvertaStd-Semibold' }}>Compatibility</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginRight: 20, marginTop: 5, alignSelf: 'center' }}>
                            {names.profile_pic !== "" &&
                                <Image source={names.profile_pic !== "" ? { uri: names.profile_pic } : require('./assets/user-details-profile.png')} style={{ height: 60, width: 60, borderColor: '#fff', borderWidth: 2, borderRadius: 60 }} />}
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
                    <View style={{ height: 52, backgroundColor: '#FFFFFFed', borderRadius: 12, marginTop: 10, marginLeft: 10, marginRight: 10 }}>
                        <View style={{ backgroundColor: '#65096F', borderRadius: 12, marginTop: -10, marginLeft: 10, paddingTop: 2, paddingBottom: 2, paddingLeft: 10, paddingRight: 10, alignSelf: 'flex-start' }}>
                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>HOUSE ADDRESS</Text>
                        </View>
                        <Text style={{ color: '#3B2F5C', fontSize: 22, fontFamily: 'AvertaStd-Semibold', paddingLeft: 15, paddingTop: 5 }}>{House.compatibilitydetail.property_number} </Text>
                    </View>
                    <KeyboardAwareScrollView>
                        <View style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: '#FFFFFFa1', marginLeft: 15, marginRight: 15, marginTop: 20, flex: 1 }}>
                            {House.compatibilitydetail.final_compatibility_percentage >= 71 &&
                                <View style={{ paddingBottom: 2, paddingTop: 2, paddingLeft: 15, paddingRight: 15, backgroundColor: '#6CC335', alignSelf: 'center', marginTop: -10, borderRadius: 12 }}>
                                    <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'center' }}>EXCELLENT</Text>
                                </View>}
                            {House.compatibilitydetail.final_compatibility_percentage <= 30 &&
                                <View style={{ paddingBottom: 2, paddingTop: 2, paddingLeft: 15, paddingRight: 15, backgroundColor: '#EF3C25', alignSelf: 'center', marginTop: -10, borderRadius: 12 }}>
                                    <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'center' }}>BAD</Text>
                                </View>
                            }
                            {House.compatibilitydetail.final_compatibility_percentage >= 31 &&
                                <View>
                                    {House.compatibilitydetail.final_compatibility_percentage <= 70 &&
                                        <View style={{ paddingBottom: 2, paddingTop: 2, paddingLeft: 15, paddingRight: 15, backgroundColor: '#FDA73C', alignSelf: 'center', marginTop: -10, borderRadius: 12 }}>
                                            <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'center' }}>Good</Text>
                                        </View>}
                                </View>}
                            {House.compatibilitydetail.final_compatibility_percentage >= 71 &&
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFF5', marginLeft: 10, marginRight: 10 }}>
                                    <View style={{ alignSelf: 'center', paddingTop: 10, position: 'relative', }}>
                                        <Speedometers
                                            value={House.compatibilitydetail.final_compatibility_percentage}
                                            max={100}
                                            angle={180}
                                            duration={4000}
                                            fontFamily='squada-one'
                                        >
                                            <Background angle={180} color='#fff' opacity={1} />
                                            <Arc arcWidth={60} color='#F3F5F7' opacity={1} />
                                            <Progress arcWidth={60} color='#6CC335' />
                                            <Needle color='#2C3854' baseOffset={18} circleRadius={10} circleColor={'#2C3854'} baseWidth={6} />
                                        </Speedometers>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '-30%' }}>
                                            <View style={{ marginTop: -15, flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 42, color: '#6CC335', fontWeight: 'bold' }}>{per}</Text>
                                                <Text style={{ fontSize: 24, color: '#6CC335', paddingTop: 15 }}>%</Text>
                                            </View>
                                            <View style={{ marginTop: 10 }}>
                                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#6CC335' }}>MATCH</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>}
                            {House.compatibilitydetail.final_compatibility_percentage >= 31 &&
                                <View>
                                    {House.compatibilitydetail.final_compatibility_percentage <= 70 &&
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFF5', marginLeft: 10, marginRight: 10 }}>
                                            <View style={{ alignSelf: 'center', paddingTop: 10, position: 'relative', }}>
                                                <Speedometers
                                                    value={House.compatibilitydetail.final_compatibility_percentage}
                                                    max={100}
                                                    angle={180}
                                                    duration={4000}
                                                    fontFamily='squada-one'
                                                >
                                                    <Background angle={180} color='#fff' opacity={1} />
                                                    <Arc arcWidth={60} color='#F3F5F7' opacity={1} />
                                                    <Progress arcWidth={60} color='#FDA73C' />
                                                    <Needle color='#2C3854' baseOffset={18} circleRadius={10} circleColor={'#2C3854'} baseWidth={6} />
                                                </Speedometers>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '-30%' }}>
                                                    <View style={{ marginTop: -15, flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text style={{ fontSize: 42, color: '#FDA73C', fontWeight: 'bold' }}>{House.compatibilitydetail.final_compatibility_percentage}</Text>
                                                        <Text style={{ fontSize: 24, color: '#FDA73C', paddingTop: 15 }}>%</Text>
                                                    </View>
                                                    <View style={{ marginTop: 10 }}>
                                                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FDA73C' }}>MATCH</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>}
                                </View>}
                            {House.compatibilitydetail.final_compatibility_percentage <= 30 &&
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFF5', marginLeft: 10, marginRight: 10 }}>
                                    <View style={{ alignSelf: 'center', paddingTop: 10, position: 'relative', }}>
                                        <Speedometers
                                            value={House.compatibilitydetail.final_compatibility_percentage}
                                            max={100}
                                            angle={180}
                                            duration={4000}
                                            fontFamily='squada-one'
                                        >
                                            <Background angle={180} color='#fff' opacity={1} />
                                            <Arc arcWidth={60} color='#F3F5F7' opacity={1} />
                                            <Progress arcWidth={60} color='#EF3C25' />
                                            <Needle color='#2C3854' baseOffset={18} circleRadius={10} circleColor={'#2C3854'} baseWidth={6} />
                                        </Speedometers>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '-30%' }}>
                                            <View style={{ marginTop: -15, flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 42, color: '#EF3C25', fontWeight: 'bold' }}>{House.compatibilitydetail.final_compatibility_percentage}</Text>
                                                <Text style={{ fontSize: 24, color: '#EF3C25', paddingTop: 15 }}>%</Text>
                                            </View>
                                            <View style={{ marginTop: 10 }}>
                                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#EF3C25' }}>MATCH</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            }

                            {House.compatibilitydetail.first_compatibility_processingbar != "" &&
                                <View>
                                    {House.compatibilitydetail.first_compatibility_processingbar <= 30 &&
                                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                                            <View style={{ marginTop: 20 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular' }}>City Compatibility</Text>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{House.compatibilitydetail.first_compatibility_processingbar}%</Text>
                                                </View>
                                                {/* <ProgressBar style={{ marginTop: 5, }} progress={.54} color="#FF572E" /> */}
                                                <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 10, backgroundColor: '#EBEFF1' }}>
                                                    <SimpleGradientProgressbarView
                                                        style={{ height: 5, marginVertical: 5, borderColor: '#000', borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                        fromColor="#F9978B"
                                                        toColor="#EF3C25"
                                                        duration={4000}
                                                        progress={House.compatibilitydetail.first_compatibility_processingbar / 100}
                                                        maskedCorners={[2, 2, 2, 2]}
                                                        cornerRadius={7.0}
                                                    />
                                                </View>
                                            </View>
                                        </View>}
                                    {House.compatibilitydetail.first_compatibility_processingbar >= 31 &&
                                        <View>
                                            {House.compatibilitydetail.first_compatibility_processingbar <= 70 &&
                                                <View style={{ marginLeft: 10, marginRight: 10 }}>
                                                    <View style={{ marginTop: 20 }}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular' }}>City Compatibility</Text>
                                                            <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{House.compatibilitydetail.first_compatibility_processingbar}%</Text>
                                                        </View>
                                                        {/* <ProgressBar style={{ marginTop: 5, }} progress={.54} color="#FF572E" /> */}
                                                        <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 10, backgroundColor: '#EBEFF1' }}>
                                                            <SimpleGradientProgressbarView
                                                                style={{ height: 5, marginVertical: 5, borderColor: '#000', borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                                fromColor="#FFD9AA"
                                                                toColor="#FDA73C"
                                                                duration={4000}
                                                                progress={House.compatibilitydetail.first_compatibility_processingbar / 100}
                                                                maskedCorners={[2, 2, 2, 2]}
                                                                cornerRadius={7.0}
                                                            />
                                                        </View>
                                                    </View>
                                                </View>}
                                        </View>}
                                    {House.compatibilitydetail.first_compatibility_processingbar >= 71 &&
                                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                                            <View style={{ marginTop: 20 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular' }}>City Compatibility</Text>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{House.compatibilitydetail.first_compatibility_processingbar}%</Text>
                                                </View>
                                                {/* <ProgressBar style={{ marginTop: 5, }} progress={.54} color="#FF572E" /> */}
                                                <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 10, backgroundColor: '#EBEFF1' }}>
                                                    <SimpleGradientProgressbarView
                                                        style={{ height: 5, marginVertical: 5, borderColor: '#000', borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                        fromColor="#03C057"
                                                        toColor="#8AEB6C"
                                                        duration={4000}
                                                        progress={House.compatibilitydetail.first_compatibility_processingbar / 100}
                                                        maskedCorners={[2, 2, 2, 2]}
                                                        cornerRadius={7.0}
                                                    />
                                                </View>
                                            </View>
                                        </View>}
                                </View>}

                            {House.compatibilitydetail.second_compatibility_processingbar != "" &&
                                <View>
                                    {House.compatibilitydetail.second_compatibility_processingbar <= 30 &&
                                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                                            <View style={{ marginTop: 20 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular' }}>Zip/Postal Code Compatibility</Text>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{House.compatibilitydetail.second_compatibility_processingbar}%</Text>
                                                </View>
                                                {/* <ProgressBar style={{ marginTop: 5, }} progress={.64} color="#8AEB6C" /> */}
                                                <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 10, backgroundColor: '#EBEFF1' }}>
                                                    <SimpleGradientProgressbarView
                                                        style={{ height: 5, marginVertical: 5, borderColor: '#000', borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                        fromColor="#F9978B"
                                                        toColor="#EF3C25"
                                                        duration={4000}
                                                        progress={House.compatibilitydetail.second_compatibility_processingbar / 100}
                                                        maskedCorners={[2, 2, 2, 2]}
                                                        cornerRadius={7.0}
                                                    />
                                                </View>
                                            </View>
                                        </View>}
                                    {House.compatibilitydetail.second_compatibility_processingbar >= 71 &&
                                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                                            <View style={{ marginTop: 20 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular' }}>Zip/Postal Code Compatibility</Text>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{House.compatibilitydetail.second_compatibility_processingbar}%</Text>
                                                </View>
                                                {/* <ProgressBar style={{ marginTop: 5, }} progress={.64} color="#8AEB6C" /> */}
                                                <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 10, backgroundColor: '#EBEFF1' }}>
                                                    <SimpleGradientProgressbarView
                                                        style={{ height: 5, marginVertical: 5, borderColor: '#000', borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                        fromColor="#03C057"
                                                        toColor="#8AEB6C"
                                                        duration={4000}
                                                        progress={House.compatibilitydetail.second_compatibility_processingbar / 100}
                                                        maskedCorners={[2, 2, 2, 2]}
                                                        cornerRadius={7.0}
                                                    />
                                                </View>
                                            </View>
                                        </View>}
                                    {House.compatibilitydetail.second_compatibility_processingbar >= 31 &&
                                        <View>
                                            {House.compatibilitydetail.second_compatibility_processingbar <= 70 &&
                                                <View style={{ marginLeft: 10, marginRight: 10 }}>
                                                    <View style={{ marginTop: 20 }}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular' }}>Zip/Postal Code Compatibility</Text>
                                                            <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{House.compatibilitydetail.second_compatibility_processingbar}%</Text>
                                                        </View>
                                                        {/* <ProgressBar style={{ marginTop: 5, }} progress={.64} color="#8AEB6C" /> */}
                                                        <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 10, backgroundColor: '#EBEFF1' }}>
                                                            <SimpleGradientProgressbarView
                                                                style={{ height: 5, marginVertical: 5, borderColor: '#000', borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                                fromColor="#FFD9AA"
                                                                toColor="#FDA73C"
                                                                duration={4000}
                                                                progress={House.compatibilitydetail.second_compatibility_processingbar / 100}
                                                                maskedCorners={[2, 2, 2, 2]}
                                                                cornerRadius={7.0}
                                                            />
                                                        </View>
                                                    </View>
                                                </View>}
                                        </View>}
                                </View>}

                            {House.compatibilitydetail.third_compatibility_processingbar != "" &&
                                <View>
                                    {House.compatibilitydetail.third_compatibility_processingbar <= 30 &&
                                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                                            <View style={{ marginTop: 20 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular' }}>House Number Compatibility</Text>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{House.compatibilitydetail.third_compatibility_processingbar}%</Text>
                                                </View>
                                                {/* <ProgressBar style={{ marginTop: 5, }} progress={.59} color="#3699EF" /> */}
                                                <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 10, backgroundColor: '#EBEFF1' }}>
                                                    <SimpleGradientProgressbarView
                                                        style={{ height: 5, marginVertical: 5, borderColor: '#000', borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                        fromColor="#F9978B"
                                                        toColor="#EF3C25"
                                                        duration={4000}
                                                        progress={House.compatibilitydetail.third_compatibility_processingbar / 100}
                                                        maskedCorners={[2, 2, 2, 2]}
                                                        cornerRadius={7.0}
                                                    />
                                                </View>
                                            </View>
                                        </View>}
                                    {House.compatibilitydetail.third_compatibility_processingbar >= 71 &&
                                        <View style={{ marginLeft: 10, marginRight: 10 }}>
                                            <View style={{ marginTop: 20 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular' }}>House Number Compatibility</Text>
                                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{House.compatibilitydetail.third_compatibility_processingbar}%</Text>
                                                </View>
                                                {/* <ProgressBar style={{ marginTop: 5, }} progress={.59} color="#3699EF" /> */}
                                                <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 10, backgroundColor: '#EBEFF1' }}>
                                                    <SimpleGradientProgressbarView
                                                        style={{ height: 5, marginVertical: 5, borderColor: '#000', borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                        fromColor="#03C057"
                                                        toColor="#8AEB6C"
                                                        duration={4000}
                                                        progress={House.compatibilitydetail.third_compatibility_processingbar / 100}
                                                        maskedCorners={[2, 2, 2, 2]}
                                                        cornerRadius={7.0}
                                                    />
                                                </View>
                                            </View>
                                        </View>}
                                    {House.compatibilitydetail.third_compatibility_processingbar >= 31 &&
                                        <View>
                                            {House.compatibilitydetail.third_compatibility_processingbar <= 70 &&
                                                <View style={{ marginLeft: 10, marginRight: 10 }}>
                                                    <View style={{ marginTop: 20 }}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular' }}>House Number Compatibility</Text>
                                                            <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{House.compatibilitydetail.third_compatibility_processingbar}%</Text>
                                                        </View>
                                                        {/* <ProgressBar style={{ marginTop: 5, }} progress={.59} color="#3699EF" /> */}
                                                        <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 10, backgroundColor: '#EBEFF1' }}>
                                                            <SimpleGradientProgressbarView
                                                                style={{ height: 5, marginVertical: 5, borderColor: '#000', borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                                fromColor="#FFD9AA"
                                                                toColor="#FDA73C"
                                                                duration={4000}
                                                                progress={House.compatibilitydetail.third_compatibility_processingbar / 100}
                                                                maskedCorners={[2, 2, 2, 2]}
                                                                cornerRadius={7.0}
                                                            />
                                                        </View>
                                                    </View>
                                                </View>}
                                        </View>}
                                </View>}

                            <View style={{ marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ fontSize: 20, color: '#3B2F5C', fontFamily: 'AvertaStd-Semibold' }}>Compatibility Check Residential</Text>
                                </View>
                                <View style={{}}>
                                    {per >= 71 &&
                                        <Text style={{ fontSize: 16, color: '#000', fontFamily: "AvertaStd-Regular" }}>{House.compatibilitydetail.property_finaldesc}</Text>
                                    }
                                    {per >= 31 &&
                                        <View>
                                            {per <= 70 &&
                                                <Text style={{ fontSize: 16, color: '#000', fontFamily: "AvertaStd-Regular" }}>{House.compatibilitydetail.property_finaldesc}</Text>
                                            }
                                        </View>
                                    }
                                    {per <= 30 &&
                                        <Text style={{ fontSize: 16, color: '#000', fontFamily: "AvertaStd-Regular" }}>{House.compatibilitydetail.property_finaldesc}</Text>
                                    }
                                </View>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
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
            </ImageBackground>
        </SafeAreaView>
    )
}

export default HouseCompatibilityCheck