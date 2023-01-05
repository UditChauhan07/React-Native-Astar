import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, Animated, Image, FlatList, Dimensions, ActivityIndicator } from 'react-native'
import Moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatGrid } from 'react-native-super-grid';
import { openDatabase } from 'react-native-sqlite-storage';
import Loader from './Loader';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux';
import Circle from 'react-native-vector-icons/Feather';

var db = openDatabase({ name: 'AStar8.db' });

const windowWidth = Dimensions.get('screen').width;
console.error("windowWidth", windowWidth);

const CustomCalender = ({ navigation }) => {

    const Data = useSelector(state => state.Data)
    console.error(Data.userdetail.userid);
    const [mnth, setmnth] = useState([])
    const [Changemnth, setChangemmnth] = useState('')
    const [iscon, con] = useState(false)
    const [names, setnames] = useState([])
    const [zodiac, setzodiac] = useState([])
    const [lifes, setlifes] = useState([])
    const [loading, setloading] = useState(false)
    const [loader, setLoader] = useState(false);
    const [calendar, setcalender] = useState([])
    const [sliderdate, setslider] = useState()
    const [teextshow, settextshow] = useState(false)
    const [activeDate, setActiveDate] = useState(Moment().format('YYYY-MM-DD'));
    const [date, setdate] = useState(Moment().format('YYYY-MM-DD'))

    const [plus, setplus] = useState(1)

    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {

            CurrentDATE()

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

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM zodiacdetail",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i) {
                            console.error("zodiac_detail", results.rows.item(i));
                            setzodiac(results.rows.item(i))
                        }
                    }
                );
            });

            var currentDate = Moment().format('YYYY-MM-DD')
            let bodyFormData = { 'userid': Data.userdetail.userid, date: date, 'current_date':currentDate }
            console.error(bodyFormData);
            axios({
                method: 'POST',
                url: `https://astar.7kstartup.com/public/api/userlifecoachcosmiccalender`, // Signup API
                data: bodyFormData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(({ data, status }) => {
                    console.warn(data)
                    setlifes(data)
                    setloading(false)
                })
                .catch(error => {
                    console.warn(error.response)
                    setloading(false)
                })

            const startdate = Moment().format('MMM YYYY');
            setChangemmnth(startdate)

            tryOut()
        });

        return unsubscribe;

    }, [])

    const CurrentDATE = () => {
        //loader will start over here
        var CurrentDate = Moment().format('YYYY-MM-DD')
        let bodyFormData = { 'userid': Data.userdetail.userid, 'date_current':CurrentDate }
        console.error(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/usercosmiccelender`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                let triggerHell = callIndex('d', data);
                setloading(false)
            })
            .catch(error => {
                console.warn(error)
                setloading(false)
            })
    }


    const callIndex = (index, baseData) => {
        const queryD = "DELETE FROM cosmiccalender;";
        const queryI = "SELECT * FROM cosmiccalender;";
        let modeStatus = 404;
        let query = undefined;
        if (baseData) {
            if (index == 'i') {
                query = queryI;
                modeStatus = 100
            } else if (index == 'd') {
                query = queryD;
                modeStatus = 103
            } else {
                return false;
            }
        } else {
            query = queryI;
            modeStatus = 100;
        }
        if (!query) {
            return false;
        } else {
            db.transaction((ct) => {
                ct.executeSql(query, [], (err1, res1) => {
                    if (res1 && modeStatus == 100) {
                        if (res1.rows.length != 0) {
                            callIndex('d', baseData);
                            console.log("try to empty table from database");
                        } else {
                            if (baseData) {
                                callInserted(baseData);
                                console.log('hiii');
                            }
                        }
                    } else if (res1 && modeStatus == 103) {
                        callIndex('i', baseData)
                        modeStatus = 100;
                    }
                })
            })
        }
    }

    const callInserted = async (allData) => {

        allData.cosmiccalender.favstars.forEach(element => {
            db.transaction(function (tx) {
                var start = 1
                let data
                data = [start, element.date, element.datestar, element.year, element.month, allData.subscription_status];
                tx.executeSql(
                    'INSERT INTO cosmiccalender (module_type, date, datestar, year, month, subscription_status) VALUES (?,?,?,?,?,?)',
                    data,
                    (tx, results) => {
                    }
                );
            });
        });
        allData.cosmiccalender.unfavstars.forEach(element => {
            db.transaction(function (tx) {
                var start = 2
                tx.executeSql(
                    'INSERT INTO cosmiccalender (module_type, date, datestar, year, month, subscription_status) VALUES (?,?,?,?,?,?)',
                    [start, element.date, element.datestar, element.year, element.month, allData.subscription_status],
                    (tx, results) => {
                    }
                );
            });
        })

        const month = Moment().startOf('month');
        getdate(month);

    }

    const back = () => {
        navigation.navigate('Dashboard')
    }

    const calender = (item) => {
        if (item < names.joiningdate) {
            alert('Hello ' + names.fullname + ', Your joining date for Asytar8 is ' + names.joiningdate + '. You cannot see your cosmic calendar past that.')
        }
        if (item > Moment().format('YYYY-MM-DD')) {
            alert("You Don't have any active subscription yet")
        } else {
            setloading(true)
            console.log(item);
            setActiveDate(item)
            var currentDate = Moment().format('YYYY-MM-DD')
            let bodyFormData = { 'userid': Data.userdetail.userid, 'date': item, 'current_date':currentDate, }
            console.error(bodyFormData);
            axios({
                method: 'POST',
                url: `https://astar.7kstartup.com/public/api/userlifecoachcosmiccalender`, // Signup API
                data: bodyFormData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(({ data, status }) => {
                    console.warn(data)
                    setlifes(data)
                    setloading(false)
                })
                .catch(error => {
                    console.warn(error)
                    setloading(false)
                })
        }
    }

    const getdate = (date) => {
        // setloading(true)
        setslider(date)
        setcalender(["boo"]);
        console.log("checking calendar============>", { calendar });
        setChangemmnth(Moment(date).format('MMM YYYY'))
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM cosmiccalender",
                [],
                (tx, results) => {
                    var temp = [];
                    console.log("boooooooo");
                    for (let i = 0; i < results.rows.length; ++i) {
                        temp.push(results.rows.item(i));
                        const element = results.rows.item(i);
                        console.log("calender data after reinserting in local db", results.rows.item(i));
                    }
                    console.log({ "poooooooooooooo": temp });
                    let m = [];
                    for (let i = 0; i <= 6; i++) {
                        const newDate = Moment(date).day(i);
                        m.push(Moment(newDate).format('ddd'));
                    }
                    setmnth((m));
                    let dateS = [];
                    let mainData = [];
                    let tempDate = [];
                    for (let i = 0; i < Moment(date).daysInMonth(); i++) {
                        console.log(Moment(date).daysInMonth());
                        if (i == 0) {
                            var checkDate = new Date(date + i * 24 * 60 * 60 * 1000);
                            let step = Moment(checkDate).day();
                            if (!step) {
                                step = 7;
                            }
                            for (let i = 0; i < step; i++) {
                                console.log("check loop of check date data", i, Moment(checkDate).format('YYYY-MM-DD'));
                                dateS.push("");
                                let temp = {
                                    date: undefined,
                                    star: undefined,
                                    blank: true
                                }
                                mainData.push(temp)
                            }
                        }
                        var newDate = new Date(date + i * 24 * 60 * 60 * 1000);

                        temp.forEach((item, i) => {
                            let itemDate = Moment(item.year, ('YYYY')).format('YYYY') + '-' + Moment(item.month, ('MM')).format('MM') + '-' + Moment(item.date, ('DD')).format('DD');
                            let dateData = undefined;
                            if (itemDate == Moment(newDate).format('YYYY-MM-DD')) {
                                console.log("aginitemDate", itemDate, Moment(newDate).format('YYYY-MM-DD'));
                                if (item.datestar) {
                                    dateData = {
                                        date: Moment(newDate).format('YYYY-MM-DD'),
                                        star: {
                                            type: item.module_type,
                                            ratings: item.datestar
                                        },
                                        blank: false
                                    }
                                    console.log({ "arawao": dateData })
                                    if (!tempDate.includes(Moment(newDate).format('YYYY-MM-DD'))) {
                                        mainData.push(dateData)
                                        tempDate.push(Moment(newDate).format('YYYY-MM-DD'));
                                    }
                                }
                            }
                        });
                        if (!tempDate.includes(Moment(newDate).format('YYYY-MM-DD'))) {
                            let temp = {
                                date: Moment(newDate).format('YYYY-MM-DD'),
                                star: undefined,
                                blank: false
                            }
                            mainData.push(temp)
                            tempDate.push(Moment(newDate).format('YYYY-MM-DD'));
                        }
                        dateS.push(Moment(newDate).format('YYYY-MM-DD'));
                        var endofMoment = Moment(date).endOf('month').format('YYYY-MM-DD')
                        if ((i + 1) == 30) {
                            var indexDate = Moment(newDate).format('YYYY-MM-DD')
                            if (indexDate != endofMoment) {
                                console.log('boooooooooooooooooooo');
                                if (!tempDate.includes(endofMoment)) {
                                    let temp = {
                                        date: endofMoment,
                                        star: undefined,
                                        blank: false
                                    }
                                    mainData.push(temp)
                                    tempDate.push(endofMoment);
                                    console.log("optional push date", endofMoment, indexDate);
                                }
                            }

                        }
                    }
                    let finalData = [];
                    let finalDateArray = [];
                    mainData.map(e => {
                        if (e.date) {
                            if (!finalDateArray.includes(e.date)) {
                                finalDateArray.push(e.date);
                                finalData.push(e);
                            } else {
                                finalData.map(a => {
                                    if (a.date == e.date) {
                                        if (a.star.type == 2) {
                                            if (e.star.type == 1) {
                                                a.star.type = e.star.type
                                                a.star.ratings = e.star.ratings
                                            }
                                        }
                                    }
                                })
                            }
                        } else {
                            finalData.push(e);
                        }
                    })
                    console.log({ "datecheck": finalDateArray });
                    setcalender(finalData)
                    console.log("checking calendar============>", { mainData });
                    console.log("TempData", { tempDate });
                    setLoader(true);
                    setloading(false)
                }
            );
        });
    }

    const pre = (date) => {
        var dates = Moment(date).format('YYYY-MM-DD')
        var mnth = Moment(dates).subtract(1, 'M').format('YYYY-MM-DD')
        const month = Moment(mnth).startOf('month');
        console.log(month);
        getdate(month)
    }

    const next = (date) => {
        var dates = Moment(date).format('YYYY-MM-DD')
        var mnth = Moment(dates).add(1, 'M').format('YYYY-MM-DD')
        const month = Moment(mnth).startOf('month');
        getdate(month)
    }

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
                        toValue: 10,
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
                        toValue: -10,
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

    const Textfun = () => {
        settextshow(true)
    }
    const tfun = () => {
        settextshow(false)
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
            {loader &&
                <ImageBackground source={require('./assets/DashboardBackgroundImage.png')} style={{ flex: 1, zIndex: -222 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', margin: 20 }}>
                                <TouchableOpacity onPress={() => { back() }}
                                    style={{ paddingTop: 7, paddingRight: 2 }}>
                                    <Icon name="left" size={15} color="#007AFF" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 20, marginBottom: 20, alignSelf: 'center' }}>
                                <Text style={{ color: '#65096F', fontSize: 20, fontWeight: 'bold' }}>Cosmic Calendar</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, }}>

                            <TouchableOpacity onPress={() => { pre(sliderdate) }}>
                                <Icon name="left" size={20} color="#FE4E82" />
                            </TouchableOpacity>
                            <Text style={{ color: '#FE4E82', fontSize: 16 }}>{(Changemnth).toUpperCase()}</Text>
                            <TouchableOpacity onPress={() => { next(sliderdate) }}>
                                <Icon name="right" size={20} color="#FE4E82" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <KeyboardAwareScrollView>
                            <View style={{ backgroundColor: '#ffffffa1', borderColor: '#ddd', borderBottomWidth: 2, shadowColor: '#ffffff', borderWidth: 2, borderRadius: 20 }}>
                                <View style={{ backgroundColor: '#65096F', borderTopLeftRadius: 20, borderTopRightRadius: 20, width: '100%' }}>
                                    <FlatGrid
                                        itemDimension={windowWidth / 10}
                                        adjustGridToStyles={true}
                                        data={mnth}
                                        renderItem={({ item, index }) => (
                                            <View>
                                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>{item}</Text>
                                            </View>
                                        )} />
                                </View>
                                <FlatGrid
                                    itemDimension={windowWidth / 10}
                                    adjustGridToStyles={true}
                                    data={calendar}
                                    style={{ flex: 1 }}
                                    renderItem={({ item }) => (
                                        <View>
                                            {item.blank == false &&
                                                <View style={{ alignSelf: 'center' }}>
                                                    <TouchableOpacity onPress={() => { calender(item.date) }}>
                                                        {item.date == activeDate &&
                                                            <View style={{ backgroundColor: '#65096F', borderRadius: 4, padding: 2 }}>
                                                                <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', fontWeight: '900' }}>{Moment(item.date).format('DD')}</Text>
                                                                {item.star != undefined &&
                                                                    <View style={{ flexDirection: 'row', height: 15, width: 45, borderRadius: 4, alignItems: 'center', paddingLeft: 6, borderColor: '#fff', borderWidth: 1 }}>
                                                                        {item.star.type == 1 &&
                                                                            <View style={{ alignSelf: 'center' }}>
                                                                                {item.star.ratings == 1 &&
                                                                                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                        <Icons name="star" size={12} color="#008023" />
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                    </View>
                                                                                }
                                                                                {item.star.ratings == 2 &&
                                                                                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                        <Icons name="star" size={12} color="#008023" />
                                                                                        <Icons name="star" size={12} color="#008023" />
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                    </View>
                                                                                }
                                                                                {item.star.ratings == 3 &&
                                                                                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                        <Icons name="star" size={12} color="#008023" />
                                                                                        <Icons name="star" size={12} color="#008023" />
                                                                                        <Icons name="star" size={12} color="#008023" />
                                                                                    </View>
                                                                                }
                                                                                {item.star.ratings == 0 &&
                                                                                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                    </View>
                                                                                }
                                                                            </View>
                                                                        }
                                                                        {item.star.type == 2 &&
                                                                            <View>
                                                                                {item.star.ratings == 1 &&
                                                                                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                        <Icons name="star" size={12} color="#AD0000" />
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                    </View>
                                                                                }
                                                                                {item.star.ratings == 2 &&
                                                                                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                        <Icons name="star" size={12} color="#AD0000" />
                                                                                        <Icons name="star" size={12} color="#AD0000" />
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                    </View>
                                                                                }
                                                                                {item.star.ratings == 3 &&
                                                                                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                        <Icons name="star" size={12} color="#AD0000" />
                                                                                        <Icons name="star" size={12} color="#AD0000" />
                                                                                        <Icons name="star" size={12} color="#AD0000" />
                                                                                    </View>
                                                                                }
                                                                                {item.star.ratings == 0 &&
                                                                                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                        <Icons name="star" size={12} color="#fff" />
                                                                                    </View>
                                                                                }
                                                                            </View>
                                                                        }
                                                                    </View>
                                                                }
                                                                {item.star == undefined &&
                                                                    <View style={{ flexDirection: 'row', backgroundColor: '#F7B9E7', height: 15, width: 48, borderRadius: 4, alignItems: 'center', paddingLeft: 6, }}>
                                                                        <Icons name="star" size={12} color="#fff" />
                                                                        <Icons name="star" size={12} color="#fff" />
                                                                        <Icons name="star" size={12} color="#fff" />
                                                                    </View>
                                                                }
                                                            </View>
                                                        }
                                                        {item.date != activeDate &&
                                                            <View>
                                                                <Text style={{ fontSize: 20, color: '#000', textAlign: 'center', }}>{Moment(item.date).format('DD')}</Text>
                                                                <View style={{ flexDirection: 'row', backgroundColor: '#F7B9E7', height: 15, width: 45, borderRadius: 4, alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                                                                    {item.star != undefined &&
                                                                        <View style={{ flexDirection: 'row', height: 15, width: 48, borderRadius: 4, alignItems: 'center', paddingLeft: 6, }}>
                                                                            {item.star.type == 1 &&
                                                                                <View style={{ alignSelf: 'center' }}>
                                                                                    {item.star.ratings == 1 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                            <Icons name="star" size={12} color="#008023" />
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                        </View>
                                                                                    }
                                                                                    {item.star.ratings == 2 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                            <Icons name="star" size={12} color="#008023" />
                                                                                            <Icons name="star" size={12} color="#008023" />
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                        </View>
                                                                                    }
                                                                                    {item.star.ratings == 3 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                            <Icons name="star" size={12} color="#008023" />
                                                                                            <Icons name="star" size={12} color="#008023" />
                                                                                            <Icons name="star" size={12} color="#008023" />
                                                                                        </View>
                                                                                    }
                                                                                    {item.star.ratings == 0 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                        </View>
                                                                                    }
                                                                                </View>}
                                                                            {item.star.type == 2 &&
                                                                                <View>
                                                                                    {item.star.ratings == 1 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                            <Icons name="star" size={12} color="#AD0000" />
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                        </View>
                                                                                    }
                                                                                    {item.star.ratings == 2 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                            <Icons name="star" size={12} color="#AD0000" />
                                                                                            <Icons name="star" size={12} color="#AD0000" />
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                        </View>
                                                                                    }
                                                                                    {item.star.ratings == 3 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                            <Icons name="star" size={12} color="#AD0000" />
                                                                                            <Icons name="star" size={12} color="#AD0000" />
                                                                                            <Icons name="star" size={12} color="#AD0000" />
                                                                                        </View>
                                                                                    }
                                                                                    {item.star.ratings == 0 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: -2 }}>
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                            <Icons name="star" size={12} color="#fff" />
                                                                                        </View>
                                                                                    }
                                                                                </View>
                                                                            }
                                                                        </View>
                                                                    }
                                                                    {item.star == undefined &&
                                                                        <View style={{ flexDirection: 'row', backgroundColor: '#F7B9E7', height: 15, width: 48, borderRadius: 4, alignItems: 'center', paddingLeft: 6, }}>
                                                                            <Icons name="star" size={12} color="#fff" />
                                                                            <Icons name="star" size={12} color="#fff" />
                                                                            <Icons name="star" size={12} color="#fff" />
                                                                        </View>
                                                                    }
                                                                </View>
                                                            </View>
                                                        }
                                                    </TouchableOpacity>
                                                </View>
                                            }
                                            {item.blank == true &&
                                                <View>
                                                    <Text></Text></View>
                                            }
                                        </View>
                                    )}
                                />
                            </View>
                            <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View>
                                    <Text style={{ color: '#65096F', fontSize: 24, fontFamily: 'AvertaStd-Semibold', fontWeight: '700' }}>Life Coach</Text>
                                </View>
                                <View style={{}}>
                                    <Text style={{ color: '#65096F', fontSize: 14, fontFamily: 'AvertaStd-Semibold', }}>{Moment(activeDate).format('Do MMM, YYYY')}</Text>
                                </View>
                                {/* <View style={{ flexDirection: 'row' }}>
                                    <FlatList
                                        data={calendar}
                                        renderItem={({ item }) => (
                                            <View>
                                                {item.blank == false &&
                                                    <View style={{ alignSelf: 'center' }}>
                                                        <TouchableOpacity onPress={() => { calender(item.date) }}>
                                                            {item.date == activeDate &&
                                                                <View style={{ marginRight: 25 }}>
                                                                    {item.star != undefined &&
                                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                            {item.star.type == 1 &&
                                                                                <View>
                                                                                    {item.star.ratings == 1 &&
                                                                                        <Icons name="star" size={35} color="#008023" />
                                                                                    }
                                                                                    {item.star.ratings == 2 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                                                            <Icons name="star" size={35} color="#008023" />
                                                                                            <Icons name="star" size={35} color="#008023" />
                                                                                        </View>
                                                                                    }
                                                                                    {item.star.ratings == 3 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                                                            <Icons name="star" size={35} color="#008023" />
                                                                                            <Icons name="star" size={35} color="#008023" />
                                                                                            <Icons name="star" size={35} color="#008023" />
                                                                                        </View>
                                                                                    }
                                                                                    {item.star.ratings == 0 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                                                            <Icons name="star" size={35} color="#fff" />
                                                                                            <Icons name="star" size={35} color="#fff" />
                                                                                            <Icons name="star" size={35} color="#fff" />
                                                                                        </View>
                                                                                    }
                                                                                </View>
                                                                            }
                                                                            {item.star.type == 2 &&
                                                                                <View>
                                                                                    {item.star.ratings == 1 &&
                                                                                        <Icons name="star" size={35} color="#AD0000" />
                                                                                    }
                                                                                    {item.star.ratings == 2 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                                                            <Icons name="star" size={35} color="#AD0000" />
                                                                                            <Icons name="star" size={35} color="#AD0000" />
                                                                                        </View>
                                                                                    }
                                                                                    {item.star.ratings == 3 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                                                            <Icons name="star" size={35} color="#AD0000" />
                                                                                            <Icons name="star" size={35} color="#AD0000" />
                                                                                            <Icons name="star" size={35} color="#AD0000" />
                                                                                        </View>
                                                                                    }
                                                                                    {item.star.ratings == 0 &&
                                                                                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                                                            <Icons name="star" size={35} color="#fff" />
                                                                                            <Icons name="star" size={35} color="#fff" />
                                                                                            <Icons name="star" size={35} color="#fff" />
                                                                                        </View>
                                                                                    }
                                                                                </View>
                                                                            }
                                                                        </View>
                                                                    }
                                                                    {item.star == undefined &&
                                                                        <View style={{ flexDirection: 'row', backgroundColor: '#F7B9E7', height: 15, width: 48, borderRadius: 4, alignItems: 'center', paddingLeft: 6, }}>
                                                                            <Icons name="star" size={35} color="#fff" />
                                                                            <Icons name="star" size={35} color="#fff" />
                                                                            <Icons name="star" size={35} color="#fff" />
                                                                        </View>
                                                                    }
                                                                </View>
                                                            }
                                                        </TouchableOpacity>
                                                    </View>
                                                }
                                            </View>
                                        )}
                                    />
                                </View> */}
                            </View>
                            <View style={{ marginLeft: 15, marginRight: 15, marginBottom: 20 }}>
                                <View style={{ backgroundColor: '#fff', borderRadius: 12, backgroundColor: '#ffffffa1', }}>
                                    {teextshow == false &&
                                        <View style={{}}>
                                            <Text style={{ fontSize: 16, color: '#000', fontFamily: 'AvertaStd-Regular', paddingTop: 20, paddingLeft: 20 }}>{lifes.short_lifecoach_desc}</Text>
                                            <TouchableOpacity onPress={() => { Textfun() }}>
                                                <Text style={{ fontSize: 14, color: '#73207C', fontFamily: 'AvertaStd-Regular', paddingTop: 10, paddingBottom: 20, paddingLeft: 20 }}>~ More Detail..</Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                    {teextshow == true &&
                                        <View style={{ paddingBottom: 10, paddingTop: 10 }}>
                                            <Text style={{ fontSize: 16, color: '#000', fontFamily: 'AvertaStd-Regular', paddingLeft: 20, paddingRight: 20 }}>{lifes.short_lifecoach_desc} <Text style={{ fontSize: 16, color: '#000', fontFamily: 'AvertaStd-Regular', paddingLeft: 20, paddingRight: 20 }}>{lifes.life_coach} </Text></Text>
                                            <Text style={{ fontSize: 16, color: '#000', fontFamily: 'AvertaStd-Semibold', paddingLeft: 20, paddingRight: 20, paddingBottom: 10 }}>Personal Day : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular', }}>{lifes.personal_day}</Text> </Text>
                                            {lifes.relationship_description != "" &&
                                                <Text style={{ fontSize: 16, color: '#000', fontFamily: 'AvertaStd-Semibold', paddingLeft: 20, paddingRight: 20, lineHeight: 20, paddingBottom:10 }}>RELATIONSHIP STATUS : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular', color: '#000' }}>{lifes.relationship_description}</Text> </Text>}
                                            {lifes.health_description != "" &&
                                                <Text style={{ fontSize: 16, color: '#000', fontFamily: 'AvertaStd-Semibold', paddingLeft: 20, paddingRight: 20, lineHeight: 20, paddingBottom:10 }}>HEALTH STATUS : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular', color: '#000' }}>{lifes.health_description}</Text> </Text>}
                                            {lifes.carrier_description != "" &&
                                                <Text style={{ fontSize: 16, color: '#000', fontFamily: 'AvertaStd-Semibold', paddingLeft: 20, paddingRight: 20, lineHeight: 20, paddingBottom:10 }}>CAREER STATUS : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular', color: '#000' }}>{lifes.carrier_description}</Text> </Text>}
                                            <Text onPress={() => { tfun() }} style={{ fontSize: 14, color: '#73207C', fontFamily: 'AvertaStd-Regular', paddingTop: 10, paddingBottom: 20, paddingLeft: 20 }}>~ Less Detail..</Text>
                                        </View>
                                    }
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                                            <Circle name="check-circle" size={26} color="#FE4E82" />
                                            <Text style={{ color: '#65096F', fontFamily: 'AvertaStd-Semibold', paddingLeft: 10 }}>Belive in yourself</Text>
                                        </View>
                                        <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                                            <Circle name="check-circle" size={26} color="#FE4E82" />
                                            <Text style={{ color: '#65096F', fontFamily: 'AvertaStd-Semibold', paddingLeft: 10 }}>Work hard in life</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 10 }}>
                                        {lifes.relationship_percentage != "" &&
                                            <View style={{ borderRadius: 4, borderWidth: 2, borderColor: '#FE4E82', paddingTop: 5, paddingBottom: 5, paddingLeft: 25, paddingRight: 25, alignItems: 'center' }}>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 18, }}>{lifes.relationship_percentage}</Text>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 16 }}>Love</Text>
                                            </View>}
                                        {lifes.relationship_percentage == "" &&
                                            <View style={{ borderRadius: 4, borderWidth: 2, borderColor: '#FE4E82', paddingTop: 5, paddingBottom: 5, paddingLeft: 25, paddingRight: 25, alignItems: 'center' }}>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 18, }}>N/A</Text>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 16 }}>Love</Text>
                                            </View>}
                                        {lifes.carrier_percentage != "" &&
                                            <View style={{ borderRadius: 4, borderWidth: 2, borderColor: '#FE4E82', paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, alignItems: 'center' }}>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 18 }}>{lifes.carrier_percentage}</Text>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 16 }}>Career</Text>
                                            </View>}
                                        {lifes.carrier_percentage == "" &&
                                            <View style={{ borderRadius: 4, borderWidth: 2, borderColor: '#FE4E82', paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, alignItems: 'center' }}>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 18 }}>N/A</Text>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 16 }}>Career</Text>
                                            </View>}
                                        {lifes.health_percentage != "" &&
                                            <View style={{ borderRadius: 4, borderWidth: 2, borderColor: '#FE4E82', paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, alignItems: 'center' }}>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 18 }}>{lifes.health_percentage}</Text>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 16 }}>Health</Text>
                                            </View>}
                                        {lifes.health_percentage == "" &&
                                            <View style={{ borderRadius: 4, borderWidth: 2, borderColor: '#FE4E82', paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, alignItems: 'center' }}>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 18 }}>N/A</Text>
                                                <Text style={{ color: '#FE4E82', fontFamily: 'AvertaStd-Semibold', fontSize: 16 }}>Health</Text>
                                            </View>}
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
                            <View style={{ flex: 0.8 }}></View>
                            <View style={{}}>
                                <TouchableOpacity onPress={() => { test9() }} style={{ alignSelf: 'center', marginLeft: -10 }}>
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
                                <TouchableOpacity onPress={() => { test6() }} style={{ paddingLeft: 10 }} >
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
                    <View style={{ paddingLeft: 5, paddingRight: 5, paddingBottom: 10, }}>
                        <View style={{ height: 60, borderColor: '#73207C', borderWidth: 1, borderRadius: 15, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around' }}>
                            <TouchableOpacity onPress={() => { SelectTab() }} style={{ justifyContent: 'center' }}>
                                <Image source={require('./assets/home-icon.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { test() }}
                                style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: -5 }}>
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
                                style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('./assets/prediction.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Profile()} style={{ justifyContent: 'center' }}>
                                <Image source={require('./assets/All-Icon&Photos/user.png')} style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            }
            {!loader &&
                <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ zIndex: 99999, backgroundColor: '#FFFFFFa1', position: 'absolute', height: '120%', justifyContent: 'center', width: '100%', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: '#73207C', fontFamily: 'AvertaStd-Semibold', fontSize: 16 }}>Please Wait</Text>
                        <ActivityIndicator size='large' color='#73207C' />
                    </View>
                </SafeAreaView>
            }
        </SafeAreaView>
    )
}

export default CustomCalender