import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { THEME } from '../theme';
import { AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/EditModal';
import { AppButton } from '../components/ui/AppButton';



export const TodoScreen = ({todo, goBack, onRemove, onSave}) => {
	const [modal, setModal] = useState(false)

	const saveHandler = title => {
		onSave(todo.id, title)
		setModal(false)
	}

	return( 
			<View >
			<EditModal 
			visible={modal} 
			onCancel={() => setModal(false)}
			value={todo.title}
			onSave={saveHandler}
			/>
	
			<AppCard style={styles.card}>
			<Text style={styles.title}>{todo.title} </Text>
             <AppButton  onPress={() => setModal(true)}  color={THEME.DANGER_COLOR} >
			  < Entypo   name="edit" size={20}/> 
			</AppButton>
			</AppCard>
	
			<View style={styles.buttons} >
			<View style={styles.button} >
			<AppButton onPress={goBack} color={THEME.DANGER_COLOR} >
			 < Ionicons  name="ios-arrow-round-back" size={20}/>
			</AppButton>
			</View>
	
			<View style={styles.button} >

	       <AppButton onPress={() => onRemove(todo.id)} color={THEME.DANGER_COLOR} >
			< AntDesign  name="delete" size={20}/> 
			</AppButton>
			</View>
			</View>
			</View>
			);
}

const styles = StyleSheet.create({
	buttons: {
    flexDirection: "row",
     justifyContent: "space-between",
     paddingTop:20,
    
  },
  button: {
  	// width: "45%",
  	width: Dimensions.get("window").width / 3,
  	// borderBottomWidth:3,
  	// borderLeftWidth:3,
  	// borderRightWidth:3,
  	// borderTopWidth:3,
    borderBottomColor:"black",

  },
  card: {
  	marginBottom:20,
  	padding: 15,
  },
  title: {
  	fontSize: 36,
  }
  
})