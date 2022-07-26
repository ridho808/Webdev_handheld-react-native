import * as React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navigasi = () => {
    const Navigation = useNavigation()
    const DirectAbout = () =>{
        return Navigation.navigate('About')
    }
    const DirectHome = () =>{
        return Navigation.navigate('Home')
    }
    return(
        <View style={style.Navigation}>
        <TouchableOpacity style={style.Button_nav} onPress={DirectHome}>
            <Image source={require('../assets/icons8-home-50.png')} style={{width:25,height:25,tintColor:"#295E62"}}/>
            <Text style={style.Text_nav}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.Button_nav} onPress={DirectAbout}>
            <Image source={require('../assets/icons8-info-30.png')} style={{width:25,height:25,tintColor:"#295E62"}}/>
            <Text style={style.Text_nav}>About</Text>
        </TouchableOpacity>
    </View>
    );
}


const style = StyleSheet.create({
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

export default Navigasi;