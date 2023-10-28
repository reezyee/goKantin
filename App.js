import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button style={styles.btn}Submit</Button>
      <Text style={styles.text}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#362789',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 40,
    fontStyle: 'italic',
    color: 'white',
  }
});
