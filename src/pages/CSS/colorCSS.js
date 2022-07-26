import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";

const ColorCSS = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('CSS')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Color CSS</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                     <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}># Merubah Warna Background</Text>
                        <Text style={style.Text_artcl}>Cara merubah Background Web sangat lah mudah.
                        jika kita ingin mengubah Background kita hanya perlu menambahkan style di Element {`<Body>`} Contoh :</Text>
                        <Image source={Gambar.GambarCss15} style={{resizeMode:"stretch",width:320,height:180,borderRadius:15}}/>
                        <View style={style.Garis}></View>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}># Merubah Warna Text</Text>
                        <Text style={style.Text_artcl}>untuk mengubah warna text kita hanya perlu menambahkan style pada Element.jika kita
                        ingin memberikan warna pada salah satu dari element kita hanya perku menambakan atribut class pada Element. Contoh :</Text>
                        <Image source={Gambar.GambarCss16} style={{resizeMode:"stretch",width:320,height:190,borderRadius:15}}/>
                        <Text style={style.Text_artcl}> Hasil :</Text>
                        <Image source={Gambar.GambarCss17} style={{resizeMode:"stretch",width:320,height:190,borderRadius:15}}/>
                        <Text style={style.Text_artcl}>seperti contoh diatas jika kita tidak memberikan Atribut class Maka Warna akan diterapkan 
                        ke semua Elements.namun ketika kita Meberikan Class Pada Elements warna akan berlaku hanya untuk Element itu saja</Text>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}># Merubah Warna pada Button</Text>
                        <Image source={Gambar.GambarCss18} style={{resizeMode:"stretch",width:320,height:190,borderRadius:15}}/>
                        <Text style={style.Text_artcl}> Hasil :</Text>
                        <Image source={Gambar.GambarCss19} style={{resizeMode:"stretch",width:320,height:290,borderRadius:15}}/>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}># Merubah Warna border</Text>
                        <Image source={Gambar.GambarCss21} style={{resizeMode:"stretch",width:320,height:200,borderRadius:15}}/>
                        <Text style={style.Text_artcl}> Hasil :</Text>
                        <Image source={Gambar.GambarCss20} style={{resizeMode:"stretch",width:320,height:240,borderRadius:15}}/>
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

export default ColorCSS;