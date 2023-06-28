/* eslint-disable prettier/prettier */
import {Dimensions, Platform, StatusBar} from 'react-native';
import { ifIphoneX, isIphoneX } from '../utils/dimensions';
const Sizes = {
    srcWidth: Dimensions.get('window').width,
    scrHeight:Dimensions.get('window').height,
    statusHeight: Platform.select({
        ios: ifIphoneX(47,20),
        android: StatusBar.currentHeight,
        default: 0,
    }),
    bottomSpace: isIphoneX() ? 34 : 0,
};
export default Sizes;
