import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import React, {Component} from 'react';

// ?? Function based code exampled

const TimeofDay = () => {
  const [time, setTime] = useState(() => new Date());
  const [currentTime, setCurrentTime] = useState('Good day');

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
    <View
      style={{
        margin: 15,
        borderRadius: 31,
        backgroundColor: 'rgb(8, 183, 183)',
        padding: 31,
      }}>
      <View style={styles.datetext}>
        <Text style={{ fontStyle: 'italic', fontSize: 31 }}>{currentTime}</Text>
      </View>
      <View style={styles.datetext}>
        <Text style={{ fontSize: 31, fontWeight: 900 }}>
          {time.toDateString()}
        </Text>
      </View>
      <View style={styles.timeView}>
        <Text style={styles.timetext}>{time.toLocaleTimeString()}</Text>
      </View>
    </View>
  );
};

// // ?? Class based component exampled
// class TimeofDay extends Component {
//   //^^ The constructor defines the inital state now

//   constructor(props) {
//     //note: The super is imminent here
//     super(props);

//     // -> (this.state)  === variable {const [state, setState] = useState({})}
//     this.state = {
//       // -> The object in here is the default state
//       time: new Date(),
//       currentTime: 'Good Day',
//     };
//   }
//   /* (function based)
//             -   const [time, setTime] = useState(() => new Date());
//             -   const [currentTime, setCurrentTime] = useState('Good day');
//             */

//   //^^ It is similar to the useEffect with an empty array and will run only once

//   componentDidMount() {
//     //* In class based component we assign everything to a 'this' object unlike {const = timerId} in function here
//     this.timerId = setInterval(() => {
//       // -> (this.setState) === "setState" callback function {const [state, setState] = useState({})}
//       this.setState({time: new Date()});
//     }, 1000);
//     console.log('Did mounted now');
//   }
//   /*
//             -      useEffect(() => {
//             -        const intervalid = setInterval(() => {
//             -          setTime(new Date());
//             -        }, 1000);
//             #        The return function here is similar to componentwillunmount
//             -        return () => clearInterval(intervalid);
//             -      }, []);
//             */

//   //^^ The function is similar to other useEffect that runs other than the inital render in an component here

//   componentDidUpdate(prevProps, prevState) {
//     const local = this.state.time?.getHours();

//     if (prevState.time?.getHours() !== local) {
//       if (local >= 6 && local < 12)
//         this.setState({currentTime: 'Good Morning'});
//       else if (local >= 12 && local <= 16)
//         this.setState({currentTime: 'Good Afternoon'});
//       else if (local > 17 && local <= 19)
//         this.setState({currentTime: 'Good Evening'});
//       else this.setState({currentTime: 'Good Night'});
//     }
//   }

//   //^^ useEffect clearInterval equivalent here

//   componentWillUnmount() {
//     console.log('unmounted');
//     return () => clearInterval(this.timerId);
//   }
//   /*
//             - It is similar to return inside a useEffect here
//             */

//   //^^ We can just make a direct return instead we make it in {render()} here

//   render() {
//     return (
//       <View>
//         <View style={styles.datetext}>
//           <Text style={{fontStyle: 'italic', fontSize: 31}}>
//             {this.state.currentTime}
//           </Text>
//         </View>
//         <View style={styles.datetext}>
//           <Text style={{fontSize: 31, fontWeight: 900}}>
//             {this.state.time.toDateString()}
//           </Text>
//         </View>
//         <View style={styles.timeView}>
//           <Text style={styles.timetext}>
//             {this.state.time.toLocaleTimeString()}
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }

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
