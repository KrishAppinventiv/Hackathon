import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import { vh, vw } from '../../theme/dimensions'
import { Calendar } from 'react-native-calendars'
import { colors } from '../../theme'

const Addexpense = () => {

    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState('');
  const [expenseDate, setExpensedate] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleTextChange = (text, field) => {
    if (field === 'title') {
      setTitle(text);
    } else if (field === 'amount') {
      setAmount(text);
    }
  };

  const onDateSelect = day => {
    setSelectedDate(day.dateString);
  };
  return (
   <SafeAreaView style={styles.container}>
       <View style={styles.head}>
        <View style={{width: vw(22), height: vh(22)}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Images.back} />
          </TouchableOpacity>
        </View>

        <Text
          style={{fontSize: vh(22), fontWeight: '500', alignSelf: 'center'}}>
          Add Expenses
        </Text>
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
        />
      </View>


      <View>
          
          <View style={{alignItems: 'center'}}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Expenses Title"
                style={styles.input}
                value={title}
                onChangeText={text => handleTextChange(text, 'title')}
              />
            </View>

            <View style={styles.inputContainer1}>
              <View style={styles.passwordContain}>
                <TextInput
                  placeholder="Amount"
                  style={styles.input}
                  value={amount}
                  onChangeText={text => handleTextChange(text, 'amount')}
                />
                <TouchableOpacity>
                  <Image source={Images.dollar} style={styles.img2} resizeMode='contain'/>
                </TouchableOpacity>
              </View>
            </View>
          </View>



        </View>

        <TouchableOpacity style={{ alignSelf:'center',marginTop:vh(20),backgroundColor:colors.main,paddingVertical:10,paddingHorizontal:vw(50),borderRadius:10}}>
            <Text style={{color:'white'}}>ADD EXPENSES</Text>
        </TouchableOpacity>


   </SafeAreaView>
  )
}

export default Addexpense

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F5F6F7'
    },
    head: {
        paddingTop: vh(30),
        backgroundColor: 'white',
        paddingHorizontal: vh(20),
        paddingBottom: vh(15),
       
      },

      calendarstyle: {
        borderRadius: 10,
      },
      calendar: {
        padding: 30,
        
      },
      inputContainer: {
        padding: 5,
        width: vw(310),
        borderRadius: 7,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 25,
      },
    
      inputContainer1: {
        padding: 5,
        width: vw(310),
        borderRadius: 7,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
      },
      img2: {
        height: 16,
        width: 16,
        marginEnd: 10,
        alignItems: 'center',
      },
      input: {
        alignItems: 'center',
        padding: 10,
        color: 'black',
      },
      passwordContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    
})