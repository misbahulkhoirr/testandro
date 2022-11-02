import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../utils';

const IconTeam = ({filled, size, color}) => {
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
        <Path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" />
        <Path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" />
        <Path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" />
        <Path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" />
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
      <Path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM128 166c0-8.838 7.164-16 16-16h53.1V96c0-8.838 7.164-16 16-16h52c8.836 0 16 7.162 16 16v54H336c8.836 0 16 7.162 16 16v52c0 8.836-7.164 16-16 16h-54V288c0 8.836-7.164 16-16 16h-52c-8.836 0-16-7.164-16-16V234H144c-8.836 0-16-7.164-16-16V166zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z" />
    </Svg>
  );
};

export default IconTeam;
