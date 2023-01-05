import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign';
import { openDatabase } from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Loader from './Loader';
import Moment from 'moment';

var db = openDatabase({ name: 'AStar8.db' });


const AskQuestion = ({ navigation }) => {

    const dispatch = useDispatch();
    let listViewRef;

    const Data = useSelector(state => state.Data)

    const [loading, setloading] = useState(false)
    const [names, setnames] = useState([])
    const [zodiac, setzodiac] = useState([])
    const [msg, setmsg] = useState('')
    const [msglist, setmsglist] = useState([])
    const [like, setlike] = useState(false)
    const [trigerid, settrigerid] = useState(0)
    const [arr, setarr] = useState([])

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

        setloading(true)
        let body = { 'userid': Data.userdetail.userid }
        console.error(body);
        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/messagelist`, // Ask Question API
            data: body,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn("live api of date star", data)
                // 11111
                let dateArray = [];
                let msgArray = [];
                data.message_detail.map((e) => {
                    console.log({ "boo": Moment(e.date).format('DD-MM-YYYY') })
                    if (!dateArray.includes(Moment(e.date).format('DD-MM-YYYY'))) {
                        dateArray.push(Moment(e.date).format('DD-MM-YYYY'))
                        msgArray.push({ firstDate: Moment(e.date).format('DD-MM-YYYY') })
                    }
                    msgArray.push(e)
                })
                console.log({ dateArray })
                setmsglist(msgArray)
                setloading(false)
            })
            .catch(error => {
                console.warn(error)
                setloading(false)
            })

    }, [])

    const downButtonHandler = () => {
        //OnCLick of down button we scrolled the list to bottom
        listViewRef.scrollToEnd({ animated: true });
    };

    const SelectTab = (item, index) => {
        console.log('Dashboard');
        navigation.navigate('Dashboard')
    }

    const Message = () => {
        setloading(true)
        let body = { 'userid': Data.userdetail.userid, 'message': msg }
        console.error(body);

        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/askquesstion`, // Ask Question API
            data: body,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn("live api of date star", data)
                setmsg('')
                let bodyFormData = { 'userid': Data.userdetail.userid }
                console.error(bodyFormData);

                axios({
                    method: 'POST',
                    url: `https://astar.7kstartup.com/public/api/messagelist`, // Ask Question API
                    data: bodyFormData,
                    config: { headers: { 'Content-Type': 'multipart/form-data' } }
                })
                    .then(({ data, status }) => {
                        console.warn("live api of date star", data)
                        setmsglist(data.message_detail)
                        setloading(false)
                    })
                    .catch(error => {
                        console.warn(error)
                        setloading(false)
                    })
                setloading(false)
            })
            .catch(error => {
                console.warn(error)
                setloading(false)
            })
    }

    const Like = (id) => {
        console.log(id);
        let body = { 'messageid': id, 'likestatus': 1 }
        console.error(body);

        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/likedislikemessage`, // Like API
            data: body,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn("live api of date star", data)
                let body = { 'userid': Data.userdetail.userid }
                console.error(body);

                axios({
                    method: 'POST',
                    url: `https://astar.7kstartup.com/public/api/messagelist`, // Ask Question API
                    data: body,
                    config: { headers: { 'Content-Type': 'multipart/form-data' } }
                })
                    .then(({ data, status }) => {
                        console.warn("live api of date star", data)
                        setmsglist(data.message_detail)
                        setloading(false)
                    })
                    .catch(error => {
                        console.warn(error)
                        setloading(false)
                    })
                setloading(false)
            })
            .catch(error => {
                console.warn(error)
                setloading(false)
            })
    }

    const Dislike = (id) => {
        console.log(id);
        let body = { 'messageid': id, 'likestatus': 2 }
        console.error(body);

        axios({
            method: 'POST',
            url: `https://astar.7kstartup.com/public/api/likedislikemessage`, // Dislike API
            data: body,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(({ data, status }) => {
                console.warn("live api of date star", data)
                let body = { 'userid': Data.userdetail.userid }
                console.error(body);

                axios({
                    method: 'POST',
                    url: `https://astar.7kstartup.com/public/api/messagelist`, // Ask Question API
                    data: body,
                    config: { headers: { 'Content-Type': 'multipart/form-data' } }
                })
                    .then(({ data, status }) => {
                        console.warn("live api of date star", data)
                        setmsglist(data.message_detail)
                        setloading(false)
                    })
                    .catch(error => {
                        console.warn(error)
                        setloading(false)
                    })
                setloading(false)
            })
            .catch(error => {
                console.warn(error)
                setloading(false)
            })
    }

    const MsgShow = (id) => {
        console.log(id);
        settrigerid(id)
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? <Loader showloading={loading} /> : null}
            <ImageBackground source={require('./assets/DashboardBackgroundImage.png')} style={{ flex: 1, zIndex: -222 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { SelectTab() }}
                            style={{ paddingTop: 7, paddingRight: 2, alignSelf: 'center' }}>
                            <Icons name="left" size={15} color="#007AFF" />
                        </TouchableOpacity>
                        <Text style={{ paddingLeft: 15, alignSelf: 'center', fontSize: 26, fontFamily: 'AvertaStd-Black', color: '#3B2F5C' }}>Ask Lloyd Strayhorn</Text>
                    </View>
                    <Image source={require('./assets/lloyd-strayhorn.png')} style={{ height: 60, width: 60, borderRadius: 60 }} />
                </View>
                <FlatList
                    data={msglist}
                    keyExtractor={(item) => item.key}
                    ref={(ref) => {
                        listViewRef = ref;
                    }}
                    renderItem={({ item, index }) =>
                        <View style={{ flex: 1 }}>
                            {item.firstDate &&
                            <View style={{alignSelf:'center'}}>
                                <Text style={{ color: '#000', textAlign: 'center', fontSize:14, backgroundColor:'#F7B9E7', padding:5, borderRadius:5 }}>{item.firstDate}</Text>
                            </View>}
                            {item.sender_id !== Data.userdetail.userid &&
                                <View>
                                    <View style={{ alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
                                        <TouchableOpacity onPress={() => { MsgShow(item.id) }}>
                                            <View style={{ flexDirection: 'row', padding: 10, alignSelf: 'flex-start', justifyContent: 'center' }}>
                                                {item.message && <Image source={require('./assets/lloyd-strayhorn.png')} style={{ height: 40, width: 40, borderRadius: 40 }} />}
                                                {item.message && <View>
                                                    <View style={{ backgroundColor: '#fff', marginLeft: 20, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, paddingTop: 10, alignItems: 'center', borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, marginTop: 10 }}>
                                                        <View style={{ position: "absolute", left: -15, borderTopColor: "transparent", borderRightWidth: 26, borderRightColor: "#fff", borderBottomWidth: 13, borderBottomColor: "transparent" }}></View>
                                                        <Text style={{ color: '#000', fontSize: 14, fontFamily: 'AvertaStd-Semibold' }}>{item.message}</Text>
                                                    </View>
                                                    <View style={{ alignItems: 'center', }}>
                                                        {trigerid == item.id &&
                                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                                {item.is_like == 0 &&
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <TouchableOpacity onPress={() => Like(item.id)} style={{ paddingLeft: 10, paddingRight: 10 }}>
                                                                            <Icons name='like2' size={20} color="#000" />
                                                                        </TouchableOpacity>
                                                                        <TouchableOpacity onPress={() => { Dislike(item.id) }}>
                                                                            <Icons name='dislike2' size={20} color="#000" />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                }
                                                                {item.is_like == 1 &&
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10 }}>
                                                                            <Icons name='like1' size={20} color="#228B22" />
                                                                        </TouchableOpacity>
                                                                        <TouchableOpacity onPress={() => { Dislike(item.id) }}>
                                                                            <Icons name='dislike2' size={20} color="#000" />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                }
                                                                {item.is_like == 2 &&
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <TouchableOpacity onPress={() => Like(item.id)} style={{ paddingLeft: 10, paddingRight: 10 }}>
                                                                            <Icons name='like2' size={20} color="#000" />
                                                                        </TouchableOpacity>
                                                                        <TouchableOpacity>
                                                                            <Icons name='dislike1' size={20} color="#D10000" />
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                }
                                                            </View>
                                                        }
                                                    </View>
                                                </View>}
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                            {item.sender_id == Data.userdetail.userid &&
                                <View>
                                    {/* <Text style={{ color: '#000', textAlign: 'center' }}>{Moment(item.date).format('DD-MM-YYYY')}</Text> */}
                                    <View style={{ alignSelf: 'flex-end', alignItems: 'center', paddingRight: 10 }}>
                                        <TouchableOpacity onPress={() => { }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                {item.message &&
                                                    <View style={{ paddingRight: 10, alignItems: 'center' }}>
                                                        <View style={{ backgroundColor: '#F7B9E7', paddingLeft: 15, paddingRight: 15, paddingBottom: 10, alignItems: 'center', borderTopLeftRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, marginTop: 10, }}>
                                                            <View style={{ borderTopColor: "transparent", borderLeftWidth: 26, borderLeftColor: '#F7B9E7', borderBottomWidth: 13, borderBottomColor: "transparent", alignSelf: 'flex-end', marginRight: -25, }}></View>
                                                            <Text style={{ color: '#3B2F5C', fontSize: 14, fontFamily: 'AvertaStd-Semibold', marginTop: -5 }}>{item.message}</Text>
                                                        </View>
                                                    </View>}
                                                {item.message &&
                                                    <View style={{ alignItems: 'center', marginTop: 5, alignSelf: 'center' }}>
                                                        {names.profile_pic !== "" &&
                                                            <Image source={names.profile_pic !== "" ? { uri: names.profile_pic } : require('./assets/user-details-profile.png')} style={{ height: 50, width: 50, borderColor: '#000', borderWidth: 2, borderRadius: 50 }} />
                                                        }
                                                        {names.profile_pic == "" &&
                                                            <View style={{ paddingTop: 10, paddingRight: 10, flexDirection: 'row', }}>
                                                                <View style={{ borderColor: '#000', borderWidth: 2, borderRadius: 50 / 2, height: 50, width: 50, padding: 10 }}>
                                                                    {zodiac.zodiac_sign == "CANCER" &&
                                                                        <Icon name="zodiac-cancer" size={25} color="#000" />
                                                                    }
                                                                    {zodiac.zodiac_sign == "ARIES" &&
                                                                        <Icon name="zodiac-aries" size={25} color="#000" />
                                                                    }
                                                                    {zodiac.zodiac_sign == "TAURUS" &&
                                                                        <Icon name="zodiac-taurus" size={25} color="#000" />
                                                                    }
                                                                    {zodiac.zodiac_sign == "GEMINI" &&
                                                                        <Icon name="zodiac-gemini" size={25} color="#000" />
                                                                    }
                                                                    {zodiac.zodiac_sign == "LEO" &&
                                                                        <Icon name="zodiac-leo" size={25} color="#000" />
                                                                    }
                                                                    {zodiac.zodiac_sign == "VIRGO" &&
                                                                        <Icon name="zodiac-virgo" size={25} color="#000" />
                                                                    }
                                                                    {zodiac.zodiac_sign == "LIBRA" &&
                                                                        <Icon name="zodiac-libra" size={25} color="#000" />
                                                                    }
                                                                    {zodiac.zodiac_sign == "SCORPIO" &&
                                                                        <Icon name="zodiac-scorpio" size={25} color="#000" />
                                                                    }
                                                                    {zodiac.zodiac_sign == "SAGITTARIUS" &&
                                                                        <Icon name="zodiac-sagittarius" size={25} color="#000" />
                                                                    }
                                                                    {zodiac.zodiac_sign == "CAPRICORN" &&
                                                                        <Icon name="zodiac-capricorn" size={25} color="#000" />
                                                                    }
                                                                    {zodiac.zodiac_sign == "AQUARIUS" &&
                                                                        <Icon name="zodiac-aquarius" size={25} color="#000" />
                                                                    }
                                                                    {zodiac.zodiac_sign == "PISCES" &&
                                                                        <Icon name="zodiac-pisces" size={25} color="#000" />
                                                                    }
                                                                </View>
                                                            </View>
                                                        }
                                                    </View>}
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                        </View>
                    }
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 10 }}>
                    <TextInput
                        style={{ backgroundColor: '#fff', width: '80%', color: '#000' }}
                        onChangeText={(e) => setmsg(e)}
                        autoFocus={true}
                        placeholder="Message.."
                        placeholderTextColor='#808080'
                        value={msg} />
                    <TouchableOpacity onPress={() => {
                        Message()
                        downButtonHandler()
                    }}>
                        <Image source={require('./assets/send-fill.png')} style={{ height: 50, width: 50, marginRight: 10 }} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default AskQuestion