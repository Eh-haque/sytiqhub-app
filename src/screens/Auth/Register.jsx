import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/layout';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Register({navigation}) {
  const [userName, onChangeUserName] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [confirmPassword, onChangeConfirmPassword] = React.useState(null);
  const [batteryNumber, onChangeBatteryNumber] = React.useState(null);
  const [vehicleNumber, onChangeVehicleNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView contentContainerStyle={{flexGrow: 1}}> */}
      <View style={styles.texts}>
        <Text style={{fontSize: 40, fontWeight: '600', color: colors.white}}>
          Sign Up
        </Text>
        <Text
          style={{lineHeight: 20, paddingVertical: 20, color: colors.white}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla
          modi ipsa alias beatae.
        </Text>
      </View>
      <View style={styles.form}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
          <TextInput
            style={styles.input}
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
            keyboardType="text"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeBatteryNumber}
            value={batteryNumber}
            placeholder="Battery Number"
            keyboardType="Number"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeVehicleNumber}
            value={vehicleNumber}
            placeholder="Vehicle Number"
            keyboardType="Number"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.button}>
              <Text style={{color: colors.white, textAlign: 'center'}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
    flex: 1,
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
});
