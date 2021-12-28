import React,{useEffect} from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import OnboardingScreen from '../screens/OnboardingScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

import AsyncStorage from '@react-native-community/async-storage'

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const stack = createStackNavigator();

const AuthStack = () => {

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alredyLaunched').then(value => {
      if(value == null)
      {
        AsyncStorage.setItem('alredyLaunched','true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })
  }, []);

  if(isFirstLaunch === null){
      return null;
  }else if(isFirstLaunch === true){
      routeName = 'Onboarding';
  }else{
      routeName = 'Login';
  }

return (
    <stack.Navigator initialRouteName={routeName}>
        <stack.Screen 
            name="Onboarding" 
            component={OnboardingScreen}
            options={{header: () => null}}    
        />
        <stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{header: () => null}}      
        />
        <stack.Screen name='Signup' component={SignupScreen} options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0, 
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          )
        })}/>
    </stack.Navigator>
    );
};

export default AuthStack
