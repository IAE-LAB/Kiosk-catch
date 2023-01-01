import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './src/screens/Main';
import Tutorial_1 from './src/screens/Tutorial_1';
import Tutorial_LRkiosk_list from './src/screens/Tutorial_LRkiosk_list';
import Tutorial_CBkiosk_list from './src/screens/Tutorial_CBkiosk_list';
import LR_Kiosk from './src/screens/LR_Kiosk';
import CB_Kiosk from './src/screens/CB_Kiosk';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Group>
          <Stack.Screen
            name="Tutorial_1"
            component={Tutorial_1}
            options={{
              title: '이용방법 배우기',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="Tutorial_LRkiosk_list"
            component={Tutorial_LRkiosk_list}
            options={{
              title: '좌우구조 키오스크 배우기',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="Tutorial_CBkiosk_list"
            component={Tutorial_CBkiosk_list}
            options={{
              title: '통합구조 키오스크 배우기',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="LR_Kiosk"
            component={LR_Kiosk}
            options={{
              title: '시작단계',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="CB_Kiosk"
            component={CB_Kiosk}
            options={{
              title: '시작단계',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
