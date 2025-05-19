import React from 'react';
import {Image, Platform} from 'react-native';
import VariantButton from '../../../components/ui/Button/VariantButton';
import {Screen} from '../../../components/ui/Screen';
import {AppText} from '../../../components/core/AppText';
import AppView from '../../../components/core/AppView';
import {styles} from './styles';
import {useTheme} from '../../../context/ThemeContext';
import {Images} from '../../../assets/images';

const IMAGE_OVERLAP_TOP = Platform.OS === 'android' ? 55 : 50;

export default function Onboarding() {
  const {colors} = useTheme();

  return (
    <Screen style={{paddingHorizontal: 0}}>
      <AppView style={styles.wrapper}>
        <AppText
          style={[styles.heading]}
          variant="h1"
          numberOfLines={4}
          allowFontScaling={false}>
          Define yourself in your unique way.
        </AppText>

        <Image
          source={Images.onboarding}
          resizeMode="contain"
          style={[styles.image, {top: IMAGE_OVERLAP_TOP}]}
        />
      </AppView>
      <AppView
        style={[
          styles.footer,
          {backgroundColor: colors.white, borderColor: colors.gray200},
        ]}>
        <VariantButton variant="dark">Get Started</VariantButton>
      </AppView>
    </Screen>
  );
}
