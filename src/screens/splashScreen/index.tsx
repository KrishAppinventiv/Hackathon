import {View, Text, Animated, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Images} from '../../assets';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigator/screenNames';
import { vh } from '../../theme/dimensions';

const SplashScreen = () => {


  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation: any = useNavigation();
  const viewAnimate = () =>
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
    }).start();

  
  useEffect(() => {
    viewAnimate();
    setTimeout(() => {
      if (true) {
        
        navigation.navigate(ScreenNames.Tutorial);
       
      }
    }, 1100);
  }, []);
  return (
    <Animated.View
      style={[styles.container, {opacity: fadeAnim}]}
      testID="splash">
      <Image
        resizeMethod="resize"
        style={styles.imageStyle}
        source={Images.logo}
      />
      <Text style={{fontSize:vh(35)}}>MONEX</Text>
    </Animated.View>
  );
};

export default SplashScreen;
