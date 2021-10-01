import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from '../Styles/reviewForm';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    name : yup.string()
        .required()
        .min(3),
    age: yup.string()
        .required()
        .test('is-between-1-125', "Age must be within 1yr to 125 yrs", (val) => {
            return parseInt(val) > 0 && parseInt(val) <= 125;
        })
        ,
    rating: yup.string()
        .required()
        .test('is-between-1-5', "Rating must be within 1 to 5", (val) => {
            return parseInt(val) > 0 && parseInt(val) <= 5;
        })
        ,
    occupation : yup.string()
        .required()
        .min(3),


});

const ReviewForm = ({ addItems, modelling }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [rating, setRating] = useState();
    const [occupation, setOccupation] = useState('');
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
                <View style = {styles.formContainer}>
                    <Formik 
                        initialValues = {{name: '', age: '', rating: '', occupation: ''}}
                        validationSchema = {reviewSchema}
                        onSubmit = {(values, actions) => {
                            actions.resetForm();
                            addItems(values)
                            modelling(false)
                        }}                
                    >
                        {(props) => (
                            <View>
                                <TextInput 
                                    style = {styles.textInput}
                                    placeholder = "Enter the name"
                                    placeholderTextColor = '#a32cc4'
                                    keyboardType = "default"
                                    onChangeText = {props.handleChange('name')}
                                    value = {props.values.name}
                                    onBlur = {props.handleBlur('name')}
                                />
                                <Text style = {styles.errorMessage}> { props.touched.name && props.errors.name} </Text>
                                <TextInput 
                                    style = {styles.textInput}
                                    placeholder = "Enter the age"
                                    placeholderTextColor = '#a32cc4'
                                    keyboardType = 'number-pad'
                                    onChangeText = {props.handleChange('age')}
                                    value = {props.values.age}
                                    onBlur = {props.handleBlur('age')}
                                />
                                <Text style = {styles.errorMessage}> { props.touched.age && props.errors.age} </Text>
                                <TextInput 
                                    style = {styles.textInput}
                                    placeholder = "Enter the rating (1 - 5)"
                                    placeholderTextColor = '#a32cc4'
                                    keyboardType = 'number-pad'
                                    onChangeText = {props.handleChange('rating')}
                                    value = {props.values.rating}
                                    onBlur = {props.handleBlur('rating')}
                                />
                                <Text style = {styles.errorMessage}> { props.touched.rating && props.errors.rating} </Text>
                                <TextInput 
                                    multiline
                                    style = {{...styles.textInput, ...styles.textArea}}
                                    placeholder = "Enter the occupation"
                                    placeholderTextColor = '#a32cc4'
                                    keyboardType = "default"
                                    onChangeText = {props.handleChange('occupation')}
                                    value = {props.values.occupation}
                                    onBlur = {props.handleBlur('occupation')}
                                />
                                <Text style = {styles.errorMessage}> { props.touched.occupation && props.errors.occupation} </Text>
                                <TouchableOpacity 
                                    style = {styles.addButtonContainer} 
                                    onPress = {props.handleSubmit}>
                                    <Text style = {styles.addButtonText}>Add the Item</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default ReviewForm;

