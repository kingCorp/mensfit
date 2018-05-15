import React,{ Component } from 'react';
import { StyleSheet,Platform, Text, View } from 'react-native';
//import { Icon } from 'react-native-elements';
import { Icon } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from './screen/Welcome';
import Newfit from './screen/Newfit';
import Profilefit from './screen/Profilefit';
import Savefit from './screen/Savefit';

export const MenStack = StackNavigator({
    
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            header:null
          },
    },
    Newfit: {
        screen: Newfit,
        navigationOptions: {
            headerStyle: {backgroundColor:'#006064'},
            header:null
          },
    },
    Savefit: {
        screen: Savefit,
        navigationOptions: {
            headerStyle: {backgroundColor:'#006064'},
            header:null
          },
    },
    Profilefit: {
        screen: Profilefit,
        navigationOptions: {
            headerStyle: {backgroundColor:'#006064'},
            header:null,    
          },
    }
   
});


// export const Tabs = TabNavigator({
//     Newfit: {screen: Newfit,
//         navigationOptions: {
//             header:null,
//             tabBarLabel: 'New',
//             tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
//           },       
//     },
//     Savefit: {screen: Savefit,
//         navigationOptions: {
//             header:null, 
//             tabBarLabel: 'Saved',
//             tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
//           },
//     }
// }, 
// {
//     tabBarPosition: 'top',
//     swipeEnabled: true,
//     activeTintColor: '#009688',
//     animationEnabled: true,
//     tabBarOptions: {
//         labelStyle: {
//             fontSize: 13,
//             fontWeight:'bold'
//           },
//         style: {
//             backgroundColor: '#009688', // Makes Android tab bar white instead of standard blue
//             height:70 // I didn't use this in my app, so the numbers may be off. 
//           }
//     }
    
// }
// );

export const Nav = StackNavigator({
    MenStack: { screen: MenStack},
   // MenTab: {screen: Tabs},
} ,
// {
//     mode: 'modal',
//     headerMode: 'none',
// }
);

export default Nav; // Export your root navigator as the root component