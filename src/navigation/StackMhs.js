import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import StatsScreen from '../screens/Mhs';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Stats"
      component={StatsScreen}
      options={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: 'grey' },
        title: 'Profile Mahasiswa'
      }}
    />
  </Stack.Navigator>
  
);
