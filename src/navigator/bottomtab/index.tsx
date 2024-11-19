import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import {ScreenNames} from '../screenNames';
import Profile from '../../screens/profile';
import Setting from '../../screens/setting';
import Notification from '../../screens/notification';
import Add from '../../screens/add';
import Saving from '../../screens/saving';
import { Image, TouchableOpacity, View } from 'react-native';
import { Images } from '../../assets';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        shadowColor: 'rgba(0,0,0,.1)',
        shadowOpacity: 6,
      },
    }}>
      <Tab.Screen
        component={Home}
        name={ScreenNames.Home}
        options={{tabBarIcon: ({focused}) => (
            
          <View style={{marginTop: 10}}>
            <Image source={focused?Images.home:Images.homeg} style={{height: 20, width: 20}} resizeMode='contain'/>
          </View>
   ) }}
      />
      <Tab.Screen
        component={Saving}
        name={ScreenNames.Saving}
        options={{ tabBarIcon: ({focused}) => (
           
          <View style={{marginTop: 10}}>
            <Image source={focused? Images.savingb:Images.saving} style={{height: 20, width: 20}} resizeMode='contain'/>
          </View>
         
        ),}}
      />
      <Tab.Screen
      component={Add}
      name={ScreenNames.Add}
      options={{  tabBarIcon: ({focused}) => (
        
        <View style={{marginBottom:20}}>
          <Image
            source={Images.navbar}
            style={{height:85,aspectRatio: 1}}
            resizeMode='contain'
          />
        </View>
       
      ),}}
    />
       <Tab.Screen
        component={Setting}
        name={ScreenNames.Setting}
        options={{tabBarIcon: ({focused}) => (
           
          <View style={{marginTop: 10}}>
            <Image source={focused? Images.notificationb:Images.notification} style={{height: 20, width: 20}} resizeMode='contain'/>
          </View>
         
        ),}}
      />
       <Tab.Screen
        component={Notification}
        name={ScreenNames.Notify}
        options={{tabBarIcon: ({focused}) => (
           
          <View style={{marginTop: 10}}>
            <Image source={focused? Images.settingb:Images.setting} style={{height: 20, width: 20}} resizeMode='contain'/>
          </View>
         
        ),}}
      /> 
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
