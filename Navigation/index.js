import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import ReviewDetails from '../Screens/ReviewDetails';
import About from '../Screens/AboutScreen';

const Navigation = () => {

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    const HomeStack = () => {
        return(
            <Stack.Navigator initialRouteName = 'Home' screenOptions={{
                headerShown: false
              }}>
                <Stack.Screen
                    name = "Home" 
                    component = {HomeScreen}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#51087e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} 
                    
                />
                <Stack.Screen name = "Review" component = {ReviewDetails} />
                
                {/* {props => <HomeScreen {...props} extraData={someData} />} */}
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator >
                <Drawer.Screen name = "HomeStack" component = {HomeStack} options = {{
                    title: 'To-Do-App',
                    headerStyle: {
                        backgroundColor: '#51087e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
                <Drawer.Screen name = "About" component = {About} options = {{
                    title: 'About',
                    headerStyle: {
                        backgroundColor: '#51087e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
            </Drawer.Navigator>

            {/* <Stack.Navigator initialRouteName = 'Home'>
                <Stack.Screen
                    name = "Home" 
                    component = {HomeScreen}
                    options={{
                        title: 'To-Do-App',
                        headerStyle: {
                            backgroundColor: '#51087e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} 
                />
                <Stack.Screen name = "Review" component = {ReviewDetails} />
            </Stack.Navigator> */}
            {/* <HomeStack /> */}
        </NavigationContainer>
    )
}

export default Navigation;
