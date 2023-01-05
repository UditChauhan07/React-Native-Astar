import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage';
import { useDispatch, useSelector } from 'react-redux';


var db = openDatabase({ name: 'AStar8.db' });

const Loading = ({ navigation }) => {

    const dispatch = useDispatch();

    const Data = useSelector(state => state.Data)
    console.error(Data);

    useEffect(() => {

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS moduletypes', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='moduletypes'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS moduletypes(id INTEGER PRIMARY KEY AUTOINCREMENT, description VARCHAR(255), module_name VARCHAR(255), module_type INT(10), number INT(15), learn_title VARCHAR(255), learn_desc VARCHAR(255), notlearn_title VARCHAR(255), notlearn_desc VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                    }
                    Data.Module_types.forEach(element => {
                        // console.warn(element);
                        db.transaction(function (tx) {
                            tx.executeSql(
                                'INSERT INTO moduletypes (description, module_name, module_type, number, learn_title, learn_desc, notlearn_title, notlearn_desc, subscription_status) VALUES (?,?,?,?,?,?,?,?,?)',
                                [element.description, element.module_name, element.module_type, element.number, element.learn_title, element.learn_desc, element.notlearn_title, element.notlearn_desc, Data.subscription_status],
                                (tx, results) => {
                                    // console.error('moduletypes', results);
                                }
                            );
                        });
                    });
                }
            );
        });

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS primarydetail', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='primarydetail'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        console.log('start');
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS primarydetail(module_name VARCHAR(255), number INT(11), description VARCHAR(255), positive VARCHAR(255), negative VARCHAR(255), occupations VARCHAR(255), health VARCHAR(255), partners VARCHAR(255), times_of_the_year VARCHAR(255), countries VARCHAR(255), tibbits VARCHAR(255), destiny_colors VARCHAR(255), destiny_timing VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                        console.log('end');
                    }
                    db.transaction(function (tx) {
                        tx.executeSql(
                            'INSERT INTO primarydetail (module_name, number, description, positive, negative, occupations, health, partners, times_of_the_year, countries, tibbits, destiny_colors, destiny_timing, subscription_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                            [Data.primary_detail.module_name, Data.primary_detail.number, Data.primary_detail.description, Data.primary_detail.positive, Data.primary_detail.negative, Data.primary_detail.occupations, Data.primary_detail.health, Data.primary_detail.partners, Data.primary_detail.times_of_the_year, Data.primary_detail.countries, Data.primary_detail.tibbits, Data.primary_detail.destiny_colors, Data.primary_detail.destiny_timing, Data.subscription_status],
                            (tx, results) => {
                                // console.error('primarydetail', results);
                            }
                        );
                    });
                }
            );
        });

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS compatiblepartner', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='compatiblepartner'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS compatiblepartner(module_name VARCHAR(255), number INT(11), description VARCHAR(255), more_compatible_months VARCHAR(255), more_compatible_dates INT(10), less_compatible_months VARCHAR(255), less_compatible_dates INT(15), subscription_status INT(15))',
                            []
                        );
                    }
                    db.transaction(function (tx) {
                        console.log('start');
                        tx.executeSql(
                            'INSERT INTO compatiblepartner (module_name, number, description, more_compatible_months, more_compatible_dates, less_compatible_months, less_compatible_dates, subscription_status) VALUES (?,?,?,?,?,?,?,?)',
                            [Data.compatible_partner.module_name, Data.compatible_partner.number, Data.compatible_partner.description, Data.compatible_partner.more_compatible_months, Data.compatible_partner.more_compatible_dates, Data.compatible_partner.less_compatible_months, Data.compatible_partner.less_compatible_dates, Data.subscription_status],
                            (tx, results) => {
                                console.error('compatible_partner', results);
                            }
                        );
                        console.log('end');
                    });
                }
            );
        });

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS luckyparameters', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='luckyparameters'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS luckyparameters(module_name VARCHAR(255), number INT(11), lucky_colours VARCHAR(255), lucky_gems VARCHAR(255), lucky_metals VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                    }
                    db.transaction(function (tx) {
                        console.log('start');
                        tx.executeSql(
                            'INSERT INTO luckyparameters (module_name, number, lucky_colours, lucky_gems, lucky_metals, subscription_status) VALUES (?,?,?,?,?,?)',
                            [Data.luckyparameters.module_name, Data.luckyparameters.number, Data.luckyparameters.lucky_colours, Data.luckyparameters.lucky_gems, Data.luckyparameters.lucky_metals, Data.subscription_status],
                            (tx, results) => {
                                console.error('luckyparameters', results);
                            }
                        );
                        console.log('end');
                    });
                }
            );
        });


        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS planetdetail', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='planetdetail'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS planetdetail(module_name VARCHAR(255), ruling_number INT(11), planet_name VARCHAR(255), description VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                    }
                    db.transaction(function (tx) {
                        console.log('start');
                        tx.executeSql(
                            'INSERT INTO planetdetail (module_name, ruling_number, planet_name, description, subscription_status) VALUES (?,?,?,?,?)',
                            [Data.planet_detail.module_name, Data.planet_detail.ruling_number, Data.planet_detail.planet_name, Data.planet_detail.description, Data.subscription_status],
                            (tx, results) => {
                                console.error('planet_detail', results);
                            }
                        );
                        console.log('end');
                    });
                }
            );
        });


        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS lifecycles', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='lifecycles'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS lifecycles(module_name VARCHAR(255), cycleone_number INT(11), cycleone_description VARCHAR(255), cycletwo_number INT(15), cycletwo_description VARCHAR(255), cyclethree_number INT(15), cyclethree_description VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                    }
                    db.transaction(function (tx) {
                        console.log('start');
                        tx.executeSql(
                            'INSERT INTO lifecycles (module_name, cycleone_number, cycleone_description, cycletwo_number, cycletwo_description, cyclethree_number, cyclethree_description, subscription_status) VALUES (?,?,?,?,?,?,?,?)',
                            [Data.life_cycles.module_name, Data.life_cycles.cycleone_number, Data.life_cycles.cycleone_description, Data.life_cycles.cycletwo_number, Data.life_cycles.cycletwo_description, Data.life_cycles.cyclethree_number, Data.life_cycles.cyclethree_description, Data.subscription_status],
                            (tx, results) => {
                                console.error('life_cycles', results);
                            }
                        );
                        console.log('end');
                    });
                }
            );
        });

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS namereading', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='namereading'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS namereading(module_name VARCHAR(255), Pytha_number INT(11), Pytha_description VARCHAR(255), Chald_number INT(15), Chald_description VARCHAR(255), Chald_positive_title VARCHAR(255), Chald_positive_desc VARCHAR(255), Chald_negative_title VARCHAR(255), Chald_negative_desc VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                    }
                    db.transaction(function (tx) {
                        console.log('start');
                        tx.executeSql(
                            'INSERT INTO namereading (module_name, Pytha_number, Pytha_description, Chald_number, Chald_description, Chald_positive_title, Chald_positive_desc, Chald_negative_title, Chald_negative_desc, subscription_status) VALUES (?,?,?,?,?,?,?,?,?,?)',
                            [Data.name_reading.module_name, Data.name_reading.Pytha_number, Data.name_reading.Pytha_description, Data.name_reading.Chald_number, Data.name_reading.Chald_description,Data.name_reading.Chald_positive_title, Data.name_reading.Chald_positive_desc, Data.name_reading.Chald_negative_title, Data.name_reading.Chald_negative_desc, Data.subscription_status],
                            (tx, results) => {
                                console.error('name_reading', results);
                            }
                        );
                        console.log('end');
                    });
                }
            );
        });

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS lifechanges', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='lifechanges'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS lifechanges(module_name VARCHAR(255), number INT(15), ages INT(15), years VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                    }
                    db.transaction(function (tx) {
                        console.log('start');
                        tx.executeSql(
                            'INSERT INTO lifechanges (module_name, number, ages, years, subscription_status) VALUES (?,?,?,?,?)',
                            [Data.lifechanges.module_name, Data.lifechanges.number, Data.lifechanges.ages, Data.lifechanges.years,Data.subscription_status],
                            (tx, results) => {
                                console.error('lifechanges', results);
                            }
                        );
                        console.log('end');
                    });
                }
            );
        });

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS favparameter', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='favparameter'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS favparameter(numbers INT(15), days VARCHAR(255), months VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                    }
                    db.transaction(function (tx) {
                        console.log('start');
                        tx.executeSql(
                            'INSERT INTO favparameter (numbers, days, months, subscription_status) VALUES (?,?,?,?)',
                            [Data.favunfav_parameters.favparameter.numbers, Data.favunfav_parameters.favparameter.days, Data.favunfav_parameters.favparameter.months, Data.subscription_status],
                            (tx, results) => {
                                console.error('favunfav_parameters', results);
                            }
                        );
                        console.log('end');
                    });
                }
            );
        });

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS unfavparameters', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='unfavparameters'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS unfavparameters(numbers INT(15), days VARCHAR(255), months VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                    }
                    db.transaction(function (tx) {
                        console.log('start');
                        tx.executeSql(
                            'INSERT INTO unfavparameters (numbers, days, months, subscription_status) VALUES (?,?,?,?)',
                            [Data.favunfav_parameters.unfavparameters.numbers, Data.favunfav_parameters.unfavparameters.days, Data.favunfav_parameters.unfavparameters.months, Data.subscription_status],
                            (tx, results) => {
                                console.error('unfavparameters', results);
                            }
                        );
                        console.log('end');
                    });
                }
            );
        });

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS cosmiccalender', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='cosmiccalender'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS cosmiccalender(module_type INT(15), date INT(15), datestar INT(15), year INT(15), month INT(15), subscription_status INT(15))',
                            []
                        );
                    }
                    Data.cosmic_calender.favstars.forEach(element => {
                        db.transaction(function (tx) {
                            console.log(element);
                            var start = 1
                            tx.executeSql(
                                'INSERT INTO cosmiccalender (module_type, date, datestar, year, month, subscription_status) VALUES (?,?,?,?,?,?)',
                                [start, element.date, element.datestar, element.year, element.month, Data.subscription_status],
                                (tx, results) => {
                                    console.error('cosmic_calender', results);
                                }
                            );
                            console.log('end');
                        });
                    });
                    Data.cosmic_calender.unfavstars.forEach(element => {
                        db.transaction(function (tx) {
                            var start = 2
                            tx.executeSql(
                                'INSERT INTO cosmiccalender (module_type, date, datestar, year, month, subscription_status) VALUES (?,?,?,?,?,?)',
                                [start, element.date, element.datestar, element.year, element.month, Data.subscription_status],
                                (tx, results) => {
                                    console.error('cosmic_calender', results);
                                }
                            );
                            console.log('end');
                        });
                    })
                })
        });

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS userdetail', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='userdetail'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS userdetail(dob VARCHAR(255), fullname VARCHAR(255), userid INT(15),profile_pic VARCHAR(255), namewidgets INT(9), topbar INT(9), removewidgets INT(9), age INT(15), namepercentage INT(15), joiningdate VARCHAR(255), gender VARCHAR(255), occupation VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                    }
                    db.transaction(function (tx) {
                        // console.log(element);
                        console.log('start');
                        tx.executeSql(
                            'INSERT INTO userdetail (dob, fullname, userid, profile_pic, namewidgets, topbar, removewidgets, age, namepercentage, joiningdate, gender, occupation, subscription_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
                            [Data.userdetail.dob, Data.userdetail.fullname, Data.userdetail.userid, Data.userdetail.profile_pic, 1, 1, 1, Data.userdetail.age, Data.userdetail.namecompatibilitypercentage, Data.userdetail.joining_date, Data.userdetail.gender, Data.userdetail.occupation, Data.subscription_status],
                            (tx, results) => {
                                console.error('userdetail', results);
                                db.transaction((tx) => {
                                    tx.executeSql(
                                        "SELECT * FROM userdetail",
                                        [],
                                        (tx, results) => {
                                            console.error(results);
                                            var temp = [];
                                            for (let i = 0; i < results.rows.length; ++i) {
                                                console.error("userdetail", results.rows.item(i));

                                            }
                                            // temp.push(results.rows.item(i));
                                            // setfavcal(temp);
                                        }
                                    );
                                });
                            }
                        );
                        console.log('end');
                    });
                }
            );
        });

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS zodiacdetail', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='zodiacdetail'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS zodiacdetail(module_name VARCHAR(255), zodiac_sign VARCHAR(255), zodiac_number INT(15), zodiac_day VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                    }
                    db.transaction(function (tx) {
                        // console.log(element);
                        console.log('start');
                        tx.executeSql(
                            'INSERT INTO zodiacdetail (module_name, zodiac_sign, zodiac_number, zodiac_day, subscription_status) VALUES (?,?,?,?,?)',
                            [Data.zodiac_detail.module_name, Data.zodiac_detail.zodiac_sign, Data.zodiac_detail.zodiac_number, Data.zodiac_detail.zodiac_day, Data.subscription_status],
                            (tx, results) => {
                                console.error('zodiac_detail', results);
                                db.transaction((tx) => {
                                    tx.executeSql(
                                        "SELECT * FROM zodiacdetail",
                                        [],
                                        (tx, results) => {
                                            console.error(results);
                                            var temp = [];
                                            for (let i = 0; i < results.rows.length; ++i) {
                                                console.error("zodiac_detail", results.rows.item(i));

                                            }
                                            // temp.push(results.rows.item(i));
                                            // setfavcal(temp);
                                        }
                                    );
                                });
                            }
                        );
                        console.log('end');
                    });
                }
            );
        });

        db.transaction(function (txn) {
            txn.executeSql('DROP TABLE IF EXISTS othernamereading', []);
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='othernamereading'",
                [],
                function (tx, res) {
                    console.log('othernamereading:', res.rows.length);
                    if (res.rows.length == 0) {

                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS othernamereading(destinyno INT(15), fullname VARCHAR(255), posiviedesc VARCHAR(255), zodiacsign VARCHAR(255), checkdate VARCHAR(255), otheruserid INT(15), userid INT(15), posivietitle VARCHAR(255), negativedesc VARCHAR(255), negativetitle VARCHAR(255), subscription_status INT(15))',
                            []
                        );
                    }
                }
            );
        });





        db.transaction((tx) => {
            tx.executeSql(
                "SELECT name FROM sqlite_master WHERE type ='table' AND name NOT LIKE 'sqlite_%';",
                [],
                (tx, results) => {
                    // console.error(results);
                    var tempt = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        tempt.push(results.rows.item(i));
                    settable(tempt);
                    console.error(table);
                }
            );
        });

        setTimeout(() => {
            nav()
        }, 5000)

    }, [])

    const nav = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size='large' color='blue' />
        </View>
    )
}

export default Loading