import React from 'react';
import { Text, View, TextInput,StyleSheet, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import * as firebase from 'firebase'
import db from '../config.js'

export default class WriteScreen extends React.Component {
  SubmitStory = async()=>{
    db.collection("title").doc(this.state.scannedBookId).update({
      "title": false
    })
    db.collection("author").doc(this.state.scannedStudentId).update({
      "author": firebase.firestore.FieldValue.increment(1)
    })
    db.collection("story").doc(this.state.scannedStudentId).update({
      "story": firebase.firestore.FieldValue.increment(1)
    })
  }
    render() {
      return (
        <View style = {styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled></KeyboardAvoidingView>
          <p>Story Title</p>
          <TextInput style={styles.inputBox} />
          <p>Story Author</p>
          <TextInput style={styles.inputBox} />
          <p>Write Your Story</p>
          <TextInput style={styles.inputBox} />
          <TouchableOpacity 
              style={styles.scanButton} onPress = {this.submitStory}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    inputBox: {
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 2,
      outline: 'none',
    } ,
    scanButton:{
      backgroundColor:'#EDC0BF',
      width: 50,
      borderWidth:1.5,
      alignSelf: 'center',
      textAlign: 'center',
     }
  })
  