import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useIsFocused } from "@react-navigation/native";

export default function Splash(props) {
  const focused = useIsFocused();
  useEffect(()=>{
    setTimeout(()=>{
      props.navigation.navigate('Home');
    },2200);
  },[focused]);
  return (
    <View style={styles.container}>
      <View style={[{flex:4,alignItems:'center',justifyContent:'flex-end'}]}>
        <Image style={{resizeMode:'contain',width:300,height:300}} source={require('../assets/animations/splash.gif')}/>
      </View>
      <View style={[{flex:1,alignItems:'center',justifyContent:'center'}]}>
        <Text style={{fontWeight:'900',fontSize:60}}>UNO</Text>
      </View>
      <View style={[{flex:2,alignItems:'center',justifyContent:'center'}]}>
        <Image style={{resizeMode:'contain',width:40,height:40,marginTop:10}} source={require('../assets/icons/h.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})