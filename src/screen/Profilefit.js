import React, { Component } from 'react';
import { AsyncStorage, Platform, ScrollView, FlatList, Alert, Image, StyleSheet, View, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView } from "react-native";
import { List, ListItem, Tile } from 'react-native-elements';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class Profilefit extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  delete(key, goBack) {
    goBack();
    return AsyncStorage.removeItem(key);
  }


  render() {
    var { navigate, goBack } = this.props.navigation;
    var { params } = this.props.navigation.state;
    return (
      <Container>
        <Header style={{ backgroundColor: '#009688' }}>
          <Body>
            <Title>{params.data.fullname}</Title>
          </Body>
        </Header>
        <Content>
          <List>

            <ListItem
              title="Phone"
              rightTitle={params.data.phone}
              hideChevron
            />
          </List>

          <List>
            <ListItem
              title="Date for pickup"
              rightTitle={params.data.date}
              hideChevron
            />
            <ListItem
              title="City"
              rightTitle={params.data.location}
              hideChevron
            />
          </List>

          <List>
            <ListItem
              title="chest"
              rightTitle={params.data.chest}
              hideChevron
            />
            <ListItem
              title="neck"
              rightTitle={params.data.neck}
              hideChevron
            />
            <ListItem
              title="waist"
              rightTitle={params.data.waist}
              hideChevron
            />
            <Button danger full
              onPress={() => { this.delete(params.data.key, goBack) }}>
              <Icon name='trash' />
            </Button>
          </List>
        </Content>
      </Container>
    );
  }
}