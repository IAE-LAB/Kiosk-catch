import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './src/screens/Main';
import Kiosk_practical from './src/screens/Kiosk_practical';
import Kiosk_difficulty_high from './src/screens/Kiosk_difficulty_high';
import Kiosk_difficulty_medium from './src/screens/Kiosk_difficulty_medium';
import Kiosk_difficulty_low from './src/screens/Kiosk_difficulty_low';
import Kiosk_useFreely from './src/screens/Kiosk_useFreely';
import Tutorial_1 from './src/screens/Tutorial_1';
import Tutorial_LRkiosk_list from './src/screens/Tutorial_LRkiosk_list';
import Tutorial_CBkiosk_list from './src/screens/Tutorial_CBkiosk_list';

import LR_Kiosk from './src/screens/LR_Kiosk';
import CB_Kiosk from './src/screens/CB_Kiosk';

import CB_Kiosk_Start from './src/screens/CB_Kiosk/CB_Kiosk_Start';

import LR_Kiosk_Start from './src/screens/LR_Kiosk/LR_Kiosk_Start';
import LR_Kiosk_Explore from './src/screens/LR_Kiosk/LR_Kiosk_Explore';

import LR_Kiosk_explore from './src/screens/LR_Kiosk_explore';
import LR_Kiosk_explore_category from './src/screens/LR_Kiosk_explore_category';
import LR_Kiosk_explore_menu from './src/screens/LR_Kiosk_explore_menu';
import LR_Kiosk_explore_option from './src/screens/LR_Kiosk_explore_menu';
import LR_Kiosk_explore_tutorial_1 from './src/screens/LR_Kiosk_explore_tutorial_1';
import LR_Kiosk_explore_tutorial_2 from './src/screens/LR_Kiosk_explore_tutorial_2';

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
              name="Kiosk_practical"
              component={Kiosk_practical}
              options={{
                title: '실전 키오스크 이용하기',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 20,
                },
              }}
            />
          <Stack.Screen
            name="Kiosk_difficulty_high"
            component={Kiosk_difficulty_high}
            options={{
              title: '실전 키오스크 이용하기',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="Kiosk_difficulty_medium"
            component={Kiosk_difficulty_medium}
            options={{
              title: '실전 키오스크 이용하기',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="Kiosk_difficulty_low"
            component={Kiosk_difficulty_low}
            options={{
              title: '실전 키오스크 이용하기',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="Kiosk_useFreely"
            component={Kiosk_useFreely}
            options={{
              title: '실전 키오스크 이용하기',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
        </Stack.Group>
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
          {/* 새로 제작 */}
          <Stack.Screen
            name="LR_Kiosk_Start"
            component={LR_Kiosk_Start}
            options={{
              title: '시작단계',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="LR_Kiosk_Explore"
            component={LR_Kiosk_Explore}
            options={{
              title: '시작단계',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          {/* 스크린 제작 */}
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
            name="LR_Kiosk_explore"
            component={LR_Kiosk_explore}
            options={{
              title: '탐색단계',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="LR_Kiosk_explore_category"
            component={LR_Kiosk_explore_category}
            options={{
              title: '탐색단계',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="LR_Kiosk_explore_menu"
            component={LR_Kiosk_explore_menu}
            options={{
              title: '탐색단계',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="LR_Kiosk_explore_option"
            component={LR_Kiosk_explore_option}
            options={{
              title: '탐색단계',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="LR_Kiosk_explore_tutorial_1"
            component={LR_Kiosk_explore_tutorial_1}
            options={{
              title: '탐색단계',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="LR_Kiosk_explore_tutorial_2"
            component={LR_Kiosk_explore_tutorial_2}
            options={{
              title: '탐색단계',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            }}
          />
        </Stack.Group>
        <Stack.Group>
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
          <Stack.Screen
            name="CB_Kiosk_Start"
            component={CB_Kiosk_Start}
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
