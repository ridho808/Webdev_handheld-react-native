import * as React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const About = () => {
    const Navigation = useNavigation();
    const DirectHome = () => {
        return Navigation.navigate("Home")
    }
    return(
        <View style={Style.Container}>
            <View style={Style.Tagline}>
                <Text style={Style.Text_tg}>ABOUT</Text>
            </View>
            {/* Content */}
            <View style={Style.Content}>
                <Text style={{textAlign:"center",fontSize:30,color:"#000000"}}>MadeInAbyss</Text>
            </View>
            <View style={Style.Navigation}>
                <TouchableOpacity style={Style.Button_nav} onPress={DirectHome}>
                    <Image source={require('../assets/icons8-home-50.png')} style={{width:25,height:25,tintColor:"#295E62"}}/>
                    <Text style={Style.Text_nav}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.Button_nav}>
                    <Image source={require('../assets/icons8-info-30.png')} style={{width:25,height:25,tintColor:"#295E62"}}/>
                    <Text style={Style.Text_nav}>About</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Style = StyleSheet.create({
    Container:{
        flex :1,
        backgroundColor:"#295E62"
    },
    Tagline:{
        backgroundColor:"#FFFFFF",
        height:30,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },
    Text_tg:{
        textAlign:"center",
        color:"#295E62",
        fontSize:20,
        fontWeight:"bold"
    },
    Content:{
        width:330,
        height:450,
        backgroundColor:"#FFFFFF",
        alignSelf:"center",
        position:"absolute",
        top:50,
        borderRadius:20,
        flexDirection:"column"
    },
    Navigation:{
        position:"absolute",
        bottom:25,
        left:18,
        right:18,
        elevation:0,
        backgroundColor:"#FFFFFF",
        height:70,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        borderRadius:15
    },
    Button_nav:{
        flexDirection:"column",
        alignItems:"center",
    },
    Text_nav:{
        fontWeight:"bold",
        color:"#295E62"
    }
})

export default About;