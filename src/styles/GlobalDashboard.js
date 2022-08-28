import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_COLOR} from './Constant';
const Styles = StyleSheet.create({
  wrapp: {
    flexDirection: 'column',
  },
  headerWrap: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerWrap2: {
    height: 100,
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerWrapConfirm: {
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerWrapScr: {
    height: 150,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  contentWrap: {
    flex: 3,
    backgroundColor: '#E5E5E5',
    flexDirection: 'column',
  },
  wrapperInput: {
    flex: 3,
    backgroundColor: '#E5E5E5',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapInput: {
    flex: 3,
    backgroundColor: '#E5E5E5',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    paddingVertical: 20,
    flexDirection: 'row',
  },
  inputWrapperZ: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  contentWrapIn: {
    flexDirection: 'row',
    paddingTop: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 60,
  },
  headerContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 20,
    // color: '#fff',
  },
  headerContent1: {
    flexDirection: 'row',
  },
  imageHeader: {
    paddingTop: 10,
    paddingRight: 20,
  },
  balance: {
    fontSize: 24,
    fontWeight: '700',
    paddingTop: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#EAEDFF',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 3,
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 27,
    paddingLeft: 27,
  },
  buttonText: {
    color: PRIMARY_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapMainContent: {
    flexDirection: 'column',
  },
  wrapMainText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  listImgName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContentInput: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    marginVertical: 5,
    flex: 1,
  },
  cardListContent: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    marginVertical: 5,
  },
  cardListImgName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrappListContent: {
    flexDirection: 'column',
    padding: 20,
  },
  amountList: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  wrapBtn: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapBtnFoot: {
    paddingRight: 20,
  },
  cardWrap: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  },
  noteTrans: {
    width: 310,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
  },
  // cardConfirm: {
  //   alignItems: 'center',
    
  // },
});

export default Styles;
