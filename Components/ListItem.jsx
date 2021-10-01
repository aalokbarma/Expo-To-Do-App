import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from '../Styles/listItem';
import { AntDesign } from '@expo/vector-icons'; 

const ListItem = ({item, deleteItem, navigation}) => {



    return (
        <View style = {styles.listItemContainer}>
            <TouchableOpacity onPress = {() => navigation.navigate('Review', {item: item})}>
                <Text style = {styles.listItemText} >{item.name}</Text>
            </TouchableOpacity>
            {/* <Text style = {styles.listItemText} >{item.id}</Text> */}
            <TouchableOpacity onPress = { () =>  deleteItem(item.id)}>
                <AntDesign name="delete" size={25} color="red" />
            </TouchableOpacity>
        </View>
    )
}

export default ListItem;
