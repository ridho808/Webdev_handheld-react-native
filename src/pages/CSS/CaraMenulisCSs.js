import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";

const CaraMenulisCss = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('CSS')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Cara Menulis Css</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_artcl}>
                        Ada tiga cara menulis CSS di HTML:
                        {`\n`}
                        Internal CSS {`–>`} ditulis di dalam tag {`<style>`};
                        {`\n`}
                        Inline CSS {`–>`} ditulis di atribut elemen HTML;
                        {`\n`}
                        External CSS {`–>`} ditulis di file CSS terpisah dengan HTML.
                        </Text>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}>#1 : Internal CSS</Text>
                        <Text style={{marginLeft:4,color:"#000000"}}>
                        Internal CSS adalah kode CSS yang ditulis di dalam tag {`<style>`}.
                        Tag {`<style>`} bisa ditulis di dalam tag {`<head>`}, bisa juga ditulis di dalam tag {`<body>`}. Namun kebanyakan orang menulisnya di dalam {`<head>`}.
                        </Text>
                        <Image source={Gambar.GambarCss3} style={style.Gambar}/>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}>#2 : External CSS</Text>
                        <Text style={{marginLeft:4,color:"#000000"}}>
                        Eksternal CSS adalah kode CSS yang ditulis terpisah dengan kode HTML. Eksternal CSS ditulis di dalam file khusus yang berekstensi {`(.css)`}
                        </Text>
                        <Image source={Gambar.GambarCss4} style={{alignSelf:"center"}}/>
                        <Text style={style.Text_artcl}>
                        Untuk menggunakan CSS ini, kita harus menghubungkannya dengan HTML.
                        Ada dua cara yang bisa kita lakukan:
                        </Text>
                        <Text style={{marginLeft:5,fontSize:25,color:"#000000"}}>
                        1.Menggunakan tag {`<link>`}
                        </Text>
                        <Image source={Gambar.GambarCss5} style={{height:70,resizeMode:"stretch",width:320,alignSelf:"center",borderRadius:5}}/>
                        <Text style={{marginLeft:5,fontSize:25,color:"#000000"}}>
                        2: menggunakan @import
                        </Text>
                        <Image source={Gambar.GambarCss6} style={{height:70,resizeMode:"stretch",width:320,alignSelf:"center",borderRadius:5 ,marginBottom:6}}/>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000",fontSize:20}}>#3 : Inline CSS</Text>
                        <Text style={style.Text_artcl}>
                        Inline CSS adalah kode CSS yang ditulis langsung pada atribut style di elemen HTML.
                        Kode CSS ditulis langsung tanpa menggunakan kurung kurawal {`'{. . .}'`} . Kemudian properti tetap dipisah dengan titik koma.
                        </Text>
                        <Image source={Gambar.GambarCss7} style={{resizeMode:"stretch",width:320,borderRadius:5}}/>
                        <Text style={style.Text_artcl}>Inline CSS biasanya digunakan untuk memberikan style pada satu elemen saja. CSS pada inline akan lebih diprioritaskan dibandingkan dengan internal dan eksternal.</Text>
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

export default CaraMenulisCss;