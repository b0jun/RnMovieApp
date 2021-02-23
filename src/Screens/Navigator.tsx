import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {UserContext} from '~/Context/User';
import Loading from './Loading';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import MovieHome from './MovieHome';
import MovieDetail from './MovieDetail';

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
const MovieNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MovieHome"
        component={MovieHome}
        options={{
          title: 'MOVIEAPP',
          headerTintColor: '#E70915',
          headerStyle: {
            backgroundColor: '#141414',
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          title: 'MOVIEAPP',
          headerTintColor: '#E70915',
          headerStyle: {
            backgroundColor: '#141414',
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  const {isLoading, userInfo} = useContext<IUserContext>(UserContext);
  console.log(isLoading, userInfo);
  if (!isLoading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {userInfo ? <MovieNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};
