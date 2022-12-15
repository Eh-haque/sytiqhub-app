import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import {colors} from '../utils/layout';
import {SafeAreaView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text style={{fontSize: 50, color: 'black'}}>Logo</Text>
      </View>

      <View style={styles.welcome}>
        <Text style={{fontSize: 40, fontWeight: '600', color: 'white'}}>
          Welcome
        </Text>
        <Text style={{color: 'white', lineHeight: 20, paddingVertical: 20}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla
          modi ipsa alias beatae.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.button}>
            <Text style={{color: colors.white}}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={[styles.button, {backgroundColor: 'white'}]}>
            <Text style={{color: colors.primary}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: colors.white,
  },
  logo: {
    height: (windowHeight * 55) / 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    height: (windowHeight * 45) / 100,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  buttonContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {paddingHorizontal: '15%', paddingVertical: 20, borderRadius: 30},
});
