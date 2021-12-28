import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'

const HomeScreen = () => {
    
    const {logout} = useContext(AuthContext)

    return (
        <View>
            <Text>hello \n hello \n you are working on mac if you are able to see the message then it is greate.</Text>
            <Button
                title='Logout'
                onPress={logout}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
