import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {

    const handleSubmit = () => {
        console.log('Login form submitted');
    };

    return (
        <ThemedView
            style={styles.container}
        >
            <Spacer />
            <ThemedText
                title={true}
                style={styles.title}
            >
                Login to Your Account
            </ThemedText>

            <ThemedButton
                onPress={handleSubmit}
            >
                <Text style={{ color: '#f2f2f2' }}>Login</Text>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/register">
                <ThemedText
                    style={{ textAlign: 'center'}}
                >
                    Register instead
                </ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8,
    },
})