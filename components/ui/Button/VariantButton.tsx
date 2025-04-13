import React, {useMemo} from 'react';
import BaseButton, {BaseButtonProps} from './BaseButton';
import {AppText} from '../../core/AppText';
import {useTheme} from '../../../context/ThemeContext';

interface VariantButtonProps extends BaseButtonProps {
  variant: 'dark' | 'light' | 'disabled';
}

export default function VariantButton({
  variant,
  children,
  ...props
}: VariantButtonProps) {
  const {style, textStyle} = useButtonStyles();

  const customTextStyles = useMemo(
    () => ({color: textStyle[variant], textAlign: 'center'} as const),
    [textStyle, variant],
  );

  return (
    <BaseButton style={style[variant]} {...props}>
      <AppText variant="body1Medium" style={customTextStyles}>
        {children}
      </AppText>
    </BaseButton>
  );
}

const useButtonStyles = () => {
  const {colors} = useTheme();

  const style = useMemo(
    () => ({
      dark: {
        backgroundColor: colors.gray900,
      },
      light: {
        borderWidth: 1,
        borderColor: colors.gray300,
      },
      disabled: {
        backgroundColor: colors.gray300,
      },
    }),
    [colors],
  );

  const textStyle = useMemo(
    () => ({
      dark: colors.white,
      light: colors.gray800,
      disabled: colors.white,
    }),
    [colors],
  );

  return {style, textStyle};
};
