import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView, FlatList, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Picker } from '@react-native-picker/picker';
import Moment from 'moment';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { openDatabase } from 'react-native-sqlite-storage';
import axios from 'axios';
import { Other } from '../ReduxFloder/action';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import Loader from './Loader';
import DatePicker from 'react-native-date-picker'


var db = openDatabase({ name: 'AStar8.db' });

const Reading = ({ navigation }) => {

    const dispatch = useDispatch();
    const Data = useSelector(state => state.Data)

    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [cal, setcal] = useState(false)
    const [name, setname] = useState('')
    const [names, setnames] = useState([])
    const [data, setdata] = useState([])
    const [mail, setmail] = useState('')
    const [iscon, con] = useState(false)
    const [show, hide] = useState(false)
    const [loading, setloading] = useState(false)
    const [zodiac, setzodiac] = useState([])
    const [date, setDate] = useState(new Date())
    const [namevalue, setnamevalue] = useState([])

    useEffect(() => {
        console.error(Data.userdetail.userid);
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM userdetail",
                [],
                (tx, results) => {
                    console.error(results);
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
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
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        setzodiac(results.rows.item(i))
                    }
                }
            );
        });




        db.transaction((tx) => {
            tx.executeSql(
                'SELECT DISTINCT(fullname) FROM othernamereading WHERE userid=' + Data.userdetail.userid + '',
                [],
                (tx, results) => {

                    var temp1 = []
                    for (let i = 0; i < results.rows.length; ++i) {
                        temp1.push(results.rows.item(i).fullname)
                    }
                    console.log("otherusername", temp1);
                    var temp2 = [];
                    for (let i = 0; i < temp1.length; i++) {
                        const element = temp1[i];
                        db.transaction((tx1) => {
                            tx1.executeSql(
                                'SELECT * FROM othernamereading WHERE fullname="' + element + '" AND userid=' + Data.userdetail.userid + '',
                                [],
                                (tx2, results1) => {
                                    const element = results1.rows.item(0);
                                    temp2.push(element)
                                    setnamevalue(temp2)
                                }
                            );
                        });
                    }
                }
            );
        });
        tryOut()

    }, [])

    const calendar = () => {
        setcal(true)
    }

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

    const test1 = () => {
        navigation.navigate('Compatibility')
    }

    const test = () => {
        navigation.navigate('Reading')
    }

    const Read = () => {
        hide(false)
        setloading(true)
        var day = Moment(date).format('YYYY-MM-DD')
        var currentDate = Moment().format('YYYY-MM-DD')
        let bodyFormData = { 'user_id': Data.userdetail.userid, 'name': name, 'dob': day, 'gender': selectedLanguage, 'check_date': currentDate }
        console.log(bodyFormData);

        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/otheruserreading`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn(data);
                db.transaction(function (tx) {
                    console.log('start');
                    tx.executeSql(
                        'INSERT INTO othernamereading (destinyno, fullname, posiviedesc, zodiacsign, checkdate, otheruserid, userid, posivietitle, negativedesc, negativetitle, subscription_status) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
                        [data.detail.destinyno, data.detail.fullname, data.detail.namedescription.posivie_desc, data.detail.zodiacsign, data.detail.check_date, data.detail.otheruserid, data.detail.user_id, data.detail.namedescription.posivie_title, data.detail.namedescription.negative_desc, data.detail.namedescription.negative_title, data.subscription_status],
                        (tx, results) => {
                            console.log('end');
                            db.transaction((tx) => {
                                tx.executeSql(
                                    'SELECT DISTINCT(fullname) FROM othernamereading WHERE userid=' + Data.userdetail.userid + '',
                                    [],
                                    (tx, results) => {
                                        var temp1 = []
                                        for (let i = 0; i < results.rows.length; ++i) {
                                            temp1.push(results.rows.item(i).fullname)
                                        }
                                        console.log("otherusername", temp1);
                                        var temp2 = [];
                                        for (let i = 0; i < temp1.length; i++) {
                                            const element = temp1[i];
                                            db.transaction((tx1) => {
                                                tx1.executeSql(
                                                    'SELECT * FROM othernamereading WHERE fullname="' + element + '" AND userid=' + Data.userdetail.userid + '',
                                                    [],
                                                    (tx2, results1) => {
                                                        const element = results1.rows.item(0);
                                                        temp2.push(element)
                                                        setnamevalue(temp2)
                                                    }
                                                );
                                            });
                                        }
                                    }
                                );
                            });
                        }
                    );
                    // console.log('end');
                });
                let bodyFormData = { 'otheruserid': data.detail.otheruserid, 'user_id': Data.userdetail.userid }
                console.log(bodyFormData);
                axios({
                    method: 'POST',
                    url: `https://astar.7kstartup.com/public/api/otheruserdetail`, // Signup API
                    data: bodyFormData,
                    config: { headers: { 'Content-Type': 'multipart/form-data' } }
                })
                    .then(({ data, status }) => {
                        console.log(data);
                        dispatch(Other(data))
                        hide(false)
                        navigation.navigate('Otheruser')
                        setloading(false)
                    })
                    .catch(error => {
                        console.warn(error.response.data)
                        setloading(false)
                    })
            })
            .catch(error => {
                console.error(error.response.data)
                setloading(false)
            })
    }

    const nav = (id) => {
        setloading(true)
        console.log(id);
        let bodyFormData = { 'otheruserid': id, 'user_id': Data.userdetail.userid }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/otheruserdetail`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.log(data);
                dispatch(Other(data))
                if (data.message == "No data found") {
                    alert(data.message)
                    navigation.navigate('Dashboard')
                    setloading(false)
                }
                else {
                    navigation.navigate('Otheruser')
                    setloading(false)
                }
            })
            .catch(error => {
                console.warn(error.response.data)
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

    const showPopup = (show) => {
        hide(show)
    }
    const hidePopup = () => {
        hide(false)
    }

    const showdate = (cal) => {
        setcal(cal)
    }
    const hodedate = () => {
        setcal(false)
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

    const test8 = () => {
        con(false)
        navigation.navigate('Compatibility4')
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

    const EmaiShare = () => {
        if (mail == "") {
            alert('Please enter your Email')
        }
        if (mail != "") {
            hide(false)
            setloading(true)
            var day = Moment(date).format('YYYY-MM-DD')
            var currentDate = Moment().format('YYYY-MM-DD')
            let bodyFormData = { 'user_id': Data.userdetail.userid, 'name': name, 'dob': day, 'gender': selectedLanguage, 'check_date': currentDate }
            console.log(bodyFormData);

            axios({
                method: 'POST',
                url: `https://astar.7kstartup.com/public/api/otheruserreading`, // Signup API
                data: bodyFormData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(({ data, status }) => {
                    console.warn(data);
                    db.transaction(function (tx) {
                        console.log('start');
                        tx.executeSql(
                            'INSERT INTO othernamereading (destinyno, fullname, posiviedesc, zodiacsign, checkdate, otheruserid, userid, posivietitle, negativedesc, negativetitle, subscription_status) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
                            [data.detail.destinyno, data.detail.fullname, data.detail.namedescription.posivie_desc, data.detail.zodiacsign, data.detail.check_date, data.detail.otheruserid, data.detail.user_id, data.detail.namedescription.posivie_title, data.detail.namedescription.negative_desc, data.detail.namedescription.negative_title, data.subscription_status],
                            (tx, results) => {
                                console.log('end');
                                db.transaction((tx) => {
                                    tx.executeSql(
                                        'SELECT DISTINCT(fullname) FROM othernamereading WHERE userid=' + Data.userdetail.userid + '',
                                        [],
                                        (tx, results) => {
                                            var temp1 = []
                                            for (let i = 0; i < results.rows.length; ++i) {
                                                temp1.push(results.rows.item(i).fullname)
                                            }
                                            console.log("otherusername", temp1);
                                            var temp2 = [];
                                            for (let i = 0; i < temp1.length; i++) {
                                                const element = temp1[i];
                                                db.transaction((tx1) => {
                                                    tx1.executeSql(
                                                        'SELECT * FROM othernamereading WHERE fullname="' + element + '" AND userid=' + Data.userdetail.userid + '',
                                                        [],
                                                        (tx2, results1) => {
                                                            const element = results1.rows.item(0);
                                                            temp2.push(element)
                                                            setnamevalue(temp2)
                                                        }
                                                    );
                                                });
                                            }
                                        }
                                    );
                                });
                            }
                        );
                    });
                    let bodyFormData = { 'otheruserid': data.detail.otheruserid, 'user_id': Data.userdetail.userid }
                    console.log(bodyFormData);
                    axios({
                        method: 'POST',
                        url: `https://astar.7kstartup.com/public/api/otheruserdetail`, // Signup API
                        data: bodyFormData,
                        config: { headers: { 'Content-Type': 'multipart/form-data' } }
                    })
                        .then(({ data, status }) => {
                            console.log(data);
                            dispatch(Other(data))
                            hide(false)
                            navigation.navigate('Otheruser')
                            setloading(false)
                        })
                        .catch(error => {
                            console.warn(error.response.data)
                            setloading(false)
                        })
                    let FormData = { 'otherpersonid': data.detail.otheruserid, 'userid': Data.userdetail.userid, 'module_type': 1, 'email': mail }
                    console.log(FormData);
                    axios({
                        method: 'POST',
                        url: `https://astar.7kstartup.com/public/api/sharepersonreading`, // Signup API
                        data: FormData,
                        config: { headers: { 'Content-Type': 'multipart/form-data' } }
                    })
                        .then(({ data, status }) => {
                            console.error("email status", data);
                            hide(false)
                            // navigation.navigate('Otheruser')
                            setloading(false)
                        })
                        .catch(error => {
                            console.warn(error.response.data)
                            setloading(false)
                        })
                })
                .catch(error => {
                    console.error(error.response.data)
                    setloading(false)
                })
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? <Loader showloading={loading} /> : null}
            <ImageBackground source={require('./assets/DashboardBackgroundImage.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom: 10, alignItems: 'center', alignContent: 'center' }}>
                    <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { SelectTab() }}
                            style={{ paddingTop: 7, paddingRight: 2, }}>
                            <Icon name="left" size={15} color="#007AFF" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignSelf: 'center', paddingLeft: 15 }}>
                        <Text style={{ fontSize: 24, color: '#3B2F5C', fontFamily: 'AvertaStd-Bold' }}>Other Person's Reading</Text>
                    </View>
                </View>
                <View style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30, backgroundColor: '#ffffffa1', borderColor: '#DA0AE4', borderBottomWidth: 3, borderRightWidth: 0.1, borderLeftWidth: 0.1 }}>
                    <View style={{ marginLeft: 25, marginRight: 25, }}>
                        <View style={{ paddingBottom: 10, paddingTop: 10 }}>
                            <Text style={{ fontSize: 20, color: '#000', }}>Name</Text>
                            <TextInput placeholder='Name'
                                placeholderTextColor='#828282'
                                autoCapitalize='sentences'
                                onChangeText={name => setname(name)}
                                value={name}
                                style={{ borderBottomWidth: 1, borderColor: '#EBEBEB', color: '#DA0AE4' }} />
                        </View>
                        <View style={{ paddingBottom: 10 }}>
                            <Text style={{ fontSize: 20, color: '#000', }}>Gender</Text>
                            <View style={{ height: 40, width: '100%', borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                    <View style={{ width: '100%' }}>
                                        <Picker
                                            selectedValue={selectedLanguage}
                                            dropdownIconColor="#FFFFFFed"
                                            style={{ marginLeft: -15, }}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedLanguage(itemValue)
                                            }>
                                            <Picker.Item label="Select" value="Select" style={{ color: '#000', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                            <Picker.Item label="Male" value="Male" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                            <Picker.Item label="Female" value="Female" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                            <Picker.Item label="Other" value="Other" style={{ color: '#DA0AE4', fontFamily: 'AvertaStd-Regular', fontSize: 14 }} />
                                        </Picker>
                                    </View>
                                    <View style={{ alignSelf: 'center', marginLeft: -50 }}>
                                        <Entypo name="chevron-small-down" size={27} color="#65096F" />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingBottom: 10 }}>
                            <View>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Averta Std Regular' }}>Date of Birth</Text>
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
                                        <Text style={{ color: '#000', fontSize: 20, fontFamily: 'AvertaStd-Regular', paddingTop: 20, textAlign: 'center' }}>Date of Birth</Text>
                                        <View style={{ paddingTop: 25 }}>
                                            <DatePicker date={date} onDateChange={setDate} androidVariant='iosClone' mode='date' textColor='#DA0AE4' />
                                        </View>
                                        <TouchableOpacity onPress={() => { hodedate() }} style={{ backgroundColor: '#65096F', borderRadius: 8, alignItems: 'center', alignSelf: 'center', marginTop: '15%', paddingBottom: 5, paddingTop: 5, paddingLeft: '20%', paddingRight: '20%' }}>
                                            <Text style={{ fontSize: 20, fontFamily: 'AvertaStd-Semibold', color: '#fff', alignSelf: 'center', padding: 2 }}>Confirm</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Modal>
                            </View>
                        </View>
                        <View style={{ margin: 10, marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => {
                                // showPopup()
                                Read()
                            }}
                                style={{ backgroundColor: '#65096F', borderRadius: 8, alignItems: 'center', alignSelf: 'center', paddingBottom: 10, paddingTop: 10, paddingLeft: '20%', paddingRight: '20%' }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500', }}>GENERATE READING</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                    <Text style={{ color: '#3B2F5C', fontSize: 28, fontWeight: '500', textAlign: 'center' }}>Most Recent</Text>
                    <KeyboardAwareScrollView style={{ flex: 1 }}>
                        <View>
                            <FlatList
                                data={namevalue}
                                keyExtractor={(item) => item.key}
                                renderItem={({ item, index }) =>
                                    <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 15, marginLeft: 3, marginRight: 3, marginTop: 10, marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.2, elevation: 0.1 }}>
                                        <TouchableOpacity onPress={() => { nav(item.otheruserid) }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{borderRightWidth:0.5, borderColor:'#000', flexDirection:'column', width:'60%'}}>
                                                    <View style={{ backgroundColor: '#FB272F', borderRadius: 12, marginTop: -25, marginLeft: -10, alignSelf:'flex-start', paddingLeft:10, paddingRight:10 }}>
                                                        <Text style={{ fontSize: 12, color: '#fff', fontWeight: '500', textAlign: 'center' }}>{(Moment(item.checkdate).format('DD-MMM-YYYY').toUpperCase())}</Text>
                                                    </View>
                                                    <Text style={{ fontSize: 20, color: '#FB272F', fontWeight: '500' }}>{item.fullname}</Text>
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <Text numberOfLines={2} style={{ fontFamily: 'AvertaStd-Black', color: '#000', maxWidth: '95%', fontSize: 12 }}>{item.posivietitle} :<Text style={{ fontFamily: 'AvertaStd-Regular', color: '#6B6B6B', lineHeight: 20, fontSize:11 }}>{item.posiviedesc}</Text></Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', }}>
                                                        <Text numberOfLines={2} style={{ fontFamily: 'AvertaStd-Black', color: '#000', maxWidth: '95%', fontSize: 12 }}>{item.negativetitle} :<Text style={{ fontFamily: 'AvertaStd-Regular', color: '#6B6B6B', lineHeight: 20, fontSize:11 }}>{item.negativedesc}</Text></Text>
                                                    </View>
                                                </View>
                                                <View style={{ marginLeft: -55, alignSelf: 'center', width:'40%', alignSelf:'center' }}>
                                                    <View style={{ alignSelf: 'flex-end', paddingLeft: 15, flexDirection: 'row', alignItems: 'center' }}>
                                                        <View style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', paddingRight: 12 }}>
                                                            <Text style={{ color: '#FB272F', fontSize: 12, fontWeight: '500', }}>{item.zodiacsign}</Text>
                                                        </View>
                                                        <View style={{ width: 36, height: 22, borderRadius: 4, borderColor: '#000', alignItems: 'center', borderWidth: 0.5, padding: 5, margin: 2, }}>
                                                            {item.zodiacsign == 'ARIES' &&
                                                                <Icons name="zodiac-aries" size={12} color="#FB272F" />}
                                                            {item.zodiacsign == 'TAURUS' &&
                                                                <Icons name="zodiac-taurus" size={12} color="#FB272F" />}
                                                            {item.zodiacsign == 'GEMINI' &&
                                                                <Icons name="zodiac-gemini" size={12} color="#FB272F" />}
                                                            {item.zodiacsign == 'CANCER' &&
                                                                <Icons name="zodiac-cancer" size={14} color="#FB272F" />}
                                                            {item.zodiacsign == 'LEO' &&
                                                                <Icons name="zodiac-leo" size={12} color="#FB272F" />}
                                                            {item.zodiacsign == 'VIRGO' &&
                                                                <Icons name="zodiac-virgo" size={12} color="#FB272F" />}
                                                            {item.zodiacsign == 'LIBRA' &&
                                                                <Icons name="zodiac-libra" size={12} color="#FB272F" />}
                                                            {item.zodiacsign == 'SCORPIO' &&
                                                                <Icons name="zodiac-scorpio" size={12} color="#FB272F" />}
                                                            {item.zodiacsign == 'SAGITTARIUS' &&
                                                                <Icons name="zodiac-sagittarius" size={12} color="#FB272F" />}
                                                            {item.zodiacsign == 'CAPRICORN' &&
                                                                <Icons name="zodiac-capricorn" size={12} color="#FB272F" />}
                                                            {item.zodiacsign == 'AQUARIUS' &&
                                                                <Icons name="zodiac-aquarius" size={12} color="#FB272F" />}
                                                            {item.zodiacsign == 'PISCES' &&
                                                                <Icons name="zodiac-pisces" size={12} color="#FB272F" />}
                                                        </View>
                                                    </View>
                                                    <View style={{ alignContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'flex-end' }}>
                                                        <View style={{ margin: 2, alignContent: 'center', alignItems: 'center' }}>
                                                            <Text style={{ color: '#FB272F', fontSize: 12, fontWeight: '500' }}>Destiny No.</Text>
                                                        </View>
                                                        <View style={{ width: 36, height: 22, borderRadius: 4, borderColor: '#000', alignItems: 'center', borderWidth: 0.5, margin: 2 }}>
                                                            <Text style={{ fontSize: 16, color: '#FB272F' }}>{item.destinyno}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>}
                            />
                        </View>
                    </KeyboardAwareScrollView>
                </View>
                <View style={{ paddingLeft: 15, paddingRight: 15, position: 'relative', paddingBottom: 10 }}>
                    <View style={{ height: 60, borderColor: '#73207C', borderWidth: 1, borderRadius: 15, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => { SelectTab() }} style={{ justifyContent: 'center' }}>
                            <Image source={require('./assets/home-icon.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { test() }}
                            style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: -15, alignItems: 'center' }}>
                            <Image source={require('./assets/All-Icon&Photos/Do_reading.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>READING</Text>
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
                onBackdropPress={() => test4()}
                onRequestClose={() => test4()}
                visible={iscon}
                style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.9, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                <View style={{ zIndex: 9999, alignItems: 'center', alignContent: 'center', flex: 1 }}>
                    <View style={{ flex: 0.8 }}></View>
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
                    <View style={{ alignSelf: 'center', marginTop: 20 }}>
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
            <Modal
                animationType="none"
                hardwareAccelerated={true}
                statusBarTranslucent={true}
                transparent={true}
                duration={50}
                useNativeDriver={true}
                onBackdropPress={() => hidePopup()}
                onRequestClose={() => hidePopup()}
                visible={show}
                style={{ backgroundColor: '#787878', shadowColor: '#000', opacity: 0.9, width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50, flex: 1 }}>
                <View style={{ zIndex: 111111, flex: 0.5, }}>
                    <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 10, margin: 20, marginTop: '-25%' }}>
                        <View>
                            <Text style={{ color: '#3B2F5C', fontSize: 29, fontFamily: 'AvertaStd-Black', textAlign: 'center' }}>Share the Reading with</Text>
                            <Text style={{ color: '#FE4E82', fontSize: 24, textAlign: 'center', fontFamily: 'AvertaStd-Regular' }}>"{(name).toUpperCase()}"</Text>
                        </View>
                        <View style={{ marginLeft: 25, marginTop: 10, marginBottom: 5, borderBottomWidth: 0.2, marginRight: 25, }}>
                            <Text style={{ color: '#000', fontSize: 20, fontFamily: 'AvertaStd-Regular' }}>Enter {name}'s email address</Text>
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
                            <TouchableOpacity onPress={() => { Read() }}
                                style={{ borderBottomColor: '#65096F', borderBottomWidth: 1, alignSelf: 'center', marginBottom: 10 }}>
                                <Text style={{ color: '#65096F', fontSize: 16, textAlign: 'center', fontFamily: 'AvertaStd-Regular' }}>Do Not Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default Reading