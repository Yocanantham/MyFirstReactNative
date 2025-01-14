import {
  View,
  Text,
  TextInput,
  Pressable,
  Button,
  StyleSheet,
  Switch,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const ButtonComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSwitched, setIsSwitched] = useState(true);
  const [transform, setTransform] = useState(0);

  const handleSubmit = () => {
    console.log(
      `Email : ${email}\n Password : ${password}\n ### Submitted Pressable ###`,
    );
  };

  useEffect(() => {
    if (password.length > 3 && email.length !== 0) setIsDisabled(false);
    else setIsDisabled(true);
  }, [email, password]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTransform(transform + 7);
    }, 1);

    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <View style={styles.mainView}>
      <View style={styles.textInputView}>
        <Text style={{ fontWeight: 700, fontSize: 31 }}>ButtonComponent</Text>
        <FontAwesomeIcon
          icon={faReact}
          transform={{ rotate: transform }}
          size={31}
          style={{ transition: 'transform 3ms linear' }}
        />
      </View>
      <View style={styles.textInputView}>
        <FontAwesomeIcon icon={faUser} />
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={value => setEmail(value)}
          placeholder="Your email here"
          placeholderTextColor="white"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.textInputView}>
        <FontAwesomeIcon icon={faKey} />
        <TextInput
          style={[styles.textInput, { color: 'black' }]}
          value={password}
          onChangeText={value => setPassword(value)}
          placeholder="Your Password here"
          placeholderTextColor={'white'}
          secureTextEntry={true}
          returnKeyType="send"
          onEndEditing={() => handleSubmit(email, password)}
        />
      </View>
      <View
        style={[
          styles.switchView,
          isSwitched && {
            padding: 4,
            paddingHorizontal: 14,
            borderRadius: 31,
            backgroundColor: 'rgba(72, 163, 253, 0.31)',
          },
        ]}>
        <Switch
          value={isSwitched}
          onValueChange={() => setIsSwitched(!isSwitched)}
          trackColor={true}
          thumbColor="#1e90ff"
        />
        <Text
          style={{
            color: isSwitched ? 'black' : 'grey',
          }}>
          Keep me logged here
        </Text>
      </View>
      <Button
        title="Submit"
        color="blue"
        onPress={() => handleSubmit(email, password)}
        disabled={isDisabled}
      />
      {/* //-> We use pressable since the {Button} element cant be resized with "width" here */}
      <Pressable
        style={{
          backgroundColor: 'black',
          padding: 15,
          width: 300,
          marginHorizontal: 'auto',
          borderRadius: 15,
        }}
        onPress={() => handleSubmit(email, password)}>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Submit Pressable
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'rgba(77, 180, 180, 0.73)',
    borderRadius: 15,
    margin: 15,
    padding: 15,
    paddingHorizontal: 15,
    gap: 31,
    boxShadow: '7 -7 0 rgb(2, 173, 173)',
  },
  textInputView: {
    paddingHorizontal: 14,
    borderRadius: 14,
    gap: 14,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 14,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },
  switchView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    padding: 4,
    gap: 14,
  },
});
export default ButtonComponent;
