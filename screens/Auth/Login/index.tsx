import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../../redux/hooks';
import { loginSuccess } from '../../../redux/slices/authSlice';

export default function Login() {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(loginSuccess({user: {name: 'Jhon Doe', email: 'jhon@email.com'}}));
  };

  return (
    <View>
      <Text>Login</Text>

      <Pressable onPress={handleLogin}>
        <Text>Login Button</Text>
      </Pressable>
    </View>
  );
}
