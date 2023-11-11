import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('')
  return (
    <View style={styles.container}>
    <Text style={styles.textHeader}>goKantin</Text>
    <TextInput style={styles.input}placeholder="Search what u need.."
    onChangeText={(text) => {
          setText(text) }} />
    <Text style={styles.text}>
      {'\n'}Your need: {text}</Text>

    <ScrollView style={styles.containerView}>
      <View style={styles.large} />
      <ScrollView horizontal>
        <View style={styles.small}>
          <Text style={{color: 'white', textAlign:'center', marginTop: 150,}}>Starbucks</Text>
        </View>
        <View style={styles.small}>
          <Text style={{color: 'white', textAlign:'center', marginTop: 150,}}>Boba</Text>
        </View>
        <View style={styles.small}>
          <Text style={{color: 'white', textAlign:'center', marginTop: 150,}}>Ice Cream</Text>
        </View>
        <View style={styles.small}>
          <Text style={{color: 'white', textAlign:'center', marginTop: 150,}}>Coffe</Text>
        </View>

      </ScrollView>
      <View style={styles.large} />
      <ScrollView horizontal>
        <View style={styles.small} />
        <View style={styles.small} />
      </ScrollView>
      <View style={styles.large} />
    </ScrollView>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a6dbbc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerView: {
      flex: 1,
    },
    small: {
      width: 150,
      height: 200,
      marginBottom: 10,
      marginRight: 10,
      backgroundColor: '#5fb2ff',
    },
    large: {
      width: 400,
      height: 300,
      marginBottom: 10,
      marginRight: 10,
      backgroundColor: 'skyblue',
    },
    textHeader: {
      fontSize: 40,
      marginTop: 30,
      color: 'white',
    },
    input:{
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop: 30,
      width: 200,
      padding: 5,
      fontStyle: 'italic',
    },
    text:{
      fontSize: 16,
      color: 'white',
      textAlign: 'left',
    
  }
})

  