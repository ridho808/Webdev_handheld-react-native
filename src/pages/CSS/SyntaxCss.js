import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";

const SyntaxCSS = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('CSS')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Syntax CSS</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_artcl}>
                        CSS punya sintaks atau tata cara penulisan kode yang harus diikuti.
                        Jika kita salah tulis, bisa jadi CSS yang kita buat tidak akan menghasilkan apa-apa di tampilan web.
                        Karena itu, kita wajib memahami sintaks dasar CSS agar tidak salah tulis.
                        </Text>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}>Syntax CSS</Text>
                        <Image source={Gambar.GambarCss8} style={{resizeMode:"stretch",height:100,width:300,alignSelf:"center"}}/>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}>Stuktur Dasar CSS</Text>
                        <Text style={style.Text_artcl}>
                        Struktur kode CSS terdiri dari tiga bagian :
                        {'\n'}
                        1. Selector.
                        {'\n'}
                        2. Declaration.
                        {'\n'}
                        3. Properti dan nilanya.
                        </Text>
                        <View style={style.Garis}></View>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:18}}>1.Selector</Text>
                        <Text style={style.Text_artcl}>Selektor adalah kata kunci untuk memilih elemen HTML yang akan kita beri style.</Text>
                        <Image source={Gambar.GambarCss9} style={{alignSelf:"center",borderRadius:10}}/>
                        <Text style={style.Text_artcl}>Kita memilih semua elemen {`<p>`}, lalu diberikan warna teks Orange.
                        Selektor dapat berupa nama tag, class, id, dan atribut.</Text>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:18}}>2.Deklaration</Text>
                        <Text style={style.Text_artcl}>Blok deklarasi adalah tempat kita menuliskan atribut atau properti CSS yang akan diberikan ke pada elemen yang telah diseleksi.</Text>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:18}}>3.Properti dan Nilai</Text>
                        <Text style={style.Text_artcl}>Properti adalah sekumpulan aturan yang akan diberikan kepada elemen yang dipilih.</Text>
                        <Image source={Gambar.GambarCss8} style={{resizeMode:"stretch",height:100,width:300,alignSelf:"center"}}/>
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
        backgroundColor:"#295E62",
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
        padding:3
    },
    Text_Title:{
        fontSize:25,
        textAlign:"center",
        color:"#000000",
    },
    Text_artcl:{
        margin:5,
        color:"#000000"
    },
    Text_Content:{
        margin:10,
        color:"#000000",
        fontSize:15,
    },
    Button_Next:{
        height:30,
        width:80,
        backgroundColor:"#FFFFFF",
        position:"absolute",
        bottom:108,
        left:140,
        right:140,
        borderRadius:10,
    },
    Text_Btn:{
        textAlign:"center",
        alignSelf:"center",
        color:"#295E62",
        fontWeight:"bold",
        fontSize:20
    },
    Gambar:{
        width:320,
        height:240,
        alignSelf:"center",
        resizeMode: 'stretch' 
    },
    Garis:{
        borderWidth:1,
        borderColor:"black",
        marginBottom:4,
        marginTop:2,
        borderRadius:4,
    },

})

export default SyntaxCSS;