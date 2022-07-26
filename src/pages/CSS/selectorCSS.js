import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";

const SelectorCSS = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('CSS')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Selector CSS</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_artcl}>
                        Selektor CSS digunakan untuk "menemukan" {`(atau memilih)`} elemen HTML yang ingin Anda gaya.
                        Kita dapat membagi pemilih CSS menjadi lima kategori:
                        </Text>
                        <View style={style.Garis}></View>
                        <Text style={style.Text_artcl}>
                            1.Selektor sederhana (pilih elemen berdasarkan nama, id, kelas).
                            {`\n`}
                            2.Selektor kombinator (memilih elemen berdasarkan hubungan spesifik di antara mereka).
                            {`\n`}
                           3.Selektor kelas semu (memilih elemen berdasarkan status tertentu)
                           {`\n`}
                           4.Selektor elemen semu (memilih dan menata bagian elemen)
                           {`\n`}
                           5.Pemilih atribut (memilih elemen berdasarkan atribut atau nilai atribut)
                        </Text>
                        <View style={style.Garis}></View>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}>Pemilihan Element CSS</Text>
                        <Text style={style.Text_artcl}>Memilih elemen HTML berdasarkan nama elemen.
                        {`\n`}Contoh : semua elemen {`<p>`} pada halaman akan diratakan tengah, dengan warna teks Orange: 
                        </Text>
                        <Image source={Gambar.GambarCss10} style={{resizeMode:"stretch",width:320,alignSelf:"center",borderRadius:15}}/>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}>Pemilihan Id CSS</Text>
                        <Text style={style.Text_artcl}>Pemilih id menggunakan atribut id dari elemen HTML untuk memilih elemen tertentu.
                        Id dari sebuah elemen adalah unik di dalam sebuah halaman, jadi pemilih id digunakan untuk memilih satu elemen unik!
                        Untuk memilih elemen dengan id tertentu, tulis karakter hash (#), diikuti dengan id elemen.</Text>
                        <Image source={Gambar.GambarCss11} style={{resizeMode:"stretch",width:320,alignSelf:"center",borderRadius:15}}/>
                        <Text style={style.Text_artcl}>Hasil :</Text>
                        <Image source={Gambar.GambarCss12} style={{resizeMode:"stretch",width:320,alignSelf:"center",borderRadius:15}}/>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}>Pemilihan class CSS</Text>
                        <Text style={style.Text_artcl}>Pemilih kelas memilih elemen HTML dengan atribut kelas tertentu.
                        Untuk memilih elemen dengan kelas tertentu, tulis karakter titik (.), diikuti dengan nama kelas.</Text>
                        <Text style={style.Text_artcl}>Dalam contoh ini semua elemen HTML dengan class="center" akan berwarna merah dan rata tengah: </Text>
                        <Image source={Gambar.GambarCss13} style={{resizeMode:"stretch",width:320,height:170,borderRadius:15,alignSelf:"center"}}/>
                        <Image source={Gambar.GambarCss14} style={{resizeMode:"stretch",alignSelf:"center",margin:3,borderRadius:15}}/>
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

export default SelectorCSS;