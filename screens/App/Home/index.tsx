import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../../redux/hooks';
import {logout} from '../../../redux/slices/authSlice';

export default function Home() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Text>Home</Text>

      <Pressable onPress={handleLogout}>
        <Text>Logout Button</Text>
      </Pressable>
    </View>
  );
}
