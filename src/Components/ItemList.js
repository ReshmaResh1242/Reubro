import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// ------------ Imports ---------------
import { COLOR } from '../Constants/colors';

const ItemList = ({  }) => {

    return (
        <View style={{ borderRadius: 10, borderWidth: 0.2, paddingBottom: 10, marginTop: 10 }}>
        <>
            <Image
                source={require('../Assets/listImage.png')}
            />
            <View style={{ position: 'absolute', top: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>

                    <Image source={require('../Assets/amazon.png')}
                        style={{ width: 40, height: 40 }} />
                    <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                        <Text style={{ color: COLOR.backgroundColor, fontSize: 16, fontWeight: 'bold' }}>Amazon</Text>
                        <Text style={{ color: COLOR.backgroundColor, fontSize: 9 }}>Upload 4 hrs</Text>
                    </View>

                </View>
            </View>
            <View style={{ position: 'absolute', top: 10, right: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>

                    <MaterialCommunityIcons name='calendar-outline' color={COLOR.backgroundColor} size={24} />
                    <View style={{ flexDirection: 'column', paddingLeft: 5, paddingRight: 10 }}>
                        <Text style={{ color: COLOR.backgroundColor, fontSize: 16 }}>Remining</Text>
                        <Text style={{ color: COLOR.backgroundColor, fontSize: 9 }}>10 Days</Text>
                    </View>
                    <MaterialCommunityIcons name='dots-vertical' color={COLOR.backgroundColor} size={24} />

                </View>
            </View>

            <View style={{ position: 'absolute', top: 150 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                    <MaterialCommunityIcons name='chat-outline' color={COLOR.backgroundColor} size={15} />
                    <Text style={{ color: COLOR.backgroundColor, fontSize: 12, paddingLeft: 5 }}>50</Text>
                </View>
            </View>

            <View style={{ position: 'absolute', top: 150, right: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                    <Text style={{ color: COLOR.backgroundColor, fontSize: 12, paddingRight: 5 }}>400</Text>
                    <MaterialCommunityIcons name='thumb-up-outline' color={COLOR.backgroundColor} size={15} />
                </View>
            </View>
        </>
        <View style={{ paddingHorizontal: 5 }}>
            <Text style={{ color: COLOR.textColor, fontSize: 11, fontWeight: 'bold' }}>Details</Text>
            <Text style={{ color: COLOR.textColor, fontSize: 11 }}>Start Selling Now & Reach Hundreds of Millions of Amazon Customers. Build an Online Store. Grow Your Brand. 300 Million Customers. Exclusive Brand Tools. Flexible Selling Plans. Sell Products Worldwide.</Text>
        </View>
    </View>
    );
};


export default ItemList;