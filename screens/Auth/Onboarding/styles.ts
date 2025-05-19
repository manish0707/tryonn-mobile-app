import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {flex: 1, paddingHorizontal: 20},
  heading: {lineHeight: 40 * 1.6},
  image: {position: 'absolute', width: width + 25},
  footer: {borderTopWidth: 1, paddingHorizontal: 20, paddingVertical: 20},
});
