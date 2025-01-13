import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import TimeofDay from './src/components/TimeofDay/TimeofDay';
import ImageComponent from './src/components/ImageComponent/ImageComponent';
import TextInputComponent from './src/components/TextInputComponent/TextInputComponent';

function App() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%', gap: 31 }}>
      <Header />
      {/* <TimeofDay /> */}
      <ImageComponent />
      <TextInputComponent />
    </SafeAreaView>
  );
}
export default App;
