import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
const TimeofDay = () => {
  const [time, setTime] = useState(() => new Date());
  const [currentTime, setCurrentTime] = useState('Good day');
  // console.log(time + 'here');
  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalid);
  }, []);

  useEffect(() => {
    if (time.getHours() >= 6 && time.getHours() < 12)
      setCurrentTime('Good morning');
    else if (time.getHours() >= 12 && time.getHours() <= 16)
      setCurrentTime('Good Afternoon');
    else if (time.getHours() > 16 && time.getHours() <= 19)
      setCurrentTime('Good Evening');
    /* if (
      (time.getHours() > 19 && time.getHours() <= 24) ||
      (time.getHours() >= 1 && time.getHours() < 6)
    ) */ else setCurrentTime('Good Night');
  }, [time]);

  return (
    <View>
      <View style={styles.datetext}>
        <Text style={{fontStyle: 'italic', fontSize: 31}}>{currentTime}</Text>
      </View>
      <View style={styles.datetext}>
        <Text style={{fontSize: 31, fontWeight: 900}}>
          {time?.toDateString()}
        </Text>
      </View>
      <View style={styles.timeView}>
        <Text style={styles.timetext}>{time?.toLocaleTimeString()}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  datetext: {
    margin: 'auto',
    padding: 15,
  },
  timeView: {
    backgroundColor: 'black',
    padding: 31,
    borderRadius: 15,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 'auto',
    color: 'white',
  },
  timetext: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 41,
  },
});

export default TimeofDay;
