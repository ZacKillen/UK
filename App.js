import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {

render() {
return(


<View>
      
        <Image
          style={{ width: 66, height: 58 }}
          style={styles.imageIcon}
          source={{
            uri:
              'https://ukmap360.com/img/0/blank-map-of-united%20kingdom%20(uk).jpg',
          }}
          
      
        />
</View>
    );
  }
}
const styles = StyleSheet.create({
  imageIcon: {
  width: 1000,
  height: 1000,
  marginLeft: 120  
  }, 
});
