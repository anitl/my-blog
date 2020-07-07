import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import * as Font  from 'expo-font'
import {AppLoading} from 'expo'
import { Navbar } from './src/components/Navbar';
// import { AddTodo} from './src/components/AddTodo';
import { MainScreen} from './src/screens/MainScreen';
import { TodoScreen} from './src/screens/TodoScreen';
import { THEME} from './src/theme';

async function configureApplication() {
  await Font.loadAsync ({
   'montserrat-light' : require("./assets/fonts/Montserrat-Light.ttf"), 
   'montserrat-regular' : require("./assets/fonts/Montserrat-Regular.ttf"), 
  })
}



export default function App() {
  const [isReady, setItReady] = useState(false)
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])

     if (!isReady) {
      return( 
            <AppLoading
             startAsync={configureApplication}
             onFinish={() => setItReady(true)}
             onError={error => console.log(error)}
            />
            )
     }

  const addTodo = (title) => {
    setTodos(prev => [
         
          {
            id: Date.now().toString(),
            title
          },
           ...prev,
          ])
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id);

     Alert.alert(
          'Удаление заметки',
          `Подтвердите удаление заметки: ${todo.title} ?` ,
          [
              {
                  text: "Отменить",
                  style :'neutral',
              },
              {
                  text: 'Подтвердить',
                  style: 'negative',
                  onPress: () => {
                      setTodoId(null);
                      setTodos(prev => prev.filter(todo => todo.id !== id))
                  }
              },
          ],
          { cancelable: false }
      );
  };

  const updateTodo = (id, title) => {
   setTodos(prev =>
    prev.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo

    })
    )
  }


  let content = (
      <MainScreen addTodo={addTodo} todos={todos} removeTodo={removeTodo} openTodo={setTodoId} />
  );

 
  if (todoId){
      const selectedTodo = todos.find(todo => todo.id === todoId);
      content = ( 
            <TodoScreen 
            todo={selectedTodo} 
            goBack={() => setTodoId(null)} 
            onRemove={removeTodo}
            onSave={updateTodo}
            />)
            
  }

  


 return (
   
<View>
<Navbar title="Todo app" />
<View style={styles.container}>{content}</View>
</View>
     );

 
}
 
   
 
    
const styles = StyleSheet.create({
   container: {
    height: "90%",
     paddingHorizontal:  THEME.PADDING_HORIZONTAL,
     paddingVertical: THEME.PADDING_VERTICAL,
    
  },
});


