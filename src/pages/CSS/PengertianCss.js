import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";

const FormHTML = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('CSS')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>CSS</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_Title}>Apa itu CSS?</Text>
                        <Text style={style.Text_artcl}>
                        CSS (Cascade Style Sheet) adalah sebuah bahasa untuk mengatur tampilan web sehingga terlihat lebih menarik dan indah.
                        Dengan CSS, kita dapat mengatur layout (tata letak), warna, font, garis, background, animasi, dan lain-lain.
                        </Text>
                        <Text style={style.Text_Title}>Tips untuk belajar CSS</Text>
                        <Text style={{marginLeft:5,color:"#000000",fontSize:15,fontWeight:"bold",marginTop:4}}>Tips #1: Cara Menghafal Code CSS</Text>
                        <Text style={style.Text_artcl}>
                        Jika kamu sering mengetik kode CSS tanpa copas, bisa jadi ingatanmu terhadap kode atau properti CSS akan semkin kuat.
                        Saya sendiri tidak bisa menghapal semua properti CSS, tetapi saya ingat properti yang sering dipakai.
                        Kalau tidak ingat ya, tinggal googling aja atau manfaatkan Inspect Element
                        </Text>
                        <Text style={{marginLeft:5,color:"#000000",fontSize:15,fontWeight:"bold",marginTop:4}}>Tips #2: Gunakan Inspect Elemen CSS</Text>
                        <Text style={style.Text_artcl}>
                        Inspect elemen ada di setiap browser. Bisa dibuka dengan Klik kanan, lalu pilih Inspect Element.Di inspect elemen, kita bisa menulis kode CSS secara langsung dan hasilnya pun bisa kita lihat secara langsung.
                        </Text>
                        <Image source={Gambar.GambarCss} style={style.Gambar}/>
                        <Text style={{marginLeft:5,color:"#000000",fontSize:15,fontWeight:"bold",marginTop:4}}>Tips #3: Gunakan VS Code</Text>
                        <Text style={style.Text_artcl}>Karena teks editor VS Code mendukung kode CSS dengan sangat baik.Misalnya, saat kita memilih warna. VS Code memberikan beberapa saran serta tampilan visual warnanya.</Text>
                        <Image source={Gambar.GambarCss2} style={style.Gambar}/>
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
    },
    Text_Title:{
        fontSize:16,
        marginLeft:40,
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
        resizeMode: 'stretch',
        borderRadius:10,
        marginBottom:5
    },
    Garis:{
        borderWidth:1,
        borderColor:"black",
        marginBottom:4,
        marginTop:2,
        borderRadius:4,
    },

})

export default FormHTML;