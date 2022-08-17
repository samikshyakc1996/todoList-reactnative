import React, {useState} from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAddTask= ()=>{
    setTaskItems([...taskItems,task]);
    setTask();
  };
  const completeTask=(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        {/* Today's tasks */}
        
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
      
        {/* This is where all the items would go. */}
      <View style={styles.items}>
        {taskItems.map((item,index)=>{
          return(
            <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
               <Task name={item} />
            </TouchableOpacity>
            
          )
          
})}
      
      </View>
     

      </View>
      
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
           <TextInput style={styles.writeTask} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}/>
           <TouchableOpacity onPress={()=>handleAddTask()}>
             <View style={styles.addWrapper}>
               <Text style={styles.addBtn}>+</Text>
             </View>
           </TouchableOpacity>
        </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
   
  },
  taskWrapper:{
    paddingLeft: 20,
    paddingRight:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
    paddingTop:"20px",
  },
  items:{},
  writeTaskWrapper:{
    display: 'flex',
    flexDirection:"row",
    width:'100%',
    position: 'absolute',
    bottom: 60,
    justifyContent:"space-around",
    // borderRadius:"40%",
  },
  writeTask:{
    height: 60,
    width:'50%',
    backgroundColor:"#fff",
    borderRadius:40,
    paddingLeft:20,
    borderWidth:1,
    borderColor:"#c0c0c0"
  },
  addWrapper:{
    height: 60,
    width:60,
    backgroundColor:"#fff",
    borderRadius:"50%",
    justifyContent:"center",
    alignItems:"center",
    border:"1px solid #c0c0c0",
  },
  addBtn:{},
});
