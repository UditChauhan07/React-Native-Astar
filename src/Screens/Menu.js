import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TouchableOpacity, Animated, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Circle from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import Entypo from 'react-native-vector-icons/Entypo'
import Loader from './Loader';




const Menu = ({ navigation }) => {


    const [iscon, con] = useState(false)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        tryOut()
    }, [])

    const SelectTab = (item, index) => {
        setloading(true)
        console.log('boooo');
        navigation.navigate('Dashboard')
        setloading(false)
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
        con(false)
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

    const test8 = () => {
        navigation.navigate('Compatibility4')
        con(false)
    }

    const test9 = () => {
        navigation.navigate('Compatibility5')
        con(false)
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
                        toValue: -7,
                        useNativeDriver: true,
                    }),
                    Animated.spring(translation.y, {
                        toValue: -7,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
        }, 100);

        setTimeout(() => {
            Animated.sequence([
                Animated.parallel([
                    Animated.spring(translation1.x, {
                        toValue: -14,
                        useNativeDriver: true,
                    }),
                    Animated.spring(translation1.y, {
                        toValue: -14,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
        }, 500);

        setTimeout(() => {
            Animated.sequence([
                Animated.parallel([
                    Animated.spring(translation2.x, {
                        toValue: -14,
                        useNativeDriver: true,
                    }),
                    Animated.spring(translation2.y, {
                        toValue: -14,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
        }, 1000);

        setTimeout(() => {
            Animated.sequence([
                Animated.parallel([
                    Animated.spring(translation3.x, {
                        toValue: -14,
                        useNativeDriver: true,
                    }),
                    Animated.spring(translation3.y, {
                        toValue: -14,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
        }, 1500);

        setTimeout(() => {
            Animated.sequence([
                Animated.parallel([
                    Animated.spring(translation4.x, {
                        toValue: -14,
                        useNativeDriver: true,
                    }),
                    Animated.spring(translation4.y, {
                        toValue: -14,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
        }, 2000);

        setTimeout(() => {
            Animated.sequence([
                Animated.parallel([
                    Animated.spring(translation5.x, {
                        toValue: -7,
                        useNativeDriver: true,
                    }),
                    Animated.spring(translation5.y, {
                        toValue: -7,
                        useNativeDriver: true,
                    }),
                ]),

            ]).start();
        }, 2500);
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

    return (
        <View>
            <Modal
                animationType="none"
                hardwareAccelerated={true}
                statusBarTranslucent={true}
                transparent={true}
                useNativeDriver={true}
                onBackdropPress={() => test4()}
                onRequestClose={() => test4()}
                visible={iscon}
                style={{ backgroundColor: '#D3D3D3', shadowColor: '#000', opacity: 0.9, alignContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginLeft: -0.5 }}>
                <View style={{ zIndex: 9999, alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity onPress={() => { test9() }} style={{ margin: 10, alignSelf: 'center' }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Animated.View
                                style={{
                                    transform: [{ translateX: translation.x },
                                    { translateY: translation.y },]         // Bind opacity to animated value
                                }}>
                                <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18, margin: 10 }}>
                                    <Image source={require('./assets/Life-partner.png')} style={{ width: 32.42, height: 45.96 }} />
                                </View>
                                <Text style={{ color: '#65096F', textAlign: 'center', fontWeight: 'bold' }}>Spouse / Partner </Text>
                            </Animated.View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => { test8() }} style={{ margin: 10 }}>
                            <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                                <Animated.View
                                    style={{
                                        transform: [{ translateX: translation1.x },
                                        { translateY: translation1.y },]         // Bind opacity to animated value
                                    }}>
                                    <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18 }}>
                                        <FontAwesome5 name="handshake" size={35} color="#65096F" />
                                    </View>
                                    <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#65096F' }}>Name Compatability</Text>
                                </Animated.View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { test7() }} style={{ margin: 10 }}>
                            <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                                <Animated.View
                                    style={{
                                        transform: [{ translateX: translation2.x },
                                        { translateY: translation2.y },]         // Bind opacity to animated value
                                    }}>
                                    <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18 }}>
                                        <Image source={require('./assets/Business.png')} style={{ width: 37.34, height: 33.05 }} />
                                    </View>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#65096F' }}>Business</Text>
                                </Animated.View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', margin: 10, justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => { test5() }} style={{ margin: 10 }}>
                            <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                                <Animated.View
                                    style={{
                                        transform: [{ translateX: translation3.x },
                                        { translateY: translation3.y },]         // Bind opacity to animated value
                                    }}>
                                    <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18 }}>
                                        <Image source={require('./assets/Vector.png')} style={{ width: 44.39, height: 40.49 }} />
                                    </View>
                                    <Text style={{ color: '#65096F', textAlign: 'center', fontWeight: 'bold' }}>House / Property</Text>
                                </Animated.View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { test1() }} style={{ margin: 10 }}>
                            <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                                <Animated.View
                                    style={{
                                        transform: [{ translateX: translation4.x },
                                        { translateY: translation4.y },]         // Bind opacity to animated value
                                    }}>
                                    <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18 }}>
                                        <Image source={require('./assets/One-to-one.png')} style={{ width: 41.2, height: 29.44 }} />
                                    </View>
                                    <Text style={{ color: '#65096F', textAlign: 'center', fontWeight: 'bold' }}>One To One</Text>
                                </Animated.View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { test6() }} style={{ margin: 10 }}>
                        <View style={{ alignSelf: 'center', alignItems: 'center', margin: 10 }}>
                            <Animated.View
                                style={{
                                    transform: [{ translateX: translation5.x },
                                    { translateY: translation5.y },]         // Bind opacity to animated value
                                }}>
                                <View style={{ alignSelf: 'center', borderRadius: 500, width: 72, height: 72, backgroundColor: '#fff', alignItems: 'center', paddingTop: 18 }}>
                                    <Image source={require('./assets/Vector(1).png')} style={{ width: 40.73, height: 33.12 }} />
                                </View>
                                <Text style={{ color: '#65096F', textAlign: 'center', fontWeight: 'bold' }}>car / vehical</Text>
                            </Animated.View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <TouchableOpacity onPress={() => { test4() }} style={{ backgroundColor: '#fff', borderRadius: 50 }}>
                        <Entypo name='cross' size={40} />
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={{ paddingLeft: 15, paddingRight: 15, paddingBottom: 10, }}>
                <View style={{ height: 60, borderColor: '#73207C', borderWidth: 1, borderRadius: 15, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { SelectTab() }} style={{ justifyContent: 'center', }}>
                        <Icons name="home" size={30} color="#73207C" />
                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#000', textAlign: 'center' }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { test() }}
                        style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: -15 }}>
                        <FontAwesome5 name="book-reader" size={23} color="#73207C" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        test3(!iscon)
                    }}
                        style={{ justifyContent: 'center', flexDirection: 'row', }}>
                        <View style={{ width: 55, height: 55, backgroundColor: "#73207C", transform: [{ rotate: "45deg" }], borderRadius: 7, position: 'absolute' }}>
                        </View>
                        <View style={{ paddingTop: 12, marginTop: 3 }}>
                            <FontAwesome5 name="handshake" size={25} color="#fff" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { Cosmic() }}
                    >
                        <FontAwesome5 name="calendar-minus" size={23} color="#73207C" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Profile()} style={{ justifyContent: 'center' }}>
                        <FontAwesome5 name="user" size={22} color="#73207C" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Menu