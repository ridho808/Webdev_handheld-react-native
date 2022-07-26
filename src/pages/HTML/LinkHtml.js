import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";


const LinkHTML = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('HTML')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Links HTML</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_Title}>Links HTML.</Text>
                        <Text style={style.Text_artcl}>
                        {`Link hampir selalu ditemui didalam sebuah website.Link atau tautan berfungsi untuk memungkinkan pengguna ketika 
mengklik menuju halaman yang diinginkan.

Tag HTML <a>mendefinisikan hyperlink. Ini memiliki sintaks berikut:`}
                        </Text>
                        <Text style={{textAlign:"center",color:"purple"}}>{`<a href="url">link text</a>`}</Text>
                        <Text style={{textAlign:"center",fontWeight:"bold",color:"#000000"}}>Contoh implementasi :</Text>
                        <View>
                            <Image source={Gambar.GambarLink} style={style.Gambar}/>
                            <Image source={Gambar.GambarLink2} style={style.Gambar}/>
                        </View>
                        <View style={style.Garis}></View>
                        <Text style={{margin:4,color:"#000000"}}>{`seperti contoh diatas tautan berhasil dibuat dan saat user mengklik maka akan menuju ke halaman pencarian google.com`}</Text>
                        <Text style={{color:"#000000",fontWeight:"bold"}}>Catatan :</Text><Text
                        style={style.Text_artcl}
                        >{`1.Gunakan <a>elemen untuk menentukan tautan
2.Gunakan hrefatribut untuk menentukan alamat tautan
3.Gunakan targetatribut untuk menentukan tempat membuka dokumen tertaut
4.Gunakan <img>elemen (di dalam <a>) untuk menggunakan gambar sebagai tautan
5.Gunakan mailto:skema di dalam hrefatribut untuk membuat tautan yang membuka program email pengguna`}</Text>
                    <Text style={{color:"#000000",fontWeight:"bold"}}>Jenis-jenis Link pada HTML:</Text>
                    <Text style={{color:"#000000"}}>1.Internal Link: adalah link yang menuju ke domain atau halaman web itu sendiri
                        {` contoh: 
                        <a href="index.html">Home</a>
                        <a href="About.html">About</a>`}
                    </Text>
                    <Text style={{color:"#000000"}}>2.External Link: adalah link yang menuju domain lain/diluar halaman Web itu sendiri
                        {` contoh: 
                        <a href="index.html">Home</a>
                        <a href="google.com">Halaman Google</a>`}
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
    Garis:{
        borderWidth:1,
        borderColor:"black",
        marginBottom:4,
        marginTop:2,
        borderRadius:4,
    },
    Gambar:{
        width:320,
        height:240,
        alignSelf:"center",
        resizeMode: 'stretch' 
    }

})

export default LinkHTML;