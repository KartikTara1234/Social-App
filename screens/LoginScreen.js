import React,{useState, useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native'

import FormsButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import FormInput from '../components/FormInput'
import { AuthContext } from '../navigation/AuthProvider'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {login} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.uppercircle}></View>
            <Image
                source={require('../assets/social-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Welcome Back</Text>

            <FormInput 
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput 
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormsButton 
                buttonTitle='Sign In'
                onPress={() => login(email, password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            {Platform.OS === 'android' ? (
                <View>
                    <SocialButton 
                        buttonTitle=' Sign In With Facebook'
                        btnType='facebook'
                        color='#4867aa'
                        backgroundColor='#e6eaf4'
                        onPress={() => {}}
                    />

                    <SocialButton 
                        buttonTitle=' Sign In With Google'
                        btnType='google'
                        color='#de4d41'
                        backgroundColor='#f5e7ea'
                        onPress={() => {}}
                    />
                </View>
            ) : null }

            <TouchableOpacity 
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>
                    Don't have a account? Create here
                </Text>
            </TouchableOpacity>
            <View style={styles.lowercircle}></View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 180,
        width: 180,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        
    },
    uppercircle:{
      height: 200,
      width: 200,
      backgroundColor: '#edb313',
      borderRadius: 100,
      marginRight: -150,
      marginLeft: 160,
      marginTop:-140,
      marginBottom: -100,
      shadowOpacity: 0.5,
      shadowColor: '#2b2929',
      shadowOffset: { width: 0, height: 5 },
    },
    lowercircle:{
      height: 200,
      width: 200,
      backgroundColor: '#edb313',
      borderRadius: 100,
      marginRight: 100,
      marginLeft: -160,
      marginBottom: -250,
      marginTop: -20,
      shadowOpacity: 0.5,
      shadowColor: '#2b2929',
      shadowOffset: { width: 0, height: 9 },
  },
});
