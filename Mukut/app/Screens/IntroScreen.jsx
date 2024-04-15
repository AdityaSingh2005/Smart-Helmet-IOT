import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Intro = ({navigation}) => {
    return (
        <View style={{ height: "100%", backgroundColor: "yellow" }}>
            <View style={styles.logo}>
                <Image source={require("./../../assets/Images/helmetLogo.png")}
                    style={styles.logoImg}
                />
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Mukut</Text>
            </View>
            <Image source={require("./../../assets/Images/helmet.png")}
                style={styles.mainImg}
            />
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image source={require("./../../assets/Images/safety.png")} 
                        style={{ width: 75, height: 70 }}
                    />
                    <Text style={styles.cardText} >#SafetyIsPriority</Text>
                </View>
                <View style={styles.card}>
                    <Image source={require("./../../assets/Images/geolocation.png")} 
                        style={{ width: 70, height: 70 }}
                    />
                    <Text style={styles.cardText} >#Geolocation</Text>
                </View>
                <View style={styles.card}>
                    <Image source={require("./../../assets/Images/AR.png")} 
                        style={{ width: 100, height: 70 }}
                    />
                    <Text style={styles.cardText} >#ARnavigation</Text>
                </View>
            </View>
            <View style={styles.loginBar}>
                <Text style={{ fontSize: 18, color: "rgba(255, 255, 255, 0.8)", marginBottom: 15 }}>
                    Experience a new direction in driving {" "}
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }} >safely</Text> with {""}
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }} >Mukut.</Text>
                </Text>
                <Text style={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: "bold" }}>Aimed to provide a seamless navigation and safety with SMART HELMET</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                   <Text style={{ fontSize: 16, fontWeight: "bold" }}>Get started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Intro;

const styles = StyleSheet.create(
    {
        logo: {
            top: 40,
            left: 20, 
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        logoImg: {
            width: 35,
            height: 35
        },
        mainImg: {
            alignSelf: "center",
            top: 50,
            width: 250,
            height: 250
        },
        cardContainer: {
            marginTop: 80,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignSelf: "center",
            justifyContent: "center"
        },
        card: {
            width: 120,
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            borderRadius: 15,
            backgroundColor: "rgba(255, 255, 255, 0.8)"
        },
        cardText: {
            fontSize: 12,
            marginBottom: 5, 
            color: "rgba(0, 0, 0, 0.5)"
        },
        loginBar: {
            backgroundColor: "rgba(0, 0, 0, 1)",
            height: "50%",
            marginTop: 30,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 30,
            alignItems: "center"
        }, 
        button: {
            marginTop: 50,
            backgroundColor: "white",
            color: "black",
            padding: 15,
            width: 150, 
            alignItems: "center",
            borderRadius: 8
        }
    }
);