import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import BackgroundColor from 'react-native-background-color';
import LinearGradient from 'react-native-linear-gradient';
import style from './App.module.css';

function App(){
  return(
    <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0.1}}  colors={['#ef2a3b', '#ff939b']} style={styles.linearGradient}>
      <View style={styles.Body}>
        
        {/* big burger */}
        <View style={styles.bug1}>
          <Image source={require('./picture/burger.png')} style={styles.burger1}/>
        </View>
        {/* small burger */}
        <View style={styles.bug2}>
          <Image source={require('./picture/burger1.png')} style={styles.burger2}/>
        </View>
        <View>
          <button title='Get Started'></button>
        </View>
        

      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
linearGradient:{
  flex:1,
 },
 burger1:{
  height:300,
  width:300,
  marginLeft:-100,
  marginTop:370,
  
 },
 burger2:{
  
    height:230,
    width:230,
    marginBottom:150,
    marginTop:-217,
    marginLeft:80,
    
 },
 bug2:{
  flex:1,
  shadowColor:'black',
  shadowOpacity:0.5,
  elevation:100,
  
 }
 


})

export default App;