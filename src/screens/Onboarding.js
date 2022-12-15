import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.topShape} />
      <View>
        <Text style={{fontSize: 50, color: 'black'}}>Logo</Text>
      </View>
      <View style={styles.bottomShape} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topShape: {
    position: 'absolute',
    top: -115,
    right: -75,
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: '#273b82',
  },
  bottomShape: {
    position: 'absolute',
    left: -150,
    bottom: -150,
    width: 400,
    height: 400,
    borderRadius: 400 / 2,
    backgroundColor: '#273b82',
  },
});

/* storeData = async () => {
    try {
      await AsyncStorage.setItem('welcomeScreenSeen', 'true')
    } catch (e) {
      // saving failed
    }
  } */
