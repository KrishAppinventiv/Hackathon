import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Images} from '../assets';
import { vh, vw } from '../theme/dimensions';



const Entries = () => {
  const entry = [
    {
      Image: Images.food,
      title: 'Food',
      date: '20 Feb 2024',
      way: 'Google Pay',
      vat: 0.5,
      dollar: 20,
      market: '+',
    },
    {
      Image: Images.uber,
      title: 'Uber',
      date: '13 Mar 2024',
      way: 'Cash',
      vat: 0.8,
      dollar: 18,
      market: '-',
    },
    {
      Image: Images.shopping,
      title: 'Shopping',
      date: '11 Mar 2024',
      way: 'Paytm',
      vat: 0.12,
      dollar: 400,
      market: '-',
    },
  ];
  return <FlatList data={entry} renderItem={({item, index})=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal: vw(10),marginVertical:vh(10),marginTop:vh(30)}}>

            <View style={{flexDirection:'row'}}>
              <View style={{height:vh(40),width:vw(40),backgroundColor:'#EBEEF0',justifyContent:'center',alignItems:'center',borderRadius:5}}>
                <Image source={item.Image} style={{height:vh(25),width:vw(25)}}/>
              </View>
              <View>
                <Text>{item.title}</Text>
                <Text>{item.date}</Text>
              </View>
            </View>
            <View>
                <Text>{item.market} ${item.dollar} + Vat {item.vat}%</Text>
                <Text>{item.way}</Text>

            </View>

        </View>
    )
  }}/>
};

export default Entries;

const styles = StyleSheet.create({});
