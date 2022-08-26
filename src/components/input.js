import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({
  placeholder,
  icon,
  type,
  scure,
  onChange,
  value,
  defaultValue,
}) => {
  const [showText, setShow] = React.useState(false);
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <Icon name={icon} size={20} color="#A9A9A9" />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={placeholder}
          keyboardType={type}
          secureTextEntry={!showText}
          onChangeText={onChange}
          value={value}
        />
      </View>
      {scure && (
        <TouchableOpacity onPress={() => setShow(!showText)}>
          <View style={styles.iconWrapper}>
            <Icon
              name={showText ? 'eye-slash' : 'eye'}
              size={20}
              color="#A9A9A9"
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 10,
    flexDirection: 'row',
    height: 50,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
});

export default Input;
