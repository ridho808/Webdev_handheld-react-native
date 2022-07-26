import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";


const ElementsHTML = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('HTML')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Element HTML</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_Title}>Element HTML</Text>
                        <Text style={style.Text_artcl}>
                        {`Elemen HTML adalah segalanya mulai dari tag awal hingga tag akhir:

< tagname > Konten ada di sini... < /tagname >

Contoh beberapa elemen HTML:

< h1 > Judul Pertama Saya < /h1 > 
< p > Paragraf pertama saya. < /p >`}
                        </Text>
                        <Text style={{textAlign:"center",fontWeight:"bold",color:"#000000"}}>Contoh</Text>
                        <View>
                         <Image source={Gambar.Gambar1} style={style.Gambar}/>
                        </View>
                        <Text style={{marginLeft:4,fontWeight:"bold",color:"#000000"}}>
                            Catatan :
                        </Text>
                        <Text style={{marginLeft:4,color:"#000000"}}>{`Beberapa elemen HTML tidak memiliki konten (seperti elemen <br>). Elemen-elemen ini disebut elemen kosong. Elemen kosong tidak memiliki tag akhir!`}</Text>
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

export default ElementsHTML;