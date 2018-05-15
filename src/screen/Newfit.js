import React, { Component } from 'react';
import { AsyncStorage, Platform, DatePickerAndroid, ScrollView, FlatList, Alert, Image, StyleSheet, View, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Heading, NavigationBar } from '@shoutem/ui';
export default class Newfit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      neck: "",
      chest: "",
      waist: "",
      seat: "",
      shirtLength: "",
      shoulderWidth: "",
      armLength: "",
      wrist: "",
      hipMeasure: "",
      seatMeasure: "",
      sleeveLength: "",
      leg: "",
      thigh: "",
      fullname: "",
      date: "",
      phone: "",
      location: "",
      key: "",
      btnClicked: false,
      loading: false,
    };
  }

  comp

  async openAndroidDatePicker() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
      this.setState({ date: year + '-' + month + '-' + day })
      console.log(this.state.date);
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  }

  async save(navigate) {
    if(this.state.fullname != '' && this.state.phone != '' ){
      let a = Math.floor((Math.random() * 100) + 1);
        let key = "TA" + a;
      try {
        let data_object = {
          fullname: this.state.fullname,
          phone: this.state.phone,
          location: this.state.location,
          date: this.state.date,
          neck: this.state.neck,
          chest: this.state.chest,
          waist: this.state.waist,
          key: key
        }
        
        await AsyncStorage.setItem(key, JSON.stringify(data_object));
        navigate("Savefit");
      } catch (error) {
        // Error saving data
        console.log(error)
      }
      this.setState({
        date: "",
        phone: "",
        location: "",
        neck: "",
        chest: "",
        waist: "",
        fullname: "",
        key: ""
      })  

    }else{
      ToastAndroid.show('Kindly fill in the fields', ToastAndroid.SHORT);
    }
  }


  render() {
    var { navigate, goBack } = this.props.navigation;
    return (
      <Container>
        <Header style={{ backgroundColor: '#009688' }}>
          <Body>
            <Title>New Measurement</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.cont}>
            <KeyboardAvoidingView behavior="padding">
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                placeholder='Customer fullname'
                placeholderTextColor='#000'
                onChangeText={(fullname) => this.setState({ fullname })} value={this.state.fullname}
              />

              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                placeholder='location'
                placeholderTextColor='#000'
                onChangeText={(location) => this.setState({ location })} value={this.state.location}
              />

              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                placeholder='phone number'
                placeholderTextColor='#000'
                keyboardType='numeric'
                maxLength={11}
                onChangeText={(phone) => this.setState({ phone })} value={this.state.phone}
              />

              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                placeholder='Neck'
                placeholderTextColor='#000'
                keyboardType='numeric'
                maxLength={5}
                onChangeText={(neck) => this.setState({ neck })} value={this.state.neck}
              />

              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                placeholder='Chest'
                placeholderTextColor='#000'
                keyboardType='numeric'
                maxLength={5}
                onChangeText={(chest) => this.setState({ chest })} value={this.state.chest}
              />
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                placeholder='Waist'
                placeholderTextColor='#000'
                keyboardType='numeric'
                maxLength={5}
                onChangeText={(waist) => this.setState({ waist })} value={this.state.waist}
              />

            </KeyboardAvoidingView>

              <Text style={styles.input} onPress={() => { this.openAndroidDatePicker() }} >Select date: {this.state.date}</Text>
    

            {this.state.btnClicked
              ?
              <Spinner color="white" />
              : <Button block success
                style={styles.btn}
                onPress={() => { this.save(navigate) }}>
                <Text style={styles.txtbtn}>Save</Text>
              </Button>}
          </View>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  cont: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    width: 200,
    borderBottomWidth: 2,
    textAlign: "center",
    color: "#000",
    fontSize: 15,
    borderColor: "#009688",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
  },
  btn: {
    width: 270,
    marginVertical: 20,
    paddingVertical: 13,
    alignSelf: 'center',
    backgroundColor: '#009688',
  },
  txtbtn: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  }
});