import React  from 'react';
import {StyleSheet, View} from 'react-native';
import { THEME } from '../../theme';


export const AppCard = props => {
	return (
      <View style={ {...styles.default, ...props.style}}>
       {props.children}
      </View>
		)

}

const styles = StyleSheet.create({
	default: {
    borderColor: THEME.DANGER_COLOR,
    borderRadius: 10,
    padding: 20, 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: THEME.MAIN_COLOR,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {width : 2, height: 2} ,
    elevation: 8,
    backgroundColor: "#fff",


	}
})