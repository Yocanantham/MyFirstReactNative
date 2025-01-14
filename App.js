import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Header from './src/components/Header/Header';
import TimeofDay from './src/components/TimeofDay/TimeofDay';
import ImageComponent from './src/components/ImageComponent/ImageComponent';
import TextInputComponent from './src/components/TextInput/TextInputComponent';
import ScrollViewComponent from './src/components/ScrollView/ScrollViewComponent';
import ButtonComponent from './src/components/ButtonComponent/ButtonComponent';
import Footer from './src/components/Footer/Footer';
function App() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <ScrollView>
        <View style={{ gap: 31 }}>
          <Header />
          <TimeofDay />
          <ImageComponent />
          <TextInputComponent />
          <ScrollViewComponent />
          <ButtonComponent />
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
