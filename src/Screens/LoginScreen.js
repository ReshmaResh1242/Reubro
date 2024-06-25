import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// ------------ Imports ---------------
import { COLOR } from '../Constants/colors';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1.5, paddingTop: 20 }}>
                <Image
                    source={require('../Assets/Login.png')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode='contain' />
            </View>
            <View style={{ flex: 1, marginBottom: 20 }}>
                <Text style={{ color: COLOR.primaryColor, fontSize: 25, fontWeight: 'bold', marginHorizontal: 20 }}>Welcome Back</Text>
                <Text style={{ color: COLOR.primaryColor, fontSize: 16, fontWeight: 'bold', marginHorizontal: 20 }}>Sign in using E-mail</Text>

                <View style={{ height: 60, borderWidth: 1, borderColor: COLOR.borderColor, marginHorizontal: 20, borderRadius: 30, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, marginTop: 10 }}>
                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: COLOR.backgroundColor, alignItems: 'center', justifyContent: 'center', borderColor: COLOR.borderColor, borderWidth: 0.5 }}>
                        <Text style={{ color: COLOR.primaryColor2, fontSize: 16, fontWeight: 'bold' }}>@</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Enter your email address"
                        placeholderTextColor={COLOR.textColor2}
                    />
                </View>

                <View style={{ height: 60, borderWidth: 1, borderColor: COLOR.borderColor, marginHorizontal: 20, borderRadius: 30, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, marginTop: 10 }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Enter your password"
                            placeholderTextColor={COLOR.textColor2}
                        />
                    </View>
                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: COLOR.backgroundColor, alignItems: 'center', justifyContent: 'center', borderColor: COLOR.borderColor, borderWidth: 0.5 }}>
                        <MaterialCommunityIcons name='eye' color={COLOR.primaryColor2} size={24} />
                    </View>

                </View>
                <Text style={{ color: COLOR.primaryColor, fontSize: 14, marginHorizontal: 20, textDecorationLine: 'underline', textAlign: 'right' }}>or sign in using phone</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 20, marginTop: 10 }}>
                    <Text style={{ color: COLOR.primaryColor, fontSize: 25, fontWeight: 'bold', }}>Sign In</Text>
                    <TouchableOpacity
                        style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: COLOR.primaryColor, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => navigation.navigate('HomeScreen')}>
                        <MaterialCommunityIcons name='chevron-right' color={COLOR.backgroundColor} size={24} />
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
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
    },
});

export default LoginScreen;