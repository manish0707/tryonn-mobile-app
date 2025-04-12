import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';

const AuthNavigationStack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <AuthNavigationStack.Navigator>
      <AuthNavigationStack.Screen name="Login" component={Login} />
    </AuthNavigationStack.Navigator>
  );
}
