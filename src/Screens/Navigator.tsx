import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {UserContext} from '~/Context/User';
import Loading from './Loading';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'MOVIE_APP',
          headerTransparent: true,
          headerTintColor: '#e70915',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
};
// const MovieNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="MovieHome" component={MovieHome} />
//       <Stack.Screen name="MovieDetail" component={MovieDetail} />
//     </Stack.Navigator>
//   );
// };

export default () => {
  const {isLoading, userInfo} = useContext<IUserContext>(UserContext);
  console.log(isLoading, userInfo);
  if (!isLoading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
};
