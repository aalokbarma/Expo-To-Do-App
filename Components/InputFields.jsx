import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, Modal } from 'react-native'
import styles from '../Styles/inputFields';
import { Entypo, MaterialIcons } from '@expo/vector-icons'; 
import uuid from 'react-native-uuid';
import ReviewForm from '../Screens/ReviewForm';
import headerStyles from '../Styles/header';

const InputFields = ({addItem, addItems, openModal}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const modelling = (val) => {
        setModalOpen(val);
    }

    const id = uuid.v1();

    const [name, setName ] = useState('');
    const [age, setAge ] = useState();
    const [rating, setRating ] = useState();
    const [occupation, setOccupation ] = useState('');
    const [name1, setName1] = useState('')
    const [age1, setAge1] = useState()
    const [rating1, setRating1] = useState()
    const [occupation1, setOccupation1] = useState('')

    return (
        <TouchableWithoutFeedback onPress = {() => {
            Keyboard.dismiss();
        }}>
            <View style = {styles.inputFieldContainer}>

            <Modal visible={modalOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <View style = {headerStyles.headerContainer}>
                            <View style = {headerStyles.headerTecxtContainer}>
                                <Text style = {headerStyles.headerText}>Add Item Form</Text>
                            </View>
                            <MaterialIcons 
                            name='close'
                            size={30} 
                            style={{...styles.modalToggle, ...styles.modalClose}} 
                            onPress={() => setModalOpen(false)} 
                            />
                        </View>
                        <ReviewForm addItems = {addItems} modelling = {modelling} />
                    </View>
                    </TouchableWithoutFeedback>
            </Modal>
                {/* <TextInput 
                    style = {styles.textInput}
                    placeholder = "Please enter the name"
                    placeholderTextColor = '#a32cc4'
                    keyboardType = "default"
                    onChangeText = {(val) =>{ 
                        if(val.length >= 3){
                            setName(val)}
                            else{
                                setName('')
                            }
                        }
                        }
                    // value = {name1}
                />
                <TextInput 
                    style = {styles.textInput}
                    placeholder = "Please enter the age"
                    placeholderTextColor = '#a32cc4'
                    keyboardType = 'number-pad'
                    onChangeText = {(val) => {
                        if(val != 0 && val <= 125 ){
                            setAge(val)
                        }
                        else{
                            setAge()
                        }
                        }}
                    // value = {age1}
                />
                <TextInput 
                    style = {styles.textInput}
                    placeholder = "Please enter the rating (1 - 5)"
                    placeholderTextColor = '#a32cc4'
                    keyboardType = 'number-pad'
                    onChangeText = {(val) => {
                        if(val > 0 && val <= 5){
                            setRating(val)
                        }
                        else {
                            setRating()
                        }
                        }}
                    // value = {rating1}
                />
                <TextInput 
                    style = {styles.textInput}
                    placeholder = "Please enter the occupation"
                    placeholderTextColor = '#a32cc4'
                    keyboardType = "default"
                    onChangeText = {(val) =>{ 
                        if(val.length >= 3){
                            setOccupation(val)}
                            else {
                                setOccupation('')
                            }
                        }
                        }
                    // value = {occupation1}
                /> */}
                {/* <TouchableWithoutFeedback onPress = {() => {
                        Keyboard.dismiss();
                    }}> */}
                    <TouchableOpacity 
                        style = {styles.addButtonContainer} 
                        onPress = {() => {
                            // if(name && age && rating && occupation){
                            //     addItem({name, age, rating, occupation, id : id});
                            // } else {
                            //     Alert.alert(
                            //     "Error!",
                            //     "Please verify and enter the correct data.",
                            //     [
                            //         { text: "OK" }
                            //     ],
                            //     { cancelable: false }
                            //     );
                            //     // console.log(name, age, rating, occupation, id)
                            // }
                            // Keyboard.dismiss();
                            // setName('');
                            // setAge();
                            // setRating();
                            // setOccupation('');

                            setModalOpen(true)
                        }
                        }>
                        <Entypo name="plus" size={25} color="white" />
                        <Text style = {styles.addButtonText}>Add new Item</Text>
                    </TouchableOpacity>
                {/* </TouchableWithoutFeedback> */}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default InputFields;
