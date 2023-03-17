
import { StyleSheet, Text, View, Image, ImageBackground,Dimensions } from 'react-native';
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';



var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;
export default class horizontalstacklayout extends Component {
  render() {
    return (
      
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>
            <Image style={styles.tinyLogo} source={{uri:"https://storage.googleapis.com/k-react.appspot.com/images/profilePicture/n5PHWspJ6U7WUdERDQ79_300x300.jpg"}} />
            <Text></Text>
            </View> 

            <View style={[styles.box, styles.box2]}>
            <Image style={styles.tinyLogo} source={{uri:"https://kpopping.com/documents/d7/1/Cocona-fullBodyPicture(2).webp?v=88e9a"}} />
            <Text></Text>
            </View> 

            <View style={[styles.box, styles.box3]}>
            <Image style={styles.tinyLogo} source={{uri:"https://pbs.twimg.com/media/FUUKe_OacAEcld-?format=jpg&name=large "}}/>
            <Text></Text>
            </View> 
         </View> 
    
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    flexDirection: 'column'
  },
  box: {
    flexDirection:'row',
    height: box_height
  },
  box1: {
    backgroundColor: `#ff1493`
  },
  box2: {
    backgroundColor: `#ff1493`
  },
  box3: {
    backgroundColor: `#ff1493`
  },
  tinyLogo: {
    width: 200,
    height: 200,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 0,
    Align: 'right',
    alignSelf: 'center',
  },
  logo: {
    width: 66,
    height: 58,
  },
  
  
}); 

