/* eslint-disable prettier/prettier */
import {Dimensions, Platform} from 'react-native';
export const isIphoneX = (): boolean => {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        (dimen.height === 780 ||
            dimen.width === 780 ||
            dimen.height === 812 ||
            dimen.width === 812 ||
            dimen.height === 844 ||
            dimen.width === 844 ||
            dimen.height === 852 ||
            dimen.width === 852 ||
            dimen.height === 896 ||
            dimen.width === 896 ||
            dimen.height === 926 ||
            dimen.width === 926 ||
            dimen.height === 932 ||
            dimen.width === 932
        )
    );
};
export const ifIphoneX = (iPhoneXHeight: number, iPhoneNormalHeight: number): number => {
    return isIphoneX() ? iPhoneXHeight : iPhoneNormalHeight;
};
