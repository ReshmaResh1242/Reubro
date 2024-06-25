import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// ------------ Imports ---------------
import { COLOR } from '../Constants/colors';
import ItemList from '../Components/ItemList'

const HomeScreen = ({ navigation }) => {

    const [search, setSearch] = useState('')
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flexDirection: 'row', alignIems: 'center', justifyContent: 'space-between', paddingVertical: 20, }}>
                <View style={{ flex: 1 }}>
                    <Image source={require('../Assets/Menu.png')} />
                </View>
                <Image source={require('../Assets/notification.png')} />
                <Image source={{ uri: 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg' }}
                    style={{ width: 45, height: 45, borderRadius: 22.5, marginLeft: 10 }} />
            </View>

            <View style={{ height: 60, borderWidth: 1, borderColor: COLOR.borderColor, borderRadius: 30, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }}>
                <MaterialCommunityIcons name='magnify' color={COLOR.textColor} size={24} />
                <TextInput
                    style={styles.input}
                    onChangeText={setSearch}
                    value={search}
                    placeholder="Search here"
                    placeholderTextColor={COLOR.textColor2}
                />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                <Image source={require('../Assets/Select.png')} />
                <Text style={{ color: COLOR.primaryColor, fontSize: 16, fontWeight: 'bold', marginLeft: 5 }}>All Posts</Text>
            </View>

            <View style={{ flex: 1, padding: 5, borderWidth: 0.5, borderColor: COLOR.borderColor, borderRadius: 10, marginVertical: 10 }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <ItemList />}
                    keyExtractor={item => item.id}
                />
                <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('UploadScreen')}>
                        <Image source={require('../Assets/Add.png')} />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.backgroundColor,
        paddingHorizontal: 20
    },
});

export default HomeScreen;