import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MyText from './src/components/Header/Header';
import TimeofDay from './src/components/TimeofDay/TimeofDay';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <MyText />
      <TimeofDay />
    </SafeAreaView>
  );
}
export default App;
