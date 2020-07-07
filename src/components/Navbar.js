import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { THEME } from '../theme';

export const Navbar = ({ title}) => {
	return (
		<View style={{...styles.navbar, ...Platform.select({
     ios: styles.navbarIos,
     android: styles.navbarAndroid,
    })
    }}>

		<Text style={styles.text}> { title} 
	
		</Text>
		</View>
		)
}

const styles = StyleSheet.create({
  navbar: {
    height: "8%",
    backgroundColor: THEME.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingTop: 10,
  },

  navbarIos: {
  backgroundColor: THEME.MAIN_COLOR,
  },

  navbarAndroid: {
  backgroundColor: THEME.DANGER_COLOR,
  },

  text: {
  	color: "black",
  	fontSize: 20
  }
});