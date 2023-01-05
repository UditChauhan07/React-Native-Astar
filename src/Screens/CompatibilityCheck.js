import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, Animated } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CircularProgress, { CircularProgressBase } from 'react-native-circular-progress-indicator';
import Modal from "react-native-modal";
import Entypo from 'react-native-vector-icons/Entypo'
import { openDatabase } from 'react-native-sqlite-storage';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Loader from './Loader';

var db = openDatabase({ name: 'AStar8.db' });

const CompatibilityCheck = ({ navigation }) => {

    const OneToOne = useSelector(state => state.OneToOne)
    console.error(OneToOne);
    const Data = useSelector(state => state.Data)

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [num, setnum] = useState([])
    const [patner, setpatner] = useState([])
    const [luck, setlucky] = useState([])
    const [planet, setplanet] = useState([])
    const [cycle, setcycle] = useState([])
    const [name, setname] = useState([])
    const [life, setlife] = useState([])
    const [fav, setfav] = useState([])
    const [unfav, setunfav] = useState([])
    const [favcal, setfavcal] = useState([])
    const [names, setnames] = useState([])
    const [isele, ele] = useState(false)
    const [zodiac, setzodiac] = useState([])
    const [per, setper] = useState(OneToOne.otheruser_detail.final_usercompatiblitypercentage)
    const [iscon, con] = useState(false)

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM moduletypes",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setdata(temp);
                    console.log(data);
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM primarydetail",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setnum(temp);
                    console.error("number", num);
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
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setpatner(temp);
                    console.error("compatiblepartner", patner);
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM luckyparameters",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setlucky(temp);
                    console.error("luckyparameters", luck);
                }
            );
        });


        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM lifecycles",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setcycle(temp);
                    console.error("life_cycles", cycle);
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM namereading",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setname(temp);
                    console.error("life_cycles", name);
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM lifechanges",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setlife(temp);
                    console.error("lifechanges", name);
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM favparameter",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setfav(temp);
                    console.error("favparameter", name);
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM unfavparameters",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setunfav(temp);
                    console.error("unfavparameters", name);
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM cosmiccalender",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {

                        temp.push(results.rows.item(i));
                        if (results.rows.item(i).date == Moment().format('DD')) {
                            console.log(results.rows.item(i));
                            setfavcal(results.rows.item(i));
                        }
                    }
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM planetdetail",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        setplanet(results.rows.item(i));
                        console.log(planet);
                    }
                }
            );
        });

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

    const test = () => {
        navigation.navigate('Reading')
    }

    const test1 = () => {
        navigation.navigate('Compatibility')
    }

    const Element = (isele) => {
        ele(isele)
    }
    const Eback = () => ele(false)

    const NameReading = () => {
        navigation.navigate('NameReading')
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
                        <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', marginLeft: 20, marginTop: 23 }}>
                            <TouchableOpacity onPress={() => { test1() }}
                                style={{ paddingTop: 7, paddingRight: 2, alignSelf: 'center' }}>
                                <Icons name="left" size={15} color="#007AFF" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                            <Text style={{ color: '#3B2F5C', fontSize: 24, fontFamily: 'AvertaStd-Semibold' }}>Compatibility</Text>
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
                    <View style={{ backgroundColor: '#ffffffa1', borderRadius: 12, margin: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 5, paddingRight: 5 }}>
                            <View style={{ flexDirection: 'row', backgroundColor: '#65096F', height: 20, alignItems: 'center', borderRadius: 12, paddingLeft: 10, paddingRight: 10, marginTop: -10, }}>
                                <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'AvertaStd-Semibold' }}>DOB: <Text style={{ color: '#fff', fontSize: 10 }}>{(Moment(OneToOne.loginuser_detail.loginuserdob).format('DD/MMM/YYYY')).toUpperCase()}</Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: '#65096F', height: 20, alignItems: 'center', borderRadius: 12, paddingLeft: 10, paddingRight: 10, marginTop: -10, }}>
                                <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'AvertaStd-Semibold' }}>DOB: <Text style={{ color: '#fff', fontSize: 10 }}>{(Moment(OneToOne.otheruser_detail.otherpersondob).format('DD/MMM/YYYY')).toUpperCase()}</Text></Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 22, color: '#3B2F5C', fontFamily: 'AvertaStd-Semibold', paddingLeft: 10, maxWidth: '60%' }}>{OneToOne.loginuser_detail.loginusername}</Text>
                            <Text style={{ fontSize: 30, color: '#007AFF', fontFamily: 'AvertaStd-Semibold', alignSelf: 'center', marginTop: -5 }}>|</Text>
                            <Text style={{ fontSize: 22, color: '#3B2F5C', fontFamily: 'AvertaStd-Semibold', maxWidth: '60%', paddingRight: 10, textAlign:'right' }}>{OneToOne.otheruser_detail.otherpersonname}</Text>
                        </View>
                    </View>
                    <KeyboardAwareScrollView>
                        <View style={{ borderRadius: 200, borderWidth: .5, width: 317, height: 317, alignSelf: 'center', borderColor: '#DFDFF5', marginBottom: 10, marginLeft: -8 }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ flexDirection: 'column', }}>
                                    <View style={{ marginLeft: '65%', width: 40, alignItems: 'center', }}>
                                        {OneToOne.loginuser_detail.planet == 'Saturn' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Saturn-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Saturn</Text>
                                            </View>}
                                        {OneToOne.loginuser_detail.planet == 'Moon' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Moon.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Moon</Text>
                                            </View>}
                                        {OneToOne.loginuser_detail.planet == 'Jupiter' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/space-nasa-GIF-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Sun</Text>
                                            </View>}
                                        {OneToOne.loginuser_detail.planet == 'Uranus' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Uranus-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Uranus</Text>
                                            </View>}
                                        {OneToOne.loginuser_detail.planet == 'Mercury' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Mercury-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Mercury</Text>
                                            </View>}
                                        {OneToOne.loginuser_detail.planet == 'Neptune' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Neptune-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Neptune</Text>
                                            </View>}
                                        {OneToOne.loginuser_detail.planet == 'Mars' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/mars-GIF-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Mars</Text>
                                            </View>}
                                        {OneToOne.loginuser_detail.planet == 'Earth' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Earth--unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Earth</Text>
                                            </View>}
                                        {OneToOne.loginuser_detail.planet == 'Venus' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/venus-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Venus</Text>
                                            </View>}
                                        {OneToOne.loginuser_detail.planet == 'Sun' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/sun-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Sun</Text>
                                            </View>}
                                    </View>
                                    <View style={{ marginTop: 100, alignItems: 'center', marginLeft: -80, alignItems: 'center', borderRadius: 7 }}>
                                        <Text style={{ width: 34, textAlign: 'center', height: 34, backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: 0.2, fontFamily: 'AvertaStd-Bold', fontSize: 27, color: '#65096F', marginTop: -2, paddingTop: 4 }}>{OneToOne.loginuser_detail.primaryno}</Text>
                                        <Text style={{ maxWidth: '20%', fontSize: 10, fontFamily: 'AvertaStd-Regular', color: '#444444' }}>Primary Number</Text>
                                    </View>
                                    <View style={{ marginTop: '35%', marginLeft: '70%', width: 34, height: 32, borderRadius: 7, backgroundColor: "#fff", alignItems: 'center' }}>
                                        {OneToOne.loginuser_detail.zodiacsign == "CANCER" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-cancer" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.loginuser_detail.zodiacsign == "ARIES" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-aries" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.loginuser_detail.zodiacsign == "TAURUS" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-taurus" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.loginuser_detail.zodiacsign == "GEMINI" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-gemini" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.loginuser_detail.zodiacsign == "LEO" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-leo" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.loginuser_detail.zodiacsign == "VIRGO" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-virgo" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.loginuser_detail.zodiacsign == "LIBRA" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-libra" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.loginuser_detail.zodiacsign == "SCORPIO" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-scorpio" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.loginuser_detail.zodiacsign == "SAGITTARIUS" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-sagittarius" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.loginuser_detail.zodiacsign == "CAPRICORN" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-capricorn" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.loginuser_detail.zodiacsign == "AQUARIUS" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-aquarius" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.loginuser_detail.zodiacsign == "PISCES" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-pisces" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                    </View>
                                    <View style={{ marginLeft: '55%', alignSelf: 'center' }}>
                                        <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.loginuser_detail.zodiacsign}</Text>
                                    </View>
                                </View>
                                <View style={{ paddingTop: 55, marginLeft: '-35%', }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 2000, padding: 5 }}>
                                        <CircularProgressBase
                                            value={100}
                                            radius={100}
                                            maxValue={100}
                                            duration={5000}
                                            activeStrokeWidth={25}
                                            inActiveStrokeWidth={20}
                                            activeStrokeColor={'#6CC335'}
                                            activeStrokeSecondaryColor="#6CC335"
                                            inActiveStrokeColor="#fff"
                                            dashedStrokeConfig={{
                                                count: 8,
                                                width: 2,
                                            }}
                                            strokeColorConfig={[
                                                { color: '#6CC335', value: 0, },
                                                { color: '#6CC335', value: 50 },
                                                { color: '#6CC335', value: 100 },
                                            ]}
                                        >
                                            <View style={{ backgroundColor: '#EAE8F2', borderRadius: 500, padding: 10 }}>
                                                {per <= 30 &&
                                                    <View style={{ backgroundColor: '#FF375D', borderRadius: 500, }}>
                                                        <CircularProgress
                                                            value={per}
                                                            valueSuffix={'%'}
                                                            radius={60}
                                                            duration={4000}
                                                            progressValueStyle={{ color: '#fff', }}
                                                            activeStrokeColor='#8675FF'
                                                            activeStrokeWidth={3}
                                                            inActiveStrokeWidth={15}
                                                            inActiveStrokeColor='#fff'
                                                            activeStrokeSecondaryColor={'#FF9718'}
                                                            maxValue={100}
                                                            title={'MATCH'}
                                                            titleColor={'#fff'}
                                                            titleStyle={{ fontWeight: 'bold', }}
                                                        />
                                                    </View>}

                                                {per >= 71 &&
                                                    <View style={{ backgroundColor: '#6CC335', borderRadius: 500, }}>
                                                        <CircularProgress
                                                            value={per}
                                                            valueSuffix={'%'}
                                                            radius={60}
                                                            duration={4000}
                                                            progressValueStyle={{ color: '#fff', }}
                                                            activeStrokeColor='#8675FF'
                                                            activeStrokeWidth={3}
                                                            inActiveStrokeWidth={15}
                                                            inActiveStrokeColor='#fff'
                                                            activeStrokeSecondaryColor={'#FF9718'}
                                                            maxValue={100}
                                                            title={'MATCH'}
                                                            titleColor={'#fff'}
                                                            titleStyle={{ fontWeight: 'bold', }}
                                                        />
                                                    </View>}
                                                {per >= 31 &&
                                                    <View>
                                                        {per <= 70 &&
                                                            <View style={{ backgroundColor: '#FDA73C', borderRadius: 500, }}>
                                                                <CircularProgress
                                                                    value={per}
                                                                    valueSuffix={'%'}
                                                                    radius={60}
                                                                    duration={4000}
                                                                    progressValueStyle={{ color: '#fff', }}
                                                                    activeStrokeColor='#8675FF'
                                                                    activeStrokeWidth={3}
                                                                    inActiveStrokeWidth={15}
                                                                    inActiveStrokeColor='#fff'
                                                                    activeStrokeSecondaryColor={'#FF9718'}
                                                                    maxValue={100}
                                                                    title={'MATCH'}
                                                                    titleColor={'#fff'}
                                                                    titleStyle={{ fontWeight: 'bold', }}
                                                                />
                                                            </View>}
                                                    </View>}
                                            </View>
                                        </CircularProgressBase>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ marginLeft: '-45%', alignItems: 'center', width: 40 }}>
                                        {OneToOne.otheruser_detail.planet_detail.planet_name == 'Saturn' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Saturn-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Saturn</Text>
                                            </View>}
                                        {OneToOne.otheruser_detail.planet_detail.planet_name == 'Moon' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Moon.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Moon</Text>
                                            </View>}
                                        {OneToOne.otheruser_detail.planet_detail.planet_name == 'Jupiter' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/space-nasa-GIF-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Jupiter</Text>
                                            </View>}
                                        {OneToOne.otheruser_detail.planet_detail.planet_name == 'Uranus' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Uranus-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Uranus</Text>
                                            </View>}
                                        {OneToOne.otheruser_detail.planet_detail.planet_name == 'Mercury' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Mercury-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Mercury</Text>
                                            </View>}
                                        {OneToOne.otheruser_detail.planet_detail.planet_name == 'Neptune' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Neptune-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Neptune</Text>
                                            </View>}
                                        {OneToOne.otheruser_detail.planet_detail.planet_name == 'Mars' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/mars-GIF-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Mars</Text>
                                            </View>}
                                        {OneToOne.otheruser_detail.planet_detail.planet_name == 'Earth' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/Earth--unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Earth</Text>
                                            </View>}
                                        {OneToOne.otheruser_detail.planet_detail.planet_name == 'Venus' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/venus-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Venus</Text>
                                            </View>}
                                        {OneToOne.otheruser_detail.planet_detail.planet_name == 'Sun' &&
                                            <View style={{ alignItems: 'center' }}>
                                                <Image source={require('./assets/sun-unscreen.gif')} style={{ height: 35, width: 35, }} />
                                                <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>Sun</Text>
                                            </View>}
                                    </View>
                                    <View style={{ marginTop: 105, marginLeft: 35, }}>
                                        <Text style={{ width: 34, textAlign: 'center', height: 34, backgroundColor: '#fff', borderRadius: 7, fontSize: 27, fontFamily: 'AvertaStd-Bold', color: '#65096F', marginTop: -2, paddingTop: 4 }}>{OneToOne.otheruser_detail.primary_detail.number}</Text>
                                        <Text style={{ maxWidth: '50%', marginRight: '10%', fontSize: 10, fontFamily: 'AvertaStd-Regular', color: '#444444' }}>Primary Number</Text>
                                    </View>
                                    <View style={{ marginTop: '57%', marginLeft: -50, backgroundColor: '#fff', borderRadius: 7, width: 34, height: 32, alignItems: 'center' }}>
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "CANCER" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-cancer" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "ARIES" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-aries" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "TAURUS" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-taurus" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "GEMINI" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-gemini" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "LEO" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-leo" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "VIRGO" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-virgo" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "LIBRA" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-libra" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "SCORPIO" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-scorpio" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "SAGITTARIUS" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-sagittarius" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "CAPRICORN" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-capricorn" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "AQUARIUS" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-aquarius" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                        {OneToOne.otheruser_detail.zodiac_detail.zodiac_sign == "PISCES" &&
                                            <View>
                                                <View style={{ alignSelf: 'center', paddingTop: 5 }}>
                                                    <Icon name="zodiac-pisces" size={20} color="#65096F" />
                                                </View>
                                            </View>}
                                    </View>
                                    <View style={{ marginLeft: '-33%' }}>
                                        <Text style={{ fontSize: 10, color: '#444444', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.otheruser_detail.zodiac_detail.zodiac_sign}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, }}>
                            <TouchableOpacity onPress={() => NameReading()}>
                                <View style={{ borderRadius: 8, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5, backgroundColor: '#65096F', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'AvertaStd-Semibold', color: '#fff', maxWidth: '50%', textAlign: 'center' }}>MORE ABOUT {(OneToOne.otheruser_detail.otherpersonname).toUpperCase()}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Element(!isele)}>
                                <View style={{ borderRadius: 8, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5, backgroundColor: '#65096F', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'AvertaStd-Semibold', color: '#fff', maxWidth: '50%', textAlign: 'center' }}>DESCRIBE COMPATIBILITY</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignContent: 'center', backgroundColor:'#FFFFFFe1', margin:10 }}>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center', width:'100%' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular', width:'33%' }}>{OneToOne.loginuser_detail.fav_numbers.split(',').join(', ')}</Text>
                                    <View style={{ width: '33%', borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5, alignItems: 'center', alignSelf: 'center', }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Favorable Numbers</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.otheruser_detail.favunfav_parameters.favparameter.numbers.split(',').join(', ')}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular', width:'33%' }}>{OneToOne.loginuser_detail.unfav_numbers.split(',').join(', ')}</Text>
                                    <View style={{ width: '33%', borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5, alignItems: 'center', alignSelf: 'center' }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Non-Favorable Numbers</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.numbers.split(',').join(', ')}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.loginuser_detail.fav_days.split(',').join(', ')}</Text>
                                    <View style={{ width: '33%', borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5, alignItems: 'center', alignSelf: 'center' }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Favorable Days</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.otheruser_detail.favunfav_parameters.favparameter.days.split(',').join(', ')}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.loginuser_detail.unfav_days.split(',').join(', ')}</Text>
                                    <View style={{ width:'33%', borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5, alignItems: 'center', alignSelf: 'center' }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Non-Favorable Days</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.days.split(',').join(', ')}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.loginuser_detail.fav_months.split(',').join(', ')}</Text>
                                    <View style={{ width:'33%', borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5, alignSelf: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Favorable Months</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.otheruser_detail.favunfav_parameters.favparameter.months.split(',').join(', ')}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.loginuser_detail.unfav_months.split(',').join(', ')}</Text>
                                    <View style={{ width:'33%', borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5, alignSelf: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Non-Favorable Months</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.months.split(',').join(', ')}</Text>
                                </View>
                            </View>
                            <View style={{ margin: 10, marginBottom: 30 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.loginuser_detail.lucky_gems.split(',').join(', ')}</Text>
                                    <View style={{ width:'33%', borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5, alignItems: 'center', alignSelf: 'center' }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Lucky Gems</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular',width:'33%' }}>{OneToOne.otheruser_detail.luckyparameters.lucky_gems.split(',').join(', ')}</Text>
                                </View>
                            </View>
                        </View>
                        {/* <View style={{ alignContent: 'center', alignItems:'center', justifyContent:'center' }}>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.loginuser_detail.fav_numbers.split(',').join(', ')}</Text>
                                    <View style={{ width: 107, borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5 }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Favorable Numbers</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.otheruser_detail.favunfav_parameters.favparameter.numbers.split(',').join(', ')}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.loginuser_detail.unfav_numbers.split(',').join(', ')}</Text>
                                    <View style={{ width: 107, borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5 }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Non-Favorable Numbers</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.numbers.split(',').join(', ')}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.loginuser_detail.fav_days.split(',').join(', ')}</Text>
                                    <View style={{ width: 107, borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5 }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Favorable Days</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.otheruser_detail.favunfav_parameters.favparameter.days.split(',').join(', ')}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.loginuser_detail.unfav_days.split(',').join(', ')}</Text>
                                    <View style={{ width: 107, borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5 }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Non-Favorable Days</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.days.split(',').join(', ')}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.loginuser_detail.fav_months.split(',').join(', ')}</Text>
                                    <View style={{ width: 107, borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5 }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Favorable Months</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.otheruser_detail.favunfav_parameters.favparameter.months.split(',').join(', ')}</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom:10, marginTop:10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.loginuser_detail.unfav_months.split(',').join(', ')}</Text>
                                    <View style={{ width: 107, borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5 }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Non-Favorable Months</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.otheruser_detail.favunfav_parameters.unfavparameters.months.split(',').join(', ')}</Text>
                                </View>
                            </View>

                            <View style={{ margin: 10, marginBottom: 30 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.loginuser_detail.lucky_gems.split(',').join(', ')}</Text>
                                    <View style={{ width: 107, borderRadius: 12, borderColor: '#DB7DC5', borderWidth: .5 }}>
                                        <Text style={{ color: '#60096A', textAlign: 'center', padding: 10, fontFamily: 'AvertaStd-Regular', fontSize: 13 }}>Lucky Gems</Text>
                                    </View>
                                    <Text style={{ color: '#60096A', textAlign: 'center', maxWidth: '30%', borderBottomWidth: 1, borderBottomColor: '#DB7DC5', fontFamily: 'AvertaStd-Regular' }}>{OneToOne.otheruser_detail.luckyparameters.lucky_gems.split(',').join(', ')}</Text>
                                </View>
                            </View>
                        </View> */}
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
            <Modal visible={isele}
                onBackdropPress={() => Eback()}
                style={{ backgroundColor: '#DEDEDE', height: '105%', width: '105%', flex: 1, marginLeft: -10, position: 'absolute', marginTop: -10, opacity: .9 }}
                onRequestClose={() => Eback()}>
                <View style={{ margin: 25, flex: 1, display: 'flex', zIndex: 1111 }}>
                    <View style={{ flex: 0.9, backgroundColor: '#fff', borderRadius: 12, shadowColor: '#3B2F5C', shadowOpacity: 0.2, elevation: 10, shadowRadius: 12 }}>
                        <View style={{ margin: 25, alignSelf: 'center', flex: 1 }}>
                            <Text style={{ color: '#3B2F5C', fontSize: 24, fontFamily: 'AvertaStd-Semibold' }}>Compatibility between {OneToOne.loginuser_detail.loginusername} & {OneToOne.otheruser_detail.otherpersonname}  </Text>
                            <KeyboardAwareScrollView>
                                <Text style={{ color: '#000', fontSize: 16, paddingTop: 10 }}>
                                    {OneToOne.otheruser_detail.relation_desc}
                                </Text>

                            </KeyboardAwareScrollView>
                        </View>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <TouchableOpacity onPress={() => Eback()}
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
        </SafeAreaView>
    )
}

export default CompatibilityCheck