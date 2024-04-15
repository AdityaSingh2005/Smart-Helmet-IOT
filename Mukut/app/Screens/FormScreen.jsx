import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet, 
ScrollView } from "react-native";
import LogoImg from "./../../assets/Images/helmetLogo.png";
import DriverImg from "./../../assets/Images/driver.png";

const Form = ({navigation}) => {
    return (
        <ScrollView style={{ backgroundColor: "yellow", height: "100%", paddingLeft: 25, paddingRight: 25 }}>
            <View style={styles.logo}>
                <Image source={LogoImg} style={{ width: 35, height: 35 }} />
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Mukut</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.title}>
                    <Text style={styles.headerText} >
                    Help us let you know better
                    </Text>
                    <Text style={{ fontSize: 15, color: "rgba(0, 0, 0, 0.8)" }}>Fill in the information to complete your profile.</Text>
                </View>
                <Image source={DriverImg} style={{ width: 150, height: 150, marginTop: -25 }} />
            </View>
            <View style={styles.form}>
                <View style={styles.inputSection} >
                    <Text style={{}} >Age</Text>
                    <TextInput style={styles.details} placeholder="Enter your age" keyboardType="numeric"  placeholderTextColor={"gray"} />
                </View>
                <View style={styles.inputSection} >
                    <Text style={{}} >License Info</Text>
                    <TextInput style={styles.details} placeholder="Enter your License Number" keyboardType="numeric"  placeholderTextColor={"gray"} />
                </View>
                <View style={styles.inputSection} >
                    <Text style={{}} >Emergency Contact</Text>
                    <TextInput style={styles.details} placeholder="Enter your Emergency Contact" keyboardType="numeric"  placeholderTextColor={"gray"} />
                </View>
                <View style={styles.inputSection} >
                    <Text style={{}} >Emergency Email</Text>
                    <TextInput style={styles.details} placeholder="Enter Emergency email address"  placeholderTextColor={"gray"} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button} >
                    <Text style={{ fontSize: 15 }} >Submit</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
                <Text style={{ fontWeight: "bold", color: "rgba(0, 0, 0, 0.5)", position: "absolute", bottom: -40, right: 5 }}>Back</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Form;

const styles = StyleSheet.create({
    logo: {
        marginTop: 40,
        marginLeft: 0, 
        display: "flex",
        flexDirection: "row",
        alignItems: "center", 
        marginBottom: 50
    },
    title: {
        width: 250
    },
    headerText: {
        color: "rgba(0, 0, 0, 0.5)", 
        fontSize: 20,
        width: 250,
        fontWeight: "bold"
    },
    main: {
        display: "flex",
        flexDirection: "row",
        gap: -30, 
    }, 
    form: {
        width: "90%",
        display: "flex",
        gap: 15,
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        padding: 30,
        justifyContent: "center", 
        alignSelf: "center",
        borderColor: "#fff",
        borderWidth: 2, 
        borderRadius: 15
    },
    inputSection: {
        display: "flex",
        justifyContent: "center",
        width: "100%", 
        gap: 7
    },
    details: {
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        padding: 10, 
        borderRadius: 5, 
    }, 
    button: {
        backgroundColor: "rgba(255, 229, 0, 1)",
        width: "40%",
        paddingTop: 10, 
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15, 
        alignItems: "center", 
        alignSelf: "center", 
        marginTop: 5, 
        borderRadius: 5
    }
});