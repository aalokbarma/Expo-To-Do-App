import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../Styles/reviewDetails';

const ReviewDetails = ({route, navigation }) => {
    const {item} = route.params;
    return (
        <View style = {styles.reviewContainer}>
            <Text style = {styles.detailText}>Full Name: {item.name}</Text>
            <Text style = {styles.detailText}>Age: {item.age}</Text>
            <Text style = {styles.detailText}>Occupation: {item.occupation}</Text>
            <Text style = {styles.detailText}>Rating: {item.rating}</Text>
            {/* <TouchableOpacity style = {styles.reviewButtonTouch} onPress = {() => navigation.navigate('Home')}>
                <Text style = {styles.buttonText}>Home</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default ReviewDetails
