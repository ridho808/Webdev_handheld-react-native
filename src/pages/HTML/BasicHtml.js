import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";


const BasicHTML = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('HTML')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Pengertian HTML</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_Title}>Dasar HTML.</Text>
                        <Text style={style.Text_artcl}>
                        {`semua Document HTML harus dimulai dengan deklarasi tipe Document:<!DOCTYPE html>.
Dokumen HTML itu sendiri dimulai dengan <html>dan diakhiri dengan </html>.Bagian yang terlihat dari dokumen HTML adalah antara <body>dan </body>.`}
                        </Text>
                        <Text style={{textAlign:"center",fontWeight:"bold",color:"#000000"}}>Contoh</Text>
                        <View>
                            <Image source={Gambar.Gambar1} style={style.Gambar}/>
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold",color:"#000000"}}>
                            Deklarasi {"<!DOCTYPE>"}
                        </Text>
                        <Text style={{margin:4,color:"#000000"}}>{`Deklarasi <!DOCTYPE>mewakili jenis dokumen, dan membantu browser untuk menampilkan halaman web dengan benar.Itu hanya boleh muncul sekali, di bagian atas halaman (sebelum tag HTML apa pun).Deklarasi <!DOCTYPE>tidak peka huruf besar/kecil.`}</Text>
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
    }

})

export default BasicHTML;