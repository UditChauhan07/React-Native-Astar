import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image, ImageBackground, Animated, FlatList, TextInput } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Speedometers, { Background, Arc, Needle, Progress, Marks, Indicator, } from 'react-native-cool-speedometer';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios';
import { openDatabase } from 'react-native-sqlite-storage';
import { EditNameChange, Names } from '../ReduxFloder/action';
import Loader from './Loader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


var db = openDatabase({ name: 'AStar8.db' });

const NameCompatibilityCheck = ({ navigation }) => {

    const dispatch = useDispatch();

    const Names = useSelector(state => state.Names)
    console.error("NAMEWDSFJBDK", Names);

    const [per, setper] = useState('')
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim1 = useRef(new Animated.Value(0)).current;
    const fadeAnim2 = useRef(new Animated.Value(0)).current;
    const fadeAnim3 = useRef(new Animated.Value(0)).current;
    const fadeAnim4 = useRef(new Animated.Value(0)).current;
    const fadeAnim5 = useRef(new Animated.Value(0)).current;
    const fadeAnim6 = useRef(new Animated.Value(0)).current;
    const fadeAnim7 = useRef(new Animated.Value(0)).current;
    const fadeAnim8 = useRef(new Animated.Value(0)).current;
    const [num, setnum] = useState('')
    const [iscon, con] = useState(false)
    const [show, hide] = useState(false)
    const [name, setname] = useState([])
    const [names, setnames] = useState('')
    const [loading, setloading] = useState(false)
    const [zodiac, setzodiac] = useState([])
    const Data = useSelector(state => state.Data)
    console.error(Data.userdetail.userid);

    useEffect(() => {
        const per = Names.namecompatibilitypercentage
        setper(per)
        console.warn(per);

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM userdetail",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        console.error("userdetail", results.rows.item(i));
                        setname(results.rows.item(i))
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

        setnum(Names.magicboxdetail)


        setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 300)
        setTimeout(() => {
            Animated.timing(fadeAnim1, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 600)
        setTimeout(() => {
            Animated.timing(fadeAnim2, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 900)
        setTimeout(() => {
            Animated.timing(fadeAnim3, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 1200)
        setTimeout(() => {
            Animated.timing(fadeAnim4, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 1500)
        setTimeout(() => {
            Animated.timing(fadeAnim5, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 1800)
        setTimeout(() => {
            Animated.timing(fadeAnim6, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 2100)
        setTimeout(() => {
            Animated.timing(fadeAnim7, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 2400)
        setTimeout(() => {
            Animated.timing(fadeAnim8, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 2700)

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

    const test3 = (iscon) => {
        con(iscon)
        trySome()
    }
    const test4 = () => {
        con(false)
        tryOut()
    }

    const Show = (show) => {
        hide(show)
    }
    const Hide = () => {
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

    const EditName = () => {
        setloading(true)
        let bodyFormData = { 'userid': name.userid, 'name': names }
        console.log(bodyFormData);


        dispatch(EditNameChange(bodyFormData))
        navigation.navigate('EditName')
        hide(false)
        setloading(false)
    }

    const [no1, setno1] = useState(false)
    const [no2, setno2] = useState(false)
    const [no3, setno3] = useState(false)
    const [no4, setno4] = useState(false)
    const [no5, setno5] = useState(false)
    const [no6, setno6] = useState(false)
    const [no7, setno7] = useState(false)
    const [no8, setno8] = useState(false)
    const [no9, setno9] = useState(false)

    const Box1 = () => {
        setno1(true)
    }
    const Box2 = () => {
        setno1(false)
    }
    const Box3 = () => {
        setno2(true)
    }
    const Box4 = () => {
        setno2(false)
    }
    const Box5 = () => {
        setno3(true)
    }
    const Box6 = () => {
        setno3(false)
    }
    const Box7 = () => {
        setno4(true)
    }
    const Box8 = () => {
        setno4(false)
    }
    const Box9 = () => {
        setno5(true)
    }
    const Box10 = () => {
        setno5(false)
    }
    const Box11 = () => {
        setno6(true)
    }
    const Box12 = () => {
        setno6(false)
    }
    const Box13 = () => {
        setno7(true)
    }
    const Box14 = () => {
        setno7(false)
    }
    const Box15 = () => {
        setno8(true)
    }
    const Box16 = () => {
        setno8(false)
    }
    const Box17 = () => {
        setno9(true)
    }
    const Box18 = () => {
        setno9(false)
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
            {/* {loading ? <Loader showloading={loading} /> : null} */}
            <ImageBackground source={require('./assets/DashboardBackgroundImage.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: -5 }}>
                        <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', marginLeft: 20, marginTop: 23 }}>
                            <TouchableOpacity onPress={() => { SelectTab() }}
                                style={{ paddingTop: 7, paddingRight: 2, alignSelf: 'center' }}>
                                <Icons name="left" size={15} color="#007AFF" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                            <Text style={{ color: '#3B2F5C', fontSize: 24, fontFamily: 'AvertaStd-Semibold' }}>Compatibility</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginRight: 20, marginTop: 5, alignSelf: 'center' }}>
                            {name.profile_pic !== "" &&
                                <Image source={name.profile_pic !== "" ? { uri: name.profile_pic } : require('./assets/user-details-profile.png')} style={{ height: 60, width: 60, borderColor: '#000', borderWidth: 2, borderRadius: 60 }} />}
                            {name.profile_pic == "" &&
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
                        <View style={{ backgroundColor: '#65096F', height: 17, width: 183, borderRadius: 12, marginTop: -10, marginLeft: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View >
                                <Text style={{ color: '#fff', fontSize: 10, paddingLeft: 10, paddingTop: 2, fontFamily: 'AvertaStd-Bold' }}>NAME COMPATIBILITY</Text>
                            </View>
                            <TouchableOpacity onPress={() => { SelectTab() }}>
                                <View style={{ height: 25, backgroundColor: '#65096F', justifyContent: 'center', marginTop: -5, width: 40, alignItems: 'center', borderRadius: 8 }}>
                                    <Icons name="left" size={15} color="#fff" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#3B2F5C', fontSize: 22, fontFamily: 'AvertaStd-Semibold', paddingLeft: 15, paddingTop: 5 }}>{Names.name}</Text>
                            <TouchableOpacity onPress={() => { Show() }}>
                                <View style={{ width: 42, height: 40, borderRadius: 8, borderWidth: 3, borderColor: '#65096F', alignItems: 'center', justifyContent: 'center', backgroundColor: "#FCE9F9", marginRight: 10 }}>
                                    <MaterialIcons name="edit" size={28} color='#65096F' />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <KeyboardAwareScrollView>
                        <View style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: '#FFFFFF', marginLeft: 15, marginRight: 15, marginTop: 15, flex: 1, shadowColor: '#000', shadowOpacity: 0.2, elevation: 5 }}>
                            {per >= 71 &&
                                <View style={{ borderRadius: 12, backgroundColor: '#6CC335', alignSelf: 'center', marginTop: -10, paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, marginBottom: 10 }}>
                                    <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'center' }}>EXCELLENT</Text>
                                </View>}
                            {per <= 30 &&
                                <View style={{ borderRadius: 12, backgroundColor: '#EF3C25', alignSelf: 'center', marginTop: -10, paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, marginBottom: 10 }}>
                                    <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'center' }}>BAD</Text>
                                </View>}
                            {per >= 31 &&
                                <View>
                                    {per <= 70 &&
                                        <View style={{ borderRadius: 12, backgroundColor: '#FDA73C', alignSelf: 'center', marginTop: -10, paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, marginBottom: 10 }}>
                                            <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'center' }}>Good</Text>
                                        </View>}
                                </View>}
                            {per >= 71 &&
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFF5', marginLeft: 10, marginRight: 10 }}>
                                    <View style={{ alignSelf: 'center', paddingTop: 10, position: 'relative', }}>
                                        <Speedometers
                                            value={Names.namecompatibilitypercentage}
                                            max={100}
                                            angle={180}
                                            duration={1000}
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
                                </View>
                            }
                            {per >= 31 &&
                                <View>
                                    {per <= 70 &&
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFF5', marginLeft: 10, marginRight: 10 }}>
                                            <View style={{ alignSelf: 'center', paddingTop: 10, position: 'relative', }}>
                                                <Speedometers
                                                    value={Names.namecompatibilitypercentage}
                                                    max={100}
                                                    angle={180}
                                                    duration={1000}
                                                    fontFamily='squada-one'
                                                >
                                                    <Background angle={180} color='#fff' opacity={1} />
                                                    <Arc arcWidth={60} color='#F3F5F7' opacity={1} />
                                                    <Progress arcWidth={60} color='#FDA73C' />
                                                    <Needle color='#2C3854' baseOffset={18} circleRadius={10} circleColor={'#2C3854'} baseWidth={6} />
                                                </Speedometers>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '-30%' }}>
                                                    <View style={{ marginTop: -15, flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text style={{ fontSize: 42, color: '#FDA73C', fontWeight: 'bold' }}>{Names.namecompatibilitypercentage}</Text>
                                                        <Text style={{ fontSize: 24, color: '#FDA73C', paddingTop: 15 }}>%</Text>
                                                    </View>
                                                    <View style={{ marginTop: 10 }}>
                                                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FDA73C' }}>MATCH</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>}
                                </View>}
                            {per <= 30 &&
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFF5', marginLeft: 10, marginRight: 10 }}>
                                    <View style={{ alignSelf: 'center', paddingTop: 10, position: 'relative', }}>
                                        <Speedometers
                                            value={Names.namecompatibilitypercentage}
                                            max={100}
                                            angle={180}
                                            duration={1000}
                                            fontFamily='squada-one'
                                        >
                                            <Background angle={180} color='#fff' opacity={1} />
                                            <Arc arcWidth={60} color='#F3F5F7' opacity={1} />
                                            <Progress arcWidth={60} color='#EF3C25' />
                                            <Needle color='#2C3854' baseOffset={18} circleRadius={10} circleColor={'#2C3854'} baseWidth={6} />
                                        </Speedometers>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                            <View style={{ marginTop: -15, flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 42, color: '#EF3C25', fontWeight: 'bold' }}>{Names.namecompatibilitypercentage}</Text>
                                                <Text style={{ fontSize: 24, color: '#EF3C25', paddingTop: 15 }}>%</Text>
                                            </View>
                                            <View style={{ marginTop: 10 }}>
                                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#EF3C25' }}>MATCH</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>}
                            <View style={{ flexDirection: 'row',paddingLeft:10, paddingTop:10 }}>
                                <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{Names.namedec.positive_title} :</Text>
                                <Text style={{ color: '#000', maxWidth: '85%' }}>{Names.namedec.positive_desc}</Text>
                            </View>
                            <View style={{ flexDirection: 'row',paddingLeft:10,paddingBottom:10, }}>
                                <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{Names.namedec.negative_title} :</Text>
                                <Text style={{ color: '#000', maxWidth: '80%' }}>{Names.namedec.negative_desc}</Text>
                            </View>

                            {(no1 == false && no2 == false && no3 == false && no4 == false && no5 == false && no6 == false && no7 == false && no8 == false && no9 == false) &&
                                <View style={{ marginLeft: '1.5%', marginBottom: '3%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingBottom: 0, borderBottomWidth: 1, borderColor: '#F1F1F1' }}>
                                        <Animated.View style={[{ borderRightWidth: 1, width: '31%', margin: '1%', paddingBottom: '2.5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                            <TouchableOpacity onPress={() => { Box1() }}>
                                                <FlatList
                                                    data={Names.magicboxdetail}
                                                    keyExtractor={(item) => item.key}
                                                    renderItem={({ item, index }) =>
                                                        <View>
                                                            {item.number == 1 &&
                                                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Image source={require('./assets/main-yellow.png')} />
                                                                    <View>
                                                                        {item.numbervalue != 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 7 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>{item.numbervalue}</Text>
                                                                            </View>
                                                                        }
                                                                        {item.numbervalue == 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 5 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>0</Text>
                                                                            </View>
                                                                        }
                                                                    </View>
                                                                </View>}
                                                        </View>} />
                                            </TouchableOpacity>
                                        </Animated.View>
                                        <Animated.View style={[{ borderRightWidth: 1, width: '31%', margin: '1%', paddingBottom: '2.5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                            <TouchableOpacity onPress={() => { Box3() }}>
                                                <FlatList
                                                    data={Names.magicboxdetail}
                                                    keyExtractor={(item) => item.key}
                                                    renderItem={({ item, index }) =>
                                                        <View>
                                                            {item.number == 2 &&
                                                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Image source={require('./assets/main-yellow1.png')} />
                                                                    <View>
                                                                        {item.numbervalue != 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 7 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>{item.numbervalue}</Text>
                                                                            </View>
                                                                        }
                                                                        {item.numbervalue == 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 5 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>0</Text>
                                                                            </View>
                                                                        }
                                                                    </View>
                                                                </View>}
                                                        </View>} />
                                            </TouchableOpacity>
                                        </Animated.View>
                                        <Animated.View style={[{ width: '31%', margin: '1%', paddingBottom: '2.5%', paddingRight: '2%', }]} >
                                            <TouchableOpacity onPress={() => { Box5() }}>
                                                <FlatList
                                                    data={Names.magicboxdetail}
                                                    keyExtractor={(item) => item.key}
                                                    renderItem={({ item, index }) =>
                                                        <View>
                                                            {item.number == 3 &&
                                                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Image source={require('./assets/main-yellow2.png')} />
                                                                    <View>
                                                                        {item.numbervalue != 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 7 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>{item.numbervalue}</Text>
                                                                            </View>
                                                                        }
                                                                        {item.numbervalue == 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 5 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>0</Text>
                                                                            </View>
                                                                        }
                                                                    </View>
                                                                </View>}
                                                        </View>} />
                                            </TouchableOpacity>
                                        </Animated.View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: '-2.5%', marginTop: '-2.5%', borderBottomWidth: 1, borderColor: '#F1F1F1' }}>
                                        <Animated.View style={[{ borderRightWidth: 1, width: '31%', margin: '1%', paddingBottom: '2.5%', paddingTop: '5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                            <TouchableOpacity onPress={() => { Box7() }}>
                                                <FlatList
                                                    data={Names.magicboxdetail}
                                                    keyExtractor={(item) => item.key}
                                                    renderItem={({ item, index }) =>
                                                        <View>
                                                            {item.number == 4 &&
                                                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Image source={require('./assets/main-yellow3.png')} />
                                                                    <View>
                                                                        {item.numbervalue != 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 7 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>{item.numbervalue}</Text>
                                                                            </View>
                                                                        }
                                                                        {item.numbervalue == 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 5 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>0</Text>
                                                                            </View>
                                                                        }
                                                                    </View>
                                                                </View>}
                                                        </View>} />
                                            </TouchableOpacity>
                                        </Animated.View>
                                        <Animated.View style={[{ borderRightWidth: 1, width: '31%', margin: '1%', paddingBottom: '2.5%', paddingTop: '5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                            <TouchableOpacity onPress={() => { Box9() }}>
                                                <FlatList
                                                    data={Names.magicboxdetail}
                                                    keyExtractor={(item) => item.key}
                                                    renderItem={({ item, index }) =>
                                                        <View>
                                                            {item.number == 5 &&
                                                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Image source={require('./assets/main-yellow4.png')} />
                                                                    <View>
                                                                        {item.numbervalue != 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 7 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>{item.numbervalue}</Text>
                                                                            </View>
                                                                        }
                                                                        {item.numbervalue == 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 5 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>0</Text>
                                                                            </View>
                                                                        }
                                                                    </View>
                                                                </View>}
                                                        </View>} />
                                            </TouchableOpacity>
                                        </Animated.View>
                                        <Animated.View style={[{ width: '31%', margin: '1%', paddingBottom: '2.5%', paddingTop: '5%', paddingRight: '2%' }]} >
                                            <TouchableOpacity onPress={() => { Box11() }}>
                                                <FlatList
                                                    data={Names.magicboxdetail}
                                                    keyExtractor={(item) => item.key}
                                                    renderItem={({ item, index }) =>
                                                        <View>
                                                            {item.number == 6 &&
                                                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Image source={require('./assets/main-yellow5.png')} />
                                                                    <View>
                                                                        {item.numbervalue != 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 7 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>{item.numbervalue}</Text>
                                                                            </View>
                                                                        }
                                                                        {item.numbervalue == 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 5 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>0</Text>
                                                                            </View>
                                                                        }
                                                                    </View>
                                                                </View>}
                                                        </View>} />
                                            </TouchableOpacity>
                                        </Animated.View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                                        <Animated.View style={[{ borderRightWidth: 1, width: '31%', margin: '1%', paddingTop: '5.5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                            <TouchableOpacity onPress={() => { Box13() }}>
                                                <FlatList
                                                    data={Names.magicboxdetail}
                                                    keyExtractor={(item) => item.key}
                                                    renderItem={({ item, index }) =>
                                                        <View>
                                                            {item.number == 7 &&
                                                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Image source={require('./assets/main-yellow6.png')} />
                                                                    <View>
                                                                        {item.numbervalue != 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 7 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>{item.numbervalue}</Text>
                                                                            </View>
                                                                        }
                                                                        {item.numbervalue == 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 5 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>0</Text>
                                                                            </View>
                                                                        }
                                                                    </View>
                                                                </View>
                                                            }
                                                        </View>
                                                    }
                                                />
                                            </TouchableOpacity>
                                            <View>

                                            </View>
                                        </Animated.View>
                                        <Animated.View style={[{ borderRightWidth: 1, width: '31%', margin: '1%', paddingTop: '5.5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                            <TouchableOpacity onPress={() => { Box15() }}>
                                                <FlatList
                                                    data={Names.magicboxdetail}
                                                    keyExtractor={(item) => item.key}
                                                    renderItem={({ item, index }) =>
                                                        <View>
                                                            {item.number == 8 &&
                                                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Image source={require('./assets/main-yellow7.png')} />
                                                                    <View>
                                                                        {item.numbervalue != 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 7 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>{item.numbervalue}</Text>
                                                                            </View>
                                                                        }
                                                                        {item.numbervalue == 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 5 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>0</Text>
                                                                            </View>
                                                                        }
                                                                    </View>
                                                                </View>}
                                                        </View>} />
                                            </TouchableOpacity>
                                        </Animated.View>
                                        <Animated.View style={[{ width: '31%', margin: '1%', paddingTop: '5.5%', paddingRight: '2%' }]} >
                                            <TouchableOpacity onPress={() => { Box17() }}>
                                                <FlatList
                                                    data={Names.magicboxdetail}
                                                    keyExtractor={(item) => item.key}
                                                    renderItem={({ item, index }) =>
                                                        <View>
                                                            {item.number == 9 &&
                                                                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Image source={require('./assets/main-yellow8.png')} />
                                                                    <View>
                                                                        {item.numbervalue != 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 7 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>{item.numbervalue}</Text>
                                                                            </View>
                                                                        }
                                                                        {item.numbervalue == 0 &&
                                                                            <View style={{ flexDirection: 'row', marginLeft: -55 }}>
                                                                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'AvertaStd-Bold', paddingTop: 5 }}>X</Text>
                                                                                <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#fff', marginTop: -15, fontFamily: 'AvertaStd-Bold' }}>0</Text>
                                                                            </View>
                                                                        }
                                                                    </View>
                                                                </View>}
                                                        </View>} />
                                            </TouchableOpacity>
                                        </Animated.View>
                                    </View>
                                </View>}
                            {no1 == true &&
                                <View style={{ margin: 10 }}>
                                    <FlatList
                                        data={Names.magicboxdetail}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.number == 1 &&
                                                    <View style={{ display: 'flex', backgroundColor: '#FEC440', }}>
                                                        <View style={{ backgroundColor: '#fff', borderColor: '#FA7422', borderWidth: 3, alignSelf: 'flex-start', borderTopLeftRadius: 0, borderBottomLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 100, paddingLeft: 40, paddingTop: 10 }}>
                                                            <View style={{}}>
                                                                <Text style={{ color: '#FA7422', fontSize: 34, fontFamily: 'AvertaStd-Bold', marginLeft: -28, marginTop: -5 }}>1</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{}}>
                                                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>NUMBER {item.number}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.Box}</Text></Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.average_desc}</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>{item.numberdescription.title}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.description}</Text></Text>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <TouchableOpacity onPress={() => { Box2() }} style={{ alignSelf: 'flex-end', marginTop: -20 }}>
                                                                <Entypo name='cross' size={40} color='#fff' />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>}
                                            </View>} />
                                </View>}
                            {no2 == true &&
                                <View style={{ margin: 10 }}>
                                    <FlatList
                                        data={Names.magicboxdetail}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.number == 2 &&
                                                    <View style={{ display: 'flex', backgroundColor: '#91A1BD', }}>
                                                        <View style={{ backgroundColor: '#fff', borderColor: '#64748B', borderWidth: 3, alignSelf: 'flex-start', borderTopLeftRadius: 0, borderBottomLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 100, paddingLeft: 40, paddingTop: 10 }}>
                                                            <View style={{}}>
                                                                <Text style={{ color: '#64748B', fontSize: 34, fontFamily: 'AvertaStd-Bold', marginLeft: -28, marginTop: -5 }}>2</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{}}>
                                                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>NUMBER {item.number}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.Box}</Text></Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.average_desc}</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>{item.numberdescription.title}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.description}</Text></Text>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <TouchableOpacity onPress={() => { Box4() }} style={{ alignSelf: 'flex-end', marginTop: -20 }}>
                                                                <Entypo name='cross' size={40} color='#fff' />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>}
                                            </View>} />
                                </View>}
                            {no3 == true &&
                                <View style={{ margin: 10 }}>
                                    <FlatList
                                        data={Names.magicboxdetail}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.number == 3 &&
                                                    <View style={{ display: 'flex', backgroundColor: '#7CC674', }}>
                                                        <View style={{ backgroundColor: '#fff', borderColor: '#439C57', borderWidth: 3, alignSelf: 'flex-start', borderTopLeftRadius: 0, borderBottomLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 100, paddingLeft: 40, paddingTop: 10 }}>
                                                            <View style={{}}>
                                                                <Text style={{ color: '#439C57', fontSize: 34, fontFamily: 'AvertaStd-Bold', marginLeft: -28, marginTop: -5 }}>3</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{}}>
                                                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>NUMBER {item.number}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.Box}</Text></Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.average_desc}</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>{item.numberdescription.title}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.description}</Text></Text>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <TouchableOpacity onPress={() => { Box6() }} style={{ alignSelf: 'flex-end', marginTop: -20 }}>
                                                                <Entypo name='cross' size={40} color='#fff' />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>}
                                            </View>} />
                                </View>}
                            {no4 == true &&
                                <View style={{ margin: 10 }}>
                                    <FlatList
                                        data={Names.magicboxdetail}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.number == 4 &&
                                                    <View style={{ display: 'flex', backgroundColor: '#06AA6F', }}>
                                                        <View style={{ backgroundColor: '#fff', borderColor: '#008649', borderWidth: 3, alignSelf: 'flex-start', borderTopLeftRadius: 0, borderBottomLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 100, paddingLeft: 40, paddingTop: 10 }}>
                                                            <View style={{}}>
                                                                <Text style={{ color: '#008649', fontSize: 34, fontFamily: 'AvertaStd-Bold', marginLeft: -28, marginTop: -5 }}>4</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{}}>
                                                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>NUMBER {item.number}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.Box}</Text></Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.average_desc}</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>{item.numberdescription.title}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.description}</Text></Text>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <TouchableOpacity onPress={() => { Box8() }} style={{ alignSelf: 'flex-end', marginTop: -20 }}>
                                                                <Entypo name='cross' size={40} color='#fff' />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>}
                                            </View>} />
                                </View>}
                            {no5 == true &&
                                <View style={{ margin: 10 }}>
                                    <FlatList
                                        data={Names.magicboxdetail}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.number == 5 &&
                                                    <View style={{ display: 'flex', backgroundColor: '#81D0D4', }}>
                                                        <View style={{ backgroundColor: '#fff', borderColor: '#81D0D4', borderWidth: 3, alignSelf: 'flex-start', borderTopLeftRadius: 0, borderBottomLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 100, paddingLeft: 40, paddingTop: 10 }}>
                                                            <View style={{}}>
                                                                <Text style={{ color: '#81D0D4', fontSize: 34, fontFamily: 'AvertaStd-Bold', marginLeft: -28, marginTop: -5 }}>5</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{}}>
                                                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>NUMBER {item.number}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.Box}</Text></Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.average_desc}</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>{item.numberdescription.title}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.description}</Text></Text>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <TouchableOpacity onPress={() => { Box10() }} style={{ alignSelf: 'flex-end', marginTop: -20 }}>
                                                                <Entypo name='cross' size={40} color='#fff' />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>}
                                            </View>} />
                                </View>}
                            {no6 == true &&
                                <View style={{ margin: 10 }}>
                                    <FlatList
                                        data={Names.magicboxdetail}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.number == 6 &&
                                                    <View style={{ display: 'flex', backgroundColor: '#4F8BBA', }}>
                                                        <View style={{ backgroundColor: '#fff', borderColor: '#306699', borderWidth: 3, alignSelf: 'flex-start', borderTopLeftRadius: 0, borderBottomLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 100, paddingLeft: 40, paddingTop: 10 }}>
                                                            <View style={{}}>
                                                                <Text style={{ color: '#306699', fontSize: 34, fontFamily: 'AvertaStd-Bold', marginLeft: -28, marginTop: -5 }}>6</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{}}>
                                                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>NUMBER {item.number}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.Box}</Text></Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.average_desc}</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>{item.numberdescription.title}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.description}</Text></Text>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <TouchableOpacity onPress={() => { Box12() }} style={{ alignSelf: 'flex-end', marginTop: -20 }}>
                                                                <Entypo name='cross' size={40} color='#fff' />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>}
                                            </View>} />
                                </View>}
                            {no7 == true && 
                                <View style={{ margin: 10 }}>
                                    <FlatList
                                        data={Names.magicboxdetail}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.number == 7 &&
                                                    <View style={{ display: 'flex', backgroundColor: '#D18D79', }}>
                                                        <View style={{ backgroundColor: '#fff', borderColor: '#9D3A26', borderWidth: 3, alignSelf: 'flex-start', borderTopLeftRadius: 0, borderBottomLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 100, paddingLeft: 40, paddingTop: 10 }}>
                                                            <View style={{}}>
                                                                <Text style={{ color: '#9D3A26', fontSize: 34, fontFamily: 'AvertaStd-Bold', marginLeft: -28, marginTop: -5 }}>7</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{}}>
                                                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>NUMBER {item.number}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.Box}</Text></Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.average_desc}</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>{item.numberdescription.title}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.description}</Text></Text>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <TouchableOpacity onPress={() => { Box14() }} style={{ alignSelf: 'flex-end', marginTop: -20 }}>
                                                                <Entypo name='cross' size={40} color='#fff' />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>}
                                            </View>} />
                                </View>}
                            {no8 == true &&
                                <View style={{ margin: 10 }}>
                                    <FlatList
                                        data={Names.magicboxdetail}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.number == 8 &&
                                                    <View style={{ display: 'flex', backgroundColor: '#F57A31', }}>
                                                        <View style={{ backgroundColor: '#fff', borderColor: '#DE1A29', borderWidth: 3, alignSelf: 'flex-start', borderTopLeftRadius: 0, borderBottomLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 100, paddingLeft: 40, paddingTop: 10 }}>
                                                            <View style={{}}>
                                                                <Text style={{ color: '#DE1A29', fontSize: 34, fontFamily: 'AvertaStd-Bold', marginLeft: -28, marginTop: -5 }}>8</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{}}>
                                                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>NUMBER {item.number}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.Box}</Text></Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.average_desc}</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>{item.numberdescription.title}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.description}</Text></Text>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <TouchableOpacity onPress={() => { Box16() }} style={{ alignSelf: 'flex-end', marginTop: -20 }}>
                                                                <Entypo name='cross' size={40} color='#fff' />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>}
                                            </View>} />
                                </View>}
                            {no9 == true &&
                                <View style={{ margin: 10 }}>
                                    <FlatList
                                        data={Names.magicboxdetail}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.number == 9 &&
                                                    <View style={{ display: 'flex', backgroundColor: '#F27AAE', }}>
                                                        <View style={{ backgroundColor: '#fff', borderColor: '#F03891', borderWidth: 3, alignSelf: 'flex-start', borderTopLeftRadius: 0, borderBottomLeftRadius: 100, borderTopRightRadius: 100, borderBottomRightRadius: 100, paddingLeft: 40, paddingTop: 10 }}>
                                                            <View style={{}}>
                                                                <Text style={{ color: '#F03891', fontSize: 34, fontFamily: 'AvertaStd-Bold', marginLeft: -28, marginTop: -5 }}>9</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{}}>
                                                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>NUMBER {item.number}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.Box}</Text></Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.average_desc}</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Black', lineHeight: 24 }}>{item.numberdescription.title}: <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'AvertaStd-Semibold', fontWeight: '700', }}>{item.numberdescription.description}</Text></Text>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <TouchableOpacity onPress={() => { Box18() }} style={{ alignSelf: 'flex-end', marginTop: -20 }}>
                                                                <Entypo name='cross' size={40} color='#fff' />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>}
                                            </View>} />
                                </View>}
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
            <Modal
                animationType="none"
                hardwareAccelerated={true}
                statusBarTranslucent={true}
                transparent={true}
                duration={50}
                useNativeDriver={true}
                onBackdropPress={() => Hide()}
                onRequestClose={() => Hide()}
                visible={show}
                style={{ backgroundColor: '#FFFFFFed', shadowColor: '#000', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                <View style={{ borderRadius: 30, backgroundColor: '#fff', borderBottomColor: "#DA0AE4", width: '100%', borderBottomWidth: 3, shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, marginTop: '-70%', borderLeftColor: '#DA0AE4', borderRightColor: '#DA0AE4', borderLeftWidth: 0.2, borderRightWidth: 0.2 }}>
                    <View style={{ padding: 20, }}>
                        <View style={{ backgroundColor: '#73207C', borderRadius: 14, marginTop: -30, marginBottom: 30, alignSelf: 'flex-start', paddingBottom: 3, paddingTop: 3, paddingRight: 10, paddingLeft: 10 }}>
                            <Text style={{ color: '#fff', fontFamily: 'AvertaStd-Semibold', fontSize: 14, textAlign: 'center' }}>Try Another Name</Text>
                        </View>
                        <Text style={{ fontFamily: 'AvertaStd-Regular', fontSize: 22, color: '#000' }}>Enter Name</Text>
                        <TextInput placeholder='Enter Name'
                            placeholderTextColor='#828282'
                            autoCapitalize='sentences'
                            onChangeText={names => setnames(names)}
                            value={names}
                            style={{ color: '#DA0AE4', fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#EBEBEB' }} />
                        <TouchableOpacity onPress={() => { EditName() }}>
                            <View style={{ backgroundColor: '#65096F', borderRadius: 8, padding: 10, alignSelf: 'center', marginTop: 50 }}>
                                <Text style={{ fontFamily: 'AvertaStd-Semibold', fontSize: 16, color: '#fff' }}>GET COMPATIBILITY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default NameCompatibilityCheck