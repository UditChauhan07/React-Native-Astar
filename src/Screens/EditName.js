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
import Loader from './Loader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Moment from 'moment';

var db = openDatabase({ name: 'AStar8.db' });

const EditName = ({ navigation }) => {

    const EditNameChange = useSelector(state => state.EditNameChange)
    console.log("EditNameChange", EditNameChange);
    const Data = useSelector(state => state.Data)
    console.error(Data.userdetail.userid);

    const [newname, setnewname] = useState([])
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
    const [news, setnews] = useState(false)
    const [loading, setloading] = useState(false)
    const [zodiac, setzodiac] = useState([])
    const [pos, setpos] = useState('')
    const [posdata, setposdata] = useState('')
    const [neg, setneg] = useState('')
    const [negdata, setnegdata] = useState('')



    useEffect(() => {
        setloading(true)
        var currentDate = Moment().format('YYYY-MM-DD')
        let bodyFormData = { 'userid': EditNameChange.userid, 'name': EditNameChange.name, 'check_date':currentDate }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/editanotherusernamecompatibilitycheck`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.error(data);
                setnewname(data)
                setpos(data.anothernamenamedesc.positive_title)
                setposdata(data.anothernamenamedesc.positive_desc)
                setneg(data.anothernamenamedesc.negative_title)
                setnegdata(data.anothernamenamedesc.negative_desc)
                var per = data.namecompatibilitypercentage
                setper(per)
                console.warn(per);
                setnum(data.magicboxdetail)
                setloading(false)
            })
            .catch(error => {
                console.warn(error.response)
                setloading(false)
            })

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

    const pop = (news) => {
        setnews(news)
    }
    const closepop = () => {
        setnews(false)
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

    const Editname = () => {
        setloading(true)
        var currentDate = Moment().format('YYYY-MM-DD')
        let bodyFormData = { 'userid': name.userid, 'name': names, 'check_date':currentDate }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/editanotherusernamecompatibilitycheck`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.log(data);
                setnewname(data)
                var per = data.namecompatibilitypercentage
                setper(per)
                hide(false)
                setloading(false)
            })
            .catch(error => {
                console.warn(error.response)
                setloading(false)
            })
    }

    const back = () => {
        navigation.navigate('NameCompatibilityCheck')
    }

    const Verify = () => {
        setloading(true)
        let bodyFormData = { 'userid': Data.userdetail.userid, 'name': newname.name, 'status': 1 }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/updateanothernameverification`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.log(data);
                db.transaction((tx) => {
                    tx.executeSql(
                        "UPDATE userdetail SET fullname='" + data.update_name + "' WHERE userid=" + Data.userdetail.userid,
                        [],
                        (tx, results) => {
                            db.transaction((tx) => {
                                tx.executeSql(
                                    "SELECT * FROM userdetail",
                                    [],
                                    (tx, results) => {
                                        var temp = [];
                                        for (let i = 0; i < results.rows.length; ++i) {
                                            console.error("userdetail", results.rows.item(i));
                                            setname(results.rows.item(i))
                                        }
                                    }
                                );
                            });
                        }
                    );
                });
                navigation.navigate('Dashboard')
                setnews(false)
                setloading(false)
            })
            .catch(error => {
                console.warn(error.response)
                setloading(false)
            })
    }

    const No = () => {
        setloading(true)
        let bodyFormData = { 'userid': name.userid, 'name': EditNameChange.name, 'status': 0 }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/updateanothernameverification`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.log(data);
                navigation.navigate('Dashboard')
                setnews(false)
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
                        <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', marginLeft: 20, marginTop: 23 }}>
                            <TouchableOpacity onPress={() => { back() }}
                                style={{ paddingTop: 7, paddingRight: 2, alignSelf: 'center' }}>
                                <Icons name="left" size={15} color="#007AFF" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                            <Text style={{ color: '#3B2F5C', fontSize: 22, fontFamily: 'AvertaStd-Semibold' }}>Compatibility Check</Text>
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
                    <View style={{ margin: 10, height: 52, backgroundColor: '#FFFFFFed', borderRadius: 12, }}>
                        <View style={{ backgroundColor: '#65096F', height: 17, width: 183, borderRadius: 12, marginTop: -10, marginLeft: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View >
                                <Text style={{ color: '#fff', fontSize: 10, paddingLeft: 10, paddingTop: 2, fontFamily: 'AvertaStd-Bold' }}>NAME COMPATIBILITY</Text>
                            </View>
                            <TouchableOpacity onPress={() => { back() }}>
                                <View style={{ height: 25, backgroundColor: '#65096F', justifyContent: 'center', marginTop: -5, width: 40, alignItems: 'center', borderRadius: 8 }}>
                                    <Icons name="left" size={15} color="#fff" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#3B2F5C', fontSize: 22, fontFamily: 'AvertaStd-Semibold', paddingLeft: 15, paddingTop: 5 }}>{newname.name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => { pop() }}>
                                    <View style={{ marginRight: 10 }}>
                                        <Image source={require('./assets/check-round.png')} style={{ width: 42, height: 42 }} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { Show() }}>
                                    <View style={{ width: 42, height: 40, borderRadius: 8, borderWidth: 3, borderColor: '#65096F', alignItems: 'center', justifyContent: 'center', backgroundColor: "#FCE9F9", marginRight: 10 }}>
                                        <MaterialIcons name="edit" size={28} color='#65096F' />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <KeyboardAwareScrollView>
                        <View style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: '#FFFFFF', marginLeft: 15, marginRight: 15, marginTop: 15, flex: 1 }}>
                            {per >= 71 &&
                                <View style={{ borderRadius: 12, backgroundColor: '#6CC335', alignSelf: 'center', marginTop: -10, paddingBottom: 2, paddingTop: 2, paddingLeft: 15, paddingRight: 15, marginBottom: 10 }}>
                                    <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'center' }}>EXCELLENT</Text>
                                </View>}
                            {per <= 30 &&
                                <View style={{ borderRadius: 12, backgroundColor: '#EF3C25', alignSelf: 'center', marginTop: -10, paddingBottom: 2, paddingTop: 2, paddingLeft: 15, paddingRight: 15, marginBottom: 10 }}>
                                    <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'center' }}>BAD</Text>
                                </View>}
                            {per >= 31 &&
                                <View>
                                    {per <= 70 &&
                                        <View style={{ borderRadius: 12, backgroundColor: '#FDA73C', alignSelf: 'center', marginTop: -10, paddingBottom: 2, paddingTop: 2, paddingLeft: 15, paddingRight: 15, marginBottom: 10 }}>
                                            <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#fff', textAlign: 'center' }}>Good</Text>
                                        </View>}
                                </View>}
                            {per >= 71 &&
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFF5', marginLeft: 10, marginRight: 10 }}>
                                    <View style={{ alignSelf: 'center', paddingTop: 10, position: 'relative', }}>
                                        <Speedometers
                                            value={newname.namecompatibilitypercentage}
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
                                                <Text style={{ fontSize: 42, color: '#6CC335', fontWeight: 'bold' }}>{newname.namecompatibilitypercentage}</Text>
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
                                                    value={newname.namecompatibilitypercentage}
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
                                                        <Text style={{ fontSize: 42, color: '#FDA73C', fontWeight: 'bold' }}>{newname.namecompatibilitypercentage}</Text>
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
                                            value={newname.namecompatibilitypercentage}
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
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '-30%' }}>
                                            <View style={{ marginTop: -15, flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 42, color: '#EF3C25', fontWeight: 'bold' }}>{newname.namecompatibilitypercentage}</Text>
                                                <Text style={{ fontSize: 24, color: '#EF3C25', paddingTop: 15 }}>%</Text>
                                            </View>
                                            <View style={{ marginTop: 10 }}>
                                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#EF3C25' }}>MATCH</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>}
                            <View style={{ flexDirection: 'row', margin: 10 }}>
                                <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{pos} :</Text>
                                <Text style={{ color: '#000', maxWidth: '85%' }}>{posdata}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 10,  marginBottom: 10 }}>
                                <Text style={{ color: '#000', fontFamily: 'AvertaStd-Bold' }}>{neg} :</Text>
                                <Text style={{ color: '#000', maxWidth: '80%' }}>{negdata}</Text>
                            </View>

                            <View style={{ marginLeft: '1.5%', marginBottom: '3%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingBottom: 0, borderBottomWidth: 1, borderColor: '#F1F1F1' }}>
                                    <Animated.View style={[{ opacity: fadeAnim, borderRightWidth: 1, width: '31%', margin: '1%', paddingBottom: '2.5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                        <FlatList
                                            data={newname.magicboxdetail}
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
                                    </Animated.View>
                                    <Animated.View style={[{ opacity: fadeAnim1, borderRightWidth: 1, width: '31%', margin: '1%', paddingBottom: '2.5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                        <FlatList
                                            data={newname.magicboxdetail}
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
                                    </Animated.View>
                                    <Animated.View style={[{ opacity: fadeAnim2, width: '31%', margin: '1%', paddingBottom: '2.5%', paddingRight: '2%', }]} >
                                        <FlatList
                                            data={newname.magicboxdetail}
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
                                    </Animated.View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: '-2.5%', marginTop: '-2.5%', borderBottomWidth: 1, borderColor: '#F1F1F1' }}>
                                    <Animated.View style={[{ opacity: fadeAnim3, borderRightWidth: 1, width: '31%', margin: '1%', paddingBottom: '2.5%', paddingTop: '5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                        <FlatList
                                            data={newname.magicboxdetail}
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
                                    </Animated.View>
                                    <Animated.View style={[{ opacity: fadeAnim4, borderRightWidth: 1, width: '31%', margin: '1%', paddingBottom: '2.5%', paddingTop: '5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                        <FlatList
                                            data={newname.magicboxdetail}
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
                                    </Animated.View>
                                    <Animated.View style={[{ opacity: fadeAnim5, width: '31%', margin: '1%', paddingBottom: '2.5%', paddingTop: '5%', paddingRight: '2%' }]} >
                                        <FlatList
                                            data={newname.magicboxdetail}
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
                                    </Animated.View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>
                                    <Animated.View style={[{ opacity: fadeAnim6, borderRightWidth: 1, width: '31%', margin: '1%', paddingTop: '5.5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                        <FlatList
                                            data={newname.magicboxdetail}
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
                                                        </View>}
                                                </View>} />
                                        <View>
                                        </View>
                                    </Animated.View>
                                    <Animated.View style={[{ opacity: fadeAnim7, borderRightWidth: 1, width: '31%', margin: '1%', paddingTop: '5.5%', paddingRight: '2%', borderColor: '#F1F1F1' }]} >
                                        <FlatList
                                            data={newname.magicboxdetail}
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
                                    </Animated.View>
                                    <Animated.View style={[{ opacity: fadeAnim8, width: '31%', margin: '1%', paddingTop: '5.5%', paddingRight: '2%' }]} >
                                        <FlatList
                                            data={newname.magicboxdetail}
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
                                    </Animated.View>
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
                        <View style={{ backgroundColor: '#73207C', borderRadius: 14, marginTop: -30, marginBottom: 30, paddingBottom: 3, paddingTop: 3, paddingLeft: 10, paddingRight: 10, alignSelf: 'flex-start' }}>
                            <Text style={{ color: '#fff', fontFamily: 'AvertaStd-Semibold', fontSize: 14, textAlign: 'center' }}>Try Another Name</Text>
                        </View>
                        <Text style={{ fontFamily: 'AvertaStd-Regular', fontSize: 22, color: '#000' }}>Enter Name</Text>
                        <TextInput placeholder='Enter Name'
                            placeholderTextColor='#828282'
                            autoCapitalize='sentences'
                            onChangeText={names => setnames(names)}
                            value={names}
                            style={{ color: '#DA0AE4', fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#EBEBEB' }} />
                        <TouchableOpacity onPress={() => { Editname() }}>
                            <View style={{ backgroundColor: '#65096F', borderRadius: 8, padding: 10, alignSelf: 'center', marginTop: 50 }}>
                                <Text style={{ fontFamily: 'AvertaStd-Semibold', fontSize: 16, color: '#fff' }}>GET COMPATIBILITY</Text>
                            </View>
                        </TouchableOpacity>
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
                onBackdropPress={() => closepop()}
                onRequestClose={() => closepop()}
                visible={news}
                style={{ backgroundColor: '#FFFFFFed', shadowColor: '#000', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                <View style={{ borderRadius: 30, backgroundColor: '#fff', borderBottomColor: "#DA0AE4", width: '100%', borderBottomWidth: 3, shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, marginTop: '-70%', borderLeftColor: '#DA0AE4', borderRightColor: '#DA0AE4', borderLeftWidth: 0.2, borderRightWidth: 0.2 }}>
                    <View style={{ padding: 20, alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'AvertaStd-Semibold', fontSize: 20, color: '#65096F' }}>Do you want to change your name permanently</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 20 }}>
                        <TouchableOpacity onPress={() => { No() }}
                            style={{ backgroundColor: '#65096F', paddingBottom: 10, paddingTop: 10, paddingLeft: 40, paddingRight: 40, alignSelf: 'center', borderRadius: 10, }}>
                            <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Semibold', color: '#fff', textAlign: 'center' }}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Verify() }}
                            style={{ backgroundColor: '#65096F', paddingBottom: 10, paddingTop: 10, paddingLeft: 40, paddingRight: 40, alignSelf: 'center', borderRadius: 10, }}>
                            <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Semibold', color: '#fff', textAlign: 'center' }}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default EditName