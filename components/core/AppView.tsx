import {View, ViewProps} from 'react-native';
import React from 'react';

interface Props extends ViewProps {}

export default function AppView(props: Props) {
  return <View {...props}>{props.children}</View>;
}
