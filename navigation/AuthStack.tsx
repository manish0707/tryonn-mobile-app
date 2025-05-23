import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import {AuthStackParamsList} from '../types';
import Onboarding from '../screens/Auth/Onboarding';

const AuthNavigationStack = createNativeStackNavigator<AuthStackParamsList>();

export default function AuthStack() {
  return (
    <AuthNavigationStack.Navigator>
      <AuthNavigationStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{header: () => null}}
      />
      <AuthNavigationStack.Screen name="Login" component={Login} />
    </AuthNavigationStack.Navigator>
  );
}
