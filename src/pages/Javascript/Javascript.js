import * as React from 'react';
import { View,ScrollView,Text,Image,StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navigasi from '../../component/Navigasi';
const JavaScript = () =>{
    return(
        <View style={style.container}>
            <ScrollView style={{marginBottom:150,}}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>JavaScript</Text>
                </View>
                <View style={style.content}>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>Pengertian JavaScript</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>JavaScript: Dasar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>JavaScript: Elements</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>JavaScript: Heading</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>JavaScript: Paragraph</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>JavaScript: Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>JavaScript: Links</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>JavaScript: List Dan Table</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>JavaScript: Form</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>JavaScript: Atribut class dan Id</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>JavaScript: Layout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>JavaScript: Semantics</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <View style={{
                position:"absolute",
                bottom:120,
                left:150
            }}>
                <Text style={{textAlign:"center",color:"#FFFFFF",fontSize:20,fontWeight:"bold"}}>Sweap-up</Text>
            </View>
            <Navigasi />
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#295E62"
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
    content: {
        flexDirection:"column",
        alignItems:"center",
        margin:20,
        
    },
    Button:{
        width:256,
        height:50,
        backgroundColor:"#FFFFFF",
        borderRadius:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        margin:15
    },
    Text_btn:{
        fontSize:15,
        fontWeight:"bold",
        color:"#000000"
    },
});

export default JavaScript;