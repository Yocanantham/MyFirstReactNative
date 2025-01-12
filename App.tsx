import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MyText from './src/components/MyText/MyText';
import TimeofDay from './src/components/TimeofDay/TimeofDay';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
        {/* <MyText />
        <MyText />
        <MyText />
        <MyText />
        <MyText />
        <MyText />
        <MyText />
        <MyText />
        <MyText />
        <MyText />
        <MyText /> */}
        <MyText />
        <TimeofDay />
      </View>
    </SafeAreaView>
  );
}
export default App;
