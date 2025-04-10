import React from 'react';
import {StyleSheet} from 'react-native';
import BaseButton, {BaseButtonProps} from './BaseButton';
import {AppText} from '../../core/AppText';
import {Colors} from '../../../theme/colors';

interface VariantButtonProps extends BaseButtonProps {
  variant: 'dark' | 'light' | 'disabled';
}

const textColor = {
  dark: Colors.white,
  light: Colors.gray800,
  disabled: Colors.white,
};

export default function VariantButton({variant, children, ...props}: VariantButtonProps) {
  const style = styles[variant];
  const textStyle = {color: textColor[variant], textAlign: 'center'} as const;

  return (
    <BaseButton style={style} {...props}>
      <AppText variant="body1Medium" style={textStyle}>
        {children}
      </AppText>
    </BaseButton>
  );
}

const styles = StyleSheet.create({
  dark: {
    backgroundColor: Colors.gray900,
  },
  light: {
    borderWidth: 1,
    borderColor: Colors.gray300,
  },
  disabled: {
    backgroundColor: Colors.gray300,
  },
});
