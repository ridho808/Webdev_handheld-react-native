import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";


const TagsHTML = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('HTML')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Tags HTML</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_Title}>Tags HTML</Text>
                        <Text style={style.Text_artcl}>
                        {`Apa itu Tag?
Tag adalah sebuah penanda awalan dan akhiran dari sebuah elemen di HTML. Tag dibuat dengan kurung siku (<. . . >), lalu di dalamnya berisi nama tag dan kadang juga ditambahkan dengan atribut.`}
                        </Text>
                        <Text style={{marginLeft:4,fontWeight:"bold",color:"#000000"}}>
                            Contoh Tag HTML :
                        </Text>
                        <Text style={{marginLeft:4,color:"#000000"}}>{`<p>, <a>, <body>, <head>, dan sebagainya.`}</Text>
                        <View style={style.Garis}></View>
                        <Text style={{marginLeft:4,color:"#000000"}}>{`Tag selalu ditulis berpasangan. Ada tag pembuka dan ada tag penutupnya. Namun, ada juga beberapa tag yang tidak memiliki pasangan penutup. Tag penutup ditulis dengan menambahkan garis miring (/) di depan nama tag. Contohnya :`}</Text>
                        <View style={style.Garis}>
                            <Text>{`<p> --> tag Pembuka
    Goodbye World!! --> isi Tag
</p> --> tag Penutup
                            `}</Text>
                        </View>
                        <View style={style.Garis}></View>
                        <Text style={style.Text_artcl}>Berikut ini daftar tag-tag dasar, yang menurut saya harus kamu ingat.</Text>
                        <View>
                            <Text style={{color:"#000000"}}>
                                {`'<html>' => untuk memulai dokumen HTML`}
                            </Text >
                            <Text style={{color:"#000000"}}>
                                {`'<head>' => untuk membuat bagian head`}
                            </Text>
                            <Text style={{color:"#000000"}}>
                                {`'<h1>' sampai '<h6>' => untuk membuat heading pada artikel`}
                            </Text>
                            <Text style={{color:"#000000"}}>
                                {`'<p>' => untuk membuat paragraf`}
                            </Text>
                            <Text style={{color:"#000000"}}>
                                {`'<!-- -->' => untuk membuat komentar`}
                            </Text >
                        </View>
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
        padding:4
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
    }

})

export default TagsHTML;