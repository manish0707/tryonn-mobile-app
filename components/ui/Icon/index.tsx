import React from 'react';
import {SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  source: React.FC<SvgProps>;
}

export default function Icon({source: Source, ...props}: Props) {
  return <Source {...props} />;
}
