import React, { useState, Component, useEffect } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
    Platform,
    StatusBar,
    Image,
    TextInput
} from 'react-native';

import FriendListItem from '../Contact/FriendListItem';
import filter from 'lodash.filter';

import colors from '../../../assets/colors';


export default function ContactScreen() {



    

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',

            backgroundColor: colors.background,
            paddingTop: 20,
        },
        listSeparator: {
            height: StyleSheet.hairlineWidth,
            backgroundColor: colors.background,
            marginVertical: 5,
            color: colors.text,
        },
        listEmpty: {
            paddingTop: 100,
            fontSize: 32,
            textAlign: 'center',
            color: colors.text,
        },
        text: {
            color: colors.text, fontSize: 20
        },
    });

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    const _fetchData = async () => {
        try {
            const response = await fetch(
                'https://randomuser.me/api/?results=20'
            );
            const responseJSON = await response.json();
            setData(responseJSON.results);
            setLoading(false);
        } catch (error) {
            alert('Keine Internetverbindung');

        }
    };

    useEffect(() => {
        if (isLoading) { _fetchData(); }
    });

    const handleSearch = text => {
        const formattedQuery = text.toLowerCase();
        const filteredData = filter(data, user => {
            return contains(user, formattedQuery);
        });
        setData(filteredData);
        setQuery(text);
    };

    const contains = ({ name, email }, query) => {
        const { first, last } = name;

        if (first.includes(query) || last.includes(query) || email.includes(query)) {
            return true;
        }

        return false;
    };


    return (

        <View style={styles.container}>

            <View style={{ width: '100%', alignItems: 'center' }}>

                <Text style={styles.text}>FAVORITE CONTACTS</Text>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={query}
                    onChangeText={queryText => handleSearch(queryText)}
                    placeholder="Search"
                    style={{ backgroundColor: colors.background, borderColor: colors.border, paddingHorizontal: 20, borderWidth: 2, width: 350, borderRadius: 15, }}
                />
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.email}
                renderItem={({ item }) => (
                    <FriendListItem
                        friend={item}
                         
                    />
                )}

                ItemSeparatorComponent={() => (
                    <View style={styles.listSeparator} />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmpty}></Text>
                )}

            />

        </View>
    );
};
