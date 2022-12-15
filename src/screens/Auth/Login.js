import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/layout';
import Google from '../../../assets/icons/Google';
import Facebook from '../../../assets/icons/Facebook';
import RightArrow from '../../../assets/icons/RightArrow';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Login({navigation}) {
  const [userName, onChangeUserName] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={{fontSize: 40, fontWeight: '600', color: colors.white}}>
          Sign In
        </Text>
        <Text
          style={{lineHeight: 20, paddingVertical: 20, color: colors.white}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla
          modi ipsa alias beatae.
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUserName}
          value={userName}
          placeholder="User Name"
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          keyboardType="text"
          secureTextEntry
        />
        <Text style={{textAlign: 'right'}}>Forget Password?</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.button}>
            <Text style={{color: colors.white, textAlign: 'center'}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.iconContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Google />
            <Text style={{marginHorizontal: 10}}>Continue with Google</Text>
          </View>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Facebook />
            <Text style={{marginHorizontal: 10}}>Continue with Facebook</Text>
          </View>
          <RightArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: colors.white,
  },
  texts: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    height: (windowHeight * 30) / 100,
    backgroundColor: colors.primary,
    padding: 20,
  },
  form: {
    position: 'absolute',
    top: (windowHeight * 28) / 100,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: (windowHeight * 70) / 100,
    width: windowWidth,
    padding: 20,
  },
  input: {
    backgroundColor: '#e7e8ea',
    height: 60,
    marginVertical: 10,
    borderWidth: 0,
    borderRadius: 25,
    padding: 10,
  },

  buttonContainer: {
    backgroundColor: colors.primary,
    marginVertical: 20,
    borderRadius: 25,
  },
  button: {paddingHorizontal: '15%', paddingVertical: 20, borderRadius: 30},
  
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
