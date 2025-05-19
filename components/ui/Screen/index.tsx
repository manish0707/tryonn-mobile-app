import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';

import {Spacing} from '../../../theme/spacing';
import {useTheme} from '../../../context/ThemeContext';

interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  statusBarStyle?: 'light-content' | 'dark-content';
}

export const Screen: React.FC<ScreenProps> = ({
  children,
  style,
  statusBarStyle = 'dark-content',
}) => {
  const {colors} = useTheme();

  return (
    <>
      <SafeAreaView
        style={[styles.container, {backgroundColor: colors.white}]}
      />
      <StatusBar barStyle={statusBarStyle} backgroundColor={colors.white} />
      <View style={[styles.wrapper, {backgroundColor: colors.white}, style]}>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 0},
  wrapper: {flex: 1, paddingHorizontal: Spacing.md},
});
