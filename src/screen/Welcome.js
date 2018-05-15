import React, { Component } from 'react';
import { Platform, ImageBackground, ScrollView, StatusBar, FlatList, Alert, Image, StyleSheet, View, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class Welcome extends Component {
  render() {
    var { navigate, goBack } = this.props.navigation;
    return (
      <Container>
        <StatusBar backgroundColor="#009688"
          barStyle="light-content" />
        <ImageBackground source={require('../images/b1.jpg')} style={{ width: null, flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.logo}>
              mensFIT
          </Text>
          </View>
          <View style={styles.container}>
            <Button block
              style={styles.btn}
              onPress={() => { navigate("Newfit") }}>
              <Text style={styles.txtbtn}>Take Measurements</Text>
              <Icon name='arrow-forward' />
            </Button>
            <Button block
              style={styles.btn}
              onPress={() => { navigate("Savefit") }}>
              <Text style={styles.txtbtn}>Saved Measurements</Text>
              <Icon name='home' />
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  btn: {
    width: 320,
    height:60,
    backgroundColor: '#009688',
    margin:15
  },
  logo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 80,
    color: 'white'
  },
  txtbtn:{
    fontSize:17,
    fontWeight: 'bold'
  }
});