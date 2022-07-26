import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";

const AlignCSS = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('CSS')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>CSS : Align</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_artcl}>
                        mengatur teks dan Element pada HTML menggunakan CSS alignment.Sebuah teks dapat diatur rata kiri (alignment left), rata kanan (alignment right), rata tengah (center) atau rata kanan-kiri (justifiy) untuk membuat Tampilan terlihat lebih rapih.
                        </Text>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}># Elemen Rata Tengah</Text>
                        <Text style={style.Text_artcl}>
                        Untuk memusatkan elemen blok secara horizontal {`(seperti <div>)`}, gunakan margin: auto;
                        Mengatur lebar elemen akan mencegahnya meregang ke tepi wadahnya.
                        Elemen kemudian akan mengambil lebar yang ditentukan, dan ruang yang tersisa akan dibagi rata antara dua margin:
                        </Text>
                        <Image source={Gambar.GambarCss22} style={style.Gambar}/>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}>Code :</Text>
                        <Image source={Gambar.GambarCss23} style={style.Gambar}/>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:17}}>Catatan: Penjajaran tengah tidak berpengaruh jika widthproperti tidak disetel (atau disetel ke 100%).</Text>
                        <View style={style.Garis}></View>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}># Text Alignment</Text>
                        <Text style={style.Text_artcl}>Properti 'text-align' ini digunakan untuk mengatur perataan horizontal teks.
                        Sebuah teks dapat diratakan kiri atau kanan, di tengah, atau diratakan.
                        Contoh berikut menunjukkan rata tengah, dan teks rata kiri dan kanan (perataan kiri adalah default jika arah teks dari kiri ke kanan, dan perataan kanan adalah default jika arah teks dari kanan ke kiri):
                        </Text>
                        <Image source={Gambar.GambarCss24} style={style.Gambar}/>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}>Code :</Text>
                        <Image source={Gambar.GambarCss25} style={{resizeMode:"stretch",width:300,alignSelf:"center",borderRadius:15,marginBottom:5}}/>
                        <View style={style.Garis}></View>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}># Membuat Image Center</Text>
                        <Text style={style.Text_artcl}>Untuk memusatkan gambar, atur margin kiri dan kanan ke autodan buat menjadi block elemen :</Text>
                        <Image source={Gambar.GambarCss26} style={style.Gambar}/>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}>Code :</Text>
                        <Image source={Gambar.GambarCss27} style={style.Gambar}/>
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

export default AlignCSS;