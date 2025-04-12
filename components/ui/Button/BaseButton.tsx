import React, {memo, ReactNode} from 'react';
import {
  ViewStyle,
  StyleProp,
  StyleSheet,
  Pressable,
  PressableProps,
} from 'react-native';
import {Spacing} from '../../../theme/spacing';
import {Radius} from '../../../theme/radius';

export interface BaseButtonProps extends PressableProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

function BaseButton({children, style, ...props}: BaseButtonProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        pressed ? styles.pressed : {},
        style,
      ]}
      {...props}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
    borderRadius: Radius.md,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default memo(BaseButton);
