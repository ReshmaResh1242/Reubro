import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// --------------- Imports -----------------
import { COLOR } from '../Constants/colors';

const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1.5, paddingTop: 20 }}>
                <Image
                    source={require('../Assets/Welcome.png')}
                    style={{ width: '100%', height: '100%', right: -Dimensions.get('window').width * 0.05 }}
                    resizeMode='contain' />
            </View>
            <View style={{ flex: 1, paddingTop: 10, marginBottom: 20 }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: COLOR.primaryColor, fontSize: 25, textAlign: 'center', fontWeight: 'bold' }}>Welcome Back</Text>
                </View>
                <TouchableOpacity
                    style={{ height: 60, borderWidth: 1, borderColor: COLOR.borderColor, marginHorizontal: 20, borderRadius: 30, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }}
                    onPress={() => navigation.navigate('LoginScreen')}>
                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: COLOR.primaryColor, alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialCommunityIcons name='chevron-right' color={COLOR.backgroundColor} size={24} />
                    </View>
                    <Text style={{ flex: 1, color: COLOR.textColor, fontSize: 15, textAlign: 'center' }}>Company</Text>
                    <MaterialCommunityIcons name='chevron-right' color={COLOR.textColor} size={24} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={{ height: 60, borderWidth: 1, borderColor: COLOR.borderColor, marginHorizontal: 20, borderRadius: 30, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, marginTop: 20 }}
                    onPress={() => navigation.navigate('LoginScreen')}>
                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: COLOR.primaryColor, alignItems: 'center', justifyContent: 'center' }}>
                        <MaterialCommunityIcons name='chevron-right' color={COLOR.backgroundColor} size={24} />
                    </View>
                    <Text style={{ flex: 1, color: COLOR.textColor, fontSize: 15, textAlign: 'center' }}>Normal User</Text>
                    <MaterialCommunityIcons name='chevron-right' color={COLOR.textColor} size={24} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.backgroundColor,
    },
});

export default WelcomeScreen;