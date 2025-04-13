import {View, Text} from 'react-native';
import React from 'react';
import VariantButton from '../../../components/ui/Button/VariantButton';

export default function Onboarding() {
  return (
    <View style={{marginTop: 100, padding: 10}}>
      <Text>Onboarding</Text>
      <VariantButton variant="dark">
        First Button
      </VariantButton>
    </View>
  );
}
