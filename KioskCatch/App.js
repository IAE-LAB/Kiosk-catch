import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './src/screens/Main';
import Tutorial_1 from './src/screens/Tutorial_1';

const Stack = createNativeStackNavigator();

// import App from './src/screens/Main';
// export default App;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Tutorial_1" component={Tutorial_1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
