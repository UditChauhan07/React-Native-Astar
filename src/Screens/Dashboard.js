import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity, ScrollView, Alert, FlatList, Animated, Easing, BackHandler } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Circle from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { openDatabase } from 'react-native-sqlite-storage';
import Moment from 'moment';
import Modal from "react-native-modal";
import Entypo from 'react-native-vector-icons/Entypo'
import Loader from './Loader';
import LottieView from 'lottie-react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Names, Ele } from '../ReduxFloder/action';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import SimpleGradientProgressbarView from "react-native-simple-gradient-progressbar-view";
import * as Animatable from 'react-native-animatable';


var db = openDatabase({ name: 'AStar8.db' });

Icon.loadFont();

const Dashboard = ({ navigation }) => {

    const dispatch = useDispatch();
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
    const [isVisible, visible] = useState(false)
    const [isele, ele] = useState(false)
    const [zodiac, setzodiac] = useState([])
    const [iscon, con] = useState(false)
    const [ispar, par] = useState(false)
    const [per, setper] = useState([])
    const [islifecoach, lifecoach] = useState(false)
    const [islove, love] = useState(false)
    const [iscareer, career] = useState(false)
    const [ishel, hel] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim0 = useRef(new Animated.Value(0)).current;
    const lefttoright = useRef(new Animated.Value(0)).current;
    const fadeAnim1 = useRef(new Animated.Value(0)).current;
    const fadeAnim2 = useRef(new Animated.Value(0)).current;
    const fadeAnim3 = useRef(new Animated.Value(0)).current;
    const fadeAnim4 = useRef(new Animated.Value(0)).current;
    const fadeAnim5 = useRef(new Animated.Value(0)).current;
    const fadeAnim6 = useRef(new Animated.Value(0)).current;
    const fadeAnim7 = useRef(new Animated.Value(0)).current;
    const fadeAnim8 = useRef(new Animated.Value(0)).current;
    const fadeAnim9 = useRef(new Animated.Value(0)).current;
    const fadeAnim10 = useRef(new Animated.Value(0)).current;
    const fadeAnim11 = useRef(new Animated.Value(0)).current;
    const fadeAnim12 = useRef(new Animated.Value(0)).current;
    const fadeAnim13 = useRef(new Animated.Value(0)).current;
    const fadeAnim14 = useRef(new Animated.Value(0)).current;
    const fadeAnim15 = useRef(new Animated.Value(0)).current;
    const fadeAnim16 = useRef(new Animated.Value(0)).current;
    const fadeAnim17 = useRef(new Animated.Value(0)).current;
    const fadeAnim18 = useRef(new Animated.Value(0)).current;
    const fadeAnim19 = useRef(new Animated.Value(0)).current;
    const fadeAnim20 = useRef(new Animated.Value(0)).current;
    const fadeAnim21 = useRef(new Animated.Value(0)).current;
    const fadeAnim22 = useRef(new Animated.Value(0)).current;
    const fadeAnim23 = useRef(new Animated.Value(0)).current;
    const fadeAnim24 = useRef(new Animated.Value(0)).current;
    const fadeAnim25 = useRef(new Animated.Value(0)).current;
    const fadeAnim26 = useRef(new Animated.Value(0)).current;
    const fadeAnim27 = useRef(new Animated.Value(0)).current;
    const [lifes, setlifes] = useState([])
    const [travels, settravel] = useState([])

    const Data = useSelector(state => state.Data)
    console.error(Data.userdetail.userid);

    useEffect(() => {
        AnimationUpDown()

        setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }).start();
        }, 10)

        setTimeout(() => {
            Animated.timing(fadeAnim0, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }, 50)

        setTimeout(() => {
            Animated.timing(lefttoright, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }, 110);

        setTimeout(() => {
            Animated.timing(fadeAnim1, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }).start();
        }, 210)

        setTimeout(() => {
            Animated.timing(fadeAnim2, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }, 310)

        setTimeout(() => {
            Animated.timing(fadeAnim3, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }).start();
        }, 410)

        setTimeout(() => {
            Animated.timing(fadeAnim4, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
            }).start();
        }, 510)

        setTimeout(() => {
            Animated.timing(fadeAnim5, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start();
        }, 610)

        setTimeout(() => {
            Animated.timing(fadeAnim6, {
                toValue: 1,
                duration: 900,
                useNativeDriver: true,
            }).start();
        }, 710)

        setTimeout(() => {
            Animated.timing(fadeAnim7, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        }, 810)

        setTimeout(() => {
            Animated.timing(fadeAnim8, {
                toValue: 1,
                duration: 1100,
                useNativeDriver: true,
            }).start();
        }, 910)

        setTimeout(() => {
            Animated.timing(fadeAnim9, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            }).start();
        }, 1110)

        setTimeout(() => {
            Animated.timing(fadeAnim10, {
                toValue: 1,
                duration: 1300,
                useNativeDriver: true,
            }).start();
        }, 1210)

        setTimeout(() => {
            Animated.timing(fadeAnim11, {
                toValue: 1,
                duration: 1400,
                useNativeDriver: true,
            }).start();
        }, 1310)

        setTimeout(() => {
            Animated.timing(fadeAnim12, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }).start();
        }, 1410)

        setTimeout(() => {
            Animated.timing(fadeAnim13, {
                toValue: 1,
                duration: 1600,
                useNativeDriver: true,
            }).start();
        }, 1510)


        setTimeout(() => {
            Animated.timing(fadeAnim14, {
                toValue: 1,
                duration: 1700,
                useNativeDriver: true,
            }).start();
        }, 1610)

        setTimeout(() => {
            Animated.timing(fadeAnim15, {
                toValue: 1,
                duration: 1800,
                useNativeDriver: true,
            }).start();
        }, 1710)

        setTimeout(() => {
            Animated.timing(fadeAnim16, {
                toValue: 1,
                duration: 1900,
                useNativeDriver: true,
            }).start();
        }, 1810)

        setTimeout(() => {
            Animated.timing(fadeAnim17, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }).start();
        }, 1910)

        setTimeout(() => {
            Animated.timing(fadeAnim18, {
                toValue: 1,
                duration: 2100,
                useNativeDriver: true,
            }).start();
        }, 2010)

        setTimeout(() => {
            Animated.timing(fadeAnim19, {
                toValue: 1,
                duration: 2200,
                useNativeDriver: true,
            }).start();
        }, 2110)

        setTimeout(() => {
            Animated.timing(fadeAnim20, {
                toValue: 1,
                duration: 2300,
                useNativeDriver: true,
            }).start();
        }, 2210)

        setTimeout(() => {
            Animated.timing(fadeAnim21, {
                toValue: 1,
                duration: 2400,
                useNativeDriver: true,
            }).start();
        }, 2310)

        setTimeout(() => {
            Animated.timing(fadeAnim22, {
                toValue: 1,
                duration: 2500,
                useNativeDriver: true,
            }).start();
        }, 2410)

        setTimeout(() => {
            Animated.timing(fadeAnim23, {
                toValue: 1,
                duration: 2600,
                useNativeDriver: true,
            }).start();
        }, 2510)

        setTimeout(() => {
            Animated.timing(fadeAnim24, {
                toValue: 1,
                duration: 2700,
                useNativeDriver: true,
            }).start();
        }, 2610)

        setTimeout(() => {
            Animated.timing(fadeAnim25, {
                toValue: 1,
                duration: 2800,
                useNativeDriver: true,
            }).start();
        }, 2710)

        setTimeout(() => {
            Animated.timing(fadeAnim26, {
                toValue: 1,
                duration: 2900,
                useNativeDriver: true,
            }).start();
        }, 2810)

        setTimeout(() => {
            Animated.timing(fadeAnim27, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            }).start();
        }, 3010)

        var Currentdate = Moment().format('ddd-DD-MMM-YYYY')
        var date = Moment().format('YYYY-MM-DD')
        let bodyFormData = { 'userid': Data.userdetail.userid, 'current_date': Currentdate, 'date_current': date }
        console.error("bodyFormData", bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/userlifecoach`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn("lifecaoch data ", data)
                setlifes(data)
                setloading(false)
            })
            .catch(error => {
                console.warn("error", error)
                setloading(false)
            })




        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM planetdetail",
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        setplanet(results.rows.item(i));
                    }
                }
            );
        });

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM userdetail",
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i) {
                        console.error("userdetail", results.rows.item(i));
                        setnames(results.rows.item(i))
                        setper(results.rows.item(i).namepercentage)
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
                    setname(temp);
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

        var currentDate = Moment().format('YYYY-MM-DD')
        let body = { 'userid': Data.userdetail.userid, "prediction_date": currentDate }
        console.error(body);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/userdailyprediction`, // Signup API
            data: body,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn("live api of date star", JSON.stringify(data))
                setfavcal(data.dcosmiccalender)
                settravel(data.travel_detail)
                setloading(false)
            })
            .catch(error => {
                console.warn("userdailyprediction", error)
                setloading(false)
            })


        tryOut()

        const unsubscribe = navigation.addListener('focus', () => {

            var Currentdate = Moment().format('ddd-DD-MMM-YYYY')
            var date = Moment().format('YYYY-MM-DD')
            let bodyFormData = { 'userid': Data.userdetail.userid, 'current_date': Currentdate, 'date_current': date }
            console.error("bodyFormData", bodyFormData);
            axios({
                method: 'POST',
                url: `https://astar.7kstartup.com/public/api/userlifecoach`, // Signup API
                data: bodyFormData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(({ data, status }) => {
                    console.warn("lifecaoch data ", data)
                    setlifes(data)
                    setloading(false)
                })
                .catch(error => {
                    console.warn("error", error)
                    setloading(false)
                })

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM userdetail",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i) {
                            setnames(results.rows.item(i))
                            setper(results.rows.item(i).namepercentage)
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
                        setname(temp);
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
                    "SELECT * FROM planetdetail",
                    [],
                    (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i) {
                            setplanet(results.rows.item(i));
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

            var currentDate = Moment().format('YYYY-MM-DD')
            let body = { 'userid': Data.userdetail.userid, "prediction_date": currentDate }
            console.error(body);
            axios({
                method: 'POST',
                url: `https://astar.7kstartup.com/public/api/userdailyprediction`, // Signup API
                data: body,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
                .then(({ data, status }) => {
                    console.warn("live api of date star", JSON.stringify(data))
                    setfavcal(data.dcosmiccalender)
                    settravel(data.travel_detail)
                    setloading(false)
                })
                .catch(error => {
                    console.warn(error)
                    setloading(false)
                })

            tryOut()

        });
        return unsubscribe;


    }, [])

    useFocusEffect(
        // this function is used to alert message for not getting out directly
        React.useCallback(() => {
            const handleBackButton = () => {
                Alert.alert("Hold on!", "Are you sure you want to exit?", [
                    {
                        text: "Cancel",
                        onPress: () => null,
                        style: "cancel"
                    },
                    { text: "YES", onPress: () => BackHandler.exitApp() }
                ]);
                return true;
            }

            BackHandler.addEventListener('hardwareBackPress', handleBackButton);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        }, [])
    );

    const [val, setval] = useState([])
    const testing = () => {
        favcal.forEach(element => {
            setval(element)
        });
        console.log(val);
    }

    const SelectTab = (item, index) => {
        setloading(true)
        console.log('Dashboard');
        navigation.navigate('Dashboard')
        setloading(false)
    }

    const Profile = (item, index) => {
        console.log('UserProfile');
        navigation.navigate('UserProfile')
    }

    const Cosmic = () => {
        navigation.navigate('CustomCalender')
        con(false)
    }

    const test = () => {
        navigation.navigate('Reading')
    }

    const test1 = () => {
        console.log('Compatibility');
        con(false)
        navigation.navigate('Compatibility')
    }

    const test5 = () => {
        console.log('Compatibility1');
        con(false)
        navigation.navigate('Compatibility1')
    }

    const test6 = () => {
        console.log('Compatibility2');
        navigation.navigate('Compatibility2')
        con(false)
    }

    const test7 = () => {
        console.log('Compatibility3');
        con(false)
        navigation.navigate('Compatibility3')
    }

    const test8 = () => {
        setloading(true)
        let bodyFormData = { 'userid': names.userid, }
        console.log(bodyFormData);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/usernamecompatibilitycheck`, // Signup API
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.log("Name Competebilty", data);
                dispatch(Names(data))
                navigation.navigate('NameCompatibilityCheck')
                con(false)
                setloading(false)
            })
            .catch(error => {
                console.warn(error.response)
                setloading(false)
            })
    }

    const test9 = () => {
        console.log('Compatibility5');
        con(false)
        navigation.navigate('Compatibility5')
    }

    const [namevalue, setnamevalue] = useState(false)
    const [destinynum, setdestinynum] = useState(false)
    const [keynum, setkeynum] = useState(false)
    const [health, sethealth] = useState(false)
    const [namevalue1, setnamevalue1] = useState(false)
    const [destinynum1, setdestinynum1] = useState(false)
    const [keynum1, setkeynum1] = useState(false)
    const [health1, sethealth1] = useState(false)

    const next = () => {
        console.log('biooo');
        setnamevalue(true)
    }
    const next1 = () => {
        console.log('dsh');
        setnamevalue(false)
    }
    const next2 = () => {
        console.log('destiny');
        setdestinynum(true)
    }
    const next3 = () => {
        console.log('destiny false');
        setdestinynum(false)
    }
    const next4 = () => {
        console.log('krynum true');
        setkeynum(true)
    }
    const next5 = () => {
        console.log('keynum false');
        setkeynum(false)
    }
    const next6 = () => {
        console.log('health true');
        sethealth(true)
    }
    const next7 = () => {
        console.log('health false');
        sethealth(false)
    }

    const Visible = (isVisible) => {
        visible(isVisible)
    }
    const GoBack = () => visible(false);

    const Element = (isele) => {
        ele(isele)
    }
    const Eback = () => ele(false)

    const test3 = (iscon) => {
        con(iscon)
        trySome()
    }
    const test4 = () => {
        console.log('tryouut');
        con(false)
        tryOut()
    }

    const Pos = () => {
        navigation.navigate('Possesions')
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

    const topBar = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE userdetail SET topbar=0 WHERE userid=" + names.userid,
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
                                    setnames(results.rows.item(i))
                                    setTimeout(() => {
                                        setloading(false)
                                    }, 500);
                                }
                            }
                        );
                    });
                }
            );
        });
    }

    const downtopbar = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE userdetail SET topbar=1 WHERE userid=" + names.userid,
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
                                    setnames(results.rows.item(i))
                                    setTimeout(() => {
                                        setloading(false)
                                    }, 500);
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
                "UPDATE userdetail SET removewidgets=0 WHERE userid=" + names.userid,
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
                                    setnames(results.rows.item(i))
                                    setTimeout(() => {
                                        setloading(false)
                                    }, 500);
                                }
                            }
                        );
                    });
                }
            );
        });
    }

    const anim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const AnimationUpDown = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.spring(anim.x, {
                    toValue: 0,
                    duration: 5000,
                    useNativeDriver: true,
                }),
                Animated.spring(anim.y, {
                    toValue: -10,
                    useNativeDriver: true,
                }),
            ]),
            Animated.spring(anim.y, {
                toValue: 10,
                useNativeDriver: true,
            }),
        ]).start();
    }

    const element = () => {
        let bodyFormData = { 'userid': Data.userdetail.userid }
        console.log(bodyFormData);
        setloading(true)
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/userelementalData`,
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn(data.element)
                dispatch(Ele(data))
                setloading(false)
                navigation.navigate('Element')
            })
            .catch(error => {
                console.warn(error)
                setloading(false)
            })
    }

    const travel = () => {
        navigation.navigate('Traveling')
    }

    const parent = (ispar) => {
        console.log(ispar);
        par(ispar)
    }
    const closedPar = () => {
        par(false)
    }

    const LifeCoach = (islifecoach) => {
        lifecoach(islifecoach)
    }

    const closedLifecoach = () => {
        lifecoach(false)
    }

    const Career = (iscareer) => {
        career(iscareer)
    }

    const closedCareer = () => {
        career(false)
    }

    const Health = (ishel) => {
        hel(ishel)
    }

    const closedHealth = () => {
        hel(false)
    }

    const Love = (islove) => {
        love(islove)
    }

    const closedLove = () => {
        love(false)
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
                <Animated.View style={{ opacity: fadeAnim }}>
                    <View style={{ backgroundColor: '#007AFF', borderBottomEndRadius: 30, borderBottomStartRadius: 30, width: '100%', }}>
                        <ImageBackground source={require('./assets/Emotional.gif')} style={{ zIndex: 2222, width: '100%', borderWidth: 2, overflow: 'hidden', borderBottomEndRadius: 30, borderBottomStartRadius: 30, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Animated.View style={{ opacity: fadeAnim0, paddingTop: 5 }}>
                                        <Text style={{ fontSize: 15, paddingTop: 10, paddingLeft: 20, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>Hello</Text>
                                        <Text style={{ color: '#fff', fontSize: 30, paddingLeft: 16, fontFamily: 'AvertaStd-Semibold', }}>{names.fullname}</Text>
                                    </Animated.View>
                                </View>
                                <Animated.View>
                                    {names.profile_pic != "" &&
                                        <View style={{ paddingTop: 10, paddingRight: 10, flexDirection: 'row', display: 'flex' }}>
                                            <TouchableOpacity onPress={() => { Profile() }} style={{ flexDirection: 'row' }}>
                                                <Image source={names.profile_pic !== "" ? { uri: names.profile_pic } : require('./assets/user-details-profile.png')} style={{ height: 55, width: 55, borderColor: '#fff', borderWidth: 2, borderRadius: 60 }} />
                                                <View style={{ paddingTop: 35, marginLeft: -20, flexDirection: 'row' }}>
                                                    <View style={{ paddingTop: 6, backgroundColor: '#73207C', height: 25, width: 25, borderRadius: 25 / 2, paddingLeft: 5 }}>
                                                        {zodiac.zodiac_sign == "CANCER" &&
                                                            <Icon name="zodiac-cancer" size={15} color="#fff" />
                                                        }
                                                        {zodiac.zodiac_sign == "ARIES" &&
                                                            <Icon name="zodiac-aries" size={15} color="#fff" />
                                                        }
                                                        {zodiac.zodiac_sign == "TAURUS" &&
                                                            <Icon name="zodiac-taurus" size={15} color="#fff" />
                                                        }
                                                        {zodiac.zodiac_sign == "GEMINI" &&
                                                            <Icon name="zodiac-gemini" size={15} color="#fff" />
                                                        }
                                                        {zodiac.zodiac_sign == "LEO" &&
                                                            <Icon name="zodiac-leo" size={15} color="#fff" />
                                                        }
                                                        {zodiac.zodiac_sign == "VIRGO" &&
                                                            <Icon name="zodiac-virgo" size={15} color="#fff" />
                                                        }
                                                        {zodiac.zodiac_sign == "LIBRA" &&
                                                            <Icon name="zodiac-libra" size={15} color="#fff" />
                                                        }
                                                        {zodiac.zodiac_sign == "SCORPIO" &&
                                                            <Icon name="zodiac-scorpio" size={15} color="#fff" />
                                                        }
                                                        {zodiac.zodiac_sign == "SAGITTARIUS" &&
                                                            <Icon name="zodiac-sagittarius" size={15} color="#fff" />
                                                        }
                                                        {zodiac.zodiac_sign == "CAPRICORN" &&
                                                            <Icon name="zodiac-capricorn" size={15} color="#fff" />
                                                        }
                                                        {zodiac.zodiac_sign == "AQUARIUS" &&
                                                            <Icon name="zodiac-aquarius" size={15} color="#fff" />
                                                        }
                                                        {zodiac.zodiac_sign == "PISCES" &&
                                                            <Icon name="zodiac-pisces" size={15} color="#fff" />
                                                        }
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                    {names.profile_pic == "" &&
                                        <View style={{ paddingTop: 10, paddingRight: 10, flexDirection: 'row', }}>
                                            <TouchableOpacity onPress={() => { Profile() }}>
                                                <View style={{ borderColor: '#fff', borderWidth: 2, borderRadius: 60 / 2, height: 60, width: 60, padding: 10 }}>
                                                    {zodiac.zodiac_sign == "CANCER" &&
                                                        <Icon name="zodiac-cancer" size={35} color="#fff" />
                                                    }
                                                    {zodiac.zodiac_sign == "ARIES" &&
                                                        <Icon name="zodiac-aries" size={35} color="#fff" />
                                                    }
                                                    {zodiac.zodiac_sign == "TAURUS" &&
                                                        <Icon name="zodiac-taurus" size={35} color="#fff" />
                                                    }
                                                    {zodiac.zodiac_sign == "GEMINI" &&
                                                        <Icon name="zodiac-gemini" size={35} color="#fff" />
                                                    }
                                                    {zodiac.zodiac_sign == "LEO" &&
                                                        <Icon name="zodiac-leo" size={35} color="#fff" />
                                                    }
                                                    {zodiac.zodiac_sign == "VIRGO" &&
                                                        <Icon name="zodiac-virgo" size={35} color="#fff" />
                                                    }
                                                    {zodiac.zodiac_sign == "LIBRA" &&
                                                        <Icon name="zodiac-libra" size={35} color="#fff" />
                                                    }
                                                    {zodiac.zodiac_sign == "SCORPIO" &&
                                                        <Icon name="zodiac-scorpio" size={35} color="#fff" />
                                                    }
                                                    {zodiac.zodiac_sign == "SAGITTARIUS" &&
                                                        <Icon name="zodiac-sagittarius" size={35} color="#fff" />
                                                    }
                                                    {zodiac.zodiac_sign == "CAPRICORN" &&
                                                        <Icon name="zodiac-capricorn" size={35} color="#fff" />
                                                    }
                                                    {zodiac.zodiac_sign == "AQUARIUS" &&
                                                        <Icon name="zodiac-aquarius" size={35} color="#fff" />
                                                    }
                                                    {zodiac.zodiac_sign == "PISCES" &&
                                                        <Icon name="zodiac-pisces" size={35} color="#fff" />
                                                    }
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                </Animated.View>
                            </View>
                            {names.topbar == 1 &&
                                <Animated.View>
                                    <View style={{ overflow: 'hidden' }}>
                                        <View style={{ padding: 10, marginTop: -8 }}>
                                            <Image source={require('./assets/Line.png')} style={{ width: '97%' }} />
                                        </View>
                                        <FlatList
                                            data={data}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View style={{ marginTop: -25 }}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        {item.module_type == 2 &&
                                                            <View style={{ transform: [{ rotate: '270deg' }], alignSelf: 'flex-start', marginTop: 75, marginLeft: -35 }}>
                                                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', fontFamily: 'AvertaStd-Semibold' }}>Birth Number</Text>
                                                            </View>
                                                        }
                                                        <View style={{ marginLeft: -45, marginTop: -15 }}>
                                                            <Animated.View style={{ opacity: lefttoright }}>
                                                                {item.module_type == 2 &&
                                                                    <Text style={{ color: '#fff', fontSize: 150, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>{item.number}</Text>
                                                                }
                                                            </Animated.View>
                                                        </View>
                                                        <View style={{ zIndex: 22222222222, overflow: 'scroll', marginTop: -10 }}>
                                                            <Animated.View style={{ opacity: fadeAnim1 }}>
                                                                {item.module_type == 2 &&
                                                                    <View>
                                                                        <TouchableOpacity onPress={() => { Love(!islove) }}>
                                                                            <Text numberOfLines={7} style={{ color: '#fff', maxWidth: '68%', paddingTop: 40, zIndex: 99999999, fontFamily: 'AvertaStd-Regular' }}>{item.description}</Text>
                                                                            <View style={{}}>
                                                                                <Text style={{ color: '#FE4E82', maxWidth: '68%', zIndex: 99999999, fontFamily: 'AvertaStd-Semibold', paddingTop: 5, }}>~ Read More</Text>
                                                                            </View>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                }
                                                            </Animated.View>
                                                        </View>
                                                        <Animatable.View animation='bounceIn' duration={300}>
                                                            {item.module_type == 2 &&
                                                                <View style={{ marginLeft: -100, paddingTop: 30, borderRadius: 50, overflow: 'hidden', backfaceVisibility: 'hidden' }}>
                                                                    {planet.planet_name == 'Saturn' &&
                                                                        <Image source={require('./assets/Saturn-unscreen.gif')} style={{ height: 104, width: 104, }} />
                                                                    }
                                                                    {planet.planet_name == 'Moon' &&
                                                                        <Image source={require('./assets/Moon.gif')} style={{ height: 104, width: 104, }} />
                                                                    }
                                                                    {planet.planet_name == 'Jupiter' &&
                                                                        <Image source={require('./assets/space-nasa-GIF-unscreen.gif')} style={{ height: 104, width: 104, }} />
                                                                    }
                                                                    {planet.planet_name == 'Uranus' &&
                                                                        <Image source={require('./assets/Uranus-unscreen.gif')} style={{ height: 104, width: 104, }} />
                                                                    }
                                                                    {planet.planet_name == 'Mercury' &&
                                                                        <Image source={require('./assets/Mercury-unscreen.gif')} style={{ height: 104, width: 104, }} />
                                                                    }
                                                                    {planet.planet_name == 'Neptune' &&
                                                                        <Image source={require('./assets/Neptune-unscreen.gif')} style={{ height: 104, width: 104, }} />
                                                                    }
                                                                    {planet.planet_name == 'Mars' &&
                                                                        <Image source={require('./assets/mars-GIF-unscreen.gif')} style={{ height: 104, width: 104, }} />
                                                                    }
                                                                    {planet.planet_name == 'Earth' &&
                                                                        <Image source={require('./assets/Earth--unscreen.gif')} style={{ height: 104, width: 104, }} />
                                                                    }
                                                                    {planet.planet_name == 'Venus' &&
                                                                        <Image source={require('./assets/venus-unscreen.gif')} style={{ height: 104, width: 104, }} />
                                                                    }
                                                                    {planet.planet_name == 'Sun' &&
                                                                        <Image source={require('./assets/sun-unscreen.gif')} style={{ height: 104, width: 104, }} />
                                                                    }
                                                                </View>
                                                            }
                                                        </Animatable.View>
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </Animated.View>
                            }
                        </ImageBackground>
                        {names.topbar == 1 &&
                            <TouchableOpacity onPress={() => { topBar() }}
                                style={{ paddingLeft: 100, paddingRight: 100 }}>
                                <View style={{ alignSelf: 'center', marginTop: -2 }}>
                                    <Entypo name='chevron-thin-up' size={15} color='#fff' />
                                </View>
                            </TouchableOpacity>
                        }
                        {names.topbar == 0 &&
                            <TouchableOpacity onPress={() => { downtopbar() }}
                                style={{ paddingLeft: 100, paddingRight: 100 }}>
                                <View style={{ alignSelf: 'center', marginTop: -2 }}>
                                    <Entypo name='chevron-thin-down' size={15} color='#fff' />
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                </Animated.View>
                <ScrollView>
                    <View style={{ marginTop: 5, marginBottom: 5 }}>
                        {names.removewidgets == 1 &&
                            <View style={{ margin: 5 }}>
                                <TouchableOpacity onPress={() => { test8() }}>
                                    <Animated.View style={{ opacity: fadeAnim3 }}>
                                        <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFFed', borderRadius: 10, justifyContent: 'space-between', paddingLeft: 15, paddingRight: 20, paddingTop: 10, paddingBottom: 10, marginRight: 5 }}>
                                            <View style={{ width: '85%', }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontFamily: 'AvertaStd-Semibold', fontSize: 16, color: '#000' }}>Your Name Compatibility</Text>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                                        <Text style={{ fontFamily: 'AvertaStd-Bold', color: '#000' }}>{names.namepercentage}%</Text>
                                                    </View>
                                                </View>
                                                <View>
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
                                                        </View>
                                                    }
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
                                                        </View>
                                                    }
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
                                            <View style={{ alignSelf: 'center', marginRight: 10 }}>
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
                                        <TouchableOpacity onPress={() => { Removewidgets() }}>
                                            <View style={{ alignSelf: 'flex-end', marginTop: -38, marginBottom: 10, marginRight: -5 }}>
                                                <View style={{}}>
                                                    <Entypo name='squared-cross' size={24} color='#73207C' />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </Animated.View>
                                </TouchableOpacity>
                            </View>
                        }
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, }}>
                            <Animated.View style={{ opacity: fadeAnim4 }}>
                                <TouchableOpacity onPress={() => { LifeCoach(!islifecoach) }}>
                                    <ImageBackground source={require('./assets/DailyStarGuide.png')} style={{ height: 149, width: 223, marginLeft: -1 }}>
                                        <View style={{ paddingTop: 20, }}>
                                            {/* <TouchableOpacity onPress={() => { LifeCoach(!islifecoach) }}> */}
                                            <View style={{ padding: 5, paddingLeft: 15 }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ color: '#fff', maxWidth: '85%', fontSize: 12, fontFamily: 'AvertaStd-Semibold', }}>" </Text>
                                                    <Text style={{ color: '#fff', maxWidth: '85%', fontSize: 12, fontFamily: 'AvertaStd-Semibold', }}>{lifes.short_lifecoach_desc} </Text>
                                                    <Text style={{ color: '#fff', maxWidth: '85%', fontSize: 12, fontFamily: 'AvertaStd-Semibold', paddingTop: 20 }}>" </Text>
                                                </View>
                                                <Text style={{ color: '#FE4E82', maxWidth: '85%', fontSize: 11, fontFamily: 'AvertaStd-Semibold', }}>~ Read More</Text>
                                            </View>
                                            {/* </TouchableOpacity> */}
                                            <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                                                <View style={{ paddingTop: 5, flexDirection: 'row' }}>
                                                    <Circle name="check-circle" size={12} color="#FE4E82" />
                                                    <Text style={{ color: '#fff', fontSize: 9, paddingLeft: 5, fontFamily: 'AvertaStd-Semibold' }}>Believe in yourself</Text>
                                                </View>
                                                <View style={{ paddingTop: 5, flexDirection: 'row', paddingLeft: 8 }}>
                                                    <Circle name="check-circle" size={12} color="#FE4E82" />
                                                    <Text style={{ color: '#fff', fontSize: 9, paddingLeft: 5, fontFamily: 'AvertaStd-Semibold' }}>Work hard in life</Text>
                                                </View>
                                            </View>
                                            <View style={{ paddingTop: 5, flexDirection: 'row', justifyContent: 'center' }}>
                                                {/* <TouchableOpacity onPress={() => { Love(!islove) }}> */}
                                                {lifes.relationship_percentage != "" &&
                                                    <View style={{ marginLeft: -20 }}>
                                                        <View style={{ height: 30, width: 45, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>{lifes.relationship_percentage}</Text>
                                                            <Text style={{ color: '#fff', fontSize: 8, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Love</Text>
                                                        </View>
                                                    </View>}
                                                {lifes.relationship_percentage == "" &&
                                                    <View style={{ marginLeft: -20 }}>
                                                        <View style={{ height: 30, width: 45, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>N/A</Text>
                                                            <Text style={{ color: '#fff', fontSize: 8, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Love</Text>
                                                        </View>
                                                    </View>}
                                                {/* </TouchableOpacity> */}
                                                {/* <TouchableOpacity onPress={() => { Career(!iscareer) }}> */}
                                                {lifes.carrier_percentage != "" &&
                                                    <View style={{ paddingLeft: 10 }}>
                                                        <View style={{ height: 30, width: 45, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, justifyContent: 'center' }}>
                                                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>{lifes.carrier_percentage}</Text>
                                                            <Text style={{ color: '#fff', fontSize: 8, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Career</Text>
                                                        </View>
                                                    </View>}
                                                {lifes.carrier_percentage == "" &&
                                                    <View style={{ paddingLeft: 10 }}>
                                                        <View style={{ height: 30, width: 45, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, justifyContent: 'center' }}>
                                                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>N/A</Text>
                                                            <Text style={{ color: '#fff', fontSize: 8, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Career</Text>
                                                        </View>
                                                    </View>}
                                                {/* </TouchableOpacity> */}
                                                {/* <TouchableOpacity onPress={() => { Health(!ishel) }}> */}
                                                {lifes.health_percentage != "" &&
                                                    <View style={{ paddingLeft: 10 }}>
                                                        <View style={{ height: 30, width: 45, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, justifyContent: 'center' }}>
                                                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>{lifes.health_percentage}</Text>
                                                            <Text style={{ color: '#fff', fontSize: 8, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Health</Text>
                                                        </View>
                                                    </View>}
                                                {lifes.health_percentage == "" &&
                                                    <View style={{ paddingLeft: 10 }}>
                                                        <View style={{ height: 30, width: 45, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, justifyContent: 'center' }}>
                                                            <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>N/A</Text>
                                                            <Text style={{ color: '#fff', fontSize: 8, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Health</Text>
                                                        </View>
                                                    </View>}
                                                {/* </TouchableOpacity> */}
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View style={{ opacity: fadeAnim5 }}>
                                <TouchableOpacity onPress={() => { Cosmic() }}>
                                    <View style={{ width: 123, height: 149, borderWidth: 2, borderRadius: 15, borderColor: '#FE4E82' }}>
                                        <View style={{ height: 63, backgroundColor: '#FE4E82', borderRadius: 15, flexDirection: 'row', width: 123, justifyContent: 'space-evenly', marginLeft: -2 }}>
                                            <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold', paddingTop: 5, fontFamily: 'AvertaStd-Black' }}>{Moment().format('DD')}</Text>
                                            <View style={{ paddingTop: 17, paddingRight: 2 }}>
                                                <Text style={{ color: '#fff', fontSize: 11, fontFamily: 'AvertaStd-Regular', alignSelf: 'flex-end', fontStyle: 'italic' }}>{(Moment().format('MMMM').toUpperCase())}</Text>
                                                <Text style={{ color: '#fff', fontSize: 11, fontWeight: 'bold', fontFamily: 'AvertaStd-BlackItalic', alignSelf: 'flex-end' }}>YR:{Moment().format('YYYY')}</Text>
                                            </View>
                                        </View>
                                        {favcal.module_type == 'Unfav Star' &&
                                            <View style={{ alignSelf: 'center' }}>
                                                {favcal.datestar == 1 &&
                                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                        <Icon name="star" size={30} color="#AD0000" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                    </View>
                                                }
                                                {favcal.datestar == 2 &&
                                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                        <Icon name="star" size={30} color="#AD0000" />
                                                        <Icon name="star" size={30} color="#AD0000" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                    </View>
                                                }
                                                {favcal.datestar == 3 &&
                                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                        <Icon name="star" size={30} color="#AD0000" />
                                                        <Icon name="star" size={30} color="#AD0000" />
                                                        <Icon name="star" size={30} color="#AD0000" />
                                                    </View>
                                                }
                                                {favcal.datestar == 0 &&
                                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                    </View>
                                                }
                                            </View>
                                        }
                                        {favcal.module_type == 'Fav Star' &&
                                            <View style={{ alignSelf: 'center' }}>
                                                {favcal.datestar == 1 &&
                                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                        <Icon name="star" size={30} color="#008023" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                    </View>
                                                }
                                                {favcal.datestar == 2 &&
                                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                        <Icon name="star" size={30} color="#008023" />
                                                        <Icon name="star" size={30} color="#008023" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                    </View>
                                                }
                                                {favcal.datestar == 3 &&
                                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                        <Icon name="star" size={30} color="#008023" />
                                                        <Icon name="star" size={30} color="#008023" />
                                                        <Icon name="star" size={30} color="#008023" />
                                                    </View>
                                                }
                                                {favcal.datestar == 0 &&
                                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                    </View>
                                                }
                                            </View>
                                        }
                                        {favcal.module_type == '' &&
                                            <View style={{ alignSelf: 'center' }}>
                                                {favcal.datestar == 0 &&
                                                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                        <Icon name="star-outline" size={30} color="#000" />
                                                    </View>
                                                }
                                            </View>
                                        }
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#2C294A', paddingTop: 10 }}>Cosmic Cal</Text>
                                    </View>
                                </TouchableOpacity>
                            </Animated.View>
                        </View>
                        <View>
                            <View style={{ marginLeft: 5, marginRight: 6 }}>
                                <View>
                                    {(namevalue == false && destinynum == false && keynum == false && health == false) &&
                                        <View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                                <Animated.View style={{ opacity: fadeAnim6 }}>
                                                    <FlatList
                                                        data={name}
                                                        keyExtractor={(item) => item.key}
                                                        renderItem={({ item, index }) =>
                                                            <View style={{ backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, shadowOffset: { width: 0, height: 3 }, shadowRadius: 3,width:170 }}>
                                                                <View style={{ marginTop: -10, }}>
                                                                    {namevalue == false &&
                                                                        <TouchableOpacity onPress={() => { next() }}
                                                                            style={{ width: '100%' }}>
                                                                            <View style={{ paddingLeft: 10 }}>
                                                                                <View style={{ borderRadius: 50, borderColor: '#73207C', borderWidth: 1.5, height: 20, width: 20, paddingLeft: 2.5, backgroundColor: '#fff' }}>
                                                                                    <FontAwesome5 name="angle-down" size={18} color="#73207C" />
                                                                                </View>
                                                                            </View>
                                                                            <View>
                                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3, paddingBottom: 3, paddingLeft: 10, paddingRight: 20 }}>
                                                                                <View>
                                                                                    <Text style={{ color: '#2C294A', fontSize: 14, fontFamily: 'AvertaStd-Semibold' }}>Name Description</Text>
                                                                                </View>
                                                                                <View style={{ flexDirection: 'row', marginTop: -10, paddingLeft: 5 }}>
                                                                                    <Image source={require('./assets/red-circle.png')} style={{ height: 37, width: 35 }} />
                                                                                    <View style={{ marginLeft: -22, justifyContent: 'center', }}>
                                                                                        <Text style={{ color: '#FB272F', fontSize: 20, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>{item.Chald_number}</Text>
                                                                                    </View>
                                                                                </View>
                                                                            </View>
                                                                            </View>
                                                                        </TouchableOpacity>
                                                                    }
                                                                </View>
                                                            </View>
                                                        }
                                                    />
                                                </Animated.View>
                                                <Animated.View style={{ opacity: fadeAnim7 }}>
                                                    <FlatList
                                                        data={data}
                                                        keyExtractor={(item) => item.key}
                                                        renderItem={({ item, index }) =>
                                                            <View>
                                                                {item.module_type == 16 &&
                                                                    <View style={{ backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, shadowOffset: { width: 0, height: 3 }, shadowRadius: 3, width: 170 }}>
                                                                        <View style={{ marginTop: -10 }}>
                                                                            {destinynum == false &&
                                                                                <TouchableOpacity onPress={() => { next2() }}
                                                                                    style={{ width: '100%' }}>
                                                                                    <View style={{ paddingLeft: 10 }}>
                                                                                        <View style={{ borderRadius: 50, borderColor: '#73207C', borderWidth: 1.5, height: 20, width: 20, paddingLeft: 2.5, backgroundColor: '#fff' }}>
                                                                                            <FontAwesome5 name="angle-down" size={18} color="#73207C" />
                                                                                        </View>
                                                                                    </View>
                                                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3, paddingBottom: 3, paddingLeft: 10, paddingRight: 20 }}>
                                                                                        <View>
                                                                                            <Text style={{ color: '#2C294A', fontSize: 14, paddingLeft: 2, fontFamily: 'AvertaStd-Semibold', }}>{item.module_name}</Text>
                                                                                        </View>
                                                                                        <View style={{ flexDirection: 'row', marginTop: -10,marginLeft:15 }}>
                                                                                            <Image source={require('./assets/blue-circle.png')} style={{ height: 37, width: 35 }} />
                                                                                            <View style={{ marginLeft: -22, marginTop: 2 }}>
                                                                                                {item.module_type == 16 &&
                                                                                                    <Text style={{ color: '#0079CF', fontSize: 20, fontFamily: 'AvertaStd-Semibold', textAlign: 'center', paddingTop: 3, }}>{item.number}</Text>}
                                                                                            </View>
                                                                                        </View>
                                                                                    </View>
                                                                                </TouchableOpacity>
                                                                            }
                                                                        </View>
                                                                    </View>
                                                                }
                                                            </View>
                                                        }
                                                    />
                                                </Animated.View>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Animated.View style={{ opacity: fadeAnim8 }}>
                                                    <FlatList
                                                        data={data}
                                                        keyExtractor={(item) => item.key}
                                                        renderItem={({ item, index }) =>
                                                            <View>
                                                                {item.module_type == 14 &&
                                                                    <View style={{ backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, shadowOffset: { width: 0, height: 3 }, shadowRadius: 3, width: 170 }}>
                                                                        <View style={{ marginTop: -10 }}>
                                                                            {keynum == false &&
                                                                                <TouchableOpacity onPress={() => { next4() }} style={{ width: '100%' }}>
                                                                                    <View style={{ paddingLeft: 10, }}>
                                                                                        <View style={{ borderRadius: 50, borderColor: '#73207C', borderWidth: 1.5, height: 20, width: 20, paddingLeft: 2.5, backgroundColor: '#fff' }}>
                                                                                            <FontAwesome5 name="angle-down" size={18} color="#73207C" />
                                                                                        </View>
                                                                                    </View>
                                                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3, paddingLeft: 10, paddingRight: 20, paddingBottom: 3 }}>
                                                                                        <View>
                                                                                            <Text style={{ color: '#2C294A', fontSize: 14, fontFamily: 'AvertaStd-Semibold' }}>Money Matters</Text>
                                                                                        </View>
                                                                                        <View style={{ flexDirection: 'row', marginTop: -10, marginLeft: 28 }}>
                                                                                            {/* <LottieView source={require('./assets/lf30_editor_lwhzw0cx.json')} autoPlay loop style={{ width: 40, height: 40 }} /> */}
                                                                                            <Image source={require('./assets/download.jpeg')} style={{ width: 33, height: 37, borderRadius: 50 }} />
                                                                                        </View>
                                                                                    </View>
                                                                                </TouchableOpacity>
                                                                            }
                                                                        </View>
                                                                    </View>
                                                                }
                                                            </View>
                                                        }
                                                    />
                                                </Animated.View>
                                                <Animated.View style={{ opacity: fadeAnim9 }}>
                                                    <FlatList
                                                        data={data}
                                                        keyExtractor={(item) => item.key}
                                                        renderItem={({ item, index }) =>
                                                            <View>
                                                                {item.module_type == 5 &&
                                                                    <View style={{ backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, shadowOffset: { width: 0, height: 3 }, shadowRadius: 3, width: 170, paddingBottom: 5 }}>
                                                                        <View style={{ marginTop: -10 }}>
                                                                            {health == false &&
                                                                                <TouchableOpacity onPress={() => { next6() }}
                                                                                    style={{ paddingLeft: 10, }}>
                                                                                    <View style={{ borderRadius: 50, borderColor: '#73207C', borderWidth: 1.5, height: 20, width: 20, paddingLeft: 2.5, backgroundColor: '#fff' }}>
                                                                                        <FontAwesome5 name="angle-down" size={18} color="#73207C" />
                                                                                    </View>
                                                                                    <View style={{ flexDirection: 'row', marginLeft: -10, justifyContent: 'space-between', paddingTop: 3, paddingLeft: 10, paddingRight: 20 }}>
                                                                                        <View>
                                                                                            <Text style={{ color: '#2C294A', fontSize: 14, fontFamily: 'AvertaStd-Semibold' }}>Your Health</Text>
                                                                                        </View>
                                                                                        <View style={{ flexDirection: 'row', marginTop: -10, marginLeft: 48 }}>
                                                                                            {/* <LottieView source={require('./assets/Heart.json')} autoPlay loop style={{ width: 35, height: 35 }} /> */}
                                                                                            <Image source={require('./assets/hearbeat.jpg')} style={{ width: 35, height: 35 }} />
                                                                                        </View>
                                                                                    </View>
                                                                                </TouchableOpacity>
                                                                            }
                                                                        </View>
                                                                    </View>
                                                                }
                                                            </View>
                                                        }
                                                    />
                                                </Animated.View>
                                            </View>
                                        </View>
                                    }
                                </View>
                                {namevalue == true &&
                                    <FlatList
                                        data={name}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View style={{ backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, shadowOffset: { width: 0, height: 3 }, shadowRadius: 3, width: '100%' }}>
                                                <View style={{ marginTop: -10, flexDirection: 'column' }}>
                                                    {namevalue == true &&
                                                        <TouchableOpacity onPress={() => { next1() }}
                                                            style={{ paddingLeft: 10, justifyContent: 'space-between' }}>
                                                            <View style={{ borderRadius: 50, borderColor: '#73207C', borderWidth: 2, height: 20, width: 20, paddingLeft: 2, backgroundColor: '#fff' }}>
                                                                <View style={{ marginTop: -2 }}>
                                                                    <FontAwesome5 name="angle-up" size={18} color="#73207C" />
                                                                </View>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: -10, marginRight: 10 }}>
                                                                <Text style={{ color: '#2C294A', fontSize: 16, paddingLeft: 10, fontFamily: 'AvertaStd-Semibold' }}>Name Description</Text>
                                                                <View style={{ paddingTop: 3, flexDirection: 'row', marginTop: -10, marginLeft: 18 }}>
                                                                    <Image source={require('./assets/red-circle.png')} style={{ height: 37, width: 35 }} />
                                                                    <View style={{ marginLeft: -22, justifyContent: 'center', }}>
                                                                        <Text style={{ color: '#FB272F', fontSize: 20, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>{item.Chald_number}</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', }}>
                                                                <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, fontFamily: 'AvertaStd-Black' }}>{item.Chald_positive_title} : <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, fontFamily: 'AvertaStd-Regular', paddingLeft: 10 }}>{item.Chald_positive_desc}</Text></Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', paddingBottom: 10, marginTop: '-4%', paddingTop: 10 }}>
                                                                <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, fontFamily: 'AvertaStd-Black' }}>{item.Chald_negative_title} : <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, fontFamily: 'AvertaStd-Regular' }}>{item.Chald_negative_desc}</Text></Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    }
                                                </View>
                                            </View>
                                        }
                                    />
                                }
                                {destinynum == true &&
                                    <FlatList
                                        data={data}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.module_type == 16 &&
                                                    <View style={{ backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, shadowOffset: { width: 0, height: 3 }, shadowRadius: 3, width: '100%' }}>
                                                        <View style={{ marginTop: -10 }}>
                                                            {destinynum == true &&
                                                                <TouchableOpacity onPress={() => { next3() }}
                                                                    style={{ paddingLeft: 10, }}>
                                                                    <View style={{ borderRadius: 50, borderColor: '#73207C', borderWidth: 2, height: 20, width: 20, paddingLeft: 2, backgroundColor: '#fff' }}>
                                                                        <View style={{ marginTop: -2 }}>
                                                                            <FontAwesome5 name="angle-up" size={18} color="#73207C" />
                                                                        </View>
                                                                    </View>
                                                                    <View style={{ flexDirection: 'row', marginLeft: -10, justifyContent: 'space-between' }}>
                                                                        <Text style={{ color: '#2C294A', fontSize: 16, paddingLeft: 10, fontFamily: 'AvertaStd-Semibold', }}>{item.module_name}</Text>
                                                                        <View style={{ paddingTop: 3, flexDirection: 'row', marginTop: -10, marginLeft: 10 }}>
                                                                            <Image source={require('./assets/blue-circle.png')} style={{ height: 37, width: 35, marginLeft: -40 }} />
                                                                            <View style={{ marginLeft: -22, marginTop: 3 }}>
                                                                                {item.module_type == 16 &&
                                                                                    <Text style={{ color: '#0079CF', fontSize: 20, fontFamily: 'AvertaStd-Semibold', textAlign: 'center', }}>{item.number}</Text>}
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                    <View style={{ flexDirection: 'row', }}>
                                                                        <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, fontFamily: 'AvertaStd-Black' }}>{item.learn_title} : <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, fontFamily: 'AvertaStd-Regular', paddingLeft: 30 }}>{item.learn_desc}</Text></Text>
                                                                    </View>
                                                                    <View style={{ flexDirection: 'row', paddingBottom: 10, marginTop: '-4%', paddingTop: 10 }}>
                                                                        <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, fontFamily: 'AvertaStd-Black' }}>{item.notlearn_title} : <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, lineHeight: 20, fontFamily: 'AvertaStd-Regular' }}>{item.notlearn_desc}</Text></Text>
                                                                    </View>
                                                                </TouchableOpacity>
                                                            }
                                                        </View>
                                                    </View>
                                                }
                                            </View>
                                        }
                                    />
                                }
                                {keynum == true &&
                                    <FlatList
                                        data={data}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.module_type == 14 &&
                                                    <View style={{ backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, shadowOffset: { width: 0, height: 3 }, shadowRadius: 3, width: "100%" }}>
                                                        <View style={{ marginTop: -10 }}>
                                                            {keynum == true &&
                                                                <TouchableOpacity onPress={() => { next5() }}>
                                                                    <View style={{ paddingLeft: 10, }}>
                                                                        <View style={{ borderRadius: 50, borderColor: '#73207C', borderWidth: 2, height: 20, width: 20, paddingLeft: 2, backgroundColor: '#fff' }}>
                                                                            <View style={{ marginTop: -2 }}>
                                                                                <FontAwesome5 name="angle-up" size={18} color="#73207C" />
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                        <Text style={{ color: '#2C294A', fontSize: 16, paddingLeft: 15, fontFamily: 'AvertaStd-Semibold' }}>Money Matter</Text>
                                                                        <View style={{ flexDirection: 'row', marginTop: -10, marginLeft: 10 }}>
                                                                            {/* <LottieView source={require('./assets/lf30_editor_lwhzw0cx.json')} autoPlay loop style={{ width: 40, height: 40 }} /> */}
                                                                            <Image source={require('./assets/download.jpeg')} style={{ width: 33, height: 33, borderRadius: 50 }} />
                                                                        </View>
                                                                    </View>
                                                                    <Text style={{ color: '#2C294A', fontSize: 14, paddingTop: 5, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, lineHeight: 20 }}>{item.description}</Text>
                                                                </TouchableOpacity>
                                                            }
                                                        </View>
                                                    </View>
                                                }
                                            </View>
                                        }
                                    />
                                }
                                {health == true &&
                                    <FlatList
                                        data={data}
                                        keyExtractor={(item) => item.key}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                {item.module_type == 5 &&
                                                    <View style={{ backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, shadowColor: '#000', shadowOpacity: 0.2, elevation: 2, shadowOffset: { width: 0, height: 3 }, shadowRadius: 3, width: '100%' }}>
                                                        <View style={{ marginTop: -10 }}>
                                                            {health == true &&
                                                                <TouchableOpacity onPress={() => { next7() }}
                                                                    style={{ paddingLeft: 10, }}>
                                                                    <View style={{ borderRadius: 50, borderColor: '#73207C', borderWidth: 2, height: 20, width: 20, paddingLeft: 2, backgroundColor: '#fff' }}>
                                                                        <View style={{ marginTop: -2 }}>
                                                                            <FontAwesome5 name="angle-up" size={18} color="#73207C" />
                                                                        </View>
                                                                    </View>
                                                                    <View style={{ flexDirection: 'row', marginLeft: -10, justifyContent: 'space-between' }}>
                                                                        <Text style={{ color: '#2C294A', fontSize: 16, paddingLeft: 10, fontFamily: 'AvertaStd-Semibold' }}>Your Health</Text>
                                                                        <View style={{ flexDirection: 'row', marginTop: -10, marginLeft: 30 }}>
                                                                            {/* <LottieView source={require('./assets/Heart.json')} autoPlay loop style={{ width: 35, height: 30 }} /> */}
                                                                            <Image source={require('./assets/hearbeat.jpg')} style={{ width: 30, height: 30 }} />
                                                                        </View>
                                                                    </View>
                                                                    <Text style={{ color: '#2C294A', fontSize: 14, paddingBottom: 10, paddingTop: 5, lineHeight: 20 }}>{item.description}</Text>
                                                                </TouchableOpacity>
                                                            }
                                                        </View>
                                                    </View>
                                                }
                                            </View>
                                        }
                                    />
                                }
                            </View>
                        </View>
                        <Animated.View style={{ opacity: fadeAnim10 }}>
                            <View style={{ height: 104, backgroundColor: '#FFFFFFa1', borderRadius: 10, marginTop: 25, marginLeft: 5.5, marginRight: 5.5, marginBottom: 5 }}>
                                <Animated.View style={{ opacity: fadeAnim11 }}>
                                    <View style={{ borderRadius: 10, backgroundColor: '#73207C', marginTop: -10, alignSelf: 'center', paddingBottom: 3, paddingTop: 3, paddingLeft: 15, paddingRight: 15 }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'AvertaStd-Semibold', color: '#fff', textAlign: 'center' }}>Key Numbers</Text>
                                    </View>
                                </Animated.View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                                    <View style={{ borderRightColor: '#D1D1D1', marginBottom: 10, marginTop: -30 }}>
                                        <Animated.View style={{ opacity: fadeAnim12 }}>
                                            <View style={{ paddingLeft: 8, paddingTop: 10, }}>
                                                <Text style={{ fontSize: 14, fontFamily: 'AvertaStd-Semibold', color: '#2C294A' }}>Favorable Numbers</Text>
                                            </View>
                                        </Animated.View>
                                        <Animated.View style={{ opacity: fadeAnim13 }}>
                                            <View style={{ paddingLeft: 8, paddingTop: 20, }}>
                                                <Text style={{ fontSize: 14, fontFamily: 'AvertaStd-Semibold', color: '#2C294A' }}>Non-Favorable Numbers</Text>
                                            </View>
                                        </Animated.View>
                                    </View>
                                    <View style={{ borderWidth: 0.2, borderColor: '#979797', height: 75, marginTop: -25, }}></View>
                                    {/* <View style={{ marginTop: -40 }}>
                                        <Text style={{ color: '#D1D1D1', fontSize: 80, fontWeight: '100', }}>|</Text>
                                    </View> */}
                                    <View>
                                        <FlatList
                                            data={fav}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View style={{ paddingLeft: 5, paddingBottom: 10 }}>
                                                    <View style={{ paddingTop: 5, paddingRight: 15, flexDirection: 'row', }}>
                                                        {item.numbers[0] &&
                                                            <View style={{ paddingRight: 5, display: 'flex', }}>
                                                                <Animated.View style={{ opacity: fadeAnim14 }}>
                                                                    <Image source={require('./assets/fav-blue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                                    <View style={{ marginLeft: 10, justifyContent: 'center', position: 'absolute', marginTop: 3 }}>
                                                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>{item.numbers[0]}</Text>
                                                                    </View>
                                                                </Animated.View>
                                                            </View>
                                                        }
                                                        {item.numbers[2] &&
                                                            <View style={{ paddingRight: 5, display: 'flex' }}>
                                                                <Animated.View style={{ opacity: fadeAnim15 }}>
                                                                    <Image source={require('./assets/fav-red.png')} style={{ width: 34.41, height: 31.51 }} />
                                                                    <View style={{ marginLeft: 10, justifyContent: 'center', position: 'absolute', marginTop: 3 }}>
                                                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>{item.numbers[2]}</Text>
                                                                    </View>
                                                                </Animated.View>
                                                            </View>
                                                        }
                                                        {item.numbers[4] &&
                                                            <View style={{ paddingRight: 5 }}>
                                                                <Animated.View style={{ opacity: fadeAnim16 }}>
                                                                    <Image source={require('./assets/fav-darkBlue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                                    <View style={{ marginLeft: 10, justifyContent: 'center', position: 'absolute', marginTop: 3 }}>
                                                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>{item.numbers[4]}</Text>
                                                                    </View>
                                                                </Animated.View>
                                                            </View>
                                                        }
                                                        {item.numbers[6] &&
                                                            <View style={{ paddingRight: 5, display: 'flex' }}>
                                                                <Animated.View style={{ opacity: fadeAnim17 }}>
                                                                    <Image source={require('./assets/fav-Sky-Blue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                                    <View style={{ marginLeft: 10, justifyContent: 'center', position: 'absolute', marginTop: 3 }}>
                                                                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'AvertaStd-Semibold' }}>{item.numbers[6]}</Text>
                                                                    </View>
                                                                </Animated.View>
                                                            </View>
                                                        }
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <FlatList
                                            data={unfav}
                                            keyExtractor={(item) => item.key}
                                            renderItem={({ item, index }) =>
                                                <View style={{ marginBottom: 30, paddingLeft: 5 }}>
                                                    <View style={{ paddingTop: 5, paddingRight: 15, flexDirection: 'row', }}>
                                                        {item.numbers[0] &&
                                                            <View style={{ paddingRight: 5, display: 'flex', alignItems: 'center' }}>
                                                                <Animated.View style={{ opacity: fadeAnim18 }}>
                                                                    <Image source={require('./assets/Unfav-blue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                                    <View style={{ marginLeft: 10, justifyContent: 'center', position: 'absolute', marginTop: 3 }}>
                                                                        <Text style={{ fontSize: 20, color: '#066AFF', fontFamily: 'AvertaStd-Semibold' }}>{item.numbers[0]}</Text>
                                                                    </View>
                                                                </Animated.View>
                                                            </View>
                                                        }
                                                        {item.numbers[2] &&
                                                            <View style={{ paddingRight: 5, display: 'flex', alignItems: 'center' }}>
                                                                <Animated.View style={{ opacity: fadeAnim19 }}>
                                                                    <Image source={require('./assets/unfav-red.png')} style={{ width: 34.41, height: 31.51 }} />
                                                                    <View style={{ marginLeft: 10, justifyContent: 'center', position: 'absolute', marginTop: 3 }}>
                                                                        <Text style={{ fontSize: 20, color: '#FF173A', fontFamily: 'AvertaStd-Semibold' }}>{item.numbers[2]}</Text>
                                                                    </View>
                                                                </Animated.View>
                                                            </View>
                                                        }
                                                        {item.numbers[4] &&
                                                            <View style={{ paddingRight: 5, alignItems: 'center' }}>
                                                                <Animated.View style={{ opacity: fadeAnim20 }}>
                                                                    <Image source={require('./assets/unfav-darkBlue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                                    <View style={{ marginLeft: 10, justifyContent: 'center', position: 'absolute', marginTop: 3 }}>
                                                                        <Text style={{ fontSize: 20, color: '#022457', fontFamily: 'AvertaStd-Semibold' }}>{item.numbers[4]}</Text>
                                                                    </View>
                                                                </Animated.View>
                                                            </View>
                                                        }
                                                        {item.numbers[6] &&
                                                            <View style={{ paddingRight: 5, display: 'flex', alignItems: 'center' }}>
                                                                <Animated.View style={{ opacity: fadeAnim21 }}>
                                                                    <Image source={require('./assets/unfav-Sky-Blue.png')} style={{ width: 34.41, height: 31.51 }} />
                                                                    <View style={{ marginLeft: 10, justifyContent: 'center', position: 'absolute', marginTop: 3 }}>
                                                                        <Text style={{ fontSize: 20, color: '#009E99', fontFamily: 'AvertaStd-Semibold' }}>{item.numbers[6]}</Text>
                                                                    </View>
                                                                </Animated.View>
                                                            </View>
                                                        }
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>
                                </View>
                            </View>
                        </Animated.View>

                        <View style={{ padding: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Animated.View style={{ opacity: fadeAnim22 }}>
                                    <TouchableOpacity onPress={() => {
                                        Pos()
                                    }
                                    } style={{ alignItems: 'center' }}>
                                        <View style={{ width: 107, height: 79, backgroundColor: '#fff', justifyContent: 'center', borderRadius: 15, padding: 10, alignItems: 'center' }}>
                                            <Image source={require('./assets/belongings.png')} style={{ height: 30, width: 30 }} />
                                            <Text style={{ color: '#2C294A', textAlign: 'center', fontSize: 15, fontFamily: 'AvertaStd-Semibold' }}>Possessions</Text>

                                        </View>
                                    </TouchableOpacity>
                                </Animated.View>
                                <Animated.View style={{ opacity: fadeAnim23 }}>
                                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { element() }}>
                                        <View style={{ width: 107, height: 79, backgroundColor: '#fff', justifyContent: 'center', borderRadius: 15, padding: 10, alignItems: 'center' }}>
                                            <FlatList
                                                data={data}
                                                keyExtractor={(item) => item.key}
                                                renderItem={({ item, index }) =>
                                                    <View>
                                                        {item.module_type == 4 &&
                                                            <View style={{ alignItems: 'center' }}>
                                                                {item.description.split(' ')[0] == 'Fire' &&
                                                                    <Image source={require('./assets/fire.png')} style={{ width: 30, height: 35 }} />
                                                                }
                                                                {item.description.split(' ')[0] == 'Water' &&
                                                                    <Image source={require('./assets/water.png')} style={{ width: 30, height: 35 }} />
                                                                }
                                                                {item.description.split(' ')[0] == 'Air' &&
                                                                    <Image source={require('./assets/Wind.png')} style={{ width: 30, height: 35 }} />
                                                                }
                                                                {item.description.split(' ')[0] == 'Earth' &&
                                                                    <Image source={require('./assets/earth.png')} style={{ width: 30, height: 35 }} />
                                                                }
                                                                <Text style={{ color: '#2C294A', textAlign: 'center', fontSize: 15, fontWeight: '500' }}>Elements</Text>
                                                            </View>
                                                        }
                                                    </View>
                                                }
                                            />
                                            <Modal visible={isele}
                                                onBackdropPress={() => Eback()}
                                                onRequestClose={() => Eback()}>
                                                <View style={{ backgroundColor: '#fff', margin: 25, flex: 0.3 }}>
                                                    <View style={{ alignSelf: 'flex-end' }}>
                                                        <TouchableOpacity onPress={() => { Eback() }}>
                                                            <Entypo name='cross' size={40} />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{ margin: 25, alignSelf: 'center' }}>
                                                        <FlatList
                                                            data={data}
                                                            keyExtractor={(item) => item.key}
                                                            renderItem={({ item, index }) =>
                                                                <View>
                                                                    {item.module_type == 4 &&
                                                                        <Text style={{ color: '#65096F', textAlign: 'center', fontFamily: 'AvertaStd-Semibold', padding: 15, }}>{item.description}</Text>
                                                                    }
                                                                </View>
                                                            }
                                                        />
                                                    </View>
                                                </View>
                                            </Modal>
                                        </View>
                                    </TouchableOpacity>
                                </Animated.View>
                                <Animated.View style={{ opacity: fadeAnim24 }}>
                                    <TouchableOpacity onPress={() => { parent(!ispar) }}>
                                        <View style={{ width: 107, height: 79, backgroundColor: '#fff', justifyContent: 'center', borderRadius: 15, padding: 10 }}>
                                            <Image source={require('./assets/parent.png')} style={{ width: 37, height: 37, alignSelf: 'center' }} />
                                            <Text style={{ color: '#2C294A', textAlign: 'center', fontSize: 15, fontFamily: 'AvertaStd-Semibold' }}>Parenting</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                            <TouchableOpacity onPress={() => { travel() }}>
                                <View style={{ width: '100%', height: 49, backgroundColor: '#fff', borderRadius: 15, padding: 10, flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                                    <Image source={require('./assets/travel.png')} style={{ width: 37, height: 37, alignSelf: 'center' }} />
                                    <Text style={{ color: '#2C294A', textAlign: 'center', fontSize: 15, fontFamily: 'AvertaStd-Bold', alignSelf: 'center', borderRightWidth: 1, paddingRight: 10, }}>Traveling</Text>
                                    <Text style={{ paddingLeft: 10, color: '#000', maxWidth: '60%', fontFamily: 'AvertaStd-Regular' }}>{travels.travel_description}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
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
                    style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.95, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
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
                <Modal
                    animationType="none"
                    hardwareAccelerated={true}
                    statusBarTranslucent={true}
                    transparent={true}
                    duration={50}
                    useNativeDriver={true}
                    onBackdropPress={() => closedPar()}
                    onRequestClose={() => closedPar()}
                    visible={ispar}
                    style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.95, alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                    <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 20, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginTop: -20, }}>
                                    <View style={{ justifyContent: 'flex-start', padding: 15, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 60, backgroundColor: '#F7B9E7', borderColor: '#65096F', shadowColor: '#000', shadowRadius: 60, elevation: 0.2 }}>
                                        <Image source={require('./assets/parent.png')} style={{ width: 40, height: 40, }} />
                                    </View>
                                </View>
                                <View style={{ marginTop: 10, marginLeft: 20 }}>
                                    <Text style={{ color: '#2C294A', fontSize: 30, fontFamily: 'AvertaStd-Black', }}>Parenting</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: -15, marginLeft: -10 }}>
                                <TouchableOpacity onPress={() => { closedPar() }}>
                                    <Entypo name='squared-cross' size={28} color='#73207C' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <FlatList
                                data={data}
                                keyExtractor={(item) => item.key}
                                renderItem={({ item, index }) =>
                                    <View>
                                        {item.module_type == "12" &&
                                            <Text style={{ color: '#000', fontSize: 16, fontFamily: 'AvertaStd-Regular', paddingLeft: 15, paddingRight: 15, lineHeight: 25 }}>{item.description}</Text>}
                                    </View>
                                }
                            />
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
                    onBackdropPress={() => closedLifecoach()}
                    onRequestClose={() => closedLifecoach()}
                    visible={islifecoach}
                    style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.95, alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                    <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 20, }}>
                        <View style={{ padding: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#2C294A', fontSize: 24, fontFamily: 'AvertaStd-Black', lineHeight: 20, textAlign: 'center', paddingBottom: 15, paddingTop: 5 }}>Life Coach</Text>
                                <View style={{ marginTop: -35 }}>
                                    <TouchableOpacity onPress={() => { closedLifecoach() }}>
                                        <Entypo name='squared-cross' size={28} color='#73207C' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>{lifes.short_lifecoach_desc} <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 22 }}>{lifes.life_coach}</Text></Text>
                            <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22, marginTop: 10, marginBottom: 10 }}>Personal Day : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular', }}>{lifes.personal_day}</Text> </Text>
                            {/* {lifes.relationship_description != "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Relationship Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>{lifes.relationship_description}</Text> </Text>}
                            {lifes.relationship_percentage != "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Relationship Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>{lifes.relationship_percentage}</Text> </Text>}
                            {lifes.relationship_percentage == "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Relationship Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>N/A</Text> </Text>}
                            {lifes.health_description != "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Health Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>{lifes.health_description}</Text> </Text>}
                            {lifes.health_percentage != "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Health Percentage Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>{lifes.health_percentage}</Text> </Text>}
                            {lifes.health_percentage == "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Health Percentage Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>N/A</Text> </Text>}
                            {lifes.carrier_description != "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Carrier Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>{lifes.carrier_description}</Text> </Text>}
                            {lifes.carrier_percentage != "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Carrier Percentage Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>{lifes.carrier_percentage}</Text> </Text>}
                            {lifes.carrier_percentage == "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Carrier Percentage Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>N/A</Text> </Text>}
                            {lifes.travel_description != "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Travel Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>{lifes.travel_description}</Text> </Text>}
                            {lifes.travel_percentage != "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Travel Percentage Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>{lifes.travel_percentage}</Text> </Text>}
                            {lifes.travel_percentage == "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Semibold', lineHeight: 22 }}>Travel Percentage Status : <Text style={{ fontSize: 16, fontFamily: 'AvertaStd-Regular' }}>N/A</Text> </Text>} */}
                            <View style={{ paddingTop: 5, flexDirection: 'row', justifyContent: 'center' }}>
                                {lifes.relationship_percentage != "" &&
                                    <View style={{}}>
                                        <View style={{ paddingBottom: 15, paddingTop: 15, paddingLeft: 30, paddingRight: 30, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: '#000', fontSize: 14, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>{lifes.relationship_percentage}</Text>
                                            <Text style={{ color: '#000', fontSize: 12, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Love</Text>
                                        </View>
                                    </View>}
                                {lifes.relationship_percentage == "" &&
                                    <View style={{}}>
                                        <View style={{ paddingBottom: 15, paddingTop: 15, paddingLeft: 30, paddingRight: 30, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: '#000', fontSize: 14, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>N/A</Text>
                                            <Text style={{ color: '#000', fontSize: 12, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Love</Text>
                                        </View>
                                    </View>}
                                {lifes.carrier_percentage != "" &&
                                    <View style={{ paddingLeft: 10 }}>
                                        <View style={{ paddingBottom: 15, paddingTop: 15, paddingLeft: 25, paddingRight: 25, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, justifyContent: 'center' }}>
                                            <Text style={{ color: '#000', fontSize: 14, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>{lifes.carrier_percentage}</Text>
                                            <Text style={{ color: '#000', fontSize: 12, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Career</Text>
                                        </View>
                                    </View>}
                                {lifes.carrier_percentage == "" &&
                                    <View style={{ paddingLeft: 10 }}>
                                        <View style={{ paddingBottom: 15, paddingTop: 15, paddingLeft: 25, paddingRight: 25, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, justifyContent: 'center' }}>
                                            <Text style={{ color: '#000', fontSize: 14, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>N/A</Text>
                                            <Text style={{ color: '#000', fontSize: 12, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Career</Text>
                                        </View>
                                    </View>}
                                {lifes.health_percentage != "" &&
                                    <View style={{ paddingLeft: 10 }}>
                                        <View style={{ paddingBottom: 15, paddingTop: 15, paddingLeft: 25, paddingRight: 25, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, justifyContent: 'center' }}>
                                            <Text style={{ color: '#000', fontSize: 14, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>{lifes.health_percentage}</Text>
                                            <Text style={{ color: '#000', fontSize: 12, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Health</Text>
                                        </View>
                                    </View>}
                                {lifes.health_percentage == "" &&
                                    <View style={{ paddingLeft: 10 }}>
                                        <View style={{ paddingBottom: 15, paddingTop: 15, paddingLeft: 25, paddingRight: 25, borderColor: '#FE4E82', borderWidth: 1, borderRadius: 4, justifyContent: 'center' }}>
                                            <Text style={{ color: '#000', fontSize: 14, textAlign: 'center', fontFamily: 'AvertaStd-Bold' }}>N/A</Text>
                                            <Text style={{ color: '#000', fontSize: 12, textAlign: 'center', fontFamily: 'AvertaStd-Semibold' }}>Health</Text>
                                        </View>
                                    </View>}
                            </View>
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
                    onBackdropPress={() => closedCareer()}
                    onRequestClose={() => closedCareer()}
                    visible={iscareer}
                    style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.95, alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                    <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 20, }}>
                        <View style={{ padding: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#2C294A', fontSize: 24, fontFamily: 'AvertaStd-Black', lineHeight: 20, textAlign: 'center', paddingBottom: 15, paddingTop: 5 }}>Life Coach</Text>
                                <View style={{ marginTop: -35 }}>
                                    <TouchableOpacity onPress={() => { closedCareer() }}>
                                        <Entypo name='squared-cross' size={28} color='#73207C' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 22 }}>{lifes.life_coach}</Text>
                            <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 22 }}>Personal_Day : {lifes.personal_day} </Text>
                            {lifes.color != "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 22 }}>Color of the day : {lifes.color} </Text>}
                            {lifes.color == "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Regular' }}></Text>}
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
                    onBackdropPress={() => closedHealth()}
                    onRequestClose={() => closedHealth()}
                    visible={ishel}
                    style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.95, alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                    <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 20, }}>
                        <View style={{ padding: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#2C294A', fontSize: 24, fontFamily: 'AvertaStd-Black', lineHeight: 20, textAlign: 'center', paddingBottom: 15, paddingTop: 5 }}>Life Coach</Text>
                                <View style={{ marginTop: -35 }}>
                                    <TouchableOpacity onPress={() => { closedHealth() }}>
                                        <Entypo name='squared-cross' size={28} color='#73207C' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 22 }}>{lifes.life_coach}</Text>
                            <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 22 }}>Personal_Day : {lifes.personal_day} </Text>
                            {lifes.color != "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Regular', lineHeight: 22 }}>Color of the day : {lifes.color} </Text>}
                            {lifes.color == "" &&
                                <Text style={{ color: '#000', maxWidth: '95%', fontSize: 16, fontFamily: 'AvertaStd-Regular' }}></Text>}
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
                    onBackdropPress={() => closedLove()}
                    onRequestClose={() => closedLove()}
                    visible={islove}
                    style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.95, alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5, marginBottom: -50 }}>
                    <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 20, }}>
                        <View style={{ padding: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#2C294A', fontSize: 24, fontFamily: 'AvertaStd-Black', lineHeight: 20, textAlign: 'center', paddingBottom: 15, paddingTop: 5 }}>Your Name Reading</Text>
                                <View style={{ marginTop: -35 }}>
                                    <TouchableOpacity onPress={() => { closedLove() }}>
                                        <Entypo name='squared-cross' size={28} color='#73207C' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <FlatList
                                data={data}
                                keyExtractor={(item) => item.key}
                                renderItem={({ item, index }) =>
                                    <View>
                                        {item.module_type == 2 &&
                                            <View>
                                                <TouchableOpacity onPress={() => { Love(!islove) }}>
                                                    <Text style={{ color: '#000', zIndex: 99999999, fontFamily: 'AvertaStd-Regular', lineHeight: 20 }}>{item.description}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        }
                                    </View>
                                }
                            />
                        </View>
                    </View>
                </Modal>
                <View style={{ paddingLeft: 5, paddingRight: 5, paddingBottom: 10, }}>
                    <View style={{ height: 60, borderColor: '#73207C', borderWidth: 1, borderRadius: 15, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { SelectTab() }} style={{ justifyContent: 'center', }}>
                            <Image source={require('./assets/home-icon.png')} style={{ width: 30, height: 30 }} />
                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>HOME</Text>
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
                        >
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

export default Dashboard