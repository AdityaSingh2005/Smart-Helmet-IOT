import { View, Text, StyleSheet, Image, TouchableOpacity, Touchable } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import MapView from "react-native-maps";
import { Marker} from "react-native-maps";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Home = ({navigation}) => {
    return (
        <View style={{ height: "100%", paddingTop: 20 }}>
            <View style={{ backgroundColor: "yellow", height: 80, borderBottomColor: "black", borderBottomWidth: 2 }}>
                <View style={styles.logo}>
                    <Image source={require("./../../assets/Images/helmetLogo.png")}
                        style={styles.logoImg}
                    />
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Mukut</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center", marginTop: -15 , marginLeft: 20 }} >
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}
                    style={{ backgroundColor: "black", padding: 4, borderRadius: 50 }}>
                        <FontAwesome5 name="user" size={30} color="rgba(255, 255, 255, 0.8)" />
                    </TouchableOpacity>
                    <Text style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 17, fontWeight: "bold" }} >Welcome, user</Text>
                </View>
            </View>
            <MapView
                style={{ width: "100%", height: "65%", marginTop: 0 }}
                initialRegion={{
                    latitude: 28.7495,
                    longitude: 77.1184,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
            }}>
            </MapView>
            <View style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "center", padding: 10, marginTop: 15 }}>
                <View style={styles.card} >
                    <MaterialCommunityIcons name="alert" size={35} color="red" style={{ alignSelf: "center" }} />
                    <Text style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 15 }} >Alert System for Accident Response</Text>
                </View>
                <View style={styles.card} >
                    <FontAwesome5 name="wine-glass-alt" size={35} color="black" style={{ alignSelf: "center" }} />
                    <Text style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 15 }} >Alcohol detection using MQ2 sensor</Text>
                </View>
                <View style={styles.card} >
                    <MaterialIcons name="health-and-safety" size={35} color="green" style={{ alignSelf: "center" }} />
                    <Text style={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 15 }} >Safety standards with no discomfort</Text>
                </View>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    logo: {
        top: 20,
        marginLeft: "70%", 
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    logoImg: {
        width: 35,
        height: 35
    },
    card: {
        display: "flex",
        flexDirection: "column",
        gap: 8, 
        width: 115,
        padding: 8, 
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        height: 145,
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 10
    }
});