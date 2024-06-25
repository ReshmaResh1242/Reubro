import React,{useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

// ------------ Imports ---------------
import { COLOR } from '../Constants/colors';

const UploadScreen = ({ navigation }) => {
 const [image,setImage]=useState()
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignIems: 'center', paddingVertical: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../Assets/LeftIcon.png')} style={{ width: 45, height: 45 }} />
                </TouchableOpacity>
                <Text style={{ color: COLOR.primaryColor, fontSize: 20, textAlign: 'center', flex: 1, fontWeight: 'bold', paddingTop: 10 }}>Upload Post</Text>
            </View>

            <View style={{ flex: 1, paddingTop: 20 }}>
                <TouchableOpacity 
                onPress={()=>{
                    ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true
                  }).then(image => {
                    console.log(image);
                    setImage(image?.path)
                  });}}
                style={{ height: 184, borderWidth: 1, borderRadius: 10, borderColor: COLOR.borderColor, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center' }}>
                    {image
                    ?<Image
                    source={{uri:image}}
                    style={{width:100,height:100}}/>
                    :
                    <Text style={{ color: COLOR.textColor2, fontSize: 16 }}>Select Image</Text>}
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', height: 50, borderWidth: 1, borderRadius: 25, borderColor: COLOR.borderColor, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 20 }}>
                    <Text style={{ color: COLOR.textColor2, fontSize: 16 }}>Select Category</Text>
                    <MaterialCommunityIcons name='menu-down' color={COLOR.textColor} size={25} />
                </View>

                <View style={{ height: 128, borderWidth: 1, borderRadius: 25, borderColor: COLOR.borderColor, paddingHorizontal: 10, marginTop: 20, paddingTop: 10 }}>
                    <Text style={{ color: COLOR.textColor2, fontSize: 16 }}>Description</Text>
                </View>
                <View style={{ flexDirection: 'row', height: 52, borderWidth: 1, borderRadius: 25, borderColor: COLOR.borderColor, alignItems: 'center', paddingHorizontal: 10, marginTop: 20 }}>
                    <Text style={{ color: COLOR.textColor2, fontSize: 16, flex: 1 }}>Set a timer</Text>
                    <Text style={{ color: COLOR.textColor2, fontSize: 14, borderWidth: 1, borderRadius: 20, borderColor: COLOR.borderColor, paddingVertical: 5, paddingHorizontal: 10 }}>05</Text>
                    <Text style={{ color: COLOR.textColor2, fontSize: 16, paddingHorizontal: 5 }}>:</Text>
                    <Text style={{ color: COLOR.textColor2, fontSize: 14, borderWidth: 1, borderRadius: 20, borderColor: COLOR.borderColor, paddingVertical: 5, paddingHorizontal: 10 }}>12</Text>
                    <Text style={{ color: COLOR.textColor2, fontSize: 16, paddingHorizontal: 5 }}>:</Text>
                    <Text style={{ color: COLOR.textColor2, fontSize: 14, borderWidth: 1, borderRadius: 20, borderColor: COLOR.borderColor, paddingVertical: 5, paddingHorizontal: 10 }}>00</Text>
                </View>

            </View>

            <View style={{ height: 68, borderRadius: 20, paddingHorizontal: 10, backgroundColor: COLOR.primaryColor, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Text style={{ color: COLOR.backgroundColor, fontSize: 20, fontWeight: 'bold' }}>Upload</Text>
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

export default UploadScreen;