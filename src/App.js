import React, {useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {CustomView} from './comps/CustomView';

const App = () => {
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get('window').height,
  );

  useEffect(() => {
    const onChange = () => {
      setWindowHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <>
      <SafeAreaView style={[styles.parent, {height: windowHeight}]}>
        <View style={styles.body}>
          <CustomView textStyle={styles.title} />
        </View>
      </SafeAreaView>
    </>
  );
};

//https://reactnative.dev/docs/colors
const styles = StyleSheet.create({
  parent: {
    backgroundColor: 'beige',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'darkgoldenrod',
  },
});

export default App;
