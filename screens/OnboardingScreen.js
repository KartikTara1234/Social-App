import React from 'react'
import { StyleSheet, Image, Button, TouchableOpacity} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {

    const Skip = ({...props}) => (
        <Button
            title='Skip'
            color='#000'
            {...props}
        />
    );

    const Next = ({...props}) => (
        <Button
            title='Next'
            color='#000'
            {...props}
        />
    );

    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.replace("Login")}
            
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Connect To The World',
                    subtitle: 'A New Way To Connect With The World',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Share Your  Favorites',
                    subtitle: 'Share Your Thoughts With Similar Kind Of People',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Become The Star',
                    subtitle: '',
                },
            ]}
        />
        )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
