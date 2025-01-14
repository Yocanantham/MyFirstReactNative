import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';

const ScrollViewComponent = () => {
  return (
    <View style={{ gap: 14 }}>
      <Text style={{ fontWeight: 700, fontSize: 31, paddingHorizontal: 14 }}>
        ScrollViewComponent
      </Text>
      <Text style={{ paddingHorizontal: 14 }}>With Indicator</Text>
      <ScrollView
        horizontal={true}
        style={{ backgroundColor: 'black', paddingVertical: 15 }}
        onScroll={() => console.log('Scrolled')}>
        <Image
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
          source={require('../../assests/images/cake.png')}
        />
        <Image
          source={require('../../assests/images/cake.png')}
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
        />
        <Image
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
          source={require('../../assests/images/cake.png')}
        />
        <Image
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
          source={require('../../assests/images/cake.png')}
        />
        <Image
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
          source={require('../../assests/images/cake.png')}
        />
        <Image
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
          source={require('../../assests/images/cake.png')}
        />
      </ScrollView>
      <Text style={{ paddingHorizontal: 14 }}>Without Indicator</Text>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: 'black', paddingVertical: 15 }}>
        <Image
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
          source={require('../../assests/images/cake.png')}
        />
        <Image
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
          source={require('../../assests/images/cake.png')}
        />
        <Image
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
          source={require('../../assests/images/cake.png')}
        />
        <Image
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
          source={require('../../assests/images/cake.png')}
        />
        <Image
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
          source={require('../../assests/images/cake.png')}
        />
        <Image
          style={{
            width: 100,
            height: 100,
            marginHorizontal: 4,
            borderRadius: 15,
          }}
          source={require('../../assests/images/cake.png')}
        />
      </ScrollView>
    </View>
  );
};

export default ScrollViewComponent;
