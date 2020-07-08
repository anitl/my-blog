import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Keyboard  } from 'react-native';
import { THEME } from '../theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Fire } from '../config'
 

export const AddTodo = ({onSubmit}) => {
	const [value, setValue] = useState("")

	const pressHandler = () => {
		if (value.trim()) {
			Fire.database()
				.ref('notes/')
				.push({content: value})
				.then(() => {
					 alert('success') 
					})
				.catch(err => { 
					alert('error save') 
				})
		//  onSubmit(value)
		 setValue("")
		 Keyboard.dismiss()
	 } else {
		Alert.alert("Заметка не может быть пустой ")
	 }
  
	}
	return (
			<View style={styles.block}>
			<TextInput
			style={styles.input}
			onChangeText={setValue}
			value={value}
			placeholder="Введите название заметки" 
			keyboardType="decimal-pad"
			textAlign="center"
			/>


			<MaterialIcons.Button onPress={pressHandler} name="library-add">
			Добавить
			</MaterialIcons.Button>
           </View>

	)
}



const styles = StyleSheet.create({
	block: {
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",
     marginBottom: 5,
     // paddingTop: 90,
    

	},
	input: {
		width:"60%",
		borderBottomWidth:3,
		borderBottomColor:THEME.MAIN_COLOR,

	},
	buttonAdd: {
	borderBottomWidth:3,
  	borderLeftWidth:3,
  	borderRightWidth:3,
  	borderTopWidth:3,
    borderBottomColor:"black",
	}
})