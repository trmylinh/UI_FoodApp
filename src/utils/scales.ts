/* eslint-disable prettier/prettier */
import Config from 'react-native-config';

import SIZES from '../themes/sizes';

export const scales = (size: number): number =>{
    // eslint-disable-next-line radix
    return (size * SIZES.srcWidth) / parseInt(Config.WIDTH_DESIGN!);
};

export const scaleDefault = (size: number): number  => {
    return (size * SIZES.srcWidth) / 375;
};
