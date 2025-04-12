import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/App/Home';

const AppNavigationStack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <AppNavigationStack.Navigator>
      <AppNavigationStack.Screen name="Home" component={Home} />
    </AppNavigationStack.Navigator>
  );
}
