import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";


const ListHTML = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('HTML')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>List dan Table di HTML</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_Title}>List dan Table di HTML.</Text>
                        <Text style={style.Text_artcl}>
                        List HTML memungkinkan pengembang web untuk mengelompokkan satu set item terkait dalam daftar.
                        </Text>
                        <Text style={{textAlign:"center",fontWeight:"bold",color:"#000000"}}>Contoh :</Text>
                        <View>
                            <Image source={Gambar.GambarList} style={style.Gambar}/>
                        </View>
                        <View style={style.Garis}></View>
                        <Text style={{marginLeft:5,color:"#000000",fontWeight:"bold"}}>List HTML Tidak Terurut :</Text><Text
                        style={style.Text_artcl}
                        >{`Daftar tidak berurutan dimulai dengan <ul>tag. Setiap item daftar dimulai dengan <li>tag.Item daftar akan ditandai dengan peluru (lingkaran hitam kecil) secara default:`}</Text>
                        <Image source={Gambar.GambarList1} style={style.Gambar2}/>
                    <Text style={{color:"#000000",fontWeight:"bold"}}>List HTML yang terurut :</Text>
                    <Text style={{color:"#000000"}}>{`Daftar yang diurutkan dimulai dengan <ol>tag. Setiap item daftar dimulai dengan <li>tag.
Item daftar akan ditandai dengan angka secara default:`}
                    </Text>
                        <View>
                            <Image source={Gambar.GambarList2} style={style.Gambar2}/>
                        </View>
                        <Text style={{fontWeight:"bold",color:"#000000",margin:5}}>Catatan: Tag list Biasanya digunaka untuk membuat navigasi/navbar di web </Text>
                    </View>
                    <View style={style.Content2}>
                        <Text style={style.Text_Title}>Tables HTML</Text>
                        <Text style={style.Text_artcl}>Tabel HTML memungkinkan pengembang web untuk mengatur data ke dalam baris dan kolom.</Text>
                        <Image source={Gambar.GambarTable} style={style.Gambar2}/>
                        <View style={style.Garis}></View>
                        <Text  style={{color:"#000000",margin:5}}>Ketika kita ingin membuat table dalam HTML ada beberapa tag yang harus kita ketahui.
                            {""}
                            namun Kita bisa membuat table sederhana menggunakan 3 Tag/Element HTML :
                        </Text>
                        <Text style={{color:"#000000",marginLeft:5}}>
                            1.Element {`<table> ... </table>`} untuk mendefinisikan pebuatan table.
                            {'\n'}
                            2.Element {`<tr> ... </tr>`} untuk mendefinisikan pembuatan baris pada tabel
                            {'\n'}
                            3.Elements {`<td> ... </td>`} untuk     membuat kolom atau sel di setiap baris pada tabel
                        </Text>
                        <Text style={style.Text_artcl}>Contoh :</Text>
                        <Image source={Gambar.GambarTable2} style={{width:320,resizeMode:"stretch",height:400,alignSelf:"center"}}/>
                        <Text style={style.Text_artcl}>Pada kode di atas terdapat atribut border dalam tag table, atribut border tersebut berfungsi untuk memberikan garis pada tabel. Sedangkan angka 1 di dalam atribut border merupakan nilai ketebalan garis yang akan ditampilkan, semakin besar nilai tersebut maka semakin tebal garis yang ditampilkan. </Text>
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
    Content2:{
        width:330,
        backgroundColor:"#FFFFFF",
        alignSelf:"center",
        borderRadius:20,
        padding:3,
        marginTop:20
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
    Gambar2:{
        width:320,
        height:240,
        alignSelf:"center",
        resizeMode: 'stretch' 
    }

})

export default ListHTML;