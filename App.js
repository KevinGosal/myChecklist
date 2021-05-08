import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router'
//Kevin
const App = () => {
    return(
        <NavigationContainer>
            <Router/>
        </NavigationContainer>
    );
};
//Fanuel
console.log("lapar");

export default App;