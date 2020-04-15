import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, Search, Likes, Profile, Plus} from './src/screens';
import {enableScreens} from 'react-native-screens';

enableScreens();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: {fontSize: 12},
          style: {backgroundColor: 'white'},
          headerTintColor: '#ffa500',
          showIcon: true,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <Icon name="home" color="#333" size={24} />,
          }}
        />
        <Tab.Screen
          name="Map"
          component={Search}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: () => <Icon name="map-search" color="#333" size={24} />,
          }}
        />
        <Tab.Screen
          name="Plus"
          component={Plus}
          options={{
            tabBarLabel: 'Plus',
            tabBarIcon: () => <Icon name="plus-circle-outline" color="#333" size={24} />,
          }}
        />
        <Tab.Screen
          name="Likes"
          component={Likes}
          options={{
            tabBarLabel: 'Likes',
            tabBarIcon: () => <Icon name="heart" color="#333" size={24} />,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => <Icon name="account" color="#333" size={24} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
