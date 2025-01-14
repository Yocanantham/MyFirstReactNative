import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

const TextInputComponent = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{justifyContent: 'center', marginHorizontal: 31, gap: 7}}>
      {/* //note: normal textfield */}
      <TextInput
        style={{
          padding: 15,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 15,
          backgroundColor: 'grey',
        }}
        placeholder="Your text here"
        // placeholderTextColor={"black"}
        onChangeText={value => {
          setText(value);
        }}
        value={text}
        // autoFocus={true}
        keyboardType="email-address"
      />

      {/* //note: password */}
      <TextInput
        style={{
          padding: 15,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 15,
          backgroundColor: 'grey',
        }}
        placeholder="Your Password here"
        onChangeText={value => setPassword(value)}
        value={password}
        returnKeyType="send"
        secureTextEntry={true}
      />

      {/* //note: `defaultValue` can only be used in non controlled components now */}
      <TextInput
        style={{
          padding: 15,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 15,
          backgroundColor: 'grey',
        }}
        defaultValue="New value"
        placeholder="Your value here"
      />
    </View>
  );
};

export default TextInputComponent;
