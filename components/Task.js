import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";

const Task=(props)=>{
    
    return(

    
        <View style={styles.taskWrapper}>
            <View style={styles.leftItems}>
                <View style={styles.checkbox}></View>
                <Text style={styles.tasks}>{props.name}</Text>
            </View>
             
              <View style={styles.rightItem}> 
              </View>
        </View>
    
    )
}
const styles=StyleSheet.create({
    taskWrapper:{
        display: "flex",
        justifyContent:"space-between",
        flexDirection:"row",
        backgroundColor:"#fff",
        marginTop:20,
        // marginBottom:20,
        alignItems:"center",
        paddingLeft:   20,
        paddingRight:20,
        borderRadius:20,

    },
    leftItems:{
        display: "flex",
        flexDirection:"row",
        // justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",

    },
        checkbox:{
            height: 50,
            width: 50,
            backgroundColor:"#55b",
            borderRadius:8,
        },
        tasks:{
            padding: 20,
           fontSize:18,
            marginBottom:10,
            borderRadius:10,
        },
        
    rightItem:{
        height: 20,
            width: 20,
            backgroundColor:"#fff",
            border:"2px solid #55b",
            borderRadius:"40%",
    },


});

export default Task;