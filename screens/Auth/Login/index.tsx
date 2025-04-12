import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../../redux/hooks';
import {loginSuccess} from '../../../redux/slices/authSlice';
import {Navigation} from '../../../types';

type Props = {
  navigation: Navigation;
};

export default function Login({navigation}: Props) {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(loginSuccess({user: {name: 'Jhon Doe', email: 'jhon@email.com'}}));
    // navigation.navigate('AppStack', {screen: 'Home'});
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
