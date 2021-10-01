import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../Styles/aboutScreen';

const AboutScreen = () => {
    return (
        <View style = {styles.aboutContainer}>
            <ScrollView>
                <View style = {styles.aboutContentContainer}>
                    <View style = {styles.aboutTextContainer}>
                        <Text style = {styles.aboutText}>This is About page of our To Do App. This is a beautiful app for marking or adding data of persons. The data are their name, age, their occupation and how much you rate them on 1 to 5 scale.</Text>
                        <Text style = {styles.aboutText}>In this app A very delightful stack navigation and drawer navigation is used. Here you can easily add and delete data of your choice. You can also view the whole data by simply clicking on the name of the user.</Text>
                        <Text style = {styles.aboutText}>Here at the top there is a button which on clicked opens a model where you can simply fill the data of your choice. But be careful, because in the form there is also a form validation made with formik and yup. After filling correct data just simply click the submit button and Boom!! your new person is added.</Text>
                        <Text style = {styles.aboutText}>It's this simple!!</Text>
                        <Text style = {styles.aboutText}>Thanks   : )</Text>
                    </View>
                    <View style = {styles.aboutFooterContainer}>
                        <Text style = {styles.aboutFooter}> © Copyright 2021 Aalok Barma</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default AboutScreen;
