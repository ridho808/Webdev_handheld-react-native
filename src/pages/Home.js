import * as React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navigasi from '../component/Navigasi';
const Home = () => {
    const Navigation = useNavigation();

    const DirectSejarah =()=>{
        return Navigation.navigate('Sejarah')
    }
    const DirectHTML =()=>{
        return Navigation.navigate('HTML')
    }
    const DirectCSS = () =>{
        return Navigation.navigate("CSS")
    }
    const DirectJs = () =>{
        return Navigation.navigate("JavaScript")
    }
    return(
        <View style={Style.container}>
            <View style={Style.Tagline}>
                <Text style={Style.Text_tg}>Belajar Web Development</Text>
            </View>
            {/* Content */}
            <View style={Style.content}>
                <TouchableOpacity style={Style.Button} onPress={DirectSejarah}>
                    <Text style={Style.Text_btn}>Sejarah Internet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.Button} onPress={DirectHTML}>
                    <Text style={Style.Text_btn}>HTML</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.Button} onPress={DirectCSS} >
                    <Text style={Style.Text_btn}>CSS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.Button} onPress={DirectJs}>
                    <Text style={Style.Text_btn}>Javascript</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.Button}>
                    <Text style={Style.Text_btn}>Simple Template</Text>
                </TouchableOpacity>
            </View>
            {/* Navigation */}
            <Navigasi />
        </View>
    )
}

const Style = StyleSheet.create({
    container : {
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
    content: {
        flexDirection:"column",
        alignItems:"center",
        marginTop:40
    },
    Button:{
        width:256,
        height:50,
        backgroundColor:"#FFFFFF",
        borderRadius:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        margin:15
    },
    Text_btn:{
        fontSize:15,
        fontWeight:"bold",
        color:"#000000"
    },
})

export default Home;