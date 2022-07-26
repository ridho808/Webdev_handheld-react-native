import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../component/Navigasi";


const Sejarah = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('HTML')
    }
    return(
        <View style={style.Container}>
            <View style={style.Tagline}>
                <Text style={style.Text_tg}>Sejarah Internet</Text>
            </View>
            <View style={style.Content}>
                <Text style={style.Text_Content}>
                Sejarah Internet dimulai pada tahun 1969 yang dilakukan oleh DARPA, yaitu sebuah badan pertahanan Amerika Serikat yang membuat sebuah proyek yang bernama ARPANET. ARPANET adalah sebuah proyek yang memungkinkan untuk membuat sistem yang saling terhubung. Proyek Jadi total terdapat empat simpul jaringan.ARPANET secara umum diperkenalkan pada tahun 1972. ARPANET yang berbasis pada teknologi ALOHAnet berkembang sangat cepat. Pada tahun 1981, dalam proyek ini ada 213 jaringan yang tersambung, dan ini membingunkan ARPANET untuk mengaturnya. Setelah terbentuknya Internet, perkembangan ini terus terjadi hingga sekarang. Proyek-proyek pendukung lainnya sudah banyak yang diterapkan pada jaman sekarang ini. Contohnya saja proyek
                DNS, pengalamatan IP, Email, TCP/IP, WWW, dan masih banyak lagi.
                </Text>
            </View>
                <TouchableOpacity style={style.Button_Next} onPress={DirectHTML}>
                    <Text style={style.Text_Btn}>Next</Text>
                </TouchableOpacity>
                {/* Navigasi */}
                <Navigasi />
        </View>
    );
}

const style = StyleSheet.create({
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
        backgroundColor:"#FFFFFF",
        alignSelf:"center",
        borderRadius:20,
        marginTop:30
    },
    Text_Content:{
        margin:10,
        color:"#000000",
        fontSize:17,
    },
    Button_Next:{
        height:30,
        width:80,
        backgroundColor:"#FFFFFF",
        alignSelf:"center",
        marginTop:26,
        borderRadius:6,
        flexDirection:"row",
        justifyContent:"center"
    },
    Text_Btn:{
        textAlign:"center",
        alignSelf:"center",
        color:"#295E62",
        fontWeight:"bold",
        fontSize:20
    },

})

export default Sejarah;