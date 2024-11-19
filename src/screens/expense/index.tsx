import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { vh, vw } from '../../theme/dimensions'
import { Images } from '../../assets'
import { Calendar } from 'react-native-calendars'
import { colors } from '../../theme'
import Entries from '../../components/entries'
import { useNavigation } from '@react-navigation/native'


const Expense = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [expenseDate, setExpensedate] = useState('');
    const [category, setCategory] = useState('Spends');

    const navigation = useNavigation();
    const onDateSelect = day => {
        setSelectedDate(day.dateString);
       
      };

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
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingTop:vh(20),backgroundColor:'white',paddingHorizontal:vh(20),paddingBottom:vh(15),flex:0.1}}>
      <View style={{width:vw(22),height:vh(22)}}>
        <TouchableOpacity onPress={() =>navigation.goBack()}>
        <Image source={Images.back}/>
        </TouchableOpacity>
      </View>
      
     <Text style={{fontSize:vh(22),fontWeight:'500',alignSelf:'center'}}>Total Expenses</Text>
      
        
      </View>
      

      <View style={styles.calendar}>
              <Calendar
                onDayPress={onDateSelect}
                markedDates={{
                  [selectedDate]: {
                    selected: true,
                    marked: true,
                    selectedColor: colors.main,
                  },
                }}
                style={styles.calendarstyle}
              /></View>
<View style={{flex:0.3}}>
              <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
                <Image source={Images.circle}/>
                <Text style={{position:'absolute',fontSize:24,fontWeight:'500',color:'white'}}>$1600</Text>
              </View>

              <Text style={{alignSelf:'center',marginTop:vh(20)}}>You have spend total 60% of you budget</Text>
              </View>
              <View style={{backgroundColor:'white',flex:.5,marginTop:vh(20),borderBottomColor:'#B0B8BF',paddingVertical:vh(20),paddingBottom:vh(20),}}>
                
                    <View style={{flexDirection:'row'}}>
                    <View style={{width:'50%',justifyContent:'center',alignItems:'center',borderBottomWidth:2,borderBottomColor:category==='Spends'?colors.main:'white',paddingBottom:vh(10)}}>
                        <TouchableOpacity onPress={() =>setCategory('Spends')}>
                    <Text>Spends</Text>
                    </TouchableOpacity></View>
                    
              
             <View style={{width:'50%',justifyContent:'center',alignItems:'center',borderBottomWidth:2,borderBottomColor:category==='Category'?colors.main:'white',paddingBottom:vh(10)}}>
                <TouchableOpacity onPress={() =>setCategory('Category')}>
                 <Text>Categories</Text>
                 </TouchableOpacity></View>
                
                 </View>

                 {
                    category==='Spends'?
                    <FlatList scrollEnabled={false} data={entry} renderItem={({item, index})=>{
                        return(
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal: vw(10),marginVertical:vh(10),marginTop:vh(30)}}>
                    
                                <View style={{flexDirection:'row'}}>
                                  <View style={{height:vh(40),width:vw(40),backgroundColor:'#EBEEF0',justifyContent:'center',alignItems:'center',borderRadius:10,marginRight:vw(10)}}>
                                    <Image source={item.Image} style={{height:vh(25),width:vw(25)}}/>
                                  </View>
                                  <View>
                                    <Text>{item.title}</Text>
                                    <Text style={{color:'#6B7580',fontSize:12,marginTop:vh(5)}}>{item.date}</Text>
                                  </View>
                                </View>
                                <View>
                                    <Text>{item.market} ${item.dollar} + Vat {item.vat}%</Text>
                                    <Text style={{alignSelf:'flex-end',color:'#6B7580',fontSize:12,marginTop:vh(5)}}>{item.way}</Text>
                    
                                </View>
                    
                            </View>
                        )
                      }}/>:<View>
                          
                            <View style={{backgroundColor:'#F5F6F7',margin:40,height:vh(244),borderRadius:20,justifyContent:'center',alignItems:'center'}}>

                                <Image source={Images.chart}/>
                            </View>

                        </View>
                 }

                 </View>
                 
               
              </ScrollView>
    </SafeAreaView>
  )
}

export default Expense

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#F5F6F7'
    },
    calendarstyle: {
        borderRadius: 10,
       
        
      },
      calendar: {
        padding: 30,
        flex:0.3
       
        
      },
})