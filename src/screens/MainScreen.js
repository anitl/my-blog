import React,  {useState, useEffect}  from 'react';
import { StyleSheet, View, FlatList, Image,  Dimensions } from 'react-native';
import {AddTodo} from '../components/AddTodo';
import { Todo} from '../components/Todo';
import { THEME} from '../theme';



export const MainScreen = ({ addTodo, todos, removeTodo, openTodo}) => {

  const[deviceWidth, setDeviceWidth] = useState (
    Dimensions.get("window").width = THEME.PADDING_HORIZONTAL  * 20
    
    )

    useEffect(() =>  {
      const update = () => {
      const width =  Dimensions.get("window").width = THEME.PADDING_HORIZONTAL  * 20
      setDeviceWidth(width)
    }

      Dimensions.addEventListener("change", update)

     return () => {
      Dimensions.removeEventListener("change", update)
      }


  })


   



    let content = (
      <View style={deviceWidth}>
       <FlatList
    keyExtractor={item => item.id.toString()}
    data={todos}
    renderItem={({item}) =>  (<Todo   todo={item} onRemove={removeTodo} onOpen={ openTodo}/> )}
    />
      </View>
  

    )

    if (!todos.length) {
    content = (
      <View style={styles.imgwrapper}>
     <Image
     style={styles.img}
        // style={styles.tinyLogo}
        source={require("../../assets/icon.png")}
      />
    </View>
      )
    
  }
	return (
		 <View style={styles.container}>
    <AddTodo onSubmit={addTodo}/>

    <View>{content}</View>
    
     </View>)
		
}

const styles = StyleSheet.create({
    imgwrapper: {
         alignItems: 'center',
        justifyContent: "center",
        padding: 10,
        height: 500,
    },
    img: {
        height: "100%",
        width: "100%",
        resizeMode: "contain",

    }
})