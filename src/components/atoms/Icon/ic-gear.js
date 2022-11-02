import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../utils';

const IconGear = ({filled, size, color}) => {
  const actualSize = size ? size : '24';
  let actualColor = color ? color : colors.text.secondary;

  if (filled === true) {
    actualColor = color ? color : colors.primary;

    return (
      <Svg
        width={actualSize}
        height={actualSize}
        viewBox="0 0 512 512"
        fill={actualColor}>
        <Path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" />
        <Path d="M360 94.59V296M443.13 212.87L296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87L360 216" />
      </Svg>
    );
  }

  return (
    <Svg
      width={actualSize}
      height={actualSize}
      viewBox="0 0 512 512"
      stroke={actualColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32">
      <Path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" />
        <Path d="M360 94.59V296M443.13 212.87L296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87L360 216" />
    </Svg>
  );
};

export default IconGear;
