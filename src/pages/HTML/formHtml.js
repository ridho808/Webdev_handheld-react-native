import * as React from "react";
import { View,Text,TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import {useNavigation } from "@react-navigation/native";
import Navigasi from "../../component/Navigasi";
import Gambar from "../../component/Image";

const FormHTML = () => {
    const Navigation = useNavigation();
    const DirectHTML = ()=>{
        return Navigation.navigate('HTML')
    }
    return(
        <View style={style.Container}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>Form HTML</Text>
                </View>
                <ScrollView style={{marginTop:20,marginBottom:144}}>
                    <View style={style.Content}>
                        <Text style={style.Text_Title}>Form HTML</Text>
                        <Text style={style.Text_artcl}>
                        Salah satu cara untuk mengambil informasi dari pengunjung ialah menggunakan form.
                        Form dalam web bisa disamakan dengan formuliar di dunia nyata.Form dapat diisi, kemudian diproses dengan program tertentu.
                        </Text>
                        <Text style={{textAlign:"center",fontWeight:"bold",color:"#000000"}}>Cara membuat form di HTML</Text>
                        <Text style={{marginLeft:4,color:"#000000"}}>
                            Form di HTML dapat kita buat dengan tag {` <form>. `}
                        </Text>
                        <Text style={{marginLeft:4,color:"#000000"}}>Tag ini memiliki beberapa atribut yang harus diberikan, seperti:</Text>
                        <Text style={style.Text_artcl}>`action` {`->`} untuk menentukan aksi yang akan dilakukan saat data dikirim.
                        {`\n`}
                        `method` {`->`} metode pengiriman data.Terdapat dua nilai yang perlu kalian ingat ketika menggunakan atribut ini, yaitu POST dan GET
                        </Text>
                        <Image source={Gambar.GambarForm} style={style.Gambar}/>
                        <Text style={{textAlign:"center",fontWeight:"bold",color:"#000000"}}>Mengenal Field di HTML</Text>
                        <Text style={style.Text_artcl}>
                        Field merupakan ruas atau bidang tempat kita akan mengisi data. Salah satu tag yang sering digunakan untuk membuat field di HTML adalah tag {'<input>.'}
                        </Text>
                        <Image source={Gambar.GambarForm2} style={style.Gambar}/>
                        <Text style={{textAlign:"center",fontWeight:"bold",color:"#000000"}}>Hasil dari code diatas</Text>
                        <Image source={Gambar.GambarForm3} style={{alignSelf:"center"}}/>
                        <View style={style.Garis}></View>
                        <Text style={{marginLeft:5,fontWeight:"bold",color:"#000000"}}>Atribut Type</Text>
                        <Text style={style.Text_artcl}>
                            Atribu Type pada Tag {`<input>`} memiliki banyak nilai namun saya informasikan nilai-nilai
                            yang sering digunakan.
                        </Text>
                        <Text style={{marginLeft:4,fontWeight:"bold",color:"#000000",fontSize:13,marginBottom:20}}>
                            1. text – menghasilkan field untuk mengisi data berupa teks
                            {`\n`}
                            2. email – menghasilkan field untuk mengisi data khusus email.
                            {`\n`}
                            3. password – menghasilkan field untuk mengisi data khusus password atau kata sandi, field ini nantinya hanya menampilkan bintang atau bulatan yang berfungsi untuk menutupi nilai asli. Namanya juga password.
                            {`\n`}
                            4. radio – menghasilkan radio button, dengan menggunakan input type ini para pengguna nantinya akan disuruh memilih salah satu dari dua atau lebih pilihan yang ada.
                            {`\n`}
                            5. checkbox – menghasilkan checkbox yang membuat pengguna dapat memilih lebih dari satu pilihan dari banyak daftar pilihan yang disediakan
                            {`\n`}
                            6. number – menghasilkan field untuk mengisi data khusus angka
                            {`\n`}
                            7. date – menghasilkan field untuk mengisi data khusus tanggal
                            {`\n`}
                            8. file – menghasilkan field untuk upload file
                            {`\n`}
                            9. submit – menghasilkan tombol submit
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

export default FormHTML;