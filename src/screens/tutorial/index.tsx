import {View, Text,ImageBackground, StyleSheet, TouchableOpacity,Image} from 'react-native';
import React, {useEffect} from 'react';
import { Images } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../navigator/screenNames';
import { colors } from '../../theme';





const Tutorial = () => {

  const navigation = useNavigation();
  
  return (
   
    <ImageBackground source={Images.tutorial} style={styles.container}>
     
    {/* <View style={{marginTop:100, alignItems:'center',justifyContent:'flex-end'}}>
     
     
    
      
       
    </View> */}

    <View style={{ flex:1,justifyContent:'flex-end',alignItems:'center',marginBottom:100}}>
      <Text style={{color:'black',opacity:.5,fontSize:24,fontWeight:'900',fontFamily:'Georgia'}}>Welcome at Expensify</Text>
      <Text style={{color:'black',opacity:.6,fontSize:15,fontWeight:'500',marginTop:10}}>Simple way to track your expenses</Text>
      <TouchableOpacity style={{backgroundColor:colors.main,padding:20,borderRadius:30,paddingHorizontal:40,marginTop:20}} onPress={()=>navigation.navigate(ScreenNames.SignIn)}>
        <Text style={{fontSize:16,color:'white',fontWeight:'700'}}>Start Track</Text>
      </TouchableOpacity>
    </View>
   
     
    </ImageBackground>
  
  );
};

const styles = StyleSheet.create({

  container:{
    flex: 1,
    
  }

})
export default Tutorial;
