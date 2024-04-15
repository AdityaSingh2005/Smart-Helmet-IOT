import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import MainImg from "./../../assets/Images/loginImg.png";
import GoogleLogo from "./../../assets/Images/googleLogo.png";
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const iconSize = 22;

const Login = ({navigation}) => {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                    <View style={styles.text}>
                        <Text style= {{ fontSize: 40, color: "rgba(0, 0, 0, 0.5)" }}>Do you know?</Text>
                        <Text style= {{ fontSize: 18, color: "rgba(0, 0, 0, 0.6)" }}>“In 2023, over 462 deaths per day or one every three minutes, in road accidents in India.”</Text>
                        <Text style={{ marginTop: 20, fontWeight: "bold", marginBottom: 20 }}>#NeedForSafety</Text>
                    </View>
                    <Image source={MainImg} style={{ width: 320, height: 160 }}/>
                    <View style={styles.window} >
                        <View style= {{ display: "flex", gap: 10, borderBottomColor: "rgba(0, 0, 0, 0, 0.01)", borderBottomWidth: 1, marginBottom: 10, paddingBottom: 20 }}>
                            <View style={styles.inputField} >
                                <Feather name="mail" size={iconSize} color="black" />
                                <TextInput placeholder="Email address" />
                            </View>
                            <View style={styles.inputField} >
                                <Entypo name="key" size={iconSize} color="black" />
                                <TextInput placeholder="Create a password" />
                            </View>
                            <View style={styles.inputField} >
                                <Entypo name="key" size={iconSize} color="black" />
                                <TextInput placeholder="Confirm password" />
                        </View>
                    </View>
                    <View style={styles.details}>
                        <Image source={GoogleLogo} />
                        <TouchableOpacity onPress={() => navigation.navigate("Form")}>
                            <Text style={{ color: "rgba(0, 0, 0, 0.6)" }}>Login with Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
         </ScrollView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        height: "100%",
        paddingTop: 120, 
        alignItems: "center"
    }, 
    text: {
        width: "80%",
        display: "flex",
        gap: 5
    }, 
    window: {
        marginTop: 20,
        width: "100%",
        height: "50%",
        backgroundColor: "#fff", 
        padding: 40, 
        borderRadius: 30, 
    }, 
    details: {
        display: "flex",
        flexDirection: "row",
        gap: 10, 
        alignItems: "center",
        alignSelf: "center"
    }, 
    inputField: {
        backgroundColor: "rgba(0, 0, 0, 0.05)", 
        width: "90%", 
        alignSelf: "center", 
        height: 50, 
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10, 
        borderRadius: 8, 
        gap: 15
    }
});