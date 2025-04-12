import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import {AuthStackParamsList} from '../types';

const AuthNavigationStack = createNativeStackNavigator<AuthStackParamsList>();

export default function AuthStack() {
  return (
    <AuthNavigationStack.Navigator>
      <AuthNavigationStack.Screen name="Login" component={Login} />
    </AuthNavigationStack.Navigator>
  );
}
