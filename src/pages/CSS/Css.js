import * as React from 'react';
import { View,ScrollView,Text,Image,StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navigasi from '../../component/Navigasi';
const CSS = () =>{
    const Navigation = useNavigation()
    return(
        <View style={style.container}>
            <ScrollView style={{marginBottom:150,}}>
                <View style={style.Tagline}>
                    <Text style={style.Text_tg}>CSS</Text>
                </View>
                <View style={style.content}>
                    <TouchableOpacity style={style.Button}
                    onPress={()=>Navigation.navigate("PengertianCSS")}
                    >
                        <Text style={style.Text_btn}>Pengertian CSS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}
                    onPress={()=>Navigation.navigate("CaraMenulisCss")}
                    >
                        <Text style={style.Text_btn}>CSS: Cara Menulis CSS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button} 
                    onPress={()=>Navigation.navigate("SyntaxCss")}
                    >
                        <Text style={style.Text_btn}>CSS: Syntax CSS </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}
                    onPress={()=>Navigation.navigate("SelectorCss")}
                    >
                        <Text style={style.Text_btn}>CSS: Selector CSS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}
                    onPress={()=>Navigation.navigate('ColorCss')}
                    >
                        <Text style={style.Text_btn}>CSS: Color/Warna</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button} 
                    onPress={()=>Navigation.navigate('AlignCSS')}
                    >
                        <Text style={style.Text_btn}>CSS: Align CSS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>CSS: Links</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>CSS: List Dan Table</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>CSS: Form</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>CSS: Atribut class dan Id</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>CSS: Layout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.Button}>
                        <Text style={style.Text_btn}>CSS: Semantics</Text>
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

export default CSS;