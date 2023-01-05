import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, Animated } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios';
import { openDatabase } from 'react-native-sqlite-storage';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import Loader from './Loader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


var db = openDatabase({ name: 'AStar8.db' });

const Possesions = ({ navigation }) => {
    const dispatch = useDispatch();
    const Data = useSelector(state => state.Data)
    console.error(Data.userdetail.userid);
    const [house, sethouse] = useState(true)
    const [car, setcar] = useState(false)
    const [gem, setgem] = useState(false)
    const [metal, setmetal] = useState(false)
    const [names, setnames] = useState([])
    const [loading, setloading] = useState(false)
    const [items, setitems] = useState('')
    const [iscon, con] = useState(false)
    const [zodiac, setzodiac] = useState([])

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM userdetail",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        console.error("userdetail", results.rows.item(i).userid);
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

        setloading(true)
        let bodyFormData = { 'userid': Data.userdetail.userid }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/userPossesionData`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.error(data);
                setitems(data)
                setloading(false)
                // dispatch(OneToOne(data))
            })
            .catch(error => {
                console.warn(error.response.data)
                setloading(false)
            })

        tryOut();

    }, [])


    const House = () => {
        sethouse(true)
        setcar(false)
        setgem(false)
        setmetal(false)
    }
    const Car = () => {
        setcar(true)
        sethouse(false)
        setgem(false)
        setmetal(false)
    }
    const Gem = () => {
        setgem(true)
        sethouse(false)
        setcar(false)
        setmetal(false)
    }
    const Metal = () => {
        setmetal(true)
        sethouse(false)
        setgem(false)
        setcar(false)
    }
    const nav = () => {
        navigation.navigate('Dashboard')
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


    const test1 = () => {
        console.log('Compatibility');
        navigation.navigate('Compatibility')
    }

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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', marginLeft: 20, marginTop: 23 }}>
                            <TouchableOpacity onPress={() => { nav() }}
                                style={{ paddingTop: 7, paddingRight: 2, alignSelf: 'center' }}>
                                <Icons name="left" size={15} color="#007AFF" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                            <Text style={{ color: '#3B2F5C', fontSize: 24, fontFamily: 'AvertaStd-Semibold' }}>Possessions</Text>
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
                    <KeyboardAwareScrollView style={{ flex: 1 }}>
                        <View style={{ marginTop: 10, flex: 1 }}>
                            <View style={{ marginBottom: 1 }}>
                                <TouchableOpacity onPress={() => House()}>
                                    <LinearGradient
                                        colors={['#76DFF4', '#3277D9']}
                                        style={{ height: 68 }}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                    >
                                        <Text style={{ fontSize: 24, fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'right', padding: 18 }}>HOUSE OR PROPERTY</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                {house == true &&
                                    <View style={{ marginTop: -5 }}>
                                        <LinearGradient colors={['#76DFF4', '#3277D9']}
                                            style={{}}
                                            start={{ x: 0, y: 1 }}
                                            end={{ x: 1, y: 1 }}>
                                            <Text style={{ textAlign: 'right', color: '#fff', padding: 10, fontFamily: 'AvertaStd-Regular', maxWidth: '70%', alignSelf: 'flex-end', paddingRight: 18, lineHeight: 20, fontSize: 16 }}>{items.houseorpropertydesc}</Text>
                                            <TouchableOpacity onPress={() => { test5() }} style={{ backgroundColor: '#fff', alignSelf: 'flex-end', borderRadius: 8, borderColor: '#183657', borderWidth: 0.5,zIndex:99999 }}>
                                                <Text style={{ textAlign: 'right', color: '#183657', fontFamily: 'AvertaStd-Semibold', maxWidth: '70%', alignSelf: 'flex-end', lineHeight: 20, fontSize: 12, paddingBottom: 5, paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>Check Compatibility</Text>
                                            </TouchableOpacity>
                                            <Image source={require('./assets/Home.gif')} style={{ height: 400, width: 400, marginLeft: '-20%', marginBottom: '-30%', marginTop: '-35%' }} />
                                        </LinearGradient>
                                    </View>
                                }
                            </View>
                            <View style={{ marginBottom: 1, marginTop: 1 }}>
                                <TouchableOpacity onPress={() => { Car() }} style={{ zIndex: 99999 }}>
                                    <LinearGradient
                                        colors={['#EAFBFB', '#50BFA5']}
                                        style={{ height: 68, }}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                    >
                                        <Text style={{ fontSize: 24, fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'right', padding: 18 }}>CAR / VEHICLE</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                {car == true &&
                                    <View style={{}}>
                                        <LinearGradient colors={['#eafbfb00', '#50bfa500']}
                                            style={{ zIndex: 1111 }}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}>
                                            <Text style={{ textAlign: 'right', color: '#183657', padding: 10, fontFamily: 'AvertaStd-Regular', maxWidth: '70%', alignSelf: 'flex-end', zIndex: 1111, paddingRight: 18, lineHeight: 20, fontSize: 16 }}>{items.carorvehicledesc}</Text>
                                            <TouchableOpacity onPress={() => { test6() }} style={{ backgroundColor: '#fff', alignSelf: 'flex-end', borderRadius: 8, borderColor: '#183657', borderWidth: 0.5 }}>
                                                <Text style={{ textAlign: 'right', color: '#183657', fontFamily: 'AvertaStd-Semibold', maxWidth: '70%', alignSelf: 'flex-end', lineHeight: 20, fontSize: 12, paddingBottom: 5, paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>Check Compatibility</Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                        <View style={{ marginTop: '-48%', marginLeft: '-10%' }}>
                                            <Image source={require('./assets/Car.gif')} style={{ height: 345, width: 450, }} />
                                        </View>
                                    </View>}
                            </View>
                            <View style={{ marginBottom: 1, marginTop: 1 }}>
                                <TouchableOpacity onPress={() => { Gem() }}>
                                    <LinearGradient
                                        colors={['#FFE7A3', '#FE8F00']}
                                        style={{ height: 68 }}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                    >
                                        <Text style={{ fontSize: 24, fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'right', padding: 18 }}>GEMS & STONES</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                {gem == true &&
                                    <View style={{ marginTop: -5 }}>
                                        <LinearGradient colors={['#FFE7A3', '#FE8F00']}
                                            style={{}}
                                            start={{ x: 0, y: 1 }}
                                            end={{ x: 1, y: 1 }}>
                                            <Text style={{ textAlign: 'right', color: '#183657', fontFamily: 'AvertaStd-Regular', paddingRight: 18, paddingTop: 5, lineHeight: 20, fontSize: 16, maxWidth: '65%', alignSelf: 'flex-end' }}>{items.gems.description}</Text>
                                            <Image source={require('./assets/Gem.gif')} style={{ height: 230, width: 200, marginLeft: -20, marginBottom: -10, marginTop: -50 }} />
                                        </LinearGradient>
                                    </View>}
                            </View>
                            <View style={{ marginBottom: 3, marginTop: 1 }}>
                                <TouchableOpacity onPress={() => { Metal() }}>
                                    <LinearGradient
                                        colors={['#E7D640', '#FF3941']}
                                        style={{ height: 68 }}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                    >
                                        <Text style={{ fontSize: 24, fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'right', padding: 18 }}>METALS & COLORS</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                {metal == true &&
                                    <View style={{ marginTop: -5 }}>
                                        <LinearGradient colors={['#E7D640', '#FF3941']}
                                            style={{}}
                                            start={{ x: 0, y: 1 }}
                                            end={{ x: 1, y: 1 }}>
                                            <Text style={{ textAlign: 'right', color: '#fff', paddingRight: 18, paddingTop: 5, fontFamily: 'AvertaStd-Regular', lineHeight: 20, fontSize: 16 }}>{items.metals.description}</Text>
                                            <Text style={{ textAlign: 'right', color: '#fff', paddingRight: 18, paddingTop: 5, fontFamily: 'AvertaStd-Regular', maxWidth: '65%', alignSelf: 'flex-end', lineHeight: 20, fontSize: 16 }}>{items.colours.description}</Text>
                                            <Image source={require('./assets/Metal.gif')} style={{ height: 130, width: 300, }} />
                                        </LinearGradient>
                                    </View>}
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                    <View style={{ paddingLeft: 15, paddingRight: 15, paddingBottom: 5, }}>
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
                </View>
            </ImageBackground>
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
                <View style={{ alignSelf: 'center', marginTop: -20, marginLeft: -8 }}>
                    <TouchableOpacity onPress={() => { test4() }} style={{ alignItems: 'center' }}>
                        <View style={{ width: 55, height: 55, backgroundColor: "#73207C", transform: [{ rotate: "45deg" }], borderRadius: 7, position: 'absolute', alignItems: 'center' }}>
                        </View>
                        <View style={{ paddingTop: 5 }}>
                            <Entypo name='cross' size={40} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default Possesions