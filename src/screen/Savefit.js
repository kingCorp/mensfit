import React, { Component } from 'react';
import { AsyncStorage, Platform, ScrollView, FlatList, Alert, Image, StyleSheet, View, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView } from "react-native";
import { Container, Header,List, ListItem, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {  } from 'react-native-elements';
// import * as firebase from 'firebase';
// import { firebaseService } from '../config/firebase'
export default class Savefit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      customer: [],
      keys: [],
      loading: false,
    };
  }
  async componentDidMount() {
    this.loadCustomers();
  }
  // componentDidUpdate() {
  //   this.loadCustomers();
  // }

  loadCustomers() {

    try {
      AsyncStorage.getAllKeys().then(keys => {
        keys.forEach(key => {
          console.log(key)
          AsyncStorage.getItem(key).then(result => {
            console.log(result)
            this.state.customer.push(JSON.parse(result));
            console.log(this.state.customer, )
          })
        });
      });

    } catch (error) {
      console.log(error);
    }
    console.ignoredYellowBox = [
      'Setting a timer'
    ]
  }

  

  render() {
    var { navigate, goBack } = this.props.navigation;
    return (
      <Container>
        <Header style={{ backgroundColor: '#009688' }}>
          <Body>
            <Title>Saved Measurement</Title>
          </Body>
        </Header>
        <FlatList
          data={this.state.customer}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.list}>
              <List>
                <ListItem
                  onPress={() => { navigate("Profilefit", { data: item }) }}
                >
                <Body>
                <Text style={{ fontSize: 21, }}>{item.fullname}</Text>
              </Body>
                <Right>
                <Icon name="arrow-forward" />
              </Right>
                </ListItem>
                </List>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.fullname}
        >
        </FlatList>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  }
});