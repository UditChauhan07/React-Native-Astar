import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Fav = ({navigation}) => {

    const SelectTab = (item, index) => {
        console.log('boooo');
        navigation.navigate('Dashboard')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('./assets/DashboardBackgroundImage.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ height: 30, width: 30, borderRadius: 30 / 2, backgroundColor: '#fff', alignItems: 'center', marginTop: 20, marginLeft: 20 }}>
                        <TouchableOpacity onPress={() => {SelectTab()}} style={{ paddingTop: 7, paddingRight: 2 }}>
                            <Icon name="left" size={15} color="#007AFF" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: '#65096F' }}>Life Coach</Text>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 10 }}>
                        <Image source={require('./assets/user-details-profile.png')} style={{ height: 50, width: 50, borderColor: '#fff', borderWidth: 2, borderRadius: 60 }} />
                    </View>
                </View>

                <KeyboardAwareScrollView>
                    <View style={{ margin: 10, backgroundColor: '#ffffffa1',borderRadius:12 }}>
                        <View style={{ height: 88, width: '100%', borderRadius: 12, borderWidth: 1, borderColor: '#65096F' }}>
                            <View style={{ backgroundColor: '#65096F', height: 17, width: 118, borderRadius: 7, alignItems: 'center', marginTop: -8, marginLeft: 8 }}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>Jul 12 11:06 AM</Text>
                            </View>
                            <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between',paddingTop:10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', maxWidth: '85%' }}>You are never too old to set another dream. Today is the day to achieve those dreams. Work hard and focus on your life goals  to make it happen.</Text>
                                <View style={{ marginTop: '5%', marginRight: '5%' }}>
                                    <Icon name="heart" size={25} color="#65096F" />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ margin: 10, backgroundColor: '#ffffffa1',borderRadius:12 }}>
                        <View style={{ height: 88, width: '100%', borderRadius: 12, borderWidth: 1, borderColor: '#65096F' }}>
                            <View style={{ backgroundColor: '#65096F', height: 17, width: 118, borderRadius: 7, alignItems: 'center', marginTop: -8, marginLeft: 8 }}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>Jun 18, 09:18 AM</Text>
                            </View>
                            <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between',paddingTop:10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', maxWidth: '85%' }}>You are never too old to set another dream. Today is the day to achieve those dreams. Work hard and focus on your life goals  to make it happen.</Text>
                                <View style={{ marginTop: '5%', marginRight: '5%' }}>
                                    <Icon name="hearto" size={25} color="#65096F" />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ margin: 10, backgroundColor: '#ffffffa1',borderRadius:12 }}>
                        <View style={{ height: 88, width: '100%', borderRadius: 12, borderWidth: 1, borderColor: '#65096F' }}>
                            <View style={{ backgroundColor: '#65096F', height: 17, width: 118, borderRadius: 7, alignItems: 'center', marginTop: -8, marginLeft: 8 }}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>Jun 14, 08:10 AM</Text>
                            </View>
                            <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between',paddingTop:10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', maxWidth: '85%' }}>You are never too old to set another dream. Today is the day to achieve those dreams. Work hard and focus on your life goals  to make it happen.</Text>
                                <View style={{ marginTop: '5%', marginRight: '5%' }}>
                                    <Icon name="heart" size={25} color="#65096F" />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ margin: 10, backgroundColor: '#ffffffa1',borderRadius:12 }}>
                        <View style={{ height: 88, width: '100%', borderRadius: 12, borderWidth: 1, borderColor: '#65096F' }}>
                            <View style={{ backgroundColor: '#65096F', height: 17, width: 118, borderRadius: 7, alignItems: 'center', marginTop: -8, marginLeft: 8 }}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>Jun 13, 09:18 AM</Text>
                            </View>
                            <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between',paddingTop:10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', maxWidth: '85%' }}>You are never too old to set another dream. Today is the day to achieve those dreams. Work hard and focus on your life goals  to make it happen.</Text>
                                <View style={{ marginTop: '5%', marginRight: '5%' }}>
                                    <Icon name="heart" size={25} color="#65096F" />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ margin: 10, backgroundColor: '#ffffffa1',borderRadius:12 }}>
                        <View style={{ height: 88, width: '100%', borderRadius: 12, borderWidth: 1, borderColor: '#65096F' }}>
                            <View style={{ backgroundColor: '#65096F', height: 17, width: 118, borderRadius: 7, alignItems: 'center', marginTop: -8, marginLeft: 8 }}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>Jun 12, 10:18 AM</Text>
                            </View>
                            <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between',paddingTop:10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', maxWidth: '85%' }}>You are never too old to set another dream. Today is the day to achieve those dreams. Work hard and focus on your life goals  to make it happen.</Text>
                                <View style={{ marginTop: '5%', marginRight: '5%' }}>
                                    <Icon name="heart" size={25} color="#65096F" />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ margin: 10, backgroundColor: '#ffffffa1',borderRadius:12 }}>
                        <View style={{ height: 88, width: '100%', borderRadius: 12, borderWidth: 1, borderColor: '#65096F' }}>
                            <View style={{ backgroundColor: '#65096F', height: 17, width: 118, borderRadius: 7, alignItems: 'center', marginTop: -8, marginLeft: 8 }}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>Jun 11, 05:59 AM</Text>
                            </View>
                            <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between',paddingTop:10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', maxWidth: '85%' }}>You are never too old to set another dream. Today is the day to achieve those dreams. Work hard and focus on your life goals  to make it happen.</Text>
                                <View style={{ marginTop: '5%', marginRight: '5%' }}>
                                    <Icon name="hearto" size={25} color="#65096F" />
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Fav