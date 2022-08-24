import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_COLOR} from './constant';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    height: 210,
  },
  content: {
    elevation: 3,
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  textTittle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3D42',
  },
  text: {
    fontSize: 16,
    color: 'rgba(58, 61, 66, 0.6)',
    textAlign: 'center',
    paddingTop: 20,
  },
  wrappContent: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 40,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    width: (Dimensions.get('screen').width * 90) / 100,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
  },
});

export default styles;