import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
// import styles from './styles';
import strings from '../../utils/string';
import {ScreenNames} from '../../navigator/screenNames';
import {useNavigation} from '@react-navigation/native';
import {vh, vw} from '../../theme/dimensions';
import {Images} from '../../assets';
import {colors} from '../../theme';

const Home = () => {
  const navigation: any = useNavigation();

  const [selected, setSelected] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const wallet = [
    {
      price: '1,234',
      title: 'Total Salary',
    },
    {
      price: '334',
      title: 'Total Expense',
    },
    {
      price: '234',
      title: 'Total Monthly',
    },
    {
      price: '34',
      title: 'Total Weekly',
    },
  ];

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

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: vh(20),
          backgroundColor: 'white',
          paddingHorizontal: vh(20),
          paddingBottom: vh(20),
        }}>
        <Text style={{fontSize: vh(20), fontWeight: '500'}}>Overview</Text>
        <Image
          source={Images.user}
          style={{width: vw(40), height: vh(40)}}
          resizeMode="contain"
        />
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={wallet}
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
                {item.title==='Total Expense'?navigation.navigate(ScreenNames.Expense):navigation.navigate(ScreenNames.BottomTab)}
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
                ${item.title}
              </Text>

              <Text
                style={{
                  marginTop: vh(30),
                  color: selected === index ? 'white' : 'black',
                }}>
                ${item.price}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      <View
        style={{
          backgroundColor: 'white',
          marginTop: vh(20),
          borderBottomColor: '#B0B8BF',
          paddingVertical: vh(20),
          paddingBottom: vh(20),
          borderStartEndRadius: 10,
          borderStartStartRadius: 10,
        }}>
        <FlatList
          data={['Saving', 'Remind', 'Budget']}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.typeItem}
                onPress={() => {
                  setSelectedTab(index);
                }}>
                <View
                  style={[
                    styles.category,
                    {
                      backgroundColor:
                        selectedTab == index ? colors.main : colors.white,
                    },
                  ]}>
                  <Text
                    style={{
                      color: selectedTab == index ? 'white' : 'black',
                      fontWeight: '800',
                      fontSize: selectedTab == index ? 10 : 12,
                    }}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: vw(20),
          }}>
          <Text>Latest Entries</Text>
          <Image source={Images.option} style={{height:vh(24),width:vw(24)}} resizeMode='contain' />
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
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F6F7'},
  categoryItem: {
    height: vh(170),
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

  typeItem: {
    marginHorizontal: vw(12),
    marginTop: vh(25),
    paddingBottom: vh(10),
  },
  category: {
    backgroundColor: colors.white,
    width: vw(100),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: vh(20),
    paddingVertical: vw(15),
  },
});
