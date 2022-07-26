import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";

const ImageHTML = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('HTML')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Image HTML</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_Title}>Image HTML</Text>
                        <Text style={style.Text_artcl}>
                        {`Gambar dapat kita tambakan di HTML dengan menggunakan tag '<img>'. Tag ini memiliki atribut wajib, yakni src.Jika kita tidak mengisi atribut src, maka gambar tidak akan ditampilkan.`}
                        </Text>
                        <Text style={{textAlign:"center",fontWeight:"bold",color:"#000000"}}>Contoh</Text>
                        <View>
                            <Text style={{color:"purple",textAlign:"center"}}>
                                {` <img src="folderfoto/nama_foto.jpg"/>`}
                            </Text>
                        </View>
                        <Image source={Gambar.GambarTag1} style={{alignSelf:"center"}}/>
                        <Text style={{marginLeft:4,fontWeight:"bold",color:"#000000"}}>
                            Catatan :
                        </Text>
                        <Text style={{marginLeft:4,color:"#000000"}}>{`File Gambar Harus didalam satu foleder dengan Project HTML`}</Text>
                        <Text style={{margin:4,fontWeight:"bold",color:"#000000"}}>Contoh Impelemtasi</Text>
                        <View>
                            <Image source={Gambar.GambarTag2} style={style.Gambar} />
                        </View>
                        <Text style={{textAlign:"center",fontWeight:"bold",color:"#000000"}}>Hasil dari Contoh implementasi :</Text>
                        <Image source={Gambar.GambarTag3} style={{resizeMode:"stretch",width:320,height:400,marginBottom:5}}/>
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

export default ImageHTML;