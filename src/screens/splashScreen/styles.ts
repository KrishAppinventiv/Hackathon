import {StyleSheet} from 'react-native';
import {colors, dimension} from '../../theme';
import { vh, vw } from '../../theme/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_1: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageStyle: {
    height: vh(140),
    width: vw(140),
  },
});
