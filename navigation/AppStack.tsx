import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/App/Home';
import {AppStackParamsList} from '../types';

const AppNavigationStack = createNativeStackNavigator<AppStackParamsList>();

export default function AppStack() {
  return (
    <AppNavigationStack.Navigator>
      <AppNavigationStack.Screen name="Home" component={Home} />
    </AppNavigationStack.Navigator>
  );
}
