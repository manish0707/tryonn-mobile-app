// src/components/AppText.tsx

import React from 'react';
import {Text, TextProps, StyleProp, TextStyle} from 'react-native';
import {TextVariants} from '../../theme/typography';
import {Colors} from '../../theme/colors';
import {TextVariant} from '../../types';

interface AppTextProps extends TextProps {
  variant?: TextVariant;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const AppTextComponent: React.FC<AppTextProps> = ({
  variant = 'body1',
  color = Colors.textPrimary,
  style,
  children,
  ...rest
}) => {
  const variantStyle = TextVariants[variant];

  return (
    <Text style={[variantStyle, {color}, style]} {...rest}>
      {children}
    </Text>
  );
};

export const AppText = React.memo(AppTextComponent);
