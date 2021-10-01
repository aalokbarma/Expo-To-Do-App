import React, { useState } from 'react'
import { View, Text, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../Components/Header';
import InputField from '../Components/InputFields';
import ListItem from '../Components/ListItem';
import styles from '../Styles/homeScreen';
import uuid from 'react-native-uuid';


const HomeScreen = ({ navigation }) => {

    const [openModal, setOpenModal] = useState(true)

    const [items, setItem] = useState([
       { name: 'Aalok Barma', age: 20, rating: 5, occupation: 'Web Developer', key: 1, id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba'},
       { name: 'Suraj Kumar Burman', age: 22, rating: 5, occupation: 'Stack Developer', key: 2, id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63'},
       { name: 'Bishal Pandey', age: 19, rating: 4, occupation: 'Student', key: 3, id: '58694a0f-3da1-471f-bd96-145571e29d72'},
    ])

    const addItems = (item) => {
        item.id = uuid.v1();
        setItem((currentItems) => {
            return [ item, ...currentItems]
        })
        setOpenModal(false);
    }

    const deleteItem = (id) => {
        setItem((prevItem) => {
            return (
                prevItem.filter(todo => todo.id != id)
            )
        })
    }

    const addItem = ({name, age, rating, occupation, id}) => {
        setItem((prevItem) => {
            return[
                ...prevItem, {name: name, age: age, rating: rating, occupation: occupation, id: id}
            ]
        })
    }

    return (
        <TouchableWithoutFeedback>
            <View style = {styles.homeContainer}>
                <InputField addItem = {addItem} addItems = {addItems} openModal = {openModal} />
                <FlatList
                    data = {items}
                    renderItem = {({item}) => <ListItem navigation = {navigation} deleteItem = {deleteItem} item = {item} />}
                    style = {styles.lists}    
                    keyExtractor = {(item) => item.id}
                />
                
            </View>
        </TouchableWithoutFeedback>
    )
}

export default HomeScreen;
