import {View, Text, Image, StyleSheet } from "react-native";
import QRCodeImg from "./../../assets/Images/qrcode.png";
import ProfileImg from "./../../assets/Images/image.png";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const iconSize = 25;

const Profile = ({navigation}) => {
    return (
        <View style={styles.nav} >
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Image source={ProfileImg} style={{ width: 40, height: 40 }} />
                <Text style={{ fontSize: 20, color: "rgba(0, 0, 0, 0.6)" }}>User Details</Text>
            </View>
            <View>
                <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }} >
                    <Entypo name="email" size={24} color="black" />
                    <Text>Siddharth Verma</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }} >
                    <Feather name="mail" size={iconSize} color="black" />
                    <Text>siddharth@gmail.com</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center" }} >
                    <FontAwesome name="phone" size={24} color="black" />
                    <Text>9971829389</Text>
                </View>
            </View>
            <Image source={QRCodeImg} style={{ width: 300, height: 300 }} />
            <Text style={{ alignSelf: "center" }}>Scan to fetch details</Text>
        </View>
    )
};

export default Profile;

const styles = StyleSheet.create({
    nav: {
        marginTop: 20,
        padding: 40,
        display: "flex",
        flexDirection: "column",
        gap: 10
    }
});