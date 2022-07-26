import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";


const PengertianHTML = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('HTML')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Pengertian HTML</Text>
                </View>
                <ScrollView style={{marginTop:30}}>
                    <View style={style.Content}>
                        <Text style={style.Text_Content}>
                        Apa itu HTML? 
                        Hypertext Markup Language atau HTML adalah bahasa markup yang digunakan untuk membuat sebuah halaman web. Isinya terdiri dari berbagai kode yang dapat menyusun struktur suatu website.
                        HTML terdiri dari kombinasi teks dan simbol yang disimpan dalam sebuah file. Dalam membuat file HTML, terdapat standar atau format khusus yang harus diikuti. Format tersebut telah tertuang dalam standar kode internasional atau ASCII (American Standard Code for Information Interchange). 
                        Tim Berners-Lee merupakan sosok ilmuwan dibalik lahirnya HTML. Di tahun 1991, ia awalnya menciptakan HTML sebagai solusi untuk memudahkan para ilmuwan dalam mengakses dokumen satu sama lain. 
                        Selang setahun kemudian, HTML mulai dapat digunakan untuk umum. Sejarah penggunaan HTML secara umum ini pun tak bisa lepas dari peran World Wide Web atau yang kita kenal dengan WWW. Keduanya saling bersinergi supaya informasi yang ingin disebarkan bisa diakses oleh banyak orang. 
                        </Text>
                    </View>
                </ScrollView>
                <TouchableOpacity style={style.Button_Next} onPress={DirectHTML}>
                    <Text style={style.Text_Btn}>Back</Text>
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
        position:"absolute",
        bottom:115,
        left:140,
        right:140,
        borderRadius:10
    },
    Text_Btn:{
        textAlign:"center",
        alignSelf:"center",
        color:"#295E62",
        fontWeight:"bold",
        fontSize:20
    },

})

export default PengertianHTML;