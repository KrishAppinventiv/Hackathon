import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {vh, vw} from '../../theme/dimensions';
import {Images} from '../../assets';
import {colors} from '../../theme';
import { ScreenNames } from '../../navigator/screenNames';

const Add = () => {
  const [selected, setSelected] = useState(0);
  const navigation = useNavigation();

  const change=()=>{
    
  }

  const entry = [
    {
      Image: Images.salary,
      title: 'Salary',
      date: '20 Feb 2024',
      way: 'Google Pay',
      vat: 0.5,
      dollar: 20,
      market: '+',
    },
    {
      Image: Images.cashback,
      title: 'Cashback',
      date: '13 Mar 2024',
      way: 'Cash',
      vat: 1,
      dollar: 1400,
      market: '-',
    },
    {
      Image: Images.prize,
      title: 'Price Money',
      date: '03 Jun 2024',
      way: 'Paytm',
      vat: 1,
      dollar: 120,
      market: '-',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={{width: vw(22), height: vh(22)}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Images.back} />
          </TouchableOpacity>
        </View>

        <Text
          style={{fontSize: vh(22), fontWeight: '500', alignSelf: 'center'}}>
          Add
        </Text>
      </View>

      <View style={{flex:0.4}}>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={['Income', 'Expense']}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                styles.categoryItem,
                {backgroundColor: selected === index ? colors.main : 'white'},
              ]}
              onPress={() => {
                setSelected(index);
                index===0?navigation.navigate(ScreenNames.Addincome):navigation.navigate(ScreenNames.Addexpense)
              }}>
              <Image
                source={Images.wallet}
                style={{
                  width: vw(22),
                  height: vh(18),
                  tintColor: selected === index ? 'white' : 'black',
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginTop: vh(10),
                  fontSize: 11,
                  color: selected === index ? 'white' : 'black',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

</View>

      <View
        style={{
          backgroundColor: 'white',
          marginTop: vh(20),
          borderBottomColor: '#B0B8BF',
          paddingVertical: vh(20),
          paddingBottom: vh(20),
          borderStartEndRadius: 10,
          borderStartStartRadius: 10,
          flex:0.9
          
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: vw(20),
          }}>
          <Text>Latest Entries</Text>
          <Image
            source={Images.option}
            style={{height: vh(24), width: vw(24)}}
            resizeMode="contain"
          />
        </View>

        <FlatList
          data={entry}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: vw(10),
                  marginVertical: vh(10),
                  marginTop: vh(30),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      height: vh(40),
                      width: vw(40),
                      backgroundColor: '#EBEEF0',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                      marginRight: vw(10),
                    }}>
                    <Image
                      source={item.Image}
                      style={{height: vh(25), width: vw(25)}}
                    />
                  </View>
                  <View>
                    <Text>{item.title}</Text>
                    <Text
                      style={{
                        color: '#6B7580',
                        fontSize: 12,
                        marginTop: vh(5),
                      }}>
                      {item.date}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text>
                    {item.market} ${item.dollar} + Vat {item.vat}%
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'flex-end',
                      color: '#6B7580',
                      fontSize: 12,
                      marginTop: vh(5),
                    }}>
                    {item.way}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  head: {
    paddingTop: vh(30),
    backgroundColor: 'white',
    paddingHorizontal: vh(20),
    paddingBottom: vh(15),
    flex:0.1
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  categoryItem: {
    height: vh(120),
    width: vw(120),
    padding: 10,
    borderRadius: 10,
    paddingStart: vw(20),
    margin: 10,
    shadowColor: 'rgba(0,0,0,.3)',
    shadowOpacity: 6,
    justifyContent: 'center',

    marginTop: 20,
    backgroundColor: 'white',
  },
});
