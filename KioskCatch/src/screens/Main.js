import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image, Button,Alert,TouchableOpacity  } from "react-native";

const App = () =>{
    return (
        <ImageBackground source={require("../src/asset/img/main/main_background.png")} style={styles.bgImage} >
            {/* <View style = {[styles.container]}>
                
                <Image source = {require('./src/asset/img/main/MainP_Logo.png')}  style = {styles.logoImage}  />
                <Image source = {require('./src/asset/img/main/tittle.png')}  style = {styles.title}  />
                <TouchableOpacity style = {[styles.btn,{borderColor: '#5D97EF'} ]}>
                    <Image source = {require('./src/asset/img/main/tutorial_icon.png')}  style = {styles.btnImage}  />
                    <Text>키오스크 이용방법 배우기</Text>
                </TouchableOpacity>
            
            </View> */}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#FFFFFF',
    },
    bgImage: {
        width: '100%', 
        height: '100%',
        resizeMode:'cover',
        // elevation : '3'
        },
    logoImage : {
        width: '100%', 
        height: '30%',
        // flex: 5, 
        alignItems:'baseline',
        resizeMode:'contain',
        marginTop:10,
        marginBottom: -20
        // justifyContent: 'center',
        // elevation:'1'
    },
    btnImage :{
        width: '100%',
        height : '68%',
        resizeMode: 'contain'
    },
    title:{
        width: '100%',
        height: '18%',
        resizeMode:'contain',
    },
    btn:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
        height: 130,
        width: 311,
        borderRadius: 17,
        marginTop: 50
    }
});



export default App;