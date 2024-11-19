import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {ScreenNames} from './screenNames';
import BottomTabNavigator from './bottomtab';
import SplashScreen from '../screens/splashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Tutorial from '../screens/tutorial';
import Signin from '../screens/signin';
import Signup from '../screens/signup';
import Expense from '../screens/expense';
import Addincome from '../screens/addincome';
import Addexpense from '../screens/addexpense';

const Stack: any = createNativeStackNavigator();

const RootNavigator = () => {
  const navigationRef: any = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          component={SplashScreen}
          name={ScreenNames.Splash}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          component={BottomTabNavigator}
          name={ScreenNames.BottomTab}
          options={{headerShown: false}}
        />
          <Stack.Screen
          component={Tutorial}
          name={ScreenNames.Tutorial}
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={Signin}
          name={ScreenNames.SignIn}
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={Signup}
          name={ScreenNames.Signup}
          options={{headerShown: false}}
        />

<Stack.Screen
          component={Expense}
          name={ScreenNames.Expense}
          options={{headerShown: false}}
        />

<Stack.Screen
          component={Addincome}
          name={ScreenNames.Addincome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Addexpense}
          name={ScreenNames.Addexpense}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
