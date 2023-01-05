import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TextInput, Animated, FlatList, ScrollView, Dimensions } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { openDatabase } from 'react-native-sqlite-storage';
import Moment from 'moment';
import axios from 'axios';
import { Other, OneToOne, Names } from '../ReduxFloder/action';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('screen').width;
console.error("windowWidth", windowWidth);

var db = openDatabase({ name: 'AStar8.db' });

const Element = ({ navigation }) => {

    const dispatch = useDispatch();
    const Ele = useSelector(state => state.Ele)
    console.error(Ele);
    const [ele, setele] = useState([])
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
    const [show, hide] = useState(false)
    const [data, setdata] = useState([])


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
                "SELECT * FROM moduletypes",
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setdata(temp);
                }
            );
        });

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
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', marginLeft: 20, marginTop: 23 }}>
                                <TouchableOpacity onPress={() => SelectTab()}
                                    style={{ paddingTop: 7, paddingRight: 2, alignSelf: 'center' }}>
                                    <Icons name="left" size={15} color="#007AFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', margin: 20, alignSelf: 'center' }}>
                                <Text style={{ color: '#65096F', fontSize: 24, fontFamily: 'AvertaStd-Semibold' }}>Elements and You</Text>
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
                    <View style={{ backgroundColor: '#FFFFFFa1', borderTopRightRadius: 12, borderTopLeftRadius: 12, shadowColor: '#000000', shadowOpacity: 0.2, elevation: 1, flex: 1 }}>
                        <View>
                            <View style={{ alignItems: 'center' }}>
                                {Ele.element.element == 'Fire' &&
                                    <LottieView source={require('./assets/fireflame.json')} autoPlay loop style={{ width: 80, height: 250, marginTop: -15, marginBottom: -50 }} />
                                }
                                {Ele.element.element == 'Water' &&
                                    <LottieView source={require('./assets/liquid-water-drop.json')} autoPlay loop style={{ width: 80, height: 200 }} />
                                }
                                {Ele.element.element == 'Air' &&
                                    <LottieView source={require('./assets/astar-element-air.json')} autoPlay loop style={{ width: 80, height: 200 }} />
                                }
                                {Ele.element.element == 'Earth' &&
                                    <LottieView source={require('./assets/earth-globe-looped-icon.json')} autoPlay loop style={{ width: 80, height: 200 }} />
                                }
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ color: '#3B2F5C', textAlign: 'center', fontSize: 23, fontWeight: '500', fontFamily: 'AvertaStd-Semibold' }}>Your Element : </Text>
                                    <Text style={{ color: '#65096F', textAlign: 'center', fontSize: 23, fontWeight: '900', fontFamily: 'AvertaStd-Semibold' }}>{(Ele.element.element).toUpperCase()}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <ScrollView>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#DFDFF5', marginLeft: 10, marginRight: 10 }}>
                                    <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', padding: 15, }}>{Ele.element.description}</Text>
                                </View>
                                <View style={{ margin: 20 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                                        <Text style={{ fontFamily: 'AvertaStd-Black', fontSize: 22, color: '#3B2F5C', fontWeight: '900' }}>Compatible</Text>
                                        <Text style={{ color: '#007AFF', fontSize: 30, fontWeight: "100" }}>|</Text>
                                        <Text style={{ fontFamily: 'AvertaStd-Black', fontSize: 22, color: '#3B2F5C', fontWeight: '900' }}>Non-Compatible</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View style={{ alignSelf: 'center', }}>
                                            <Text style={{ textAlign: 'center', color: '#43B8AD', fontFamily: 'AvertaStd-Bold' }}>{(Ele.compatible_elements.compatible_element).toUpperCase()}</Text>
                                            {Ele.compatible_elements.compatible_element == 'Fire' &&
                                                <LottieView source={require('./assets/fireflame.json')} autoPlay loop style={{ height: 57 }} />
                                            }
                                            {Ele.compatible_elements.compatible_element == 'Water' &&
                                                <LottieView source={require('./assets/liquid-water-drop.json')} autoPlay loop style={{ height: 57 }} />
                                            }
                                            {Ele.compatible_elements.compatible_element == 'Air' &&
                                                <LottieView source={require('./assets/astar-element-air.json')} autoPlay loop style={{ height: 57 }} />
                                            }
                                            {Ele.compatible_elements.compatible_element == 'Earth' &&
                                                <LottieView source={require('./assets/earth-globe-looped-icon.json')} autoPlay loop style={{ height: 77 }} />
                                            }
                                        </View>
                                        <View style={{ marginLeft: '-20%', alignSelf: 'center' }}>
                                            {/* <Image source={require('./assets/arrow02.png')} style={{ width: windowWidth / 1.1, height: 150 }} /> */}
                                            <Image source={require('./assets/arrow01.png')} style={{width: 344,height:149}}/>
                                        </View>
                                        <View style={{ alignSelf: 'center', marginLeft: '-20%', marginTop: 20 }}>
                                            {Ele.uncompatible_elements.uncompatible_element == 'Fire' &&
                                                <LottieView source={require('./assets/fireflame.json')} autoPlay loop style={{ height: 57 }} />
                                            }
                                            {Ele.uncompatible_elements.uncompatible_element == 'Water' &&
                                                <LottieView source={require('./assets/liquid-water-drop.json')} autoPlay loop style={{ height: 57 }} />
                                            }
                                            {Ele.uncompatible_elements.uncompatible_element == 'Air' &&
                                                <LottieView source={require('./assets/astar-element-air.json')} autoPlay loop style={{ height: 57 }} />
                                            }
                                            {Ele.uncompatible_elements.uncompatible_element == 'Earth' &&
                                                <LottieView source={require('./assets/earth-globe-looped-icon.json')} autoPlay loop style={{ height: 77 }} />
                                            }
                                            <Text style={{ textAlign: 'center', color: '#FF714B', fontFamily: 'AvertaStd-Bold' }}>{(Ele.uncompatible_elements.uncompatible_element).toUpperCase()}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                        <View style={{ flexDirection: 'row', marginLeft: -10 }}>
                                            <Text style={{ fontFamily: 'AvertaStd-Regular', maxWidth: '70%', color: '#000', alignSelf: 'flex-start' }}>{Ele.compatible_elements.compatible_elementdesc}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: -40 }}>
                                            <Text style={{ fontFamily: 'AvertaStd-Regular', maxWidth: '65%', color: '#000', alignSelf: 'flex-start' }}>{Ele.uncompatible_elements.uncompatible_elementdesc}</Text>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
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
                            <Image source={require('./assets/user.png')} style={{ width: 25, height: 25 }} />
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

export default Element