import React, {useState}  from 'react';
import { Modal, TextInput, Button, StyleSheet, Text, View, Alert} from 'react-native';
import { THEME } from '../theme';


export const EditModal = ({ visible, onCancel, value, onSave}) => {

     const[title, setTitle] = useState(value)
     
     const saveHandler = () =>   {
     	// onSave(title)
      if (value.trim()) {
		 onSave(title)
	 } else {
		Alert.alert(
			"Ошибка!",
			"Заметка не может быть пустой "
			)
	 }
     }
	return (

		<Modal visible={visible}   animationType="fide">
		<View style={styles.wrapper}>
		<TextInput
		style={styles.input}
		placeholder="Введите название заметки..." 
		value={title}
		onChangeText={setTitle}
		/>
		<View style={styles.buttons}>
		<Button 
		title="Сохранить" 
		color={THEME.MAIN_COLOR}
        onPress={saveHandler} 
		 />
		<Button 
		title="Отменить" 
		color={THEME.DANGER_COLOR}
		onPress={onCancel} />
		</View>
		
		</View>
		</Modal>
		);
}


const styles = StyleSheet.create({
   wrapper: {
   	flex: 1,
   	 alignItems: 'center',
    justifyContent: 'center',
    
  },
   input : {
   	borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    padding: 10,
    width:"80%",
  },
	  buttons: {
	  paddingTop: 15,
	  width: "100%",
	  flexDirection: "row",
	  justifyContent: 'space-around',

  }
});