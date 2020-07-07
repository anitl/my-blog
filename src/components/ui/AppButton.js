import React from 'react';
import { StyleSheet,  View, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';
import {AppText} from './AppText'
import { THEME } from '../../theme';



export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR}) => {
	const TouchableWrapper = Platform.OS === 'android' ? TouchableNativeFeedback :TouchableOpacity
	return (


	 <TouchableWrapper
      onPress={onPress}
      activeOpacity={0.7}
       >
      <View style={{...styles.button, backgroundColor: color} }>
      <AppText>
       {children}
       </AppText>
      </View>
     </TouchableWrapper>
       
		)
}

const styles = StyleSheet.create({
    button: {
    	  paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",

    
        
    },
   
})