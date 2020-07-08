import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fire } from '../config'

export default function ExamplePage() {
    useEffect(() => {
        //code you can use firebase here
        // Example Code
        // Fire.database()
        //     .ref(`users/${res.user.uid}/`)
        //     .once('value')
        //     .then(resDB => {
        //         if (resDB.val()){
        //             storeData('user', resDB.val())
        //             navigation.replace('MainApp')
        //         }
        //     })
    }, [])
    return (
        <View>
            <Text>Page Example</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
