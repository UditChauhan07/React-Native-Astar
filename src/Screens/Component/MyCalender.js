import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, TextInput, Alert, FlatList, } from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import list, { Data } from '../../ReduxFloder/action'

var db = openDatabase({ name: 'AStar8.db' });

const MyCalender = ({ navigation }) => {
  const dispatch = useDispatch();
  const [data, setdata] = useState([])
  const [testdata, settestdata] = useState([])
  const [test, settest] = useState([])

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM user',
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
        "SELECT name FROM sqlite_master WHERE type ='table' AND name NOT LIKE 'sqlite_%';",
        [],
        (tx, results) => {
          console.error(JSON.stringify(results.rows));
        }
      );
    });

    console.log(data);

  }, []);


  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080'
        }}
      />
    );
  };


  let listItemView = (item) => {
    return (
      <View
        key={item.user_id}
        style={{ backgroundColor: '#ffffffa1', padding: 20 }}>
        <Text>Id: {item.user_id}</Text>
        <Text>Name: {item.user_name}</Text>
        <Text>Contact: {item.user_contact}</Text>
        <Text>Address: {item.user_address}</Text>
      </View>
    );
  };



  let register_user = () => {
    console.log(userName, userContact, userAddress);

    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  };

  const testData = () => {
    let bodyFormData = { 'userid': 8 }
    console.log(bodyFormData)
    axios({
      method: 'POST',
      url: `https://astar.7kstartup.com/public/api/offlineapi`, // Signup API
      data: bodyFormData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(({ data, status }) => {
        console.warn(data)
        dispatch(Data(data))
        navigation.navigate('test')
      })
      .catch(error => {
        console.warn(error)
      })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/Emotional.gif')} style={{ width: '100%', height: '100%', borderRadius: 30 }}>
          <View style={{ backgroundColor: '#ffffffa1' }}>
            <TextInput
              placeholder='username'
              onChangeText={name => setUserName(name)}
              value={userName} />
            <TextInput
              placeholder='contact'
              onChangeText={con => setUserContact(con)}
              value={userContact} />
            <TextInput
              placeholder='address'
              onChangeText={address => setUserAddress(address)}
              value={userAddress} />

            <TouchableOpacity onPress={() => { register_user() }}>
              <Text>Submit</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ backgroundColor: 'red', alignSelf: 'center' }}
              onPress={() => { testData() }}>
              <Text style={{ fontSize: 20, fontWeight: '900' }}>fetchData</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={data}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

export default MyCalender