import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";


const SemanticHTML = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('HTML')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Semantic HTML</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_Title}>Semantic Tag HTML.</Text>
                        <View style={style.Garis}></View>
                        <Text style={style.Text_artcl}>
                        Semantic Tag atau Semantic Markup, adalah sebutan untuk tag-tag HTML yang memiliki ‘arti‘ atau ‘makna’. Kata semantic berasal dari kata yunani yang berarti ‘mempelajari arti‘ (the study of meaning).
                        {/* {`\n`} */}
                        HTML ditujukan untuk membuat struktur halaman web. Tag {`<p>`} misalnya, digunakan untuk membuat paragraf, tag {`<h1>`} untuk membuat judul/header, dan tag {`<table>`} untuk membuat tabel, kesemua tag ini memiliki ‘arti‘ yang jelas, karena itu termasuk kedalam semantic tag.Sedangkan tag seperti {`<div>`} dan {`<span>`} tidak memiliki arti apa-apa
                        </Text>
                        <Text style={style.Text_artcl}>
                        Walaupun dari atribut id kita bisa melihat ‘arti‘ dari tag-tag tersebut, akan tetapi tag {`<div>`} itu sendiri tidak memiliki arti apa-apa {`(non semantic tag)`}. Web browser seperti screen reader untuk teman kita yang bekebutuhan khusus, tidak bisa menentukan apakah tag ini adalah header, atau konten dari website. Kita bisa saja membuat header halaman menggunakan {`<div id=”head”>, <div id=”header”>,`} atau {`<div id=”atas”>.`}
                        </Text>
                        <Text style={{textAlign:"left",fontWeight:"bold",color:"#000000"}}>Beberapa semantic tag yang dibawa oleh HTML5 adalah sebagai berikut: :</Text>
                        <Text style={{color:"#000000",marginBottom:7}}>
                        1. {`<article>`}
                        {`\n`}
                        2. {`<aside>`}
                        {`\n`}
                        3 {`<figcaption>`}
                        {`\n`}
                        4. {`<figure>`}
                        {`\n`}
                        5. {`<footer>`}
                        {`\n`}
                        6. {`<header>`}
                        {`\n`}
                        7. {`<main>`}
                        {`\n`}
                        5. {`<mark>`}
                        {`\n`}
                        6. {`<nav>`}
                        {`\n`}
                        7. {`<section>`}
                        {`\n`}
                        8. {`<summary>`}
                        {`\n`}
                        9. {`<time>`}
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

export default SemanticHTML;