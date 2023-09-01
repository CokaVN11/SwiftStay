import { StyleSheet } from 'react-native';
import { colors } from '../theme';

export const general = StyleSheet.create({
  page_container: {
    // margin top for status bar
    backgroundColor: colors.background,
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 32
  }
});