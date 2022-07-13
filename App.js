import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false}/>
      <NavigationContainer>
        <Stack.Navigator>
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
