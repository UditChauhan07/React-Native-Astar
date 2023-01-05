import React, { useState, useEffect, useRef } from "react";
import { View, Text, SafeAreaView, ImageBackground, Image, ScrollView, TouchableOpacity, FlatList, Animated, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Car from 'react-native-vector-icons/Ionicons';
import Diamond from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { openDatabase } from 'react-native-sqlite-storage';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo'
import { Names, ProfileImage } from '../ReduxFloder/action';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import Loader from "./Loader";
import SimpleGradientProgressbarView from "react-native-simple-gradient-progressbar-view";
import YoutubePlayer from 'react-native-youtube-iframe';
import Moment from "moment";

var db = openDatabase({ name: 'AStar8.db' });



const UserProfile = ({ navigation }) => {

    const dispatch = useDispatch();
    const Data = useSelector(state => state.Data)
    const [data, setdata] = useState([])
    const [table, settable] = useState([])
    const [num, setnum] = useState([])
    const [patner, setpatner] = useState([])
    const [luck, setlucky] = useState([])
    const [planet, setplanet] = useState([])
    const [cycle, setcycle] = useState([])
    const [reading, setreading] = useState([])
    const [life, setlife] = useState([])
    const [fav, setfav] = useState([])
    const [unfav, setunfav] = useState([])
    const [isVisible, visible] = useState(false)
    const [iscol, col] = useState(false)
    const [ismet, met] = useState(false)
    const [isgem, gem] = useState(false)
    const [ismnth, mnth] = useState(false)
    const [sign, setsign] = useState(false)
    const [isfavno, favno] = useState(false)
    const [isfavno1, favno1] = useState(false)
    const [isunfavno, unfavno] = useState(false)
    const [isunfavdays, unfavdays] = useState(false)
    const [isunfavmnth, unfavmnth] = useState(false)
    const [isreadno, readno] = useState(false)
    const [names, setnames] = useState([])
    const [zodiac, setzodiac] = useState([])
    const [iscon, con] = useState(false)
    const [loading, setloading] = useState(false)
    const [loder, setloder] = useState(false)
    const [profile, setprofile] = useState('')
    const [per, setper] = useState([])
    const [wid, setwid] = useState()
    const [playing, setPlaying] = useState(false);
    const [play, setplay] = useState([])


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
                        setper(results.rows.item(i).namepercentage)
                        setwid(results.rows.item(i).removewidgets)
                    }
                }
            );
        });

        setTimeout(() => {
            setloder(true)
            let body = { 'data': 'all' }
            console.error(body);
            axios({
                method: 'POST',
                url: `https://astar.7kstartup.com/public/api/videolist`, // Video List API
                data: body,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(({ data, status }) => {
                    console.warn("live api of date star", data)
                    setplay(data.video_list)
                    setloder(false)
                })
                .catch(error => {
                    console.warn(error)
                    setloder(false)
                })
        }, 200);


        console.error(profile);
        const unsubscribe = navigation.addListener('focus', () => {
            setloading(true)
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

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM primarydetail",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setnum(temp);
                    }
                );
            });

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM compatiblepartner",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setpatner(temp);
                    }
                );
            });

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM luckyparameters",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setlucky(temp);
                    }
                );
            });

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM planetdetail",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setplanet(temp);
                    }
                );
            });

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM lifecycles",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setcycle(temp);
                    }
                );
            });

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM namereading",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setreading(temp);
                    }
                );
            });

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM lifechanges",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setlife(temp);
                    }
                );
            });

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM favparameter",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setfav(temp);
                    }
                );
            });

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM unfavparameters",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i)
                            temp.push(results.rows.item(i));
                        setunfav(temp);
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
                            setper(results.rows.item(i).namepercentage)
                            setwid(results.rows.item(i).removewidgets)
                        }
                    }
                );
            });

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM zodiacdetail",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i) {
                            setzodiac(results.rows.item(i))
                        }
                    }
                );
            });
            setloading(false)

            tryOut();
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

    const test = () => {
        navigation.navigate('Reading')
    }

    const test1 = () => {
        navigation.navigate('Compatibility')
    }

    const test2 = () => {
        navigation.navigate('Fav')
    }

    const Visible = (isVisible) => {
        visible(isVisible)
    }

    const Color = (iscol) => {
        col(iscol)
    }

    const Metal = (ismet) => {
        met(ismet)
    }

    const Gem = (isgem) => {
        gem(isgem)
    }

    const Month = (ismnth) => {
        mnth(ismnth)
    }
    const Zodic = (sign) => {
        setsign(sign)
    }
    const Favno = (isfavno) => {
        favno(isfavno)
    }
    const Favno1 = (isfavno1) => {
        favno1(isfavno1)
    }
    const UnFavno = (isunfavno) => {
        unfavno(isunfavno)
    }
    const UnFavdays = (isunfavdays) => {
        unfavdays(isunfavdays)
    }

    const UnFavmnth = (isunfavmnth) => {
        unfavmnth(isunfavmnth)
    }

    const ReadingNo = (isreadno) => {
        readno(isreadno)
    }

    const closedreadno = () => {
        readno(false)
    }

    const GoBack = () => visible(false);

    const Back = () => col(false);

    const Mback = () => met(false)

    const Gback = () => gem(false)

    const Mnback = () => mnth(false)

    const Favnoclosed = () => favno(false)

    const Favnoclosed1 = () => favno1(false)

    const UnFavnoclosed = () => unfavno(false)

    const ClosedUnFavmnth = () => unfavmnth(false)

    const UnFavdaysclosed = () => unfavdays(false)

    const closeZodic = () => setsign(false)

    const Logout = () => {
        AsyncStorage.clear();
        navigation.navigate('Login')
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
        }, 500);

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

    const test8 = () => {
        let bodyFormData = { 'userid': Data.userdetail.userid, }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/usernamecompatibilitycheck`, // Signup API
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
        con(false)
    }

    const test9 = () => {
        con(false)
        navigation.navigate('Compatibility5')
    }

    const Imageupload = async () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image.path);
            setloading(true)
            let body = new FormData()
            body.append('userid', Data.userdetail.userid)
            body.append('profile_pic', { uri: image.path, name: 'profile_pic.png', filename: 'imageName.png', type: 'image/png' })
            body.append('Content-Type', 'image/png');
            console.warn(JSON.stringify(body));
            fetch('https://astar.7kstartup.com/public/api/uploadprofilepic', {
                method: 'POST', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }, body: body
            })
                .then((response) => (response.json()))
                .then((res) => {
                    console.log(res);
                    db.transaction((tx) => {
                        tx.executeSql(
                            "UPDATE userdetail SET profile_pic='" + res.profile_pic + "' WHERE userid=" + names.userid,
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
                                                setnames(results.rows.item(i))
                                            }
                                        }
                                    );
                                });
                            }
                        );
                    });
                    setprofile(res.profile_pic)
                    dispatch(ProfileImage(res.profile_pic))
                    setloading(false)
                })
                .catch(error => {
                    console.warn(error)
                    setloading(false)
                })
        });
    }

    const Addwidgets = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE userdetail SET removewidgets=1 WHERE userid=' + names.userid,
                [],
                (tx, results) => {
                    console.error(results);
                    db.transaction((tx) => {
                        setloading(true)
                        tx.executeSql(
                            "SELECT * FROM userdetail",
                            [],
                            (tx, results) => {
                                var temp = [];
                                for (let i = 0; i < results.rows.length; ++i) {
                                    console.error("userdetail", results.rows.item(i));
                                    setnames(results.rows.item(i))
                                    setwid(results.rows.item(i).removewidgets)
                                    setloading(false)
                                }
                            }
                        );
                    });
                }
            );
        });
    }

    const Removewidgets = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE userdetail SET removewidgets=0 WHERE userid=' + names.userid,
                [],
                (tx, results) => {
                    console.error(results);
                    db.transaction((tx) => {
                        setloading(true)
                        tx.executeSql(
                            "SELECT * FROM userdetail",
                            [],
                            (tx, results) => {
                                var temp = [];
                                for (let i = 0; i < results.rows.length; ++i) {
                                    console.error("userdetail", results.rows.item(i));
                                    setnames(results.rows.item(i))
                                    setwid(results.rows.item(i).removewidgets)
                                    setloading(false)
                                }
                            }
                        );
                    });
                }
            );
        });
    }

    const Playing = () => {
        setPlaying(true)
    }

    const Ask = () => {
        navigation.navigate('AskQuestion')
    }

    const Seen = () => {
        let body = { 'userid': Data.userdetail.userid, 'seenstatus': 1 }
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

    const video = () => {
        navigation.navigate('Video')
    }

    const editProfile = () => {
        navigation.navigate('EditProfile')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? <Loader showloading={loading} /> : null}
            <ImageBackground source={require('./assets/DashboardBackgroundImage.png')} style={{ flex: 1, zIndex: -222 }}>
                <ImageBackground source={require('./assets/user-details-profile-bg.png')} style={{ height: 263, width: '100%', marginBottom: 5 }} imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30, }}>
                    <View style={{ alignSelf: 'center', marginTop: 30, flexDirection: 'row' }}>
                        {names.profile_pic != "" &&
                            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                                <Image source={names.profile_pic !== "" ? { uri: names.profile_pic } : require('./assets/user-details-profile.png')} style={{ height: 87, width: 87, borderColor: '#fff', borderWidth: 3, borderRadius: 60 }} />
                                <TouchableOpacity onPress={() => { Imageupload() }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 50, borderColor: '#65096F', height: 25, width: 25, alignItems: 'center', alignContent: 'center', marginLeft: -20, marginTop: 5, borderWidth: 1, justifyContent: 'center' }}>
                                        <Icon name='edit' size={13} color='#65096F' />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                        {names.profile_pic == "" &&
                            <View style={{ paddingTop: 10, paddingRight: 10, flexDirection: 'row', }}>
                                <View style={{ borderColor: '#fff', borderWidth: 3, borderRadius: 80 / 2, height: 80, width: 80, padding: 10 }}>
                                    {zodiac.zodiac_sign == "CANCER" &&
                                        <Icons name="zodiac-cancer" size={55} color="#fff" />}
                                    {zodiac.zodiac_sign == "ARIES" &&
                                        <Icons name="zodiac-aries" size={55} color="#fff" />}
                                    {zodiac.zodiac_sign == "TAURUS" &&
                                        <Icons name="zodiac-taurus" size={55} color="#fff" />}
                                    {zodiac.zodiac_sign == "GEMINI" &&
                                        <Icons name="zodiac-gemini" size={55} color="#fff" />}
                                    {zodiac.zodiac_sign == "LEO" &&
                                        <Icons name="zodiac-leo" size={55} color="#fff" />}
                                    {zodiac.zodiac_sign == "VIRGO" &&
                                        <Icons name="zodiac-virgo" size={55} color="#fff" />}
                                    {zodiac.zodiac_sign == "LIBRA" &&
                                        <Icons name="zodiac-libra" size={55} color="#fff" />}
                                    {zodiac.zodiac_sign == "SCORPIO" &&
                                        <Icons name="zodiac-scorpio" size={55} color="#fff" />}
                                    {zodiac.zodiac_sign == "SAGITTARIUS" &&
                                        <Icons name="zodiac-sagittarius" size={55} color="#fff" />}
                                    {zodiac.zodiac_sign == "CAPRICORN" &&
                                        <Icons name="zodiac-capricorn" size={55} color="#fff" />}
                                    {zodiac.zodiac_sign == "AQUARIUS" &&
                                        <Icons name="zodiac-aquarius" size={55} color="#fff" />}
                                    {zodiac.zodiac_sign == "PISCES" &&
                                        <Icons name="zodiac-pisces" size={55} color="#fff" />}
                                </View>
                                <TouchableOpacity onPress={() => { Imageupload() }}>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 50, borderColor: '#65096F', height: 25, width: 25, alignItems: 'center', alignContent: 'center', padding: 2, marginLeft: -20, marginTop: 5, borderWidth: 1 }}>
                                        <Icon name='edit' size={18} color='#65096F' />
                                    </View>
                                </TouchableOpacity>
                            </View>}
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: '900', color: '#fff', textAlign: 'center' }}>Hello {names.fullname}</Text>
                    </View>
                    <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, color: '#B8B8BC', textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Born on {Moment(names.dob).format('DD-MM-YYYY')}  ||  {names.gender}</Text>
                        <TouchableOpacity onPress={() => { editProfile() }}>
                            <View style={{ backgroundColor: '#fff', borderRadius: 50, borderColor: '#65096F', height: 25, width: 25, alignItems: 'center', alignContent: 'center', padding: 2, borderWidth: 1, marginLeft: 10 }}>
                                <Icon name='edit' size={18} color='#65096F' />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <View style={{ width: '85%', borderRightColor: '#D1D1D1' }}>
                                <TouchableOpacity onPress={() => { test8() }} style={{ backgroundColor: '#fff', paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, borderBottomLeftRadius: 10, borderTopLeftRadius: 10, borderBottomRightRadius: 5, borderTopRightRadius: 5 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '3%' }}>
                                                <View>
                                                    <Text style={{ fontFamily: 'AvertaStd-Semibold', fontSize: 16, color: '#000' }}>Name Compatibility</Text>
                                                </View>
                                                <View style={{ paddingLeft: 50 }}>
                                                    <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#000' }}>{names.namepercentage}%</Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingBottom: '3%', paddingTop: '2%' }}>
                                                {names.namepercentage >= 71 &&
                                                    <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 5, backgroundColor: '#EBEFF1' }}>
                                                        <SimpleGradientProgressbarView
                                                            style={{ height: 5, marginVertical: 5, borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                            fromColor="#03C057"
                                                            toColor="#8AEB6C"
                                                            duration={4000}
                                                            progress={per / 100}
                                                            maskedCorners={[2, 2, 2, 2]}
                                                            cornerRadius={7.0}
                                                        />
                                                    </View>}
                                                {names.namepercentage <= 30 &&
                                                    <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 5, backgroundColor: '#EBEFF1' }}>
                                                        <SimpleGradientProgressbarView
                                                            style={{ height: 5, marginVertical: 5, borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                            fromColor="#F9978B"
                                                            toColor="#EF3C25"
                                                            duration={4000}
                                                            progress={per / 100}
                                                            maskedCorners={[2, 2, 2, 2]}
                                                            cornerRadius={7.0}
                                                        />
                                                    </View>}
                                                {names.namepercentage >= 31 &&
                                                    <View>
                                                        {names.namepercentage <= 70 &&
                                                            <View style={{ height: 4.5, borderColor: '#000', borderRadius: 12, marginTop: 5, backgroundColor: '#EBEFF1' }}>
                                                                <SimpleGradientProgressbarView
                                                                    style={{ height: 5, marginVertical: 5, borderRadius: 12, width: '100%', marginTop: -0.5, marginLeft: -1 }}
                                                                    fromColor="#FFD9AA"
                                                                    toColor="#FDA73C"
                                                                    duration={4000}
                                                                    progress={per / 100}
                                                                    maskedCorners={[2, 2, 2, 2]}
                                                                    cornerRadius={7.0}
                                                                />
                                                            </View>}
                                                    </View>
                                                }
                                            </View>
                                        </View>
                                        <View style={{ alignSelf: 'center', }}>
                                            {names.namepercentage >= 71 &&
                                                <Image source={require('./assets/Excellent.png')} style={{ width: 32, height: 32 }} />
                                            }
                                            {names.namepercentage <= 30 &&
                                                <Image source={require('./assets/Bad.png')} style={{ width: 32, height: 32 }} />
                                            }
                                            {names.namepercentage >= 31 &&
                                                <View>
                                                    {names.namepercentage <= 70 &&
                                                        <Image source={require('./assets/Good.png')} style={{ width: 32, height: 32 }} />
                                                    }
                                                </View>
                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: -10, marginLeft: -5, zIndex: 99999 }}>
                                <Text style={{ color: '#D1D1D1', fontSize: 50, fontWeight: '100' }}>|</Text>
                            </View>
                            <View style={{ width: '15%', marginLeft: -5 }}>
                                <View style={{ borderBottomLeftRadius: 5, borderTopLeftRadius: 5, borderBottomRightRadius: 10, borderTopRightRadius: 10, backgroundColor: '#fff', paddingTop: '18%' }}>
                                    <View style={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', justifyContent: 'center', }}>
                                        {names.removewidgets == 1 &&
                                            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => { Removewidgets() }}>
                                                <AntDesign name="checksquareo" size={20} color="#65096F" style={{ borderRadius: 3, backgroundColor: '#FCE9F9' }} />
                                            </TouchableOpacity>
                                        }
                                        {names.removewidgets == 0 &&
                                            <TouchableOpacity onPress={() => { Addwidgets() }}>
                                                <View style={{ height: 17, width: 17, backgroundColor: '#FCE9F9', borderWidth: 1, borderColor: '#65096F', borderRadius: 3 }}></View>
                                            </TouchableOpacity>
                                        }
                                    </View>
                                    {names.removewidgets == 1 &&
                                        <View style={{ alignSelf: 'center', paddingTop: 2, paddingBottom: 8 }}>
                                            <Text style={{ maxWidth: '90%', textAlign: 'center', fontFamily: 'AvertaStd-Semibold', color: "#65096F", fontSize: 8 }}>Show On Dashboard</Text>
                                        </View>}
                                    {names.removewidgets == 0 &&
                                        <View style={{ alignSelf: 'center', paddingTop: 5.5, paddingBottom: 8 }}>
                                            <Text style={{ maxWidth: '90%', textAlign: 'center', fontFamily: 'AvertaStd-Semibold', color: "#65096F", fontSize: 8 }}>Show On Dashboard</Text>
                                        </View>}
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <KeyboardAwareScrollView>
                    <View style={{ marginLeft: 20, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, alignItems: 'center' }}>
                        <Text style={{ color: '#3B2F5C', fontSize: 20, fontWeight: 'bold' }}>Information Center</Text>
                        <TouchableOpacity onPress={() => { video() }}>
                            <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View>
                            {loder ? <Loader showloading={loder} /> : null}
                            <FlatList
                                data={play}
                                horizontal={true}
                                keyExtractor={(item) => item.key}
                                renderItem={({ item, index }) =>
                                    <View style={{ alignItems: 'center', borderRadius: 12, overflow: 'hidden', marginBottom: 10, marginTop: 10, marginLeft: 15, }}>
                                        <YoutubePlayer
                                            height={180}
                                            play={playing}
                                            videoId={item.video_code}
                                            width={320}
                                        />
                                    </View>
                                }
                            />
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, marginRight: 20, flex: 1 }}>
                        <Text style={{ color: '#1D115B', fontSize: 20, fontFamily: 'AvertaStd-Semibold' }}>My Personal Profile</Text>
                        <ScrollView>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => ReadingNo(!isreadno)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', justifyContent: 'center', paddingLeft: 10, borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3 }}>
                                            <Diamond name="diamond" size={30} color="#65096F" />
                                        </View>
                                        <FlatList
                                            data={reading}
                                            style={{ marginLeft: -10, zIndex: -1111, marginTop: 9 }}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text style={{ color: '#65096F', fontSize: 12, paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }}>Name Reading</Text>
                                                            <Modal visible={isreadno}
                                                                onBackdropPress={() => closedreadno()}
                                                                onRequestClose={() => closedreadno()}
                                                                style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                                                <View style={{ backgroundColor: '#fff', margin: 20, width: '90%', borderRadius: 12 }}>
                                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                        <View style={{ flexDirection: 'row' }}>
                                                                            <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3, justifyContent: 'center', marginTop: '-10%' }}>
                                                                                <Diamond name="diamond" size={30} color="#65096F" />
                                                                            </View>
                                                                            <Text style={{ color: '#3B2F5C', fontSize: 20, paddingLeft: 10, maxWidth: '80%', fontFamily: 'AvertaStd-Black', paddingTop: 10 }} ellipsizeMode='clip'>Name Reading</Text>
                                                                        </View>
                                                                        <View style={{ marginTop: '-4%', zIndex: 1111 }}>
                                                                            <TouchableOpacity onPress={() => { closedreadno() }}>
                                                                                <Entypo name='squared-cross' size={28} color='#73207C' />
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    </View>
                                                                    <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                                        <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>Your Name Reading No is {item.Chald_number}</Text>
                                                                        <View style={{ flexDirection: 'row', }}>
                                                                            <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 15, fontFamily: 'AvertaStd-Black' }}>{item.Chald_positive_title} :<Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, maxWidth: '70%', fontFamily: 'AvertaStd-Regular', paddingLeft: 12 }}>{item.Chald_positive_desc}</Text></Text>

                                                                        </View>
                                                                        <View style={{ flexDirection: 'row', paddingBottom: 10, marginTop: '-5%' }}>
                                                                            <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 15, fontFamily: 'AvertaStd-Black' }}>{item.Chald_negative_title} :<Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, maxWidth: '80%', fontFamily: 'AvertaStd-Regular' }}>{item.Chald_negative_desc}</Text></Text>

                                                                        </View>
                                                                    </View>
                                                                </View>
                                                            </Modal>
                                                        </View>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Gem(!isgem)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', justifyContent: 'center', paddingLeft: 10, borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3 }}>
                                            <Diamond name="diamond" size={30} color="#65096F" />
                                        </View>
                                        <FlatList
                                            data={data}
                                            style={{ marginLeft: -11, zIndex: -1111, marginTop: 9 }}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    {item.module_type == 16 &&
                                                        <View>
                                                            <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', flexDirection: 'row' }}>
                                                                <Text style={{ color: '#65096F', fontSize: 12, paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }} >Destiny Number</Text>
                                                                <Modal visible={isgem}
                                                                    onBackdropPress={() => Gback()}
                                                                    onRequestClose={() => Gback()}
                                                                    style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                                                    <View style={{ backgroundColor: '#fff', margin: 20, width: '90%', borderRadius: 12 }}>
                                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                            <View style={{ flexDirection: 'row' }}>
                                                                                <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3, justifyContent: 'center', marginTop: '-10%' }}>
                                                                                    <Diamond name="diamond" size={30} color="#65096F" />
                                                                                </View>
                                                                                <Text style={{ color: '#3B2F5C', fontSize: 20, paddingLeft: 10, maxWidth: '80%', fontFamily: 'AvertaStd-Black', paddingTop: 10 }} ellipsizeMode='clip'>Destiny Number</Text>
                                                                            </View>
                                                                            <View style={{ marginTop: '-4%', zIndex: 1111 }}>
                                                                                <TouchableOpacity onPress={() => { Gback() }}>
                                                                                    <Entypo name='squared-cross' size={28} color='#73207C' />
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                        </View>
                                                                        <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                                            <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>Your Destiny Number is {item.number}</Text>
                                                                            <View style={{ flexDirection: 'row', }}>
                                                                                <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 15, fontFamily: 'AvertaStd-Black' }}>{item.learn_title} :<Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, maxWidth: '70%', fontFamily: 'AvertaStd-Regular', paddingLeft: 30 }}>{item.learn_desc}</Text></Text>
                                                                            </View>
                                                                            <View style={{ flexDirection: 'row', paddingBottom: 10, marginTop: '-4%' }}>
                                                                                <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 15, fontFamily: 'AvertaStd-Black' }}>{item.notlearn_title} :<Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, maxWidth: '60%', fontFamily: 'AvertaStd-Regular' }}>{item.notlearn_desc}</Text></Text>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                </Modal>
                                                            </View>
                                                        </View>
                                                    }
                                                </View>
                                            }
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => Favno(!isfavno)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', justifyContent: 'center', paddingLeft: 10, borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3 }}>
                                            <Image source={require('./assets/fav-number.png')} style={{ height: 30, width: 30 }} />
                                        </View>
                                        <FlatList
                                            data={fav}
                                            style={{ marginLeft: -10, zIndex: -1111, marginTop: 9 }}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', flexDirection: 'row' }}>
                                                        <Text style={{ color: '#65096F', fontSize: 12, paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }}>Fav. Numbers</Text>
                                                        <Modal visible={isfavno}
                                                            onBackdropPress={() => Favnoclosed()}
                                                            onRequestClose={() => Favnoclosed()}
                                                            style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                                            <View style={{ backgroundColor: '#fff', margin: 25, width: '90%', borderRadius: 12 }}>
                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3, justifyContent: 'center', marginTop: '-10%' }}>
                                                                            <Image source={require('./assets/fav-number.png')} style={{ height: 30, width: 30 }} />
                                                                        </View>
                                                                        <Text style={{ color: '#3B2F5C', fontSize: 20, paddingLeft: 10, maxWidth: '81%', fontFamily: 'AvertaStd-Black', paddingTop: 10 }} numberOfLines={1} ellipsizeMode='tail'>Favorable Number</Text>
                                                                    </View>
                                                                    <View style={{ marginTop: '-4%', zIndex: 1111 }}>
                                                                        <TouchableOpacity onPress={() => { Favnoclosed() }}>
                                                                            <Entypo name='squared-cross' size={28} color='#73207C' />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                                <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                                    <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>Your Favorable Number are {item.numbers}</Text>
                                                                </View>
                                                            </View>
                                                        </Modal>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Favno1(!isfavno1)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', justifyContent: 'center', paddingLeft: 10, borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3 }}>
                                            <Image source={require('./assets/Unfav-number.png')} style={{ height: 30, width: 30 }} />
                                        </View>
                                        <FlatList
                                            data={unfav}
                                            style={{ marginLeft: -10, zIndex: -1111, marginTop: 9 }}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', flexDirection: 'row' }}>
                                                        <Text style={{ color: '#65096F', fontSize: 12, paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }}>Unfav. Numbers</Text>
                                                        <Modal visible={isfavno1}
                                                            onBackdropPress={() => Favnoclosed1()}
                                                            onRequestClose={() => Favnoclosed1()}
                                                            style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                                            <View style={{ backgroundColor: '#fff', margin: 25, width: '90%', borderRadius: 12 }}>
                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3, justifyContent: 'center', marginTop: '-10%' }}>
                                                                            <Image source={require('./assets/Unfav-number.png')} style={{ height: 30, width: 30 }} />
                                                                        </View>
                                                                        <Text style={{ color: '#3B2F5C', fontSize: 20, paddingLeft: 10, maxWidth: '80%', fontFamily: 'AvertaStd-Black', paddingTop: 10 }} ellipsizeMode='tail'>Non-Favorable Number</Text>
                                                                    </View>
                                                                    <View style={{ marginTop: '-4%', zIndex: 1111 }}>
                                                                        <TouchableOpacity onPress={() => { Favnoclosed1() }}>
                                                                            <Entypo name='squared-cross' size={28} color='#73207C' />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                                <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                                    <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>Your Non-Favorable Number are {item.numbers}</Text>
                                                                </View>
                                                            </View>
                                                        </Modal>
                                                    </View>
                                                </View>}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => Month(!ismnth)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', justifyContent: 'center', paddingLeft: 10, borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3 }}>
                                            <Image source={require('./assets/fav-month.png')} style={{ height: 30, width: 30 }} />
                                        </View>
                                        <FlatList
                                            data={fav}
                                            style={{ marginLeft: -10, zIndex: -1111, marginTop: 9 }}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', flexDirection: 'row' }}>
                                                        <Text style={{ color: '#65096F', fontSize: 12, paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }}>Fav. Months</Text>
                                                        <Modal visible={ismnth}
                                                            onBackdropPress={() => Mnback()}
                                                            onRequestClose={() => Mnback()}
                                                            style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                                            <View style={{ backgroundColor: '#fff', margin: 25, width: '90%', borderRadius: 12 }}>
                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3, justifyContent: 'center', marginTop: '-10%' }}>
                                                                            <Image source={require('./assets/fav-month.png')} style={{ height: 30, width: 30 }} />
                                                                        </View>
                                                                        <Text style={{ color: '#3B2F5C', fontSize: 20, paddingLeft: 10, maxWidth: '81%', fontFamily: 'AvertaStd-Black', paddingTop: 10 }} numberOfLines={1} ellipsizeMode='tail'>Favorable Months</Text>
                                                                    </View>
                                                                    <View style={{ marginTop: '-4%', zIndex: 1111 }}>
                                                                        <TouchableOpacity onPress={() => { Mnback() }}>
                                                                            <Entypo name='squared-cross' size={28} color='#73207C' />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                                <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                                    <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>Your Favorable Months are {item.months}</Text>
                                                                </View>
                                                            </View>
                                                        </Modal>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => UnFavmnth(!isunfavmnth)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', justifyContent: 'center', paddingLeft: 10, borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3 }}>
                                            <Image source={require('./assets/Unfav-months.png')} style={{ height: 30, width: 30 }} />
                                        </View>
                                        <FlatList
                                            data={unfav}
                                            style={{ marginLeft: -10, zIndex: -1111, marginTop: 9 }}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', flexDirection: 'row' }}>
                                                        <Text style={{ color: '#65096F', fontSize: 12, paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }}>Unfav. Months</Text>
                                                        <Modal visible={isunfavmnth}
                                                            onBackdropPress={() => ClosedUnFavmnth()}
                                                            onRequestClose={() => ClosedUnFavmnth()}
                                                            style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                                            <View style={{ backgroundColor: '#fff', margin: 25, width: '90%', borderRadius: 12 }}>
                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3, justifyContent: 'center', marginTop: '-10%' }}>
                                                                            <Image source={require('./assets/Unfav-months.png')} style={{ height: 30, width: 30 }} />
                                                                        </View>
                                                                        <Text style={{ color: '#3B2F5C', fontSize: 20, paddingLeft: 10, maxWidth: '81%', fontFamily: 'AvertaStd-Black', paddingTop: 10 }} numberOfLines={1} ellipsizeMode='tail'>Non-Favorable month</Text>
                                                                    </View>
                                                                    <View style={{ marginTop: '-4%', zIndex: 1111 }}>
                                                                        <TouchableOpacity onPress={() => { ClosedUnFavmnth() }}>
                                                                            <Entypo name='squared-cross' size={28} color='#73207C' />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                                <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                                    <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>Your Non-Favorable month are {item.months}</Text>
                                                                </View>
                                                            </View>
                                                        </Modal>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => UnFavno(!isunfavno)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', justifyContent: 'center', paddingLeft: 10, borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3 }}>
                                            <Image source={require('./assets/fav-days.png')} style={{ height: 30, width: 30 }} />
                                        </View>
                                        <FlatList
                                            data={fav}
                                            style={{ marginLeft: -10, zIndex: -1111, marginTop: 9 }}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', flexDirection: 'row' }}>
                                                        <Text style={{ color: '#65096F', fontSize: 12, paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }}>Fav. Days</Text>
                                                        <Modal visible={isunfavno}
                                                            onBackdropPress={() => UnFavnoclosed()}
                                                            onRequestClose={() => UnFavnoclosed()}
                                                            style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                                            <View style={{ backgroundColor: '#fff', margin: 25, width: '90%', borderRadius: 12 }}>
                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3, justifyContent: 'center', marginTop: '-10%' }}>
                                                                            <Image source={require('./assets/fav-days.png')} style={{ height: 30, width: 30 }} />
                                                                        </View>
                                                                        <Text style={{ color: '#3B2F5C', fontSize: 20, paddingLeft: 10, maxWidth: '81%', fontFamily: 'AvertaStd-Black', paddingTop: 10 }} numberOfLines={1} ellipsizeMode='tail'>Favorable Day's</Text>
                                                                    </View>
                                                                    <View style={{ marginTop: '-4%', zIndex: 1111 }}>
                                                                        <TouchableOpacity onPress={() => { UnFavnoclosed() }}>
                                                                            <Entypo name='squared-cross' size={28} color='#73207C' />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                                <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                                    <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>Your Favorable Days are {item.days}</Text>
                                                                </View>
                                                            </View>
                                                        </Modal>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => UnFavdays(!isunfavdays)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', justifyContent: 'center', paddingLeft: 10, borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3 }}>
                                            <Image source={require('./assets/unfav-days.png')} style={{ height: 30, width: 30 }} />
                                        </View>
                                        <FlatList
                                            data={unfav}
                                            style={{ marginLeft: -10, zIndex: -1111, marginTop: 9 }}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', flexDirection: 'row' }}>
                                                        <Text style={{ color: '#65096F', fontSize: 12, paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }}>Unfav. Days</Text>
                                                        <Modal visible={isunfavdays}
                                                            onBackdropPress={() => UnFavdaysclosed()}
                                                            onRequestClose={() => UnFavdaysclosed()}
                                                            style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                                            <View style={{ backgroundColor: '#fff', margin: 25, width: '90%', borderRadius: 12 }}>
                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3, justifyContent: 'center', marginTop: '-10%' }}>
                                                                            <Image source={require('./assets/unfav-days.png')} style={{ height: 30, width: 30 }} />
                                                                        </View>
                                                                        <Text style={{ color: '#3B2F5C', fontSize: 20, paddingLeft: 10, maxWidth: '81%', fontFamily: 'AvertaStd-Black', paddingTop: 10 }} numberOfLines={1} ellipsizeMode='tail'>Non-Favorable days</Text>
                                                                    </View>
                                                                    <View style={{ marginTop: '-4%', zIndex: 1111 }}>
                                                                        <TouchableOpacity onPress={() => { UnFavdaysclosed() }}>
                                                                            <Entypo name='squared-cross' size={28} color='#73207C' />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                                <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                                    <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>Your Non-Favorable days are {item.days}</Text>
                                                                </View>
                                                            </View>
                                                        </Modal>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => Zodic(!sign)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', justifyContent: 'center', paddingLeft: 15, borderWidth: 1, borderColor: '#65096F', shadowColor: '#000', elevation: 3 }}>
                                            {zodiac.zodiac_sign == "CANCER" &&
                                                <Icons name="zodiac-cancer" size={25} color="#65096F" />
                                            }
                                            {zodiac.zodiac_sign == "ARIES" &&
                                                <Icons name="zodiac-aries" size={25} color="#65096F" />
                                            }
                                            {zodiac.zodiac_sign == "TAURUS" &&
                                                <Icons name="zodiac-taurus" size={25} color="#65096F" />
                                            }
                                            {zodiac.zodiac_sign == "GEMINI" &&
                                                <Icons name="zodiac-gemini" size={25} color="#65096F" />
                                            }
                                            {zodiac.zodiac_sign == "LEO" &&
                                                <Icons name="zodiac-leo" size={25} color="#65096F" />
                                            }
                                            {zodiac.zodiac_sign == "VIRGO" &&
                                                <Icons name="zodiac-virgo" size={25} color="#65096F" />
                                            }
                                            {zodiac.zodiac_sign == "LIBRA" &&
                                                <Icons name="zodiac-libra" size={25} color="#65096F" />
                                            }
                                            {zodiac.zodiac_sign == "SCORPIO" &&
                                                <Icons name="zodiac-scorpio" size={25} color="#65096F" />
                                            }
                                            {zodiac.zodiac_sign == "SAGITTARIUS" &&
                                                <Icons name="zodiac-sagittarius" size={25} color="#65096F" />
                                            }
                                            {zodiac.zodiac_sign == "CAPRICORN" &&
                                                <Icons name="zodiac-capricorn" size={25} color="#65096F" />
                                            }
                                            {zodiac.zodiac_sign == "AQUARIUS" &&
                                                <Icons name="zodiac-aquarius" size={25} color="#65096F" />
                                            }
                                            {zodiac.zodiac_sign == "PISCES" &&
                                                <Icons name="zodiac-pisces" size={25} color="#65096F" />
                                            }
                                        </View>
                                        <View style={{ marginLeft: -10, zIndex: -1111, marginTop: 9 }}>
                                            <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', flexDirection: 'row' }}>
                                                {/* {zodiac.zodiac_sign == "ARIES" && */}
                                                <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 6, paddingTop: 6, fontSize: 12 }}>Zodiac Sign</Text>
                                                {/* } */}
                                                {/* {zodiac.zodiac_sign == "TAURUS" &&
                                                    <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 4, paddingTop: 4 }}>Taurus...</Text>
                                                }
                                                {zodiac.zodiac_sign == "GEMINI" &&
                                                    <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 4, paddingTop: 4 }}>Gemini...</Text>
                                                }
                                                {zodiac.zodiac_sign == "LEO" &&
                                                    <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 4, paddingTop: 4 }}>Leo...</Text>
                                                }
                                                {zodiac.zodiac_sign == "VIRGO" &&
                                                    <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 4, paddingTop: 4 }}>Virgo...</Text>
                                                }
                                                {zodiac.zodiac_sign == "LIBRA" &&
                                                    <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 4, paddingTop: 4 }}>Libra...</Text>
                                                }
                                                {zodiac.zodiac_sign == "SCORPIO" &&
                                                    <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 4, paddingTop: 4 }}>Scorpio...</Text>
                                                }
                                                {zodiac.zodiac_sign == "SAGITTARIUS" &&
                                                    <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 4, paddingTop: 4 }}>Sagittarius...</Text>
                                                }
                                                {zodiac.zodiac_sign == "CAPRICORN" &&
                                                    <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 4, paddingTop: 4 }}>Capricorn...</Text>
                                                }
                                                {zodiac.zodiac_sign == "AQUARIUS" &&
                                                    <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 4, paddingTop: 4 }}>Aquarius...</Text>
                                                }
                                                {zodiac.zodiac_sign == "PISCES" &&
                                                    <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 4, paddingTop: 4 }}>Pisces...</Text>
                                                }
                                                {zodiac.zodiac_sign == "CANCER" &&
                                                    <Text style={{ paddingLeft: 12, color: '#65096F', paddingBottom: 4, paddingTop: 4 }}>Cancer...</Text>
                                                } */}
                                            </View>
                                        </View>
                                    </View>
                                    <Modal visible={sign}
                                        onBackdropPress={() => closeZodic()}
                                        onRequestClose={() => closeZodic()}
                                        style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                        <View style={{ backgroundColor: '#fff', margin: 25, width: '90%', borderRadius: 12, }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', overflow: 'visible' }}>
                                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                                    <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#000', elevation: 3, justifyContent: 'center', marginTop: '-18%' }}>
                                                        {zodiac.zodiac_sign == "CANCER" &&
                                                            <Icons name="zodiac-cancer" size={50} color="#65096F" />
                                                        }
                                                        {zodiac.zodiac_sign == "ARIES" &&
                                                            <Icons name="zodiac-aries" size={50} color="#65096F" />
                                                        }
                                                        {zodiac.zodiac_sign == "TAURUS" &&
                                                            <Icons name="zodiac-taurus" size={50} color="#65096F" />
                                                        }
                                                        {zodiac.zodiac_sign == "GEMINI" &&
                                                            <Icons name="zodiac-gemini" size={50} color="#65096F" />
                                                        }
                                                        {zodiac.zodiac_sign == "LEO" &&
                                                            <Icons name="zodiac-leo" size={50} color="#65096F" />
                                                        }
                                                        {zodiac.zodiac_sign == "VIRGO" &&
                                                            <Icons name="zodiac-virgo" size={50} color="#65096F" />
                                                        }
                                                        {zodiac.zodiac_sign == "LIBRA" &&
                                                            <Icons name="zodiac-libra" size={50} color="#65096F" />
                                                        }
                                                        {zodiac.zodiac_sign == "SCORPIO" &&
                                                            <Icons name="zodiac-scorpio" size={50} color="#65096F" />
                                                        }
                                                        {zodiac.zodiac_sign == "SAGITTARIUS" &&
                                                            <Icons name="zodiac-sagittarius" size={50} color="#65096F" />
                                                        }
                                                        {zodiac.zodiac_sign == "CAPRICORN" &&
                                                            <Icons name="zodiac-capricorn" size={50} color="#65096F" />
                                                        }
                                                        {zodiac.zodiac_sign == "AQUARIUS" &&
                                                            <Icons name="zodiac-aquarius" size={50} color="#65096F" />
                                                        }
                                                        {zodiac.zodiac_sign == "PISCES" &&
                                                            <Icons name="zodiac-pisces" size={50} color="#65096F" />
                                                        }
                                                    </View>
                                                    <View>
                                                        <Text style={{ paddingLeft: 10, color: '#3B2F5C', fontFamily: 'AvertaStd-Black', fontSize: 20, maxWidth: '100%' }}>Zodiac Sign</Text>
                                                    </View>

                                                </View>
                                                <View style={{ marginTop: '-4%', zIndex: 1111, marginLeft: -20 }}>
                                                    <TouchableOpacity onPress={() => { closeZodic() }}>
                                                        <Entypo name='squared-cross' size={28} color='#73207C' />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                <View>
                                                    {zodiac.zodiac_sign == "ARIES" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Aries</Text>
                                                    }
                                                    {zodiac.zodiac_sign == "TAURUS" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Taurus</Text>
                                                    }
                                                    {zodiac.zodiac_sign == "GEMINI" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Gemini</Text>
                                                    }
                                                    {zodiac.zodiac_sign == "LEO" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Leo</Text>
                                                    }
                                                    {zodiac.zodiac_sign == "VIRGO" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Virgo</Text>
                                                    }
                                                    {zodiac.zodiac_sign == "LIBRA" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Libra</Text>
                                                    }
                                                    {zodiac.zodiac_sign == "SCORPIO" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Scorpio</Text>
                                                    }
                                                    {zodiac.zodiac_sign == "SAGITTARIUS" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Sagittarius</Text>
                                                    }
                                                    {zodiac.zodiac_sign == "CAPRICORN" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Capricorn</Text>
                                                    }
                                                    {zodiac.zodiac_sign == "AQUARIUS" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Aquarius</Text>
                                                    }
                                                    {zodiac.zodiac_sign == "PISCES" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Pisces</Text>
                                                    }
                                                    {zodiac.zodiac_sign == "CANCER" &&
                                                        <Text style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 16, maxWidth: '100%' }}>Your zodiac sign is Cancer</Text>
                                                    }
                                                </View>
                                                <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>Your Zodiac Number is {zodiac.zodiac_number}</Text>
                                            </View>
                                        </View>
                                    </Modal>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Visible(!isVisible)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', paddingLeft: 10, justifyContent: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3 }}>
                                            <Ionicons name="planet-sharp" size={30} color="#65096F" />
                                        </View>
                                        <FlatList
                                            data={planet}
                                            style={{ marginLeft: -10, zIndex: -1111, marginTop: 9 }}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', flexDirection: 'row' }}>
                                                        <Text style={{ color: '#65096F', fontSize: 12, paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }}>Planet</Text>
                                                        <Modal visible={isVisible}
                                                            onBackdropPress={() => GoBack()}
                                                            onRequestClose={() => GoBack()}
                                                            style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                                            <View style={{ backgroundColor: '#fff', margin: 25, borderRadius: 12, }}>
                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3, justifyContent: 'center', marginTop: '-18%' }}>
                                                                            <Ionicons name="planet-sharp" size={30} color="#65096F" />
                                                                        </View>
                                                                        <Text style={{ color: '#3B2F5C', fontSize: 20, paddingLeft: 10, fontFamily: 'AvertaStd-Black', paddingTop: 10 }} ellipsizeMode='tail'>Planet</Text>
                                                                    </View>
                                                                    <View style={{ marginTop: '-4%', zIndex: 1111, marginLeft: -20 }}>
                                                                        <TouchableOpacity onPress={() => { GoBack() }}>
                                                                            <Entypo name='squared-cross' size={28} color='#73207C' />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                                <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                                    <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }} >Your planet name is {item.planet_name}.</Text>
                                                                    <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>{item.description}</Text>
                                                                </View>
                                                            </View>
                                                        </Modal>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => Color(!iscol)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', paddingLeft: 10, justifyContent: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3 }}>
                                            <Car name="color-palette-sharp" size={35} color="#65096F" />
                                        </View>
                                        <FlatList
                                            data={luck}
                                            style={{ marginLeft: -10, zIndex: -1111, marginTop: 9 }}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', flexDirection: 'row' }}>
                                                        <Text style={{ color: '#65096F', fontSize: 12, paddingLeft: 12, paddingTop: 6, paddingBottom: 6 }} >Lucky Colors</Text>
                                                        <Modal visible={iscol}
                                                            onBackdropPress={() => Back()}
                                                            onRequestClose={() => Back()}
                                                            style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                                            <View style={{ backgroundColor: '#fff', margin: 25, width: '90%', borderRadius: 12 }}>
                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <View style={{ flexDirection: 'row', }}>
                                                                        <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3, justifyContent: 'center', marginTop: '-15%' }}>
                                                                            <Car name="color-palette-sharp" size={35} color="#65096F" />
                                                                        </View>
                                                                        <Text style={{ color: '#3B2F5C', fontSize: 20, paddingLeft: 10, fontFamily: 'AvertaStd-Black', maxWidth: '80%', paddingTop: 10 }} ellipsizeMode='clip'>Lucky Colors</Text>
                                                                    </View>
                                                                    <View style={{ marginTop: '-4%', zIndex: 1111 }}>
                                                                        <TouchableOpacity onPress={() => { Back() }}>
                                                                            <Entypo name='squared-cross' size={28} color='#73207C' />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                                <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                                    <Text style={{ color: '#000', fontSize: 16, lineHeight: 20 }}>Your lucky colors are {item.lucky_colours}</Text>
                                                                </View>
                                                            </View>
                                                        </Modal>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Metal(!ismet)}>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <View style={{ height: 55, width: 55, borderRadius: 60, backgroundColor: '#F7B9E7', paddingLeft: 10, justifyContent: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3 }}>
                                            <Icon name="bar-chart" size={30} color="#65096F" />
                                        </View>
                                        <FlatList
                                            data={luck}
                                            style={{ marginLeft: -10, zIndex: -1111, marginTop: 9 }}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View>
                                                    <View style={{ width: 110, borderBottomRightRadius: 12, borderTopRightRadius: 12, alignSelf: 'center', backgroundColor: '#fff', zIndex: -9999, borderWidth: 2, borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', flexDirection: 'row' }}>
                                                        <Text style={{ color: '#65096F', fontSize: 12, paddingLeft: 12, paddingTop: 6, paddingBottom: 6, }}>Lucky Metals</Text>
                                                        <Modal visible={ismet}
                                                            onBackdropPress={() => Mback()}
                                                            onRequestClose={() => Mback()}
                                                            style={{ backgroundColor: '#D3D3D3', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                                                            <View style={{ backgroundColor: '#fff', margin: 25, width: '90%', borderRadius: 12 }}>
                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                    <View style={{ flexDirection: "row" }}>
                                                                        <View style={{ height: 66, width: 66, borderRadius: 60, backgroundColor: '#F7B9E7', alignItems: 'center', borderWidth: 1, borderColor: '#65096F', shadowColor: '#ffffff', elevation: 3, justifyContent: 'center', marginTop: '-15%' }}>
                                                                            <Icon name="bar-chart" size={30} color="#65096F" />
                                                                        </View>
                                                                        <Text style={{ color: '#3B2F5C', fontSize: 20, paddingLeft: 10, fontFamily: 'AvertaStd-Black', paddingTop: 10 }} numberOfLines={1} ellipsizeMode='clip'>Lucky Metals</Text>
                                                                    </View>
                                                                    <View style={{ marginTop: '-4%', zIndex: 1111 }}>
                                                                        <TouchableOpacity onPress={() => { Mback() }}>
                                                                            <Entypo name='squared-cross' size={28} color='#73207C' />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                                <View style={{ marginBottom: 10, marginLeft: '23.5%', marginRight: 10 }}>
                                                                    <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>Your lucky metal is {item.lucky_metals}</Text>
                                                                </View>
                                                            </View>
                                                        </Modal>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    {/* <View style={{ marginLeft: 25, marginRight: 25, marginTop: 15 }}>
                        <View style={{ height: 52, borderTopWidth: 1, borderBottomWidth: 0.5, borderTopColor: '#F3F3F3', borderBottomColor: '#F3F3F3', paddingLeft: 10, paddingRight: 10, paddingTop: 15 }}>
                            <TouchableOpacity onPress={() => { }}
                                style={{ flexDirection: 'row' }}>
                                <Icons name='heart-multiple-outline' size={20} color='#007AFF' />
                                <View style={{ marginLeft: '5%' }}>
                                    <Text style={{ color: '#1B1B1B', fontSize: 14 }}>Your Favorites</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 52, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderTopColor: '#F3F3F3', borderBottomColor: '#F3F3F3', paddingLeft: 10, paddingRight: 10, paddingTop: 15 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', }}>
                                <MaterialIcons name="payment" size={20} color="#007AFF" />
                                <View style={{ marginLeft: '5%' }}>
                                    <Text style={{ color: '#1B1B1B', fontSize: 14 }}>Subscribe Management</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 52, borderTopWidth: 0.5, borderBottomWidth: 0.5, borderTopColor: '#F3F3F3', borderBottomColor: '#F3F3F3', paddingLeft: 10, paddingRight: 10, paddingTop: 15 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', }}>
                                <AntDesign name="alipay-square" size={20} color="#007AFF" />
                                <View style={{ marginLeft: '5%' }}>
                                    <Text style={{ color: '#1B1B1B', fontSize: 14 }}>Affiliate Info</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View> */}
                    <View style={{ marginLeft: 25, marginRight: 25, marginTop: 20, marginBottom: 25 }}>
                        <View style={{ backgroundColor: '#65096F', borderRadius: 36, height: 46, width: 157, alignSelf: 'center', }}>
                            <TouchableOpacity onPress={() => Logout()}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center', paddingTop: 12 }}>LOG OUT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 25 }}>
                        <Text style={{ textAlign: 'center', color: '#ABABAB' }}>version 12.5</Text>
                    </View>
                </KeyboardAwareScrollView>
                <View style={{ paddingLeft: 5, paddingRight: 5, paddingBottom: 10, }}>
                    <View style={{ height: 60, borderColor: '#73207C', borderWidth: 1, borderRadius: 15, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { SelectTab() }} style={{ justifyContent: 'center', }}>
                            <Image source={require('./assets/home-icon.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { test() }}
                            style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: -5 }}>
                            <Image source={require('./assets/All-Icon&Photos/Do_reading.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            test3(!iscon)
                        }}
                            style={{ justifyContent: 'center', flexDirection: 'row', marginTop: -15, }}>
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
                            style={{ marginRight: -15 }}
                        >
                            <Image source={require('./assets/prediction.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Profile()} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./assets/All-Icon&Photos/user.png')} style={{ width: 25, height: 25 }} />
                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>PROFILE</Text>
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
                            <TouchableOpacity onPress={() => { test9() }} style={{ alignSelf: 'center', }}>
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
                            <TouchableOpacity onPress={() => { test6() }} style={{ paddingLeft: 35 }} >
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
                        <TouchableOpacity onPress={() => { test4() }} style={{ alignSelf: 'center', }}>
                            <View style={{ alignItems: 'center', }}>
                                <View style={{ width: 55, height: 55, backgroundColor: "#73207C", transform: [{ rotate: "45deg" }], borderRadius: 7, position: 'absolute', alignItems: 'center' }}>
                                </View>
                                <View style={{ paddingTop: 5 }}>
                                    <Entypo name='cross' size={40} color="#fff" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default UserProfile